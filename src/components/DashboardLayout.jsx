import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-stone-50">
      <Sidebar />
      <main className="flex-1 min-w-0 px-6 sm:px-10 py-8 sm:py-10">{children}</main>
    </div>
  );
}
