import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const filteredProducts =
  selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

    const handleProductClick = (product) => {
      setSelectedProduct(product);
    };
  
    const handleAddToCart = (product) => {
     
      console.log("Added to cart:", product);
    };
  

    return (
      <MDBContainer fluid className="my-5">
        <div className="mb-3">
          <label htmlFor="categoryFilter" className="form-label">
            Filter by Category:
          </label>
          <select
            id="categoryFilter"
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Laptops">Laptops</option>
            <option value="Mobile">Mobile</option>
          
          </select>
        </div>
        <MDBRow>
          {filteredProducts.map((product) => (
            <MDBCol key={product.id} md="12" lg="4" className="mb-4 mb-lg-0">
              <Link to={`/Products/${product.id}`}>
                <MDBCard>
                  <div
                    className="d-flex justify-content-between p-3"
                    onClick={() => handleProductClick(product)}
                    style={{ cursor: "pointer" }}
                  >
                    <p className="lead mb-0">Today's Combo Offer</p>
                    <div
                      className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <p className="text-white mb-0 small">
                        x{product.available}
                      </p>
                    </div>
                  </div>
                  <div style={{ height: "350px", overflow: "hidden" }}>
                    <MDBCardImage
                      src={product.image}
                      position="top"
                      alt={product.name}
                      className="w-100"
                    />
                  </div>
                  <MDBCardBody>
                    <div className="d-flex justify-content-between">
                      <p className="small">
                        <a href="#!" className="text-muted">
                          {product.category}
                        </a>
                      </p>
                      <p className="small text-danger">
                        <s>${product.price + 100}</s>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{product.name}</h5>
                      <h5 className="text-dark mb-0">${product.price}</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <p className="text-muted mb-0">
                        Available:{" "}
                        <span className="fw-bold">{product.available}</span>
                      </p>
                      <div className="ms-auto text-warning">
                        {[...Array(5)].map((_, index) => (
                          <MDBIcon
                            key={index}
                            fas
                            icon={
                              index < product.rating ? "star" : "star-half-alt"
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </Link>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    );
    }
  
  export default Products;