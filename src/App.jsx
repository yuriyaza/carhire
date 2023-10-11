import { Routes, Route } from 'react-router-dom';
import { Home, Catalog, Favorites } from 'pages';

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
};
