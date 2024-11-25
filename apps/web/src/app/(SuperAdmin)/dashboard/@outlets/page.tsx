'use client';

import {
  CreateButton,
  DeleteButton,
  UpdateButton,
} from '@/components/ui/actionButton';
import { useEffect, useState, useCallback } from 'react';
import DeleteModal from '../../components/deleteModal';
import OutletUpdateModal from '../../components/outletUpdateModal';
import OutletCreateModal from '../../components/outletCreateModal';
import { toast } from 'react-toastify';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

export type Outlet = {
  outletId: number;
  name: string | null;
  provinsi: string | null;
  kota: string | null;
  kecamatan: string | null;
  longitude: number | null;
  latitude: number | null;
};

export default function OutletManagement() {
  const [outlets, setOutlets] = useState<Outlet[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [outletId, setOutletId] = useState<number | null>(null);
  const [outletName, setOutletName] = useState<string | null>(null);
  const [outletProvinsi, setOutletProvinsi] = useState<string | null>(null);
  const [outletKota, setOutletkota] = useState<string | null>(null);
  const [outletKecamatan, setOutleKecamatan] = useState<string | null>(null);
  const [outletLongitude, setOutletLongitude] = useState<number | null>(null);
  const [outletLatitude, setOutletLatitude] = useState<number | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const [nameFilter, setNameFilter] = useState<string>('');
  const [kotaFilter, setKotaFilter] = useState<string>('');

  const limit = 5;
  const fetchOutlets = useCallback(async () => {
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        name: nameFilter,
        kota: kotaFilter,
      });

      const response = await fetch(`${BASEURL}/api/outlet?${query}`,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true', 
        },
      });
      const data = await response.json();
      setOutlets(data.data);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error('Fetching error:', error);
    }
  }, [page, limit, nameFilter, kotaFilter]);

  useEffect(() => {
    fetchOutlets();
  }, [fetchOutlets]);

  const openDeleteModal = (id: number, name: string) => {
    setOutletId(id);
    setOutletName(name);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setOutletId(null);
    setOutletName(null);
    setIsDeleteModalOpen(false);
  };

  const deleteOutlet = async () => {
    try {
      await fetch(`${BASEURL}/api/outlet/${outletId}`, {
        method: 'DELETE',
      });
      setOutlets((prevoutlets) =>
        prevoutlets.filter((outlet: Outlet) => outlet.outletId !== outletId),
      );
      toast.success('Outlet deleted');
      setIsDeleteModalOpen(false);
    } catch (error) {
      toast.error('Outlet failed to be deleted');
    }
  };

  const openUpdateModal = (
    outletId: number,
    name: string,
    provinsi: string,
    kota: string,
    kecamatan: string,
    longitude: number,
    latitude: number,
  ) => {
    setOutletId(outletId);
    setOutletName(name);
    setOutletProvinsi(provinsi);
    setOutletkota(kota);
    setOutleKecamatan(kecamatan);
    setOutletLongitude(longitude);
    setOutletLatitude(latitude);
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setOutletId(null);
    setOutletName(null);
    setOutletProvinsi(null);
    setOutletkota(null);
    setOutleKecamatan(null);
    setOutletLongitude(null);
    setOutletLatitude(null);
    fetchOutlets();
    setIsUpdateModalOpen(false);
  };

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    fetchOutlets();
    setIsCreateModalOpen(false);
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 px-2 py-4 gap-4">
      <h1>OUTLET MANAGEMENT</h1>
      <div className="flex flex-wrap gap-4 mt-4">
        <CreateButton onClick={() => openCreateModal()} />
        <input
          type="text"
          placeholder="Filter by outlet name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          className="border border-gray-300 rounded p-1 bg-white h-10"
        />
        <input
          type="text"
          placeholder="Filter by kota"
          value={kotaFilter}
          onChange={(e) => setKotaFilter(e.target.value)}
          className="border border-gray-300 rounded p-1 bg-white h-10"
        />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-blue-300 border-b">
            <tr>
              <th className="py-3 px-4 text-center border-slate-700">ID</th>
              <th className="py-3 px-4 text-center border-slate-700">
                Outlet Name
              </th>
              <th className="py-3 px-4 text-center border-slate-700">Kota</th>
              <th className="py-3 px-4 text-center border-slate-700">
                Kecamatan
              </th>
              <th className="py-3 px-4 text-center border-slate-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {outlets.length > 0 &&
              outlets.map((outlet: Outlet) => (
                <tr key={outlet.outletId} className="text-center border-b">
                  <td className="py-3 px-4 border-slate-700">
                    {outlet.outletId}
                  </td>
                  <td className="py-3 px-4 border-slate-700">{outlet.name}</td>
                  <td className="py-3 px-4 border-slate-700">{outlet.kota}</td>
                  <td className="py-3 px-4 border-slate-700">
                    {outlet.kecamatan}
                  </td>
                  <td>
                    <div className="flex gap-2 justify-center">
                      <UpdateButton
                        onClick={() =>
                          openUpdateModal(
                            outlet.outletId,
                            outlet.name!,
                            outlet.provinsi!,
                            outlet.kota!,
                            outlet.kecamatan!,
                            outlet.longitude!,
                            outlet.latitude!,
                          )
                        }
                      />
                      <DeleteButton
                        onClick={() =>
                          openDeleteModal(outlet.outletId, outlet.name!)
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center gap-10 my-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 min-w-24"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 min-w-24"
        >
          Next
        </button>
      </div>
      <OutletCreateModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
      />
      <OutletUpdateModal
        isOpen={isUpdateModalOpen}
        outletId={outletId!}
        onClose={closeUpdateModal}
        initialName={outletName!}
        initialProvinsi={outletProvinsi!}
        initialKota={outletKota!}
        initialKecamatan={outletKecamatan!}
        initialLongitude={outletLongitude!}
        initialLatitude={outletLatitude!}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={deleteOutlet}
      >
        <p>
          Are you sure you want to delete outlet{' '}
          <span className="font-bold">{outletName}</span> ?
        </p>
      </DeleteModal>
    </div>
  );
}
