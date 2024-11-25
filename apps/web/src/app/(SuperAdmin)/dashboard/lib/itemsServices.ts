const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

export async function createItem(
  orderId: number | null,
  item: string | null,
  quantity: number | null,
) {
  try {
    const response = await fetch(`${BASEURL}/api/items`, {
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
    throw error;
  }
}

export async function UpdateItem(
  itemId: number | null,
  item: string | null,
  quantity: number | null,
) {
  if (itemId === null) return;

  try {
    const response = await fetch(`${BASEURL}/api/items/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item, quantity }),
    });
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    const updatedItem = await response.json();
    return updatedItem;
  } catch (error) {
    console.error('Error updating item:', error);
  }
}
