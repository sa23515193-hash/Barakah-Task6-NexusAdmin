import React, { createContext, useContext, useState } from "react";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  LogOut,
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./style.css";

const Auth = createContext(null);

const salesData = [
  { month: "Jan", sales: 3200, orders: 2100 },
  { month: "Feb", sales: 4200, orders: 2800 },
  { month: "Mar", sales: 3800, orders: 2500 },
  { month: "Apr", sales: 5600, orders: 3500 },
  { month: "May", sales: 4800, orders: 3100 },
  { month: "Jun", sales: 6900, orders: 4300 },
  { month: "Jul", sales: 6200, orders: 4000 },
  { month: "Aug", sales: 7800, orders: 5200 },
  { month: "Sep", sales: 7100, orders: 4700 },
  { month: "Oct", sales: 8900, orders: 5900 },
  { month: "Nov", sales: 8200, orders: 5500 },
  { month: "Dec", sales: 9800, orders: 6500 },
];

const trafficData = [
  { name: "Direct", value: 38, color: "#635bff" },
  { name: "Social", value: 27, color: "#16b8a6" },
  { name: "Search", value: 23, color: "#f5a623" },
  { name: "Other", value: 12, color: "#ef6b8a" },
];

const initialOrders = [
  { id: "#NX-1042", customer: "Olivia Martin", product: "Premium Plan", date: "Oct 24, 2026", amount: 249, status: "Completed" },
  { id: "#NX-1041", customer: "Jackson Lee", product: "Starter Plan", date: "Oct 24, 2026", amount: 79, status: "Pending" },
  { id: "#NX-1040", customer: "Isabella Chen", product: "Business Plan", date: "Oct 23, 2026", amount: 499, status: "Completed" },
  { id: "#NX-1039", customer: "William Kim", product: "Premium Plan", date: "Oct 22, 2026", amount: 249, status: "Cancelled" },
  { id: "#NX-1038", customer: "Sophia Patel", product: "Starter Plan", date: "Oct 22, 2026", amount: 79, status: "Completed" },
];

function Button({ children, onClick, variant = "primary", type = "button" }) {
  return (
    <button type={type} className={`nx-button nx-button-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

function Login() {
  const auth = useContext(Auth);
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@nexus.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    auth.login();
    navigate("/dashboard");
  }

  return (
    <main className="nx-login-page">
      <section className="nx-login-visual">
        <div className="nx-brand nx-brand-light">
          <span className="nx-brand-icon"><ShieldCheck size={25} /></span>
          <span>Nexus<span className="nx-brand-accent">Admin</span></span>
        </div>

        <div className="nx-login-hero">
          <span className="nx-eyebrow">SMARTER BUSINESS MANAGEMENT</span>
          <h1>Everything you need.<br />One powerful dashboard.</h1>
          <p>Monitor performance, understand your customers, and manage your business from one beautifully organized workspace.</p>
          <div className="nx-login-preview">
            <div className="nx-preview-top">
              <span>Revenue overview</span>
              <span className="nx-preview-badge">+18.6%</span>
            </div>
            <strong>$84,254.00</strong>
            <div className="nx-preview-bars">
              {[34, 48, 39, 64, 49, 72, 58, 83, 68, 96, 75, 100].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        </div>

        <p className="nx-visual-footer">Nexus Admin · Barakah TechLabs Project</p>
      </section>

      <section className="nx-login-form-section">
        <div className="nx-login-form-wrap">
          <div className="nx-mobile-brand nx-brand">
            <span className="nx-brand-icon"><ShieldCheck size={24} /></span>
            <span>Nexus<span className="nx-brand-accent">Admin</span></span>
          </div>

          <span className="nx-login-icon"><LockKeyhole size={25} /></span>
          <h2>Welcome back</h2>
          <p className="nx-muted">Sign in to access your admin workspace.</p>

          <form className="nx-login-form" onSubmit={handleSubmit}>
            <label htmlFor="nx-email">Email address</label>
            <div className="nx-input-wrap">
              <Mail size={18} />
              <input id="nx-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@example.com" required />
            </div>

            <div className="nx-password-heading">
              <label htmlFor="nx-password">Password</label>
              <span className="nx-muted nx-small">Demo access</span>
            </div>
            <div className="nx-input-wrap">
              <LockKeyhole size={18} />
              <input id="nx-password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required />
              <button className="nx-password-toggle" type="button" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {error && <p className="nx-form-error">{error}</p>}

            <button className="nx-button nx-button-primary nx-login-submit" type="submit">
              Sign in to dashboard <ArrowUpRight size={18} />
            </button>
          </form>

          <div className="nx-demo-note">
            <CheckCircle2 size={18} />
            <div><strong>Demo mode enabled</strong><p>Use the prefilled details or enter any non-empty email and password.</p></div>
          </div>
          <p className="nx-login-terms">By continuing, you agree to the demo application's terms of use.</p>
        </div>
      </section>
    </main>
  );
}

function Protected() {
  const auth = useContext(Auth);
  const location = useLocation();

  if (!auth.ok) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Dashboard />;
}

function StatCard({ title, value, change, positive, icon: Icon, color }) {
  return (
    <article className="nx-stat-card">
      <div className="nx-stat-top">
        <span className="nx-stat-title">{title}</span>
        <span className={`nx-stat-icon ${color}`}><Icon size={20} /></span>
      </div>
      <div className="nx-stat-value">{value}</div>
      <div className="nx-stat-bottom">
        <span className={positive ? "nx-positive" : "nx-negative"}>
          {positive ? <TrendingUp size={15} /> : <TrendingDown size={15} />}
          {change}
        </span>
        <span className="nx-muted nx-small">vs last month</span>
      </div>
    </article>
  );
}

function Dashboard() {
  const auth = useContext(Auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("This year");
  const [activeSection, setActiveSection] = useState("Dashboard");

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { label: "Customers", icon: Users, path: "/customers" },
    { label: "Orders", icon: ShoppingCart, path: "/orders" },
    { label: "Analytics", icon: BarChart3, path: "/analytics" },
    { label: "Settings", icon: Settings, path: "/settings" },
  ];

  const sectionFromPath = location.pathname.split("/")[1] || "dashboard";
  const sectionTitle = sectionFromPath.charAt(0).toUpperCase() + sectionFromPath.slice(1);
  const orders = initialOrders.filter((order) =>
    `${order.id} ${order.customer} ${order.product} ${order.status}`.toLowerCase().includes(search.toLowerCase())
  );

  function logout() {
    auth.logout();
    navigate("/login");
  }

  function navigateSection(item) {
    setActiveSection(item.label);
    setSidebarOpen(false);
  }

  return (
    <div className="nx-app-shell">
      {sidebarOpen && <button className="nx-sidebar-overlay" onClick={() => setSidebarOpen(false)} aria-label="Close navigation" />}

      <aside className={`nx-sidebar ${sidebarOpen ? "nx-sidebar-open" : ""}`}>
        <Link className="nx-brand nx-sidebar-brand" to="/dashboard" onClick={() => setActiveSection("Dashboard")}>
          <span className="nx-brand-icon"><ShieldCheck size={24} /></span>
          <span>Nexus<span className="nx-brand-accent">Admin</span></span>
        </Link>

        <div className="nx-workspace">
          <div className="nx-workspace-avatar">N</div>
          <div><strong>Nexus Workspace</strong><span>Administrator</span></div>
        </div>

        <p className="nx-nav-caption">WORKSPACE</p>
        <nav className="nx-navigation">
          {navItems.map((item) => {
            const active = sectionFromPath === item.path.slice(1) ||
              (item.label === "Dashboard" && sectionFromPath === "");
            return (
              <Link key={item.path} to={item.path} onClick={() => navigateSection(item)} className={`nx-nav-link ${active ? "nx-nav-active" : ""}`}>
                <item.icon size={19} /><span>{item.label}</span>
                {item.label === "Orders" && <span className="nx-nav-count">5</span>}
              </Link>
            );
          })}
        </nav>

        <div className="nx-sidebar-bottom">
          <div className="nx-upgrade-card">
            <span className="nx-upgrade-icon"><Activity size={20} /></span>
            <strong>Your workspace is ready</strong>
            <p>Explore reports and monitor business activity.</p>
            <Link to="/analytics" onClick={() => setSidebarOpen(false)}>Explore analytics <ArrowUpRight size={15} /></Link>
          </div>
          <button className="nx-logout-button" onClick={logout}><LogOut size={19} /> Log out</button>
          <div className="nx-profile">
            <div className="nx-profile-avatar">SA</div>
            <div className="nx-profile-info"><strong>Super Admin</strong><span>admin@nexus.com</span></div>
            <span className="nx-online-dot" />
          </div>
        </div>
      </aside>

      <main className="nx-main">
        <header className="nx-topbar">
          <button className="nx-menu-button" onClick={() => setSidebarOpen(true)} aria-label="Open navigation"><Menu size={22} /></button>
          <div className="nx-breadcrumb"><span>Workspace</span><span>/</span><strong>{sectionTitle}</strong></div>
          <div className="nx-topbar-actions">
            <label className="nx-search-box">
              <Search size={17} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search orders..." aria-label="Search orders" />
              <kbd>⌘ K</kbd>
            </label>
            <button className="nx-icon-button" aria-label="Notifications"><Bell size={19} /><span className="nx-notification-dot" /></button>
            <div className="nx-topbar-avatar">SA</div>
          </div>
        </header>

        <div className="nx-content">
          <div className="nx-page-heading">
            <div><span className="nx-eyebrow nx-heading-eyebrow">OVERVIEW</span><h1>{sectionTitle === "Dashboard" ? "Good morning, Admin 👋" : sectionTitle}</h1><p className="nx-muted">Here's what's happening with your business today.</p></div>
            <div className="nx-heading-actions"><span className="nx-date-label"><CalendarDays size={17} /> October 26, 2026</span><button className="nx-button nx-button-primary" onClick={() => window.print()}>Export report <ArrowUpRight size={17} /></button></div>
          </div>

          {sectionFromPath === "settings" ? (
            <section className="nx-panel nx-settings-panel"><h2>Workspace settings</h2><p className="nx-muted">Manage your demo workspace preferences.</p><div className="nx-settings-row"><div><strong>Account</strong><p>admin@nexus.com</p></div><span className="nx-status nx-status-completed">Active</span></div><div className="nx-settings-row"><div><strong>Workspace</strong><p>Nexus Workspace</p></div><span>Administrator</span></div><div className="nx-settings-row"><div><strong>Authentication</strong><p>Frontend demo session</p></div><span>Demo mode</span></div><Button variant="secondary" onClick={logout}>Log out</Button></section>
          ) : (
            <>
              <section className="nx-stats-grid">
                <StatCard title="Total Revenue" value="$84,254" change="+12.8%" positive icon={DollarSign} color="nx-icon-purple" />
                <StatCard title="Total Orders" value="2,456" change="+8.2%" positive icon={ShoppingCart} color="nx-icon-teal" />
                <StatCard title="Active Customers" value="1,845" change="+5.4%" positive icon={Users} color="nx-icon-orange" />
                <StatCard title="Conversion Rate" value="3.62%" change="-0.8%" positive={false} icon={Activity} color="nx-icon-pink" />
              </section>

              <section className="nx-charts-grid">
                <article className="nx-panel nx-revenue-panel">
                  <div className="nx-panel-heading"><div><h2>Revenue overview</h2><p className="nx-muted">Track your revenue performance over time.</p></div><select value={period} onChange={(e) => setPeriod(e.target.value)} aria-label="Revenue time period"><option>This year</option><option>Last 30 days</option><option>Last 7 days</option></select></div>
                  <div className="nx-chart-legend"><span><i className="nx-legend-purple" /> Revenue</span><span><i className="nx-legend-teal" /> Orders</span></div>
                  <div className="nx-revenue-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={salesData}><defs><linearGradient id="nxRevenueFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#635bff" stopOpacity={0.2} /><stop offset="95%" stopColor="#635bff" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#edf0f5" vertical={false} /><XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#8b91a4", fontSize: 11 }} /><YAxis axisLine={false} tickLine={false} tick={{ fill: "#8b91a4", fontSize: 11 }} tickFormatter={(value) => `$${value / 1000}k`} /><Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} /><Area type="monotone" dataKey="sales" name="Revenue" stroke="#635bff" strokeWidth={2.5} fill="url(#nxRevenueFill)" /><Area type="monotone" dataKey="orders" name="Orders" stroke="#16b8a6" strokeWidth={2} fill="transparent" /></AreaChart></ResponsiveContainer></div>
                </article>

                <article className="nx-panel nx-traffic-panel">
                  <div className="nx-panel-heading"><div><h2>Traffic sources</h2><p className="nx-muted">Where visitors come from.</p></div><button className="nx-dots-button" aria-label="More traffic options">···</button></div>
                  <div className="nx-pie-wrap"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={trafficData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={64} outerRadius={88} paddingAngle={4} stroke="none">{trafficData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}</Pie><Tooltip formatter={(value) => `${value}%`} /></PieChart></ResponsiveContainer><div className="nx-pie-center"><strong>24.8k</strong><span>Visitors</span></div></div>
                  <div className="nx-traffic-legend">{trafficData.map((item) => <div key={item.name}><span><i style={{ background: item.color }} />{item.name}</span><strong>{item.value}%</strong></div>)}</div>
                </article>
              </section>

              <section className="nx-panel nx-orders-panel">
                <div className="nx-panel-heading"><div><h2>{sectionFromPath === "customers" ? "Customer activity" : sectionFromPath === "analytics" ? "Performance report" : "Recent orders"}</h2><p className="nx-muted">Review the latest activity across your workspace.</p></div><Link className="nx-text-link" to="/orders">View all orders <ArrowUpRight size={16} /></Link></div>
                <div className="nx-table-wrap"><table className="nx-table"><thead><tr><th>Order ID</th><th>Customer</th><th>Product</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead><tbody>{orders.map((order) => <tr key={order.id}><td className="nx-order-id">{order.id}</td><td><div className="nx-customer-cell"><span className="nx-customer-avatar">{order.customer.split(" ").map((part) => part[0]).join("")}</span>{order.customer}</div></td><td>{order.product}</td><td>{order.date}</td><td className="nx-amount">${order.amount.toLocaleString()}</td><td><span className={`nx-status nx-status-${order.status.toLowerCase()}`}>{order.status}</span></td></tr>)}{orders.length === 0 && <tr><td colSpan="6" className="nx-empty-state">No matching orders found.</td></tr>}</tbody></table></div>
                <div className="nx-table-footer"><span>Showing {orders.length} of {initialOrders.length} orders</span><div><button disabled>Previous</button><button className="nx-page-current">1</button><button disabled>Next</button></div></div>
              </section>
              <footer className="nx-footer"><span>© 2026 Nexus Admin. All rights reserved.</span><span>Designed for Barakah TechLabs <span className="nx-footer-heart">♥</span></span></footer>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const [ok, setOk] = useState(() => sessionStorage.getItem("nexus-demo-session") === "demo-session");

  const value = {
    ok,
    login: () => {
      sessionStorage.setItem("nexus-demo-session", "demo-session");
      setOk(true);
    },
    logout: () => {
      sessionStorage.removeItem("nexus-demo-session");
      setOk(false);
    },
  };

  return (
    <Auth.Provider value={value}>
      <HashRouter>
        <Routes>
          <Route path="/login" element={ok ? <Navigate to="/dashboard" replace /> : <Login />} />
          <Route path="/dashboard" element={<Protected />} />
          <Route path="/customers" element={<Protected />} />
          <Route path="/orders" element={<Protected />} />
          <Route path="/analytics" element={<Protected />} />
          <Route path="/settings" element={<Protected />} />
          <Route path="/" element={<Navigate to={ok ? "/dashboard" : "/login"} replace />} />
          <Route path="*" element={<Navigate to={ok ? "/dashboard" : "/login"} replace />} />
        </Routes>
      </HashRouter>
    </Auth.Provider>
  );
}
