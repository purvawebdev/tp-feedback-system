import Sidebar from "../components/Sidebar";
import CollegeAdminDashboard from "../pages/CollegeAdminDashboard";

export default function CollegeAdminLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <CollegeAdminDashboard />
      </main>
    </div>
  );
}
