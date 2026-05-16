function Panel({ title, action, children }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <h2>{title}</h2>
        {action ? <button type="button">{action}</button> : null}
      </div>
      {children}
    </section>
  );
}

export default Panel;
