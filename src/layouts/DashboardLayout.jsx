function DashboardLayout({ activeDashboard, activeRole, children, roles, onRoleChange }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">SN</span>
          <div>
            <strong>SchoolNet</strong>
            <span>Management System</span>
          </div>
        </div>

        <nav className="role-nav" aria-label="Role dashboards">
          {roles.map((role) => (
            <button
              className={role.id === activeRole ? 'active' : ''}
              key={role.id}
              onClick={() => onRoleChange(role.id)}
              type="button"
            >
              {role.title}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <div>
            <p className="eyebrow">MVP dashboard</p>
            <h1>{activeDashboard.title}</h1>
            <p>{activeDashboard.subtitle}</p>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
