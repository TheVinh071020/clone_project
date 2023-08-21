import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Button from "react-bootstrap/Button";

function UserAdmin() {
  let [architects, setArchitects] = useState([]);
  let [currentView, setCurrentView] = useState({});
  let token = localStorage.getItem("token");

  let baseURL = "http://localhost:3000/api/v1";
  useEffect(() => {
    fetch(baseURL + "/users", {
      headers: {
        Authorization: `Bearer${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setArchitects(data.users))
      .catch((err) => console.log(err));
  }, []);
  console.log(architects);

  // delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(baseURL + `/users/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .then(() => {
            setArchitects((prev) => {
              let architectClone = [...prev];
              let findIndex = architectClone.findIndex((e) => e.id === id);
              architectClone.splice(findIndex, 1);
              return [...architectClone];
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };

  // View
  const handleView = (e) => {
    setCurrentView(e);
  };

  const handleUpdate = (e, currentView) => {
    e.preventDefault();
    console.log(currentView);
    let updateUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(updateUser);
    fetch(baseURL + ".users/" + currentView.id, {});
  };
  return (
    <div>
      <div className="row mb-3">
        <h1>Admin User</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col" colSpan={3}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {architects?.map((e, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{e.users_id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleView(e)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     
    </div>
  );
}

export default UserAdmin;
