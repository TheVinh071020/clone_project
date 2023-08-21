import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./ProductAdmin.css";

function ProductAdmin() {
  // Boostrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // Tạo state để lưu tất cả user
  const [product, setProduct] = useState([]);
  const listProduct = () => {
    axios
      .get(`http://localhost:3000/api/v1/products/`)
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ADD

  const [newProduct, setNewProduct] = useState({
    name: "",
    title: "",
    price: "",
    img: "",
  });
  // Lấy giá trị input
  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewProduct((input) => ({
      ...input,
      [name]: value,
    }));
    console.log(newProduct);
  };

  // SK click add
  const handleAddUser = (e) => {
    axios
      .post(`http://localhost:3000/api/v1/products/`, newProduct)
      .then((res) => {
        listProduct();
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // delete
  const handleDelete = (id) => {
    // console.log(id);
    axios
      .delete(`http://localhost:3000/api/v1/products/${id}`)
      .then((res) => {
        setProduct((prevUsers) =>
          prevUsers.filter((product) => product.product_id !== id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [editUser, setEditUser] = useState({
    product_id: null,
    name: "",
    title: "",
    price: "",
    img: "",
  });
  const updateProduct = (product) => {
    handleShow2();
    setEditUser({
      product_id: product.product_id,
      name: product.name,
      title: product.title,
      price: product.price,
      img: product.img,
    });
    console.log(product);
  };

  const handleUpdateUser = () => {
    axios
      .patch(
        `http://localhost:3000/api/v1/products/${editUser.product_id}`,
        editUser
      )
      .then((res) => {
        console.log(res.data);
        listProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    listProduct();
  }, []);
  return (
    <div>
      {/* Add */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body>
          <Form>
            <h1 className="titleee">Create Product</h1>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control
                onChange={handleInput}
                name="name"
                type="text"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                onChange={handleInput}
                name="title"
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                onChange={handleInput}
                name="price"
                type="text"
                placeholder="Price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                onChange={handleInput}
                name="img"
                type="text"
                placeholder="Image"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-success" onClick={handleAddUser}>
            Update
          </button>
        </Modal.Footer>
      </Modal>
      <div className="row mb-3">
        <h1 className="titleee">Admin Product</h1>
        <div className="btnnn">
          <button className="btn btn-success" onClick={handleShow}>
            Add Product
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col" colSpan={3}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product?.map((e, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{e.product_id}</td>
                <td>{e.name}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>
                  <img
                    src={e.img}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => updateProduct(e)}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(e.product_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit */}

      <Modal show={show2} onHide={handleClose2} animation={false}>
        <Modal.Body>
          <Form>
            <h1 className="titleee">Update Product</h1>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
                value={editUser.name}
                name="name"
                type="text"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                onChange={(e) =>
                  setEditUser({ ...editUser, title: e.target.value })
                }
                value={editUser.title}
                name="title"
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                onChange={(e) =>
                  setEditUser({ ...editUser, price: e.target.value })
                }
                value={editUser.price}
                name="price"
                type="text"
                placeholder="Price"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control
                onChange={(e) =>
                  setEditUser({ ...editUser, img: e.target.value })
                }
                value={editUser.img}
                name="img"
                type="text"
                placeholder="Image"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose2}>
            Close
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              handleUpdateUser();
              handleClose2();
            }}
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProductAdmin;
