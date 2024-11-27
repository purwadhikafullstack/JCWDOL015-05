import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Map from "@/components/Map/map";

interface AddressDropdownMenuProps {
  addressId: number;
  customerId: number;
  detailAddress: string;
  onSetPrimary: (addressId: number, customerId: number) => void;
  onDelete: (addressId: number) => void;
  onUpdate?: (addressId: number) => void
}

const AddressDropdownMenu: React.FC<AddressDropdownMenuProps> = ({
  addressId,
  customerId,
  detailAddress,
  onSetPrimary,
  onDelete,
}) => {
  const [openDialog, setOpenDialog] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)

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
            onClick={() => setOpenEdit(true)}
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
      {/* delete form */}
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
      {/* edit form */}
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent>
          <p>Apakah Anda yakin menghapus alamat ini?</p>
          {/* <Label>Provinsi</Label>
          <Input /> */}
          <div className="p-3">
          <Map />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenEdit(false)}>
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
