import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Products from './Pages/Products';
import SignUp from '../src/Components/Signup';
import Navbar from './Pages/Navbar'
import Login from './Components/Login';


function App() {
  const products = [
    {
      id: 1,
      category: "Laptops",
      name: "HP Notebook",
      price: 999,
      available: 6,
      rating: 5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
    },
    {
      id: 2,
      category: "Laptops",
      name: "HP Envy",
      price: 1099,
      available: 7,
      rating: 4.5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp",
    },
    {
      id: 3,
      category: "Laptops",
      name: "Toshiba B77",
      price: 1299,
      available: 5,
      rating: 4.5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp",
    },
    {
      id: 4,
      category: "Laptops",
      name: "HP Notebook",
      price: 999,
      available: 6,
      rating: 5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
    },
    {
      id: 5,
      category: "Laptops",
      name: "HP Notebook",
      price: 999,
      available: 6,
      rating: 5,
      image: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp",
    },
    {
      id: 6,
      category: "Mobile",
      name: "Samsung J7",
      price: 999,
      available: 6,
      rating: 5,
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-492654-sm-s921bzycins-thumb-539572840?imwidth=480",
    },
    {
      id: 7,
      category: "Mobile",
      name: "Redmi",
      price: 999,
      available: 6,
      rating: 5,
      image: "https://th.bing.com/th/id/OIP.Ndw5H3TfY7RVXduTCd4r1AHaHa?rs=1&pid=ImgDetMain",
    
    },
    {
      id: 8,
      category: "Mobile",
      name: "Realme",
      price: 999,
      available: 6,
      rating: 5,
      image: "https://th.bing.com/th/id/OIP.Anhsv_qmvsZBxJvylVbctAHaHx?rs=1&pid=ImgDetMain",
    },
    {
      id: 9,
      category: "Mobile",
      name: "Iphone",
      price: 999,
      available: 6,
      rating: 5,
      image: "https://th.bing.com/th/id/OIP.joMge5QtSa2uW-6PeanhCwHaJU?rs=1&pid=ImgDetMain",
    },
    {
      id: 10,
      category: "Mobile",
      name: "Nokia",
      price: 999,
      available: 6,
      rating: 5,
      image: "https://i.ytimg.com/vi/MlZGm1u8tg8/maxresdefault.jpg",
    },
  ];
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetails products={products} />} />
        </Routes>
       </div>
    </Router>
  );
}

export default App;
