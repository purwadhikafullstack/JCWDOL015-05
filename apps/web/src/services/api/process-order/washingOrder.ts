import { method } from "cypress/types/bluebird"

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000'
export const getWashingOrderByOutlet = async (outletId : number) => {
    const res = await fetch(`${BASEURL}/api/process/${outletId}/order`, {
        method : 'GET',
    })
    const result = await res.json()
    return {result, ok: res.ok, data: result.data}
}