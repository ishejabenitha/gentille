import React, { useState } from "react";

const Dashboard = ({ user, onLogout }) => {
  const [activePage, setActivePage] = useState("home");

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return (
          <div>
            <h2>Welcome to Dashboard, {user}!</h2>
            <p>This is your home page. Start managing your content here.</p>
          </div>
        );
      case "profile":
        return (
          <div>
            <h2>User Profile</h2>
            <p>Username: {user}</p>
            <p>Email: {user}@example.com</p>
            <p>Join Date: May 6, 2026</p>
          </div>
        );
      case "settings":
        return (
          <div>
            <h2>Settings</h2>
            <p>Manage your account settings here.</p>
            <label>
              <input type="checkbox" defaultChecked /> Enable Notifications
            </label>
            <br />
            <label>
              <input type="checkbox" defaultChecked /> Dark Mode
            </label>
          </div>
        );
      case "analytics":
        return (
          <div>
            <h2>Analytics</h2>
            <p>Your activity and statistics are displayed here.</p>
            <p>Total Views: 1,234</p>
            <p>Total Interactions: 567</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
    
      <nav className="bg-slate-950 shadow-md">
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-white text-xl sm:text-2xl font-bold ml-2">
         Journalist Dashboard
          </h1>
          <ul className="flex flex-wrap gap-3 m-0 p-0 list-none justify-center">
            <li>
              <button
                onClick={() => setActivePage("home")}
                className={`px-4 py-2 rounded-md text-white text-sm ${
                  activePage === "home"
                    ? "bg-emerald-600 font-semibold"
                    : "bg-transparent hover:bg-slate-800"
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("profile")}
                className={`px-4 py-2 rounded-md text-white text-sm ${
                  activePage === "profile"
                    ? "bg-emerald-600 font-semibold"
                    : "bg-transparent hover:bg-slate-800"
                }`}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("analytics")}
                className={`px-4 py-2 rounded-md text-white text-sm ${
                  activePage === "analytics"
                    ? "bg-emerald-600 font-semibold"
                    : "bg-transparent hover:bg-slate-800"
                }`}
              >
                Analytics
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("settings")}
                className={`px-4 py-2 rounded-md text-white text-sm ${
                  activePage === "settings"
                    ? "bg-emerald-600 font-semibold"
                    : "bg-transparent hover:bg-slate-800"
                }`}
              >
                Settings
              </button>
            </li>
            <li>
              <button
                onClick={onLogout}
                className="px-4 py-2 rounded-md text-white text-sm bg-red-600 hover:bg-red-700 font-semibold"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>

     
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-5 py-10">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
          {renderContent()}
        </div>
      </main>


      <footer className="bg-slate-950 text-white text-center py-8 mt-auto border-t border-slate-900">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-left">
            <div>
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p>Your go-to platform for content management.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <ul className="list-none p-0 space-y-2">
                <li>
                  <a href="#" className="text-emerald-500 hover:text-emerald-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-500 hover:text-emerald-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-emerald-500 hover:text-emerald-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <p className="space-x-3">
                <a href="#" className="text-emerald-500 hover:text-emerald-400">
                  Twitter
                </a>
                <a href="#" className="text-emerald-500 hover:text-emerald-400">
                  Facebook
                </a>
                <a href="#" className="text-emerald-500 hover:text-emerald-400">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-6">
            <p className="mb-2">&copy; 2026 Journalist Dashboard. All rights reserved.</p>
            <p className="text-sm text-slate-400">Designed with  for content creators</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
