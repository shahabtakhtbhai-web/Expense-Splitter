import DashboardLayout from "@/components/DashboardLayout";
import GroupForm from "@/components/GroupForm";
import { ArrowLeft } from "lucide-react";

export default function NewGroupPage() {
  return (
    <DashboardLayout>
      <a href="/dashboard" className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-emerald-900">
        <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
        Back to dashboard
      </a>

      <div className="mt-6 max-w-lg">
        <h1 className="font-serif text-2xl sm:text-3xl text-emerald-950">Create a new group</h1>
        <p className="mt-1 text-sm text-stone-500">
          Add a trip, a household, or any shared pot of expenses.
        </p>

        <div className="mt-8 bg-white border border-stone-200 rounded-xl p-6 sm:p-8">
          <GroupForm />
        </div>
      </div>
    </DashboardLayout>
  );
}
