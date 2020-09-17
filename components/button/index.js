export function Button({ children, ...props }) {
  return (
    <button
      aria-label={children}
      className="block w-full text-left px-3 py-2.5 sm:py-2 text-gray-200 leading-5 focus:outline-none focus:bg-gray-800 hover:bg-gray-800 border-t border-gray-800 first:border-t-0 transition duration-150 ease-in-out"
      {...props}
    >
      {children}
    </button>
  );
}
