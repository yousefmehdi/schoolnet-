import DataTable from '../components/DataTable.jsx';
import MetricCard from '../components/MetricCard.jsx';
import Panel from '../components/Panel.jsx';

function calculateAverage(grades) {
  const totals = grades.map((item) => Math.round((item.first + item.second + item.final) / 3));
  return Math.round(totals.reduce((sum, grade) => sum + grade, 0) / totals.length);
}

function StudentDashboard({ data }) {
  const average = calculateAverage(data.grades);

  return (
    <div className="dashboard-grid">
      <div className="metrics-row">
        <MetricCard label="Semester average" value={`${average}%`} detail="Calculated from all subjects" />
        <MetricCard label="Upcoming exams" value="1" detail="Next 7 days" />
        <MetricCard label="Announcements" value="4" detail="Events and notices" />
      </div>

      <Panel title="Class Schedule">
        <DataTable
          columns={[
            { key: 'day', label: 'Day' },
            { key: 'time', label: 'Time' },
            { key: 'subject', label: 'Subject' },
            { key: 'teacher', label: 'Teacher' },
            { key: 'room', label: 'Room' },
          ]}
          rows={data.schedule}
        />
      </Panel>

      <Panel title="Exam Results">
        <DataTable
          columns={[
            { key: 'subject', label: 'Subject' },
            { key: 'first', label: 'First' },
            { key: 'second', label: 'Second' },
            { key: 'final', label: 'Final' },
            {
              key: 'average',
              label: 'Average',
              render: (row) => `${Math.round((row.first + row.second + row.final) / 3)}%`,
            },
          ]}
          rows={data.grades}
        />
      </Panel>

      <Panel title="Calendar">
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

export default StudentDashboard;
