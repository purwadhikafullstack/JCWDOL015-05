const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000'
export const getDataByOutlet = async (outletId: number) => {
  const res = await fetch(`${BASEURL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ outletId })
  })
  const result = await res.json()
  return { result, ok: res.ok, data: result.data }
}