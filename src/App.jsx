import { useMemo, useState } from 'react';
import { roleDashboards } from './data/roleDashboards.js';
import { events, financialRecords, grades, people, schedule } from './data/sampleData.js';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import PrincipalDashboard from './pages/PrincipalDashboard.jsx';
import AcademicStaffDashboard from './pages/AcademicStaffDashboard.jsx';
import FinanceDashboard from './pages/FinanceDashboard.jsx';

const dashboardComponents = {
  student: StudentDashboard,
  principal: PrincipalDashboard,
  academic: AcademicStaffDashboard,
  finance: FinanceDashboard,
};

function App() {
  const [activeRole, setActiveRole] = useState('student');
  const activeDashboard = roleDashboards.find((role) => role.id === activeRole);
  const ActiveDashboard = dashboardComponents[activeRole];

  const appData = useMemo(
    () => ({
      events,
      financialRecords,
      grades,
      people,
      schedule,
    }),
    [],
  );

  return (
    <DashboardLayout
      activeDashboard={activeDashboard}
      activeRole={activeRole}
      roles={roleDashboards}
      onRoleChange={setActiveRole}
    >
      <ActiveDashboard data={appData} />
    </DashboardLayout>
  );
}

export default App;
