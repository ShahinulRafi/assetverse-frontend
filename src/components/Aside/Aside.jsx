import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router";

const Aside = () => {
  return (
    <aside className="w-64 bg-base-200 h-screen border-r border-base-300 flex flex-col">
      
      {/* Brand */}
      <div className="px-6 py-4 border-b border-base-300">
        <h1 className="text-xl font-bold tracking-tight">
          Admin<span className="text-primary">Panel</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="menu menu-md gap-1">
          <li>
            <NavLink to="/dashboard/main" className="active">
              <LayoutDashboard size={18} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-assets" className="active">
              <LayoutDashboard size={18} />
              Assets
            </NavLink>
          </li>

          <li>
            <a>
              <Users size={18} />
              Users
            </a>
          </li>

          <li>
            <a>
              <FileText size={18} />
              Reports
            </a>
          </li>

          <li>
            <details>
              <summary>
                <Settings size={18} />
                Settings
              </summary>
              <ul>
                <li><a>General</a></li>
                <li><a>Security</a></li>
                <li><a>Roles</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-base-300">
        <button className="btn btn-outline btn-sm w-full">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Aside;
