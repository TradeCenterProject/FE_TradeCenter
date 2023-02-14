interface FilterProps {
  description: string;
  options: string[];
}

const Filter = ({ description, options }: FilterProps) => {
  return (
    <select className="w-20 bg-transparent text-sm text-gray-500 outline-none">
      <option selected disabled hidden value="">
        {description}
      </option>
      {options?.map((text, i) => (
        <option key={i} value={text}>
          {text}
        </option>
      ))}
    </select>
  );
};

export default Filter;
