import React from 'react'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Checkbox
} from 'react-bootstrap';

const FieldGroup = (props) => {
  const {
    id,
    type,
    label,
    value,
    options,
    disabled,
    ...otherProps
  } = props;

  const fieldTypes = {
    "text": getText,
    "select": getSelect,
    "checkbox": getCheckbox
  }

  function getValidation() {
    return (value.touched ? value.validation : null) || value.serverValidation
  }

  function getHelp() {
    return (value.touched ? value.message : null) || value.serverMessage
  }

  function getEnabledText() {
    console.log('enabled');
    return (
      <FormGroup controlId={id} validationState={getValidation()}>
          {label && <ControlLabel>{label}</ControlLabel>}
          <FormControl type={type} defaultValue={value.value} {...otherProps} />
          {getHelp() && <HelpBlock>{getHelp()}</HelpBlock>}
          <FormControl.Feedback />
      </FormGroup>
    )
  }

  function getDisabledText() {
    console.log('disabled');
    return (
      <FormGroup controlId={id} validationState={getValidation()}>
          {label && <ControlLabel>{label}</ControlLabel>}
    <FormControl type={type} defaultValue={value.value} disabled {...otherProps} />
          {getHelp() && <HelpBlock>{getHelp()}</HelpBlock>}
          <FormControl.Feedback />
      </FormGroup>
    )
  }

  function getText() {
    return disabled ? getDisabledText() : getEnabledText();
  }

  function getSelect() {
    return (
      <FormGroup controlId={id} validationState={getValidation()}>
        {label && <ControlLabel>{label}</ControlLabel>}
        <FormControl componentClass="select" placeholder="select" {...otherProps} >
        {
          options.map((option, index) => {
            return (<option key={index} value={option.value}>{option.name}</option>);
          })
        }
        </FormControl>
        {getHelp() && <HelpBlock>{getHelp()}</HelpBlock>}
        <FormControl.Feedback />
      </FormGroup>
    )
  }

  function getCheckbox() {
    return (
      <FormGroup>
        <Checkbox id={id} {...otherProps} defaultChecked={value.value}  inline><b>{label}</b></Checkbox>
      </FormGroup>
    )
  }

  return fieldTypes[type]();
}

export default FieldGroup