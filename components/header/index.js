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
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fstylish-vscode.vercel.app%2F&text=Style%20your%20vscode%20like%20the%20way%20you%20want.%20Pick%20themes%20and%20fonts%20for%20your%20coding%20language%2C%20and%20get%20started.%20By%20%40iamhawaabi%20%23vscode"
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
