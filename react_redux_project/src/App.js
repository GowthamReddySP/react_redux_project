
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path="/" exact element={<ProductListing/>} />
        <Route path="/product/:productID" exact element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
