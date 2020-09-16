import { Icon } from '../icon';

export function NotFound({ text }) {
  return (
    <div className="flex items-center px-3 min-w-0 py-2.5 sm:py-2 justify-center space-x-3">
      <Icon icon="sad" className="flex-shrink-0 w-6 h-6 text-gray-500" />
      <p className="text-gray-200 truncate">{text}</p>
    </div>
  );
}
