'use client';

import {
  CreateButton,
  DeleteButton,
  UpdateButton,
} from '@/components/ui/actionButton';
import { useCallback, useEffect, useState } from 'react';
import DeleteModal from '../../components/deleteModal';
import { createItem, UpdateItem } from '../lib/itemsServices';
import ItemCreateModal from '../../components/itemCreateModal';
import ItemUpdateModal from '../../components/itemUpdateModal';
import { Button } from '@/components/ui/button';
import { toast } from 'react-toastify';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 5;

  const [sortBy, setSortBy] = useState<string>('itemId');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterOrderId, setFilterOrderId] = useState<string>('');
  const [filterItemName, setFilterItemName] = useState<string>('');

  const fetchItems = useCallback(
    async (page = 1) => {
      try {
        const query = new URLSearchParams({
          page: page.toString(),
          limit: itemsPerPage.toString(),
          sortBy,
          order: sortOrder,
          ...(filterOrderId && { orderId: filterOrderId }),
          ...(filterItemName && { item: filterItemName }),
        });

        const response = await fetch(`${BASEURL}/api/items?${query}`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'true', 
          },
        });
        const data = await response.json();
        const itemsArray = data.data || data;
        setTotalItems(data.pagination.totalItems);
        setItems(itemsArray);
      } catch (error) {
        console.error('Fetching error:', error);
      }
    },
    [itemsPerPage, sortBy, sortOrder, filterOrderId, filterItemName],
  );

  const lastPage = Math.ceil(totalItems / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < lastPage) setCurrentPage((prevPage) => prevPage + 1);
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
      await fetch(`${BASEURL}/api/items/${itemId}`, {
        method: 'DELETE',
      });
      setItems((prevItems) =>
        prevItems.filter((item: Item) => item.itemId !== itemId),
      );
      toast.success('Item deleted');
      setIsDeleteModalOpen(false);
    } catch (error) {
      toast.error('Item deletion failed');
    }
  };

  const openUpdateModal = (id: number, item: string, quantity: number) => {
    setItemId(id);
    setItemName(item);
    setItemQuantity(quantity);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setItemId(null);
    setItemName(null);
    setItemQuantity(null);
    setIsUpdateModalOpen(false);
  };

  const handleUpdateItem = async (values: {
    item: string;
    quantity: number;
  }) => {
    try {
      const updatedItem = await UpdateItem(
        itemId,
        values.item,
        values.quantity,
      );

      setItems((prevItems) =>
        prevItems.map((item: Item) =>
          item.itemId === itemId
            ? {
                ...item,
                item: updatedItem.item,
                quantity: updatedItem.quantity,
              }
            : item,
        ),
      );
      fetchItems(currentPage);
      toast.success('Item updated');
      closeUpdateModal();
    } catch (error) {
      toast.error('update failed');
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

  const handleCreateItem = async (values: {
    orderId: number;
    item: string;
    quantity: number;
  }) => {
    try {
      const newItem = await createItem(
        values.orderId,
        values.item,
        values.quantity,
      );
      setItems((prevItems) => [...prevItems, newItem]);
      fetchItems(currentPage);
      toast.success('Item created');
      closeCreateModal();
    } catch (error) {
      toast.error('failed to create item');
    }
  };

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage, fetchItems]);

  const handleFilterOrderIdChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFilterOrderId(e.target.value);
    setCurrentPage(1);
  };

  const handleFilterItemNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFilterItemName(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = () => {
    setSortBy('quantity');
    setSortOrder((prevSortOrder) =>
      prevSortOrder === 'desc' ? 'asc' : 'desc',
    );
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 px-2 py-4 gap-4">
      <h1>LAUNDRY ITEMS</h1>
      <div className="flex flex-wrap gap-4 mt-4">
        <CreateButton onClick={openCreateModal} />
        <input
          type="text"
          placeholder="Filter by Order ID"
          value={filterOrderId}
          onChange={handleFilterOrderIdChange}
          className="border p-2 rounded bg-white h-10"
        />
        <input
          type="text"
          placeholder="Filter by Item Name"
          value={filterItemName}
          onChange={handleFilterItemNameChange}
          className="border p-2 rounded bg-white h-10"
        />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="text-center bg-blue-300 border-b">
            <tr>
              <th className="py-3 px-4 border-b text-center">Order ID</th>
              <th className="py-3 px-4 border-b text-center">Item Name</th>
              <th className="py-3 px-4 border-b text-center">
                Qty{' '}
                <Button
                  onClick={handleSortChange}
                  className="bg-white mx-2 w-4 h-6 hover:bg-gray-200 text-black"
                >
                  {sortOrder === 'asc' ? '▲' : '▼'}
                </Button>
              </th>
              <th className="py-3 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: Item) => (
              <tr key={item.itemId} className="text-center border-b">
                <td className="py-3 px-4 border-b">{item.orderId}</td>
                <td className="py-3 px-4 border-b">{item.item}</td>
                <td className="py-3 px-4 border-b">{item.quantity}</td>
                <td>
                  <div className="flex gap-1 justify-center">
                    <UpdateButton
                      onClick={() =>
                        openUpdateModal(item.itemId, item.item!, item.quantity!)
                      }
                    />
                    <DeleteButton
                      onClick={() => openDeleteModal(item.itemId, item.item!)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between gap-10 items-center my-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`py-2 px-4 rounded disabled:opacity-50 bg-blue-500 text-white min-w-24`}
        >
          Previous
        </button>
        <span className="text-sm">
          Page {currentPage} of {lastPage}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === lastPage}
          className={`py-2 px-4 rounded disabled:opacity-50 bg-blue-500 text-white min-w-24`}
        >
          Next
        </button>
      </div>

      <ItemCreateModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        onConfirm={handleCreateItem}
      />
      <ItemUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        onConfirm={handleUpdateItem}
        initialItem={itemName!}
        initialQuantity={itemQuantity!}
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
