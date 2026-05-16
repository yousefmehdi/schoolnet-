import DataTable from '../components/DataTable.jsx';
import MetricCard from '../components/MetricCard.jsx';
import Panel from '../components/Panel.jsx';

function PrincipalDashboard({ data }) {
  const paidTotal = data.financialRecords
    .filter((record) => record.status === 'Paid')
    .reduce((sum, record) => sum + record.amount, 0);

  return (
    <div className="dashboard-grid">
      <div className="metrics-row">
        <MetricCard label="Students" value={data.people.students} detail={`${data.people.newAdmissions} new admissions`} />
        <MetricCard label="Teachers" value={data.people.teachers} detail="Active academic staff" />
        <MetricCard label="Staff" value={data.people.staff} detail="Administrative and support" />
        <MetricCard label="Collected" value={`$${paidTotal}`} detail="Visible financial summary" />
      </div>

      <Panel title="Administrative Control" action="Add Record">
        <div className="action-grid">
          <button type="button">Manage Students</button>
          <button type="button">Manage Teachers</button>
          <button type="button">Manage Staff</button>
          <button type="button">Academic Operations</button>
        </div>
      </Panel>

      <Panel title="School-Wide Reports">
        <DataTable
          columns={[
            { key: 'id', label: 'Receipt' },
            { key: 'student', label: 'Student' },
            { key: 'type', label: 'Type' },
            { key: 'amount', label: 'Amount', render: (row) => `$${row.amount}` },
            { key: 'status', label: 'Status' },
          ]}
          rows={data.financialRecords}
        />
      </Panel>
    </div>
  );
}

export default PrincipalDashboard;
