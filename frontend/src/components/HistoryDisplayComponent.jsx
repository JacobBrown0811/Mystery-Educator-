function HistoryEvent({ data }) {
  if (!data) {
    return <p>Loading fact...</p>;
  }

  return (
    <div className="history">
      <h2>
        Year: {data.year} Month: {data.month} Day: {data.day}
      </h2>
      <p>{data.fact}</p>
    </div>
  );
}

export default HistoryEvent;
