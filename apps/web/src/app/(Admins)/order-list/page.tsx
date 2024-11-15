'use client';
import { Button } from '@/components/ui/button';
import { useCallback, useEffect, useState } from 'react';
import OrderTrackingModal from './order-list-component/tracking-modal';
import { displayOrderStatus } from '../lib/formatter';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const [outlets, setOutlets] = useState<Outlets[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [drivers, setDrivers] = useState<Drivers[]>([]);
  const [workers, setWorkers] = useState<Workers[]>([]);

  // Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Filters
  const [orderIdFilter, setOrderIdFilter] = useState('');
  const [outletFilter, setOutletFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('');
  const [customerIdFilter, setCustomerIdFilter] = useState('');

  // Sorting
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const limit = 5;

  const fetchOulets = async () => {
    try {
      const response = await fetch(`${BASEURL}/api/outlet`);
      const data = await response.json();
      setOutlets(data.data);
    } catch (error) {
      console.error('Outlets fetching error:', error);
    }
  };

  const fetchOrders = useCallback(async () => {
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        orderId: orderIdFilter,
        outletId: outletFilter,
        status: statusFilter,
        paymentStatus: paymentStatusFilter,
        customerId: customerIdFilter,
        sortBy: sortOrder,
      });
      const response = await fetch(`${BASEURL}/api/order?${query}`);
      const data = await response.json();
      setOrders(data.data);
      console.log(data.data);

      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error('Orders fetching error:', error);
    }
  }, [
    page,
    limit,
    orderIdFilter,
    outletFilter,
    statusFilter,
    paymentStatusFilter,
    customerIdFilter,
    sortOrder,
  ]);

  const openTrackingModal = async (
    orderId: number,
    updatedAt: string,
    status: string,
    drivers: any,
    workers: any,
  ) => {
    setUpdatedAt(updatedAt);
    setOrderId(orderId);
    setStatus(status);
    setDrivers(drivers);
    setWorkers(workers);
    setIsTrackingModalOpen(true);
  };

  const closeTrackingModal = () => {
    setOrderId(null);
    setIsTrackingModalOpen(false);
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleSortChange = () => {
    setSortOrder((prevSortOrder) =>
      prevSortOrder === 'desc' ? 'asc' : 'desc',
    );
    setPage(1);
  };

  useEffect(() => {
    fetchOrders();
    fetchOulets();
  }, [fetchOrders]);

  return (
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 py-4 gap-4 min-h-screen">
      <h1>Orders</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Order ID"
          value={orderIdFilter}
          onChange={(e) => setOrderIdFilter(e.target.value)}
          className="border p-2 rounded bg-white h-10 w-24"
        />
        <select
          onChange={(e) => setOutletFilter(e.target.value)}
          className="mb-4 border p-2 rounded bg-white"
        >
          <option value="">All Outlets</option>
          {outlets.map((outlet: Outlets) => (
            <option key={outlet.outletId} value={outlet.outletId}>
              {outlet.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          className="mb-4 border p-2 rounded bg-white"
        >
          <option value="">All Order Status</option>
          <option value="menungguPenjemputanDriver">
            menunggu penjemputan driver
          </option>
          <option value="laundryMenujuOutlet">laundry menuju outlet</option>
          <option value="laundrySampaiOutlet">laundry sampai outlet</option>
          <option value="pencucian">pencucian</option>
          <option value="penyetrikaan">penyetrikaan</option>
          <option value="packing">packing</option>
          <option value="menungguPembayaran">menunggu pembayaran</option>
          <option value="siapDiantar">siap diantar</option>
          <option value="sedangDikirim">sedang dikirim</option>
          <option value="selesai">selesai</option>
        </select>
        <select
          onChange={(e) => setPaymentStatusFilter(e.target.value)}
          className="mb-4 border p-2 rounded bg-white"
        >
          <option value="">All Payment Status</option>
          <option value="unpaid">unpaid</option>
          <option value="pending">pending</option>
          <option value="paid">paid</option>
        </select>
        <input
          type="text"
          placeholder="Customer ID"
          value={customerIdFilter}
          onChange={(e) => setCustomerIdFilter(e.target.value)}
          className="border p-2 rounded bg-white h-10"
        />
      </div>

      {/* Table */}
      <table className="w-4/5 border-slate-700">
        <thead className="border-b bg-blue-300">
          <tr>
            <th className="py-3 px-1 border-slate-700">No</th>
            <th className="py-3 px-1 border-slate-700">Outlet</th>
            <th className="py-3 px-1 border-slate-700">Order ID</th>
            <th className="py-3 px-1 border-slate-700">Status</th>
            <th className="py-3 px-1 border-slate-700">Payment Status</th>
            <th className="py-3 px-1 border-slate-700">Customer ID</th>
            <th className="py-3 px-1 border-slate-700">
              Created Date
              <Button
                onClick={handleSortChange}
                className="bg-white mx-2 w-4 h-6 hover:bg-gray-200 text-black"
              >
                {sortOrder === 'asc' ? '▲' : '▼'}
              </Button>
            </th>
            <th className="py-3 px-1 border-slate-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.orderId} className="text-center border-b">
              <td>{index + 1}</td>
              <td>{order.outlet ? order.outlet.name : 'Closed'}</td>
              <td>{order.orderId}</td>
              <td>{displayOrderStatus(order.status)}</td>
              <td>{order.paymentStatus}</td>
              <td>{order.customerId}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>
                <Button
                  onClick={() =>
                    openTrackingModal(
                      order.orderId,
                      new Date(order.updatedaAt!).toDateString(),
                      order.status,
                      order.drivers,
                      order.workers,
                    )
                  }
                  className="hover:bg-orange-300"
                >
                  Track
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center gap-4 mt-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 min-w-24"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 min-w-24"
        >
          Next
        </button>
        <OrderTrackingModal
          isOpen={isTrackingModalOpen}
          onClose={closeTrackingModal}
          orderId={orderId!}
          updatedAt={updatedAt}
          status={status}
          drivers={drivers}
          workers={workers}
        />
      </div>
    </div>
  );
};

export default OrdersPage;
