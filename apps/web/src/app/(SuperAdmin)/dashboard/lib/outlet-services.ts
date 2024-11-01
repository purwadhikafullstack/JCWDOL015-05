export async function createOutlet(
  orderId: number | null,
  item: string | null,
  quantity: number | null,
) {
  try {
    const response = await fetch('http://localhost:8000/api/laundry/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderId, item, quantity }),
    });

    if (!response.ok) {
      throw new Error('Failed to create post');
    }

    const newItem = await response.json();
    return newItem;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error; // rethrow the error to handle it in the calling function
  }
}

export async function UpdateOutlet(
  outletId: string | null,
  name: string | null,
  provinsi: string | null,
  kota: string | null,
  kecamatan: string | null,
  longitude: string | null,
  latitude: string | null,
) {
  if (outletId === null) return;

  try {
    const response = await fetch(
      `http://localhost:8000/api/laundry/outlet/${outletId}`,
      {
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
      },
    );
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    const updatedItem = await response.json();
    return updatedItem;
  } catch (error) {
    console.error('Error updating item:', error);
  }
}
