export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-display text-3xl text-[#EDEDED] uppercase mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Projects", value: "3" },
          { label: "Blog Posts", value: "3" },
          { label: "Team Members", value: "3" },
          { label: "Inquiries", value: "0" },
        ].map((stat) => (
          <div key={stat.label} className="surface-card p-6">
            <div className="font-display text-4xl text-[#E8FF00]">{stat.value}</div>
            <div className="text-xs font-mono text-[#888888] uppercase tracking-widest mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
