'use client'
import RoleProtection from "@/services/Unauthorized";

  const Layout = ({
  employees,
  outlets,
  items,
}: {
  employees: React.ReactNode;
  outlets: React.ReactNode;
  items: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-blue-300 min-h-screen">
      <div>{employees}</div>
      <div>{outlets}</div>
      <div>{items}</div>
    </div>
  );
}

export default RoleProtection (Layout, ["superAdmin"])
