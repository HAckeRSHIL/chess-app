export default function Cell({ x, y, children }) {
  const backgroundColor = (x + y) % 2 === 0 ? "#e8edf9" : "#b7c0d8";
  return (
    <div className="chess-cell full-m-full" style={{ backgroundColor }}>
      <div className="flex flex-center full-m-full">
        <div style={{ padding: 6 }}> {children}</div>
      </div>
    </div>
  );
}
