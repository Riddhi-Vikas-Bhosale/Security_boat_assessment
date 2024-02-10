import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [purchased, setPurchased] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (products && products.length > 0) {
      const selectedProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(selectedProduct);
    }
  }, [id, products]);

  const handleBuyNow = () => {
    if (phoneNumber.trim() === "") {
      alert("Please enter your phone number.");
      return;
    }
   
    setPurchased(true);
    setConfirmationMessage("Thank you for your purchase!");
    setStatus("Purchased");
  };

  const handleStatusClick = () => {
   
    alert(`Status of Product: ${status}`);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          
          <img
            src={product?.image} 
            alt={product?.name}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
       
          <h2 className="mb-4">{product?.name}</h2>
          <p className="mb-3">Category: {product?.category}</p>
          <p className="mb-3">Price: ${product?.price}</p>
          <p className="mb-3">Available: {product?.available}</p>
          {!purchased && (
            <div>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          )}
          {purchased && (
            <div>
              <p>{confirmationMessage}</p>
              <button className="btn btn-success" onClick={handleStatusClick}>
                Status of Product
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
