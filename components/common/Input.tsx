const Input = ({ ...rest }) => {
  return (
    <input
      className="rounded-lg bg-slate-50 py-3 px-4 text-sm outline-none placeholder:text-gray-400"
      {...rest}
    />
  );
};

export default Input;
