import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}

export default function NavItem({ href, icon, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-lg"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}
