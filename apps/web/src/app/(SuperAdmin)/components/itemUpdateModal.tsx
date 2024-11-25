import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (values: { item: string; quantity: number }) => void;
  initialItem: string;
  initialQuantity: number;
}

const ItemUpdateModal: React.FC<UpdateModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  initialItem,
  initialQuantity,
}) => {
  const validationSchema = Yup.object({
    item: Yup.string()
      .required('Item name is required')
      .min(2, 'Item name must be at least 2 characters'),
    quantity: Yup.number()
      .required('Quantity is required')
      .min(1, 'Quantity must be at least 1'),
  });

  const formik = useFormik({
    initialValues: {
      item: initialItem || '',
      quantity: initialQuantity || 0,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      onConfirm(values);
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Update Item</h2>

        <form onSubmit={formik.handleSubmit}>
          <label className="block text-left text-sm font-medium mb-1">
            Item Name
          </label>
          <input
            type="text"
            name="item"
            value={formik.values.item}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.item && formik.errors.item && (
            <p className="text-red-500 text-sm">{formik.errors.item}</p>
          )}
          <label className="block text-left text-sm font-medium mb-1">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            min={1}
            value={formik.values.quantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border rounded p-2 mb-2 bg-gray-200"
          />
          {formik.touched.quantity && formik.errors.quantity && (
            <p className="text-red-500 text-sm">{formik.errors.quantity}</p>
          )}

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemUpdateModal;
