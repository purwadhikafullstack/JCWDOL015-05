const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000'

export type IEmployeeLogin = {
  email: string
  password: string
}
export const employeeLogin = async (data: IEmployeeLogin) => {
  const res = await fetch(`${BASEURL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  const result = await res.json()
  console.log(result)
  return { result, ok: res.ok, employee: result.user.data, worker: result.worker, driver: result.driver, outletadmin: result.outletAdmin }
}