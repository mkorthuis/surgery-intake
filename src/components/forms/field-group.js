import React, {
  Component
} from 'react'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from 'react-bootstrap';

class FieldGroup extends Component {
  render() {
    const {
      id,
      label,
      help,
      ...props
    } = this.props;
    return (
      <FormGroup controlId={id}>
          {label && <ControlLabel>{label}</ControlLabel>}
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    )
  }
}

export default FieldGroup