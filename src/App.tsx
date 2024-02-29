import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from '@config';

import { Header } from '@components';
import { FavoritesProvider } from '@context';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Header />
        <div className="flex min-h-screen flex-col items-center bg-gray-200 p-4">
          <AppRoutes />
        </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
