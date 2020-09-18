export function Checkbox({ label, ...props }) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="text-teal-400 bg-gray-600 border-2 border-transparent form-checkbox focus:shadow-none focus:border-teal-400"
        {...props}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
}
