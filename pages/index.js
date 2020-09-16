import { Header } from '../components/header';
import { Hero } from '../components/hero';
import { Icon } from '../components/icon';

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased text-gray-300 bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Header />
        <main style={{ minHeight: 'calc(100vh - 64px)' }}>
          <div>
            <Hero />
            <div className="w-full max-w-3xl p-6 mx-auto mt-12 bg-gray-800 rounded-md shadow-lg">
              <div className="relative">
                <div className="relative flex items-center transition duration-150 ease-in-out focus-within:text-teal-500">
                  <input
                    type="text"
                    placeholder="Night Owl"
                    className="block w-full px-10 text-gray-200 transition duration-150 ease-in-out bg-transparent border-gray-400 shadow form-input focus:shadow-none focus:border-teal-400"
                  />
                  <div className="absolute left-0 pl-2.5">
                    <Icon icon="palette" className="w-6 h-6" />
                  </div>
                  <div className="absolute right-0 pr-2.5">
                    <Icon
                      icon="chevron-down"
                      className="w-6 h-6 text-gray-500"
                    />
                  </div>
                </div>
                <div className="absolute w-full mt-2 bg-gray-900 rounded-md shadow-teal-lg">
                  <div className="my-2">
                    <button className="block w-full text-left px-3 py-2.5 sm:py-2 text-gray-200 leading-5 focus:outline-none focus:bg-gray-800 hover:bg-gray-800 border-t border-gray-800 first:border-t-0">
                      Night Owl
                    </button>
                    <button className="block w-full text-left px-3 py-2.5 sm:py-2 text-gray-200 leading-5 focus:outline-none focus:bg-gray-800 hover:bg-gray-800 border-t border-gray-800">
                      Panda Theme
                    </button>
                    <button className="block w-full text-left px-3 py-2.5 sm:py-2 text-gray-200 leading-5 focus:outline-none focus:bg-gray-800 hover:bg-gray-800 border-t border-gray-800">
                      Material Theme Palenight
                    </button>
                    <button className="block w-full text-left px-3 py-2.5 sm:py-2 text-gray-200 leading-5 focus:outline-none focus:bg-gray-800 hover:bg-gray-800 border-t border-gray-800">
                      Gruvbox
                    </button>
                    <button className="block w-full text-left px-3 py-2.5 sm:py-2 text-gray-200 leading-5 focus:outline-none focus:bg-gray-800 hover:bg-gray-800 border-t border-gray-800">
                      Ayu Mirage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
