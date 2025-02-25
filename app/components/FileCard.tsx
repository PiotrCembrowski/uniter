export default function FileCard({
  title,
  metadata,
}: {
  title: string;
  metadata: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="aspect-[4/3] overflow-hidden"></div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{metadata}</p>
      </div>
    </div>
  );
}
