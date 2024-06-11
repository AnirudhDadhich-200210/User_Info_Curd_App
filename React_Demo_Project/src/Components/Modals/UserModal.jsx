import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FormInput from './FormInputs';

const UserModal = ({ show, handleClose, handleSubmit, handleChange, formData, editingUser }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editingUser ? "Edit User" : "Add User"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <FormInput
            controlId="formName"
            label="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            controlId="formEmail"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            controlId="formPhone"
            label="Phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <FormInput
            controlId="formCity"
            label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <FormInput
            controlId="formZipcode"
            label="Zip Code"
            type="text"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
          />
          <Button variant="primary" type="submit">
            {editingUser ? "Save Changes" : "Add User"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

UserModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
  editingUser: PropTypes.object,
};

export default UserModal;
