import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, BookOpen, Users, Inbox } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/blogs", label: "Blog", icon: BookOpen },
  { href: "/admin/team", label: "Team", icon: Users },
  { href: "/admin/inquiries", label: "Inquiries", icon: Inbox },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors",
            pathname === href
              ? "bg-[#E8FF00]/10 text-[#E8FF00]"
              : "text-[#888888] hover:text-[#EDEDED] hover:bg-[#181818]"
          )}
        >
          <Icon size={16} />
          {label}
        </Link>
      ))}
    </nav>
  );
}
