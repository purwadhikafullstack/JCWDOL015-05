const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

export async function createOutlet(
  name: string,
  provinsi: string,
  kota: string,
  kecamatan: string,
  longitude: number,
  latitude: number,
) {
  try {
    const response = await fetch(`${BASEURL}/api/outlet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        provinsi,
        kota,
        kecamatan,
        longitude,
        latitude,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create outlet');
    }

    const newOutlet = await response.json();
    return newOutlet;
  } catch (error) {
    console.error('Error creating outlet:', error);
    throw error; // rethrow the error to handle it in the calling function
  }
}

export async function UpdateOutlet(
  outletId: number,
  name: string,
  provinsi: string,
  kota: string,
  kecamatan: string,
  longitude: number,
  latitude: number,
) {
  if (outletId === null) return;

  try {
    const response = await fetch(`${BASEURL}/api/outlet/${outletId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        provinsi,
        kota,
        kecamatan,
        longitude,
        latitude,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to create outlet');
    }
    const updatedItem = await response.json();
    return updatedItem;
  } catch (error) {
    console.error('Error updating outlet:', error);
  }
}
