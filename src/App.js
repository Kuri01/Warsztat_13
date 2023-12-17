import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import { ApiProvider } from './apiContext';
import Header from './components/Header/Header';
import Cart from './pages/Cart/Cart';
import SingleProduct from './pages/SingleProduct/SingleProduct';

function App() {
    return (
        <ApiProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path='/' element={<MainPage />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='product/:slug' element={<SingleProduct />} />
                </Routes>
            </BrowserRouter>
        </ApiProvider>
    );
}

export default App;
