import React, { useState } from "react";
import "./PageAdmin.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import HomeUser from "../Users/HomeUser/HomeUser";
import Button from "react-bootstrap/esm/Button";
import UserAdmin from "../UserAdmin";
import ProductAdmin from "../ProductAdmin";
function PageAdmin() {
  const [isUserPageVisible, setUserPageVisible] = useState(true);
  const [isProductPageVisible, setProductPageVisible] = useState(false);

  const navigate = useNavigate();

  const showUserPage = () => {
    setUserPageVisible(true);
    setProductPageVisible(false);
  };

  const showProductPage = () => {
    setUserPageVisible(false);
    setProductPageVisible(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/login");
  };
  return (
    <div>
      <div className="container2">
        <div className="featare ">
          <p onClick={showUserPage}>
            <i class="fa-solid fa-user"></i>Quản lý user
          </p>
          <p onClick={showProductPage}>
            <i class="fa-solid fa-mobile-screen-button"></i>Quản lý sản phẩm
          </p>
        </div>
        <div className="display-group">
          <div className="headerr">
            <div className="kfc">
              <img
                src="https://kfcvn-static.cognizantorderserv.com/images/web/kfc-logo.svg?v=5.0"
                alt=""
              />
            </div>
            <div className="icon-avt">
              <div className="avt1">
                <div className="avt">
                  <i className="fa-solid fa-user"></i>
                  <p>Admin</p>
                </div>
                <div>
                  <Button
                    className="logout"
                    onClick={handleLogout}
                    variant="danger"
                  >
                    <i className="btnnn fa-solid fa-right-from-bracket"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="display">
            {isUserPageVisible && <UserAdmin />}
            {isProductPageVisible && <ProductAdmin />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageAdmin;
