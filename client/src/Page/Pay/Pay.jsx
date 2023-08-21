import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Pay.css";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
function Pay() {
  return (
    <div>
      <Header />
      <div>
        <div className="cart-tongg">
          <div className="carttt">
            <div className="cart">
              <h1>
                <b>NHẬN TẠI NHÀ HÀNG:</b>
              </h1>
              <div>
                <b>KFC MANOR HÀ NỘI</b>
              </div>
              <div>Tòa nhà The Manor, Mễ Trì, P.Mỹ Đình 1, TP Hà Nội</div>
            </div>
            <div className="cart">
              <h2>
                <b>THÊM THÔNG TIN CHI TIẾT:</b>
              </h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Họ và Tên"
                    name="fullName"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Số Điện thoại" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>

                <Button className="btnbuy" variant="danger" type="submit">
                  Đặt hàng
                </Button>
              </Form>
            </div>
            <div className="cart">
              <h1>
                <b>PHƯƠNG THỨC THANH TOÁN</b>
              </h1>
              <div className="pays">
                <div className="pay">
                  Thanh toán bằng ATM/Visa/Master và Ví ZaloPay (Miễn phí giao
                  hàng)
                </div>
                <img
                  src="https://static.kfcvietnam.com.vn/images/web/ZaloPay_icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="cart1 ">
            <div className="cart22 centered">
              <h4>Tóm tắt đơn hàng</h4>
              <hr />
              <div className="textline">
                <h3>
                  <b>Đồ ăn</b>
                </h3>
                <hr />

                <div className="mony">
                  <span>Tổng đơn hàng</span>
                  <span>80.000₫</span>
                </div>

                <div className="mony1">
                  <span>Tổng thanh toán</span>
                  <span>80.000₫</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pay;
