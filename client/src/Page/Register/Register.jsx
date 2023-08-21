import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

function Register() {
  const [newUsers, setNewUsers] = useState({
    name: "",
    email: "",
    password: "",
    role: 0,
  });
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUsers((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  console.log(newUsers);

  const handleRegister = (e) => {
    e.preventDefault();

    const errors = {};

    if (!newUsers.name) {
      errors.name = "Họ và tên không được để trống";
    }

    if (!newUsers.email) {
      errors.email = "Email không được để trống";
    } else if (!/\S+@\S+\.\S+/.test(newUsers.email)) {
      errors.email = "Email không hợp lệ";
    }

    if (!newUsers.password) {
      errors.password = "Mật khẩu không được để trống";
    } else if (newUsers.password.length < 6) {
      errors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Thực hiện gửi dữ liệu
      console.log(newUsers);
      axios
        .post(`http://localhost:3000/api/v1/auth/signup`, newUsers)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Đăng ký tài khoản thành công",
              showConfirmButton: false,
              timer: 2000,
            });
            navigate("/login");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Đăng kí thất bại",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Vui lòng nhập đầy đủ thông tin",
          });
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="img-login1">
        <div>
          <img
            className="anh"
            src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=gOXpk3"
            alt=""
          />
        </div>
        <div className="form-login1">
          <h1>Tạo tài khoản</h1>
          <div>
            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  // value={name}
                  placeholder="FullName"
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <span className="error-message" style={{ color: "red" }}>
                    {formErrors.name}
                  </span>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  // value={email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
                {formErrors.email && (
                  <span className="error-message" style={{ color: "red" }}>
                    {formErrors.email}
                  </span>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  // value={password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {formErrors.password && (
                  <span className="error-message" style={{ color: "red" }}>
                    {formErrors.password}
                  </span>
                )}
              </Form.Group>
              <Button className="btn-signin" variant="primary" type="submit">
                Tạo Tài Khoản
              </Button>
            </Form>
          </div>
          <div className="buttonn">
            <h4 className="btn-h4">
              <b>Hoặc tiếp tục với</b>
            </h4>
            <button className="btn-8">
              <span>
                <i className="fa-brands fa-facebook-f"></i> Đăng nhập bằng
                facebook
              </span>
            </button>
            <button className="btn-9">
              <span>
                <i className="fa-brands fa-apple"></i> Đăng nhập bằng apple
              </span>
            </button>
            <button className="btn-10">
              <span>
                <i className="fa-brands fa-google"></i> Đăng nhập bằng google
              </span>
            </button>
            <p className="add">
              Bạn đã có tài khoản?
              <NavLink to="/login">
                <b>
                  <u>Đăng nhập</u>
                </b>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
