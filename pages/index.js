import Store from '../store';
import { NextHead } from '../components/head';
import { Header } from '../components/header';
import { Hero } from '../components/hero';
import CodeDisplay from '../lib/code-display';
import FontSearch from '../lib/font-search';
import LangSearch from '../lib/lang-search';
import ThemeSearch from '../lib/theme-search';

export default function Home() {
  return (
    <Store>
      <NextHead />
      <div className="min-h-screen font-sans antialiased text-gray-300 bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Header />
          <main style={{ minHeight: 'calc(100vh - 64px)' }}>
            <div>
              <Hero />
              <div className="flex flex-col w-full max-w-3xl p-6 mx-auto mt-12 bg-gray-800 rounded-md shadow-lg">
                <div className="flex-shrink-0 space-y-3 md:flex md:items-center md:space-y-0 md:space-x-3">
                  <ThemeSearch />
                  <FontSearch />
                  <LangSearch />
                </div>
                <div className="flex-1 mt-6 overflow-hidden rounded-md">
                  <CodeDisplay />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Store>
  );
}
