import { Tag, FileText, Mail, X, Plus, ArrowRight } from "lucide-react";

export default function GroupForm() {
  return (
    <form className="space-y-6">
      {/* Group name */}
      <div>
        <label htmlFor="groupName" className="block text-xs font-medium uppercase tracking-wide text-stone-500 mb-1.5">
          Group name
        </label>
        <div className="relative">
          <Tag className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" strokeWidth={1.75} />
          <input
            id="groupName"
            type="text"
            name="groupName"
            placeholder="e.g. Goa Trip, Flat 3B Roommates"
            className="w-full rounded-lg border border-stone-200 bg-white pl-10 pr-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 transition-colors"
          />
        </div>
      </div>

      {/* Description (optional) */}
      <div>
        <label htmlFor="description" className="block text-xs font-medium uppercase tracking-wide text-stone-500 mb-1.5">
          Description <span className="normal-case text-stone-400">(optional)</span>
        </label>
        <div className="relative">
          <FileText className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" strokeWidth={1.75} />
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="What's this group for?"
            className="w-full rounded-lg border border-stone-200 bg-white pl-10 pr-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 transition-colors resize-none"
          />
        </div>
      </div>

      {/* Add members */}
      <div>
        <label htmlFor="memberEmail" className="block text-xs font-medium uppercase tracking-wide text-stone-500 mb-1.5">
          Add members
        </label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" strokeWidth={1.75} />
            <input
              id="memberEmail"
              type="email"
              name="memberEmail"
              placeholder="friend@example.com"
              className="w-full rounded-lg border border-stone-200 bg-white pl-10 pr-3.5 py-2.5 text-sm text-stone-800 placeholder:text-stone-400 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 transition-colors"
            />
          </div>
          <button
            type="button"
            className="shrink-0 rounded-lg border border-stone-300 hover:border-emerald-700 text-stone-600 hover:text-emerald-800 px-4 transition-colors"
            aria-label="Add member"
          >
            <Plus className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Added members list — static preview, wire up with your state */}
        <ul className="mt-3 space-y-2">
          {["ali@example.com", "sara@example.com", "ahmed@example.com"].map((email) => (
            <li
              key={email}
              className="flex items-center justify-between bg-stone-50 border border-stone-200 rounded-lg px-3.5 py-2"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-medium text-emerald-800">
                  {email.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm text-stone-700">{email}</span>
              </div>
              <button type="button" className="text-stone-400 hover:text-amber-600" aria-label="Remove member">
                <X className="w-4 h-4" strokeWidth={1.75} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Error placeholder — wire up conditionally in your logic */}
      {/* <p className="text-sm text-red-600">Group name is required</p> */}

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-stone-50 text-sm font-medium py-3 transition-colors"
      >
        Create group
        <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
      </button>
    </form>
  );
}
