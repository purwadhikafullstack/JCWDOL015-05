const BASEURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000';

export async function createEmployee(
  email: string,
  password: string,
  fullName: string,
  role: string,
  outletId: number,
  station: string,
) {
  try {
    const response = await fetch(`${BASEURL}/api/employee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        fullName,
        role,
        outletId,
        station,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create new employee');
    }

    const newEmployee = await response.json();
    return newEmployee;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error; // rethrow the error to handle it in the calling function
  }
}

export async function UpdateEmployee(
  employeeId: number,
  email: string | null,
  password: string | null,
  fullName: string | null,
  role: string | null,
  outletId: number | null,
  station: string | null,
) {
  if (employeeId === null) return;

  try {
    const response = await fetch(`${BASEURL}/api/employee/${employeeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        fullName,
        role,
        outletId,
        station,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to create outlet');
    }
    const updatedEmployee = await response.json();
    return updatedEmployee;
  } catch (error) {
    console.error('Error updating outlet:', error);
  }
}
