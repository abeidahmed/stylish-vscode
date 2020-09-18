import { Icon } from '../icon';

export function Button({ active, title, children, ...props }) {
  return (
    <button
      aria-label={title}
      className={`${
        active === title ? 'bg-gray-800' : 'bg-gray-900'
      } flex items-center justify-between w-full text-left px-3 py-2.5 sm:py-2 text-gray-200 leading-5 focus:outline-none focus:bg-gray-800 hover:bg-gray-800 border-t border-gray-800 first:border-t-0 transition duration-150 ease-in-out`}
      {...props}
    >
      <span className="pr-2 truncate">{children}</span>
      {active === title && (
        <Icon icon="code" className="flex-shrink-0 w-5 h-5 text-teal-400" />
      )}
    </button>
  );
}
