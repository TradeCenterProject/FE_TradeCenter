import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

interface TableProps {
  checkable?: boolean;
  thead: string[];
  checkedIds?: Set<number>;
  setCheckedIds?: Dispatch<SetStateAction<Set<number>>>;
}

const mockArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Table = ({ checkable, thead, checkedIds, setCheckedIds }: TableProps) => {
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const onToggleCheckAll = () => {
    if (!setCheckedIds) return;
    const newSet = new Set<number>(mockArray);

    if (isCheckedAll) newSet.clear();

    setCheckedIds(newSet);
    setIsCheckedAll((prev) => !prev);
  };

  const onToggleCheck = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!checkedIds || !setCheckedIds) return;
    const id = Number(target.id);
    const isChecked = checkedIds.has(id);
    const newSet = new Set<number>(checkedIds);

    isChecked ? newSet.delete(id) : newSet.add(id);
    newSet.size === mockArray.length
      ? setIsCheckedAll(true)
      : setIsCheckedAll(false);
    setCheckedIds(newSet);
  };

  return (
    <div className="overflow-hidden rounded-sm">
      <table className="w-full rounded-sm text-center text-sm">
        <thead className="bg-primary text-white">
          <tr className="[&>th]:border [&>th]:border-borderColor [&>th]:py-1 [&>th]:font-semibold">
            {checkable && (
              <th className="w-7">
                <input
                  type="checkbox"
                  checked={isCheckedAll}
                  onChange={onToggleCheckAll}
                />
              </th>
            )}
            <th>No.</th>
            {thead.map((text, i) => (
              <th key={i}>{text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockArray.map((_, i) => (
            <tr
              key={i}
              className="[&>td]:border [&>td]:border-borderColor [&>td]:py-1 [&:last-child>td]:rounded-lg"
            >
              {checkable && (
                <td>
                  <input
                    id={i.toString()}
                    type="checkbox"
                    checked={checkedIds?.has(i)}
                    onChange={onToggleCheck}
                  />
                </td>
              )}
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
