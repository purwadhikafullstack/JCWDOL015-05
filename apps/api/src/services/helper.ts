export const generateUniqueOrderId = (customerId: number) => {
    const timestamp = Number(Date.now().toString().slice(-8));
    return (`${timestamp}${customerId}`);
  }
  