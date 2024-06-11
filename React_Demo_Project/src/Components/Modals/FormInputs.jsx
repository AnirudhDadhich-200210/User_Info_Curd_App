import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const FormInput = ({ controlId, label, type, name, value, onChange }) => {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </Form.Group>
  );
};

FormInput.propTypes = {
  controlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
