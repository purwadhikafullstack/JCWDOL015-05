export default function ReportsLayout({
  income,
  performance,
}: {
  income: React.ReactNode;
  performance: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 p-5 bg-blue-300 min-h-screen">
      <div className="mb-8">{income}</div>
      <div>{performance}</div>
    </div>
  );
}
