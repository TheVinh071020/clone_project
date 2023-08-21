import React, { useEffect, useState } from "react";
import "./Shop.css";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

function Shop() {
  const [product, setProduct] = useState([]);
  const [cartId, setCartId] = useState("");
  // const { id } = useParams();
  let token = localStorage.getItem("token");

  let baseURL = "http://localhost:3000/api/v1";
  useEffect(() => {
    fetch(baseURL + "/products", {
      headers: {
        Authorization: `Bearer${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data.products))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (productId) => {
    console.log(productId);
    // Gọi API endpoint để thêm sản phẩm vào giỏ hàng
    // Nếu sản phẩm đã tồn tại trong giỏ hàng thì tiến hành tăng só lượng
    // Nếu sản phẩm khôngh tồn tại thì tiến hành thêm vào giỏ hàng
    axios
      .post("http://localhost:3000/api/v1/add-to-cart", {
        product_id: productId, // Thay userId bằng ID của người dùng đang đăng nhập
        cart_id: cartId,
        quantity: 1, // Số lượng sản phẩm, có thể thay đổi theo người dùng chọn
      })
      .then((response) => {
        // Xử lý phản hồi từ server sau khi thêm vào giỏ hàng
        console.log(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
      });
  };

  return (
    <div>
      <Header />
      <h1 className="titles">
        <b>List food</b>
      </h1>
      <div className="container ">
        {product.map((product, index) => (
          <Card className="card">
            <Link
              to={`/detail/${product.product_id}`}
              key={product.product_id}
              style={{
                color: "black",
                textDecoration: "none",
              }}
            >
              <Card.Img variant="top" src={product.img} />
              <Card.Body className="dodai">
                <div className="text">
                  <Card.Title>{product.name} </Card.Title>
                </div>
                <div className="text1">
                  <Card.Title>{product.price}.000đ</Card.Title>
                </div>
              </Card.Body>
              <div className="title">{product.title}</div>
            </Link>

            <Button
              onClick={() => addToCart(product.product_id)}
              className="btnbuy"
              variant="danger"
            >
              Mua ngay
            </Button>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shop;
