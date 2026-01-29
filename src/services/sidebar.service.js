export const getCollegeAdminSidebar = async () => {
  return [
    { id: "dashboard", label: "Dashboard", icon: "dashboard", path: "/college-admin/dashboard" },
    { id: "sessions", label: "Feedback Sessions", icon: "sessions", path: "/college-admin/sessions" },
    { id: "academic", label: "Academic Config", icon: "academic", path: "/college-admin/academic-config" },
    { id: "faculty", label: "Faculty", icon: "faculty", path: "/college-admin/faculty" },
    { id: "reports", label: "Reports", icon: "reports", path: "/college-admin/reports" },
  ];
};
