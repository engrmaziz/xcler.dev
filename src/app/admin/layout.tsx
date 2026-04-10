import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { headers } from "next/headers";
import type { ReactNode } from "react";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") ?? headersList.get("x-pathname") ?? "";

  // Allow access to login page without auth
  if (pathname.endsWith("/admin/login")) {
    return <>{children}</>;
  }

  const session = await getServerSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <header className="border-b border-[#222222] px-8 py-4 flex items-center justify-between">
        <span className="font-display text-xl text-[#EDEDED]">XCLER Admin</span>
        <nav className="flex items-center gap-6 text-sm text-[#888888]">
          <a href="/admin" className="hover:text-[#EDEDED] transition-colors">Dashboard</a>
          <a href="/admin/projects" className="hover:text-[#EDEDED] transition-colors">Projects</a>
          <a href="/admin/blogs" className="hover:text-[#EDEDED] transition-colors">Blog</a>
          <a href="/admin/team" className="hover:text-[#EDEDED] transition-colors">Team</a>
          <a href="/admin/inquiries" className="hover:text-[#EDEDED] transition-colors">Inquiries</a>
        </nav>
      </header>
      <main className="p-8">{children}</main>
    </div>
  );
}
