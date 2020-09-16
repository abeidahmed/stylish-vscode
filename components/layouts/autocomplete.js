export function Autocomplete({ isActive, children }) {
  return (
    <div
      className={`${
        isActive ? 'block' : 'hidden'
      } absolute w-full mt-2 bg-gray-900 rounded-md shadow-teal-lg`}
    >
      <div className="my-2 overflow-y-auto max-h-56">{children}</div>
    </div>
  );
}
