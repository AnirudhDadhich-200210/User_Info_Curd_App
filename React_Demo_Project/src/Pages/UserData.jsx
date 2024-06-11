import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsers,
  addUser,
  editUser,
  deleteUser,
} from "../Features/userSlice";
import { Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserModal from "../Components/Modals/UserModal";

const UserData = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  const [show, setShow] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    zipcode: "",
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleShow = (user) => {
    setEditingUser(user);
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        city: user.address.city,
        zipcode: user.address.zipcode,
      });
    } else {
      setFormData({ name: "", email: "", phone: "", city: "", zipcode: "" });
    }
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value=e.target.value
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      dispatch(
        editUser({
          ...editingUser,
          ...formData,
          address: { city: formData.city, zipcode: formData.zipcode },
        })
      );
    } else {
      const newUser = {
        id: users.length + 1,
        ...formData,
        address: { city: formData.city, zipcode: formData.zipcode },
      };
      dispatch(addUser(newUser));
    }
    handleClose();
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const userDataArray = [
    "ID",
    "Name",
    "Email",
    "Phone",
    "City with Zip Code",
    "Actions",
  ];

  return (
    <div className="container">
      <h1>User List</h1>
      <Button variant="primary" onClick={() => handleShow()}>
        Add User
      </Button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <Table striped bordered hover>
        <thead>
          <tr>
            {userDataArray.map((tableHeading, index) => (
              <th key={index}>{tableHeading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.address.city} - {user.address.zipcode}
              </td>
              <td>
              {/* ToDO:-we can make the button component as well */}
                <Button variant="warning" onClick={() => handleShow(user)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <UserModal
        show={show}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        editingUser={editingUser}
      />
    </div>
  );
};

export default UserData;
