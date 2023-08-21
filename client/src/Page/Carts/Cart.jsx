import React from "react";
import { InputNumber } from "antd";
import { Link, NavLink } from "react-router-dom";
import "./Cart.css";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

function Cart() {
  return (
    <div>
      <Header />
      <div>
        <h1 className="titles">Giỏ hàng của tôi</h1>
        <div className="cart-tongg">
          <div className="carttt">
            <div className="cart1">
              <img
                className="image-cart"
                src="https://static.kfcvietnam.com.vn/images/items/lg/D1-new.jpg?v=gXdqeg"
              />
              <div className="cart-combo">
                <p style={{ fontWeight: "700" }}> Combo Dứa Sơ Ri A</p>
                <p className="combo-detail"> Combo Dứa Sơ Ri A</p>
                <div className="cart-i">
                  <i className="fa-solid fa-trash-can"></i>
                  <InputNumber
                    className="cart-inputnumber"
                    min={1}
                    max={10000}
                  />
                </div>
                <p style={{ fontWeight: "700" }}>80.000₫</p>
              </div>
            </div>
            <div className="cart1">
              <img
                className="image-cart"
                src="https://static.kfcvietnam.com.vn/images/items/lg/D1-new.jpg?v=gXdqeg"
              />
              <div className="cart-combo">
                <p style={{ fontWeight: "700" }}> Combo Dứa Sơ Ri A</p>
                <p className="combo-detail"> Combo Dứa Sơ Ri A </p>
                <div className="cart-i">
                  <i className="fa-solid fa-trash-can"></i>
                  <InputNumber
                    className="cart-inputnumber"
                    min={1}
                    max={10000}
                  />
                </div>
                <p style={{ fontWeight: "700" }}>80.000₫</p>
              </div>
            </div>
            <div className="cart1">
              <img
                className="image-cart"
                src="https://static.kfcvietnam.com.vn/images/items/lg/D1-new.jpg?v=gXdqeg"
              />
              <div className="cart-combo">
                <p style={{ fontWeight: "700" }}> Combo Dứa Sơ Ri A</p>
                <p className="combo-detail"> Combo Dứa Sơ Ri A</p>
                <div className="cart-i">
                  <i className="fa-solid fa-trash-can"></i>
                  <InputNumber
                    className="cart-inputnumber"
                    min={1}
                    max={10000}
                  />
                </div>
                <p style={{ fontWeight: "700" }}>80.000₫</p>
              </div>
            </div>
          </div>
          <div className="cart2">
            <h4>SL mon an</h4>
            <hr />
            <div className="textline">
              <h3>
                <b>Bạn có Mã giảm giá?</b>
              </h3>
              <div className="input-container">
                <input
                  placeholder="Mã giảm giá"
                  className="input-field"
                  type="text"
                />
                <label htmlFor="input-field" className="input-label">
                  Mã giảm giá
                </label>
                <span className="input-highlight" />
                <button>Áp Dụng</button>
              </div>
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
            <hr />
            <NavLink style={{ textDecoration: "none" }} to="/pay">
              <button className="mony2">
                <span>Thanh Toán</span>
                <span>80.000₫</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
