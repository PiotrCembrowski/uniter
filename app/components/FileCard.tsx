export default function FileCard({
  title,
  metadata,
  placeholder,
}: {
  title: string;
  metadata: string;
  placeholder: number;
}) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white">
      <div className="aspect-[4/3] overflow-hidden">
        <input type="text" placeholder={placeholder} />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{metadata}</p>
      </div>
    </div>
  );
}
