'use client';

import {
  CreateButton,
  DeleteButton,
  UpdateButton,
} from '@/components/ui/actionButton';
import { useEffect, useState, useCallback } from 'react';
import DeleteModal from '../../components/deleteModal';
import { UpdateOutlet, createOutlet } from '../lib/outletServices';
import OutletUpdateModal from '../../components/outletUpdateModal';
import OutletCreateModal from '../../components/outletCreateModal';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

type Outlet = {
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

  // Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const [nameFilter, setNameFilter] = useState<string>('');
  const [kotaFilter, setKotaFilter] = useState<string>('');

  // Fetch outlets with useCallback
  const limit = 5;
  const fetchOutlets = useCallback(async () => {
    try {
      const query = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        name: nameFilter,
        kota: kotaFilter,
      });

      const response = await fetch(`${BASEURL}/api/outlet?${query}`);
      const data = await response.json();
      setOutlets(data.data);
      setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.error('Fetching error:', error);
    }
  }, [page, limit, nameFilter, kotaFilter]); // Dependencies for the useCallback

  useEffect(() => {
    fetchOutlets();
  }, [fetchOutlets]); // Dependency on fetchOutlets

  // Open confirmation modal and set outlet ID to delete
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

  // Function to delete an outlet by ID
  const deleteOutlet = async () => {
    try {
      await fetch(`${BASEURL}/api/outlet/${outletId}`, {
        method: 'DELETE',
      });
      // Refresh outlets list after deletion
      setOutlets((prevoutlets) =>
        prevoutlets.filter((outlet: Outlet) => outlet.outletId !== outletId),
      );
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting outlet:', error);
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
    setIsUpdateModalOpen(false);
  };

  const handleUpdateOutlet = async (values: {
    name: string;
    provinsi: string;
    kota: string;
    kecamatan: string;
    longitude: number;
    latitude: number;
  }) => {
    try {
      const updatedOutlet = await UpdateOutlet(
        outletId!,
        values.name,
        values.provinsi,
        values.kota,
        values.kecamatan,
        values.longitude,
        values.latitude,
      );
      setOutlets((prevoutlets) =>
        prevoutlets.map((outlet: Outlet) =>
          outlet.outletId === updatedOutlet.outletId
            ? {
                ...outlet,
                name: updatedOutlet.name,
                provinsi: updatedOutlet.provinsi,
                kota: updatedOutlet.kota,
                kecamatan: updatedOutlet.kecamatan,
                longitude: updatedOutlet.longitude,
                latitude: updatedOutlet.latitude,
              }
            : outlet,
        ),
      );
      await fetchOutlets();
      closeUpdateModal();
    } catch (error) {
      console.error('Error updating outlet:', error);
    }
  };

  const openCreateModal = () => {
    setOutletName('');
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleCreateOutlet = async (values: {
    name: string;
    provinsi: string;
    kota: string;
    kecamatan: string;
    longitude: number;
    latitude: number;
  }) => {
    try {
      const newOutlet = await createOutlet(
        values.name,
        values.provinsi,
        values.kota,
        values.kecamatan,
        values.longitude,
        values.latitude,
      );
      setOutlets((prevItems) => [...prevItems, newOutlet]);
      await fetchOutlets();
      closeCreateModal();
    } catch (error) {
      console.error('Error creating outlet:', error);
    }
  };

  // Pagination handlers
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
    <div className="flex flex-col items-center h-auto bg-[#fffaf0] text-slate-700 py-4 gap-4">
      <h1>OUTLET MANAGEMENT</h1>
      {/* Filter inputs */}
      <div className="flex space-x-4 mt-4">
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

      <table className="w-4/5 border-slate-700">
        <thead className="border-b bg-blue-300">
          <tr>
            <th className="py-3 px-1 border-slate-700">ID</th>
            <th className="py-3 px-1 border-slate-700">Outlet Name</th>
            {/* <th className="py-3 px-1 border-slate-700">Longitude</th>
            <th className="py-3 px-1 border-slate-700">Latitude</th> */}
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
                {/* <td className="py-3 px-1 border-slate-700">
                  {outlet.longitude}
                </td>
                <td className="py-3 px-1 border-slate-700">
                  {outlet.latitude}
                </td> */}
                <td className="py-3 px-1 border-slate-700">{outlet.kota}</td>
                <td>
                  <div className="flex gap-1 justify-center">
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

      {/* Pagination controls */}
      <div className="flex justify-between items-center gap-10 my-4">
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
      </div>
      {/* Modals */}
      <OutletCreateModal
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        onConfirm={handleCreateOutlet}
      />
      <OutletUpdateModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        onConfirm={handleUpdateOutlet}
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
