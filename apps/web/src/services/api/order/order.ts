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