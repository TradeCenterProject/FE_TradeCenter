interface ComboBoxProps {
  options: string[];
}

const ComboBox = ({ options }: ComboBoxProps) => {
  return (
    <select className="rounded-[3px] border border-borderColor bg-gray-100 py-[2.5px] pl-1 pr-3 text-xs text-gray-700 outline-none">
      {options?.map((text, i) => (
        <option key={i}>{text}</option>
      ))}
    </select>
  );
};

export default ComboBox;
