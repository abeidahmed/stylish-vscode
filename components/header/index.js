import { Icon } from '../icon';

export function Header() {
  return (
    <header className="flex items-center h-16">
      <div className="flex items-center ml-auto space-x-6">
        <a
          href="https://github.com/abeidahmed/stylish-vscode"
          target="_blank"
          rel="external nofollow noreferrer noopener"
          className="text-gray-100 transition duration-150 ease-in-out hover:text-teal-400"
        >
          <span className="sr-only">Github repository</span>
          <i>
            <Icon icon="github" className="w-6 h-6" standalone="true" />
          </i>
        </a>
        <a
          href="https://twitter.com/intent/tweet?text=Style%20your%20vscode%20the%20way%20you%20like&url=https%3A%2F%2Fsuper-rentals.example.com&hashtags=vscode%2Cvscodethemes%2Cstyles&via=iamhawaabi"
          target="_blank"
          rel="external nofollow noreferrer noopener"
          className="text-gray-100 transition duration-150 ease-in-out hover:text-teal-400"
        >
          <span className="sr-only">Share this website on twitter</span>
          <i>
            <Icon icon="twitter" className="w-6 h-6" standalone="true" />
          </i>
        </a>
      </div>
    </header>
  );
}
