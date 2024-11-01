import React, { ReactNode } from 'react';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  item: string;
  setItem: (value: string) => void;
  quantity: number;
  setQuantity: (value: number) => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  item,
  setItem,
  quantity,
  setQuantity,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Update</h2>

        <div>
          <label className="block text-left text-sm font-medium mb-1">
            Item Name
          </label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          />

          <label className="block text-left text-sm font-medium mb-1">
            Quantity
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border rounded p-2 mb-4 bg-gray-200"
          ></input>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={onConfirm}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
