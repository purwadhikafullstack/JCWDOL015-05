export default function Layout({
  children,
  employees,
  outlets,
  items,
}: {
  children: React.ReactNode;
  employees: React.ReactNode;
  outlets: React.ReactNode;
  items: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 p-5 bg-blue-300 min-h-screen">
      {/* <div>{children}</div> */}
      <div>{employees}</div>
      <div>{outlets}</div>
      <div>{items}</div>
    </div>
  );
}
