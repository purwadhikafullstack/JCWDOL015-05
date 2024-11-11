'use client';

import {
  CreateButton,
  DeleteButton,
  UpdateButton,
} from '@/components/ui/action-button';
import { useCallback, useEffect, useState } from 'react';
import DeleteModal from '../../dashboard-component/delete-modal';
import { createItem, UpdateItem } from '../lib/items-services';
import ItemCreateModal from '../../dashboard-component/item-create-modal';
import ItemUpdateModal from '../../dashboard-component/item-update-modal';
import { Button } from '@/components/ui/button';

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

  // Sorting and Filtering
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

        const response = await fetch(
          `http://localhost:8000/api/laundry/items?${query}`,
        );
        const data = await response.json();
        const itemsArray = data.data || data; // Adjust based on actual API structure
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
      await fetch(`http://localhost:8000/api/laundry/items/${itemId}`, {
        method: 'DELETE',
      });
      setItems((prevItems) =>
        prevItems.filter((item: Item) => item.itemId !== itemId),
      );
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting item:', error);
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

  const handleUpdateItem = async () => {
    try {
      const updatedItem = await UpdateItem(itemId, itemName, itemQuantity);
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
      closeUpdateModal();
    } catch (error) {
      console.error('Error updating item:', error);
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
      fetchItems(currentPage);
      closeCreateModal();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  // Fetch items when page or relevant filter/sort options change
  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage, fetchItems]);

  // Filter and sort handlers
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
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 py-4 gap-4">
      <h1>LAUNDRY ITEMS</h1>
      {/* Filters */}
      <div className="flex gap-4 mt-4">
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
      {/* Items Table */}
      <table className="w-4/5 border-slate-700">
        <thead className="text-center border-b bg-blue-300">
          <tr>
            <th className="py-3 px-1 border-slate-700">Order ID</th>
            <th className="py-3 px-1 border-slate-700">Item Name</th>
            <th className="py-3 px-1 border-slate-700">
              Qty{' '}
              <Button
                onClick={handleSortChange}
                className="bg-white mx-2 w-4 h-6 hover:bg-gray-200"
              >
                {sortOrder === 'asc' ? '▲' : '▼'}
              </Button>
            </th>
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
      {/* Pagination Controls */}
      <div className="flex justify-between gap-10 items-center my-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`py-2 px-4 rounded disabled:opacity-50 bg-blue-500 text-white min-w-24`}
        >
          Previous
        </button>
        <span>
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

      {/* Modals */}
      <ItemCreateModal
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
      <ItemUpdateModal
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
