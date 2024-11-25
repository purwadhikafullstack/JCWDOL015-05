import { Button } from '../ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

interface OrderItem {
  itemId: number;
  item: string;
  quantity: number;
}

interface OrderItemsModalProps {
  orderItems: OrderItem[];
  isOpen: boolean;
  itemsModalClose: () => void;
}

export const OrderItemsModal = ({
  orderItems,
  isOpen,
  itemsModalClose,
}: OrderItemsModalProps) => {
   if(isOpen == false) return null 
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Order Items</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Item</TableHead>
              <TableHead>Jumlah Item</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderItems.map((item: OrderItem, index) => (
              <TableRow key={index}>
                <TableCell>{item.item}</TableCell>
                <TableCell>{item.quantity} pcs</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="mt-4 flex justify-end">
          <Button className="bg-red-500" onClick={itemsModalClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};
