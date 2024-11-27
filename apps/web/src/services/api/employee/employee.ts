export type IEmployeeLogin = {
  email: string
  password: string
  role: string
}

export const employeeLogin = async (data: IEmployeeLogin) => {
  const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000' 
  console.log(BASEURL)
  
  try {
    const res = await fetch(`${BASEURL}/api/users/login`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(res)
    if (!res.ok) {
      throw new Error(`Error: ${res.status} - ${res.statusText}`);
    }

    const result = await res.json();

    const outletAdmin = result.outletAdmin?.employee
      ? JSON.stringify(result.outletAdmin.employee)
      : null;
    const driver = result.driver?.employee
      ? JSON.stringify(result.driver.employee)
      : null;
    const worker = result.worker?.employee
      ? JSON.stringify(result.worker.employee)
      : null;
    const superAdmin = result.employee
      ? JSON.stringify(result.employee)
      : null;

    return {
      result,
      ok: res.ok,
      employee: result.user?.data || null,
      worker,
      driver,
      outletAdmin,
      superAdmin
    };
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
