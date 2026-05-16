import DataTable from '../components/DataTable.jsx';
import MetricCard from '../components/MetricCard.jsx';
import Panel from '../components/Panel.jsx';

function FinanceDashboard({ data }) {
  const collected = data.financialRecords
    .filter((record) => record.status === 'Paid')
    .reduce((sum, record) => sum + record.amount, 0);
  const due = data.financialRecords
    .filter((record) => record.status === 'Due')
    .reduce((sum, record) => sum + record.amount, 0);

  return (
    <div className="dashboard-grid">
      <div className="metrics-row">
        <MetricCard label="Collected" value={`$${collected}`} detail="Paid transactions" />
        <MetricCard label="Outstanding" value={`$${due}`} detail="Pending balances" />
        <MetricCard label="Receipts" value={data.financialRecords.length} detail="Payment history" />
      </div>

      <Panel title="Record Payment" action="Create Receipt">
        <form className="payment-form">
          <label>
            Student
            <input placeholder="Student name" />
          </label>
          <label>
            Payment Type
            <select defaultValue="Tuition">
              <option>Tuition</option>
              <option>Transport</option>
              <option>Activity</option>
            </select>
          </label>
          <label>
            Amount
            <input placeholder="0.00" type="number" />
          </label>
          <button type="button">Save Payment</button>
        </form>
      </Panel>

      <Panel title="Financial Records">
        <DataTable
          columns={[
            { key: 'id', label: 'Receipt' },
            { key: 'student', label: 'Student' },
            { key: 'type', label: 'Type' },
            { key: 'amount', label: 'Amount', render: (row) => `$${row.amount}` },
            { key: 'status', label: 'Status' },
            { key: 'date', label: 'Date' },
          ]}
          rows={data.financialRecords}
        />
      </Panel>
    </div>
  );
}

export default FinanceDashboard;
