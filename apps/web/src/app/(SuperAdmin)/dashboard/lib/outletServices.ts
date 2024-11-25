import { Outlet } from '../@outlets/page';

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

export interface ICreateOutlet {
  name: string;
  provinsi: string;
  kota: string;
  kecamatan: string;
  longitude: number;
  latitude: number;
}

export interface IUpdateOutlet {
  outletId: number;
  name: string;
  provinsi: string;
  kota: string;
  kecamatan: string;
  longitude: number;
  latitude: number;
}

export async function createNewOutlet(data: ICreateOutlet) {
  try {
    const response = await fetch(`${BASEURL}/api/outlet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create outlet');
    }

    const newOutlet = await response.json();
    return { newOutlet, ok: response.ok };
  } catch (error) {
    console.error('Error creating outlet:', error);
    throw error;
  }
}
export interface ICreateOutlet {
  name: string;
  provinsi: string;
  kota: string;
  kecamatan: string;
  longitude: number;
  latitude: number;
}




export async function UpdateOutlet(data: IUpdateOutlet) {
  if (data.outletId === null) return;

  try {
    const response = await fetch(`${BASEURL}/api/outlet/${data.outletId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Failed to create outlet');
    }
    const updatedItem = await response.json();
    return { updatedItem, ok: response.ok };
  } catch (error) {
    console.error('Error updating outlet:', error);
  }
}
