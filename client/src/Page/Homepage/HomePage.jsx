import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import ListProduct from "../ListProduct/ListProduct";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import axios from "axios";


function HomePage() {
  const token = JSON.parse(localStorage.getItem("token")) || {};

  console.log("token", token);

  const createCart = () => {
    if (token) {
      axios
        .get(`http://localhost:3001/api/v1/carts/${token.users_id}`)
        .then((res) => {
          console.log("res.data.users_id", res.data.users_id);
          if (res.data.users_id !== token.users_id) {
            axios
              .post("http://localhost:3001/api/v1/cart", {
                users_id: token?.users_id,
              })
              .then((res) => console.log(res.data))
              .catch((err) => console.log(err));
          }
        });
    }
  };
  useEffect(() => {
    createCart();
  }, []);
  return (
    <div>
      <Header />
      <div className="carousel">
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="	https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/Homde-phase2.webp?v=gXdqeg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/DuaSoRi.webp?v=gXdqeg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://static.kfcvietnam.com.vn/images/content/home/carousel/lg/tnag.webp?v=gXdqeg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <ListProduct />
      <Footer />
    </div>
  );
}

export default HomePage;
