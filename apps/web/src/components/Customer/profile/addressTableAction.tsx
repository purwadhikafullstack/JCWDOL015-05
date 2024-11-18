import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";

interface AddressDropdownMenuProps {
  addressId: number;
  customerId: number;
  detailAddress: string;
  onSetPrimary: (addressId: number, customerId: number) => void;
  onDelete: (addressId: number) => void;
}

const AddressDropdownMenu: React.FC<AddressDropdownMenuProps> = ({
  addressId,
  customerId,
  detailAddress,
  onSetPrimary,
  onDelete,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onSetPrimary(addressId, customerId)}
          >
            Jadikan Alamat Utama
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => console.log(`Edit Address: ${detailAddress}`)}
          >
            Edit (Still Development)
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setOpenDialog(true);
            }}
            className="text-red-500 cursor-pointer"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <p>Apakah Anda yakin menghapus alamat ini?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Batal
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                onDelete(addressId);
                setOpenDialog(false);
              }}
            >
              Hapus
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddressDropdownMenu;
