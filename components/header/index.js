import { Icon } from '../icon';

export function Header() {
  return (
    <header className="flex items-center h-16">
      <div className="flex items-center ml-auto space-x-6">
        <a
          href="#"
          className="text-gray-100 transition duration-150 ease-in-out hover:text-teal-400"
        >
          <Icon icon="github" className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-gray-100 transition duration-150 ease-in-out hover:text-teal-400"
        >
          <Icon icon="twitter" className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
}
