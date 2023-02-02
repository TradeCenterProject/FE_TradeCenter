interface TableProps {
  thead: string[];
}

const Table = ({ thead }: TableProps) => {
  return (
    <div className="overflow-hidden rounded-sm">
      <table className="w-full rounded-sm text-center text-sm">
        <thead className="bg-primary text-white">
          <tr className="[&>th]:border [&>th]:border-borderColor [&>th]:py-1 [&>th]:font-semibold">
            <th>No.</th>
            {thead.map((text, i) => (
              <th key={i}>{text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr
              key={i}
              className="[&>td]:border [&>td]:border-borderColor [&>td]:py-1 [&:last-child>td]:rounded-lg"
            >
              <td>10</td>
              <td>AABB110109105</td>
              <td>리슈아 손소독제</td>
              <td>리슈아</td>
              <td>1100 (의약외품)</td>
              <td>B10-10</td>
              <td>11,000</td>
              <td>100</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
