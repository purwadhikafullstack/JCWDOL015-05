'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  deleteAddress,
  setPrimaryAddress,
} from '@/services/api/address/address';
import {
  ICustomerAddressData,
  ICustomerAddressProfile,
  ISetPrimaryAddress,
} from '@/type/address';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { CheckCircleIcon } from 'lucide-react';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';

const tableHeader = [
  'Alamat Lengkap',
  'Lokasi',
  'LatLng',
  'Alamat Utama',
  'Actions',
];
interface CustomerAddressProps {
  options: ICustomerAddressProfile[];
}
export const CustomerAddressData: FC<CustomerAddressProps> = ({ options }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(0)
  const sortedOptions = [...options].sort(
    (a, b) => (b.isPrimary ? 1 : 0) - (a.isPrimary ? 1 : 0),
  );
  const primaryAddress = useMutation({
    mutationFn: async (data: ISetPrimaryAddress) =>
      await setPrimaryAddress(data),
    onSuccess: (data) => {
      toast.success('Alamat Utama Berhasih Diubah');
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });
  const deleteAddressMutation = useMutation({
    mutationFn: async (addressId: number) => {
      const {result, ok} = await deleteAddress(addressId)
      return result
    },
    onSuccess: (result) => {
      toast.success(result?.message);
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });
  const handleSetPrimary = (addressId: number, customerId: number) => {
    primaryAddress.mutate({ addressId, customerId });
  };
  const handleDeleteAddress = (addressId: number) => {
    setOpenDialog(false)
    deleteAddressMutation.mutate(addressId);
    // toast.success(`${addressId}`)
    // console.log(addressId)
  };

  return (
    <table className="w-full table-auto">
      <thead>
        <th className="text-left w-fit">Index</th>
        {tableHeader.map((title) => (
          <th className="text-left">{title}</th>
        ))}
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {sortedOptions.map((address, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{address.detailAddress}</td>
            <td>
              <div className="flex flex-col text-sm">
                <p> {address.kecamatan}</p>
                <p>{address.kota}</p>
                <p>{address.provinsi}</p>
              </div>
            </td>
            <td>
              <div className="flex flex-col text-sm">
                <p>{address.latitude}</p>
                <p>{address.longitude}</p>
              </div>
            </td>
            <td className="text-center">
              {address.isPrimary === true ? (
                <CheckCircleIcon></CheckCircleIcon>
              ) : (
                ''
              )}
            </td>
            <td>
              <div className="flex flex-row gap-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary">Actions</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() =>
                        handleSetPrimary(address.addressId, address.customerId)
                      }
                    >
                      Jadikan Alamat Utama
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() =>
                        console.log(`Edit Address: ${address.detailAddress}`)
                      }
                    >
                      Edit (Still Development)
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={()=> {
                        setOpenDialog(true)
                        setSelectedAddressId(address.addressId)
                      }}
                      className="text-red-500 cursor-pointer"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                  
                  <DialogContent>
                    <p>Apakah Anda Yakin Menhapus Alamat ini?</p>
                    <DialogFooter>
                      <Button
                        variant="outline"
                        onClick={() => setOpenDialog(false)}
                      >
                        Batal
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={()=> handleDeleteAddress(selectedAddressId)}
                      >
                        Hapus
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                </DropdownMenu>
                
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
