import DataTable from '../components/DataTable.jsx';
import MetricCard from '../components/MetricCard.jsx';
import Panel from '../components/Panel.jsx';
import { attendance } from '../data/sampleData.js';

function AcademicStaffDashboard({ data }) {
  const topStudents = attendance.filter((student) => student.grade >= 92);

  return (
    <div className="dashboard-grid">
      <div className="metrics-row">
        <MetricCard label="Grades entered" value={data.grades.length} detail="Subjects updated" />
        <MetricCard label="Top students" value={topStudents.length} detail="Grade 92% or higher" />
        <MetricCard label="Scheduled events" value={data.events.length} detail="Exams, holidays, and trips" />
      </div>

      <Panel title="Grade and Absence Tracking" action="Input Grades">
        <DataTable
          columns={[
            { key: 'student', label: 'Student' },
            { key: 'absences', label: 'Absences' },
            { key: 'grade', label: 'Current Grade', render: (row) => `${row.grade}%` },
            {
              key: 'status',
              label: 'Status',
              render: (row) => (row.grade >= 92 ? 'Top performer' : row.absences > 3 ? 'Needs follow-up' : 'On track'),
            },
          ]}
          rows={attendance}
        />
      </Panel>

      <Panel title="Academic Calendar" action="Schedule Event">
        <div className="event-list">
          {data.events.map((event) => (
            <article key={`${event.type}-${event.date}`}>
              <span>{event.type}</span>
              <strong>{event.title}</strong>
              <time>{event.date}</time>
            </article>
          ))}
        </div>
      </Panel>
    </div>
  );
}

export default AcademicStaffDashboard;
