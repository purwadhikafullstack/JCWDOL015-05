import { ICustomerPayment } from "@/type/customers"

const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000'

export const successOrder = async () => {
    const res = await fetch(`${BASEURL}/api/orders/completed-order`,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({})
    })
}

export const customerOrderData = async (customerId : number) => {
    const url = `${BASEURL}/api/orders/:${customerId}`
    const res = await fetch (url)
    const result = await res.json()
    return {ok: res.ok, result, orderData: result.data} 
}

export const snapPayment = async(data: ICustomerPayment) => {
    const url = `${BASEURL}/api/orders/payment-links`
    const res = await fetch(url,{
        method: "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    })
    const result = await res.json()
    return {result , ok : res.ok}
}