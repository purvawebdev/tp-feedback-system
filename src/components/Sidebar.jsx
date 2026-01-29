import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  RotateCcw,
  GraduationCap,
  Users,
  BarChart3,
  LogOut,
  ChevronLeft,
} from "lucide-react";

import { getCollegeAdminSidebar } from "../services/sidebar.service";
import { getCurrentUser } from "../services/auth.service";

const ICONS = {
  dashboard: LayoutDashboard,
  sessions: RotateCcw,
  academic: GraduationCap,
  faculty: Users,
  reports: BarChart3,
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  
    const handleLogout = () => {
  // later this will be Firebase auth
  // for now, simulate successful login
  navigate("/");
};

  useEffect(() => {
    async function load() {
      setUser(await getCurrentUser());
      setItems(await getCollegeAdminSidebar());
    }
    load();
  }, []);

  if (!user) return null;

  return (
    <aside className={`${collapsed ? "w-20" : "w-64"} transition-all duration-300 bg-gradient-to-b from-[#083164] to-[#06284f] text-white h-screen flex flex-col`}>
      
      {/* BRAND */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
        {!collapsed && (
          <div>
            <p className="text-lg font-semibold">Gryphon</p>
            <p className="text-xs text-blue-200">Feedback System</p>
          </div>
        )}
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded-md hover:bg-white/10">
          <ChevronLeft className={`h-5 w-5 ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* USER */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
          🎓
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-blue-200">College Admin</p>
          </div>
        )}
      </div>

      {/* NAV */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {items.map((item) => {
          const Icon = ICONS[item.icon];
          const active = location.pathname === item.path;

          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm
                ${active ? "bg-white/15" : "text-blue-100 hover:bg-white/10"}`}
            >
              <Icon className="h-5 w-5" />
              {!collapsed && item.label}
            </button>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <div className="px-3 py-4 border-t border-white/10">
        <button onClick={handleLogout} className="flex items-center gap-3 text-blue-100 hover:bg-white/10 px-3 py-2.5 rounded-md w-full">
          <LogOut className="h-5 w-5" />
          {!collapsed && "Sign Out"}
        </button>
      </div>
    </aside>
  );
}
