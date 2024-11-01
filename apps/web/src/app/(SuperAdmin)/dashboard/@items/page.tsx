'use client';

import {
  CreateButton,
  DeleteButton,
  UpdateButton,
} from '@/components/ui/action-button';
import { useEffect, useState } from 'react';
import DeleteModal from '../../dashboard-component/delete-modal';
import UpdateModal from '../../dashboard-component/update-modal';
import CreateModal from '../../dashboard-component/create-modal';
import { createItem, UpdateItem } from '../lib/items-services';

type Item = {
  itemId: number;
  orderId: number;
  item: string | null;
  quantity: number | null;
};

export default function ItemManagement() {
  const [items, setItems] = useState<Item[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const [itemId, setItemId] = useState<number | null>(null);
  const [itemName, setItemName] = useState<string | null>(null);
  const [itemQuantity, setItemQuantity] = useState<number | null>(null);

  const fetchItems = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/laundry/items`);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Fetching error:', error);
    }
  };

  const openDeleteModal = (id: number, item: string) => {
    setItemId(id);
    setItemName(item);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setItemId(null);
    setItemName(null);
    setIsDeleteModalOpen(false);
  };

  const deleteItem = async () => {
    try {
      await fetch(`http://localhost:8000/api/laundry/items/${itemId}`, {
        method: 'DELETE',
      });
      // Refresh items list after deletion
      setItems((previtems) =>
        previtems.filter((item: Item) => item.itemId !== itemId),
      );
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const openUpdateModal = (id: number, item: string, quantity: number) => {
    setItemId(id);
    setItemName(item);
    setItemQuantity(itemQuantity);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setItemId(null);
    setItemName(null);
    setItemQuantity(null);
    setIsUpdateModalOpen(false);
  };

  const handleUpdateItem = async () => {
    try {
      const updatedItem = await UpdateItem(itemId, itemName, itemQuantity);
      setItems((previtems) =>
        previtems.map((item: Item) =>
          item.itemId === itemId
            ? {
                ...item,
                item: updatedItem.item,
                quantity: updatedItem.quantity,
              }
            : item,
        ),
      );
      await fetchItems();
      closeUpdateModal();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const openCreateModal = () => {
    setOrderId(null);
    setItemName('');
    setItemQuantity(null);
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
    setOrderId(null);
    setItemName('');
    setItemQuantity(null);
  };

  const handleCreateItem = async () => {
    try {
      const newItem = await createItem(orderId, itemName, itemQuantity);
      setItems((prevItems) => [...prevItems, newItem]);
      await fetchItems();
      closeCreateModal();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 py-4 gap-4">
      <h1>LAUNDRY ITEMS</h1>
      <CreateButton onClick={() => openCreateModal()} />
      <table className="w-4/5 border-slate-700">
        <thead className="text-center border-b bg-blue-300">
          <tr>
            <th className="py-3 px-1 border-slate-700">Order ID</th>
            <th className="py-3 px-1 border-slate-700">Item Name</th>
            <th className="py-3 px-1 border-slate-700">Qty</th>
            <th className="py-3 px-1 border-slate-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: Item) => (
            <tr key={item.itemId} className="text-center border-b">
              <td className="py-3 px-1 border-slate-700">{item.orderId}</td>
              <td className="py-3 px-1 border-slate-700">{item.item}</td>
              <td className="py-3 px-1 border-slate-700">{item.quantity}</td>
              <td>
                <UpdateButton
                  onClick={() =>
                    openUpdateModal(item.itemId, item.item!, item.quantity!)
                  }
                />
                <DeleteButton
                  onClick={() => openDeleteModal(item.itemId, item.item!)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CreateModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        onConfirm={handleCreateItem}
        orderId={orderId!}
        setOrderId={setOrderId}
        item={itemName!}
        setItem={setItemName}
        quantity={itemQuantity!}
        setQuantity={setItemQuantity}
      />
      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        onConfirm={handleUpdateItem}
        item={itemName!}
        setItem={setItemName}
        quantity={itemQuantity!}
        setQuantity={setItemQuantity}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={deleteItem}
      >
        <p>
          Are you sure you want to delete item{' '}
          <span className="font-bold">{itemName}</span> ?
        </p>
      </DeleteModal>
    </div>
  );
}
