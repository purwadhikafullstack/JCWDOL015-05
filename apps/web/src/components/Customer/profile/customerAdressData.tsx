'use client';
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
import AddressDropdownMenu from '../../../components/Customer/profile/addressTableAction';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
const tableHeader = [
  'No',
  'Alamat Lengkap',
  'Lokasi',
  'LatLng',
  'Alamat Utama',
  'Actions',
];
interface CustomerAddressProps {
  options: ICustomerAddressProfile[]
}
export const CustomerAddressData: FC<CustomerAddressProps> = ({ options }) => {
  const [openDialog, setOpenDialog] = useState(false)
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
      const { result, ok } = await deleteAddress(addressId);
      return result;
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
    setOpenDialog(false);
    deleteAddressMutation.mutate(addressId);
    // toast.success(`${addressId}`)
    // console.log(addressId)
  };

  return (
    <div className="overflow-x-auto w-full">
       <Table>
        <TableHeader className='text-left '>
          <TableRow className='text-left '>
            {tableHeader.map((title)=> (
              <TableHead className="px-4 py-2 text-left whitespace-normal" key={title}>{title}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody >
          {sortedOptions.map((address,index)=> (
            <TableRow key={index} >
            <TableCell>{index + 1}</TableCell>
              <TableCell>{address.detailAddress}</TableCell>
              <TableCell>
                <div className="flex flex-col text-sm">
                  <p> {address.kecamatan}</p>
                  <p>{address.kota}</p>
                  <p>{address.provinsi}</p>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col text-sm">
                  <p>{address.latitude}</p>
                  <p>{address.longitude}</p>
                </div>
              </TableCell>
              <TableCell className="text-center flex flex-col h-20 items-center justify-center">
                {address.isPrimary === true ? (
                  <CheckCircleIcon></CheckCircleIcon>
                ) : (
                  ''
                )}
              </TableCell>
              <TableCell>
                <div className="flex flex-row gap-1">
                  <AddressDropdownMenu
                    addressId={address.addressId}
                    customerId={address.customerId}
                    detailAddress={address.detailAddress}
                    onSetPrimary={handleSetPrimary}
                    onDelete={handleDeleteAddress}
                  />
                </div>
              </TableCell>
          </TableRow>
          ))}
          
        </TableBody>
      </Table>
     
    </div>
  );
};
