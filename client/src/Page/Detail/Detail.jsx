import React, { useEffect, useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";

function Detail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const renderProduct = () => {
    axios
      .get(`http://localhost:3000/api/v1/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    renderProduct();
  }, []);
  return (
    <div>
      <Header />
      <div className="detail">
        <div className="detail-image">
          <img src={product.img} />
        </div>
        <div className="combo">
          <h1> {product.name}</h1>
          <p>{product.title}</p>
          <hr />

          <div className="input-number">
            <button>Thêm vào giỏ ({product.price}đ)</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
