import { Routes, Route } from 'react-router-dom';
import { Home, Catalog, Favorites } from 'pages';
import { Layout } from 'components';

export const App = () => {
  return (
    <>
      <header></header>
      <main>
        <section>
          <div>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='catalog' element={<Catalog />} />
                <Route path='favorites' element={<Favorites />} />
              </Route>
              <Route path='*' element={<Home />} />
            </Routes>
          </div>
        </section>
      </main>
    </>
  );
};
