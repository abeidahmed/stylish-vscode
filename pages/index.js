import { Header } from '../components/header';
import { Hero } from '../components/hero';
import ThemeSearch from '../lib/theme-search';

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased text-gray-300 bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Header />
        <main style={{ minHeight: 'calc(100vh - 64px)' }}>
          <div>
            <Hero />
            <div className="w-full max-w-3xl p-6 mx-auto mt-12 bg-gray-800 rounded-md shadow-lg">
              <div>
                <ThemeSearch />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
