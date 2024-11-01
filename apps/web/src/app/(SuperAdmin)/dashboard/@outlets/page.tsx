'use client';

import {
  CreateButton,
  DeleteButton,
  UpdateButton,
} from '@/components/ui/action-button';
import { useEffect, useState } from 'react';
import DeleteModal from '../../dashboard-component/delete-modal';

type Outlet = {
  outletId: number;
  name: string;
  longitude: number;
  latitude: number;
  kota: string;
};

export default function OutletManagement() {
  const [outlets, setOutlets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [outletId, setOutletId] = useState<number | null>(null);
  const [outletName, setOutletName] = useState<string | null>(null);

  const fetchOutlets = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/laundry/outlet`);
      const data = await response.json();
      setOutlets(data);
    } catch (error) {
      console.error('Fetching error:', error);
    }
  };

  // Open confirmation modal and set post ID to delete
  const openDeleteModal = (id: number, item: string) => {
    setOutletId(id);
    setOutletName(item);
    setIsModalOpen(true);
  };

  const closeDeleteModal = () => {
    setOutletId(null);
    setOutletName(null);
    setIsModalOpen(false);
  };

  // Function to delete a outlet by ID
  const deleteOutlet = async () => {
    try {
      await fetch(`http://localhost:8000/api/laundry/outlet/${outletId}`, {
        method: 'DELETE',
      });
      // Refresh outlets list after deletion
      setOutlets((prevoutlets) =>
        prevoutlets.filter((outlet: Outlet) => outlet.outletId !== outletId),
      );
    } catch (error) {
      console.error('Error deleting outlet:', error);
    }
  };

  // const openUpdateModal = (id: number, item: string, quantity: number) => {
  //   setItemId(id);
  //   setItemName(item);
  //   setItemQuantity(itemQuantity);
  //   setIsUpdateModalOpen(true);
  // };

  // const closeUpdateModal = () => {
  //   setItemId(null);
  //   setItemName(null);
  //   setItemQuantity(null);
  //   setIsUpdateModalOpen(false);
  // };

  // const handleUpdateItem = async () => {
  //   try {
  //     const updatedItem = await UpdateItem(itemId, itemName, itemQuantity);
  //     setItems((previtems) =>
  //       previtems.map((item: Item) =>
  //         item.itemId === itemId
  //           ? {
  //               ...item,
  //               item: updatedItem.item,
  //               quantity: updatedItem.quantity,
  //             }
  //           : item,
  //       ),
  //     );
  //     await fetchItems();
  //     closeUpdateModal();
  //   } catch (error) {
  //     console.error('Error creating post:', error);
  //   }
  // };

  useEffect(() => {
    fetchOutlets();
  }, []);

  return (
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 py-4 gap-4">
      <h1>OUTLET MANAGEMENT</h1>
      <CreateButton />
      <table className="w-4/5 border-slate-700">
        <thead className="border-b bg-blue-300">
          <tr>
            <th className="py-3 px-1 border-slate-700">ID</th>
            <th className="py-3 px-1 border-slate-700">Outlet</th>
            <th className="py-3 px-1 border-slate-700">Longitude</th>
            <th className="py-3 px-1 border-slate-700">Latitude</th>
            <th className="py-3 px-1 border-slate-700">Kota</th>
            <th className="py-3 px-1 border-slate-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {outlets.length > 0 &&
            outlets.map((outlet: Outlet) => (
              <tr key={outlet.outletId} className="text-center border-b">
                <td className="py-3 px-1 border-slate-700">
                  {outlet.outletId}
                </td>
                <td className="py-3 px-1 border-slate-700">{outlet.name}</td>
                <td className="py-3 px-1 border-slate-700">
                  {outlet.longitude}
                </td>
                <td className="py-3 px-1 border-slate-700">
                  {outlet.latitude}
                </td>
                <td className="py-3 px-1 border-slate-700">{outlet.kota}</td>
                <td>
                  <UpdateButton />
                  <DeleteButton
                    onClick={() =>
                      openDeleteModal(outlet.outletId, outlet.name)
                    }
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={closeDeleteModal}
        onConfirm={deleteOutlet}
      >
        <p>Are you sure you want to delete outlet {outletName}?</p>
      </DeleteModal>
    </div>
  );
}
