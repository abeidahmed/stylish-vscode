import { Icon } from '../icon';

export function Field({ icon, label, ...props }) {
  return (
    <div className="relative flex items-center min-w-0 text-gray-500 transition duration-150 ease-in-out focus-within:text-teal-500">
      <span
        className="absolute left-0 pl-10 text-gray-200 truncate pointer-events-none"
        style={{ right: 40 }}
      >
        {label}
      </span>
      <input
        type="text"
        className="block w-full px-10 text-gray-200 transition duration-150 ease-in-out bg-transparent border-gray-400 shadow form-input focus:shadow-none focus:border-teal-400"
        spellCheck="false"
        autoComplete="off"
        {...props}
      />
      <div className="absolute left-0 pl-2.5 pointer-events-none">
        <Icon icon={icon} className="w-6 h-6" aria-hidden="true" />
      </div>
      <div className="absolute right-0 pr-2.5 pointer-events-none">
        <Icon
          icon="chevron-down"
          className="w-6 h-6 text-gray-500"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
