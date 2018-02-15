import React from 'react'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Radio,
  Checkbox
} from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import './field-group.css'

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
    "checkbox": getCheckbox,
    "radio": getRadio,
    "datePicker": getDatePicker
  }

  function getValidation() {
    return (value.touched ? value.validation : null) || value.serverValidation
  }

  function getHelp() {
    return (value.touched ? value.message : null) || value.serverMessage
  }

  function getEnabledText() {
    return (
      <FormGroup controlId={id} validationState={getValidation()}>
        {label && <ControlLabel>{label}</ControlLabel>}
        <FormControl type={type} value={value.value} {...otherProps} />
        {getHelp() && <HelpBlock>{getHelp()}</HelpBlock>}
        <FormControl.Feedback />
      </FormGroup>
    )
  }

  function getDisabledText() {
    return (
      <FormGroup controlId={id} validationState={getValidation()}>
        {label && <ControlLabel>{label}</ControlLabel>}
        <FormControl type={type} value={value.value} disabled {...otherProps} />
        {getHelp() && <HelpBlock>{getHelp()}</HelpBlock>}
        <FormControl.Feedback />
      </FormGroup>
    )
  }

  function getText() {
    return disabled ? getDisabledText() : getEnabledText();
  }

  function getDatePicker() {
    return (
      <FormGroup controlId={id} validationState={getValidation()}>
        {label && <ControlLabel>{label}</ControlLabel>}
        <DatePicker id={id} value={value.value} {...otherProps} />
        {getHelp() && <HelpBlock>{getHelp()}</HelpBlock>}
        <FormControl.Feedback />
      </FormGroup>
    )
  }

  function getSelect() {
    return (
      <FormGroup controlId={id} validationState={getValidation()}>
        {label && <ControlLabel>{label}</ControlLabel>}
        <FormControl componentClass="select" value={value.value} placeholder="select" {...otherProps} >
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

  function getRadio() {
    return (
      <FormGroup controlId={id} validationState={getValidation()} >
        {label && <ControlLabel>{label}</ControlLabel>}<br />
        {
          options.map((option, index) => {
            if(option.value === value.value) {
              return (<Radio name={id} id={id} value={option.value} checked="checked" inline {...otherProps} >{option.name}</Radio>);
            } else {
              return (<Radio name={id} id={id} value={option.value} inline {...otherProps} >{option.name}</Radio>);
            }
          })
        }
        {getHelp() && <HelpBlock>{getHelp()}</HelpBlock>}
        <FormControl.Feedback />
      </FormGroup>
    )
  }

  function getCheckbox() {
    return (
      <FormGroup>
        <Checkbox id={id} {...otherProps} defaultChecked={value.value} validationState={getValidation()} inline>{label}</Checkbox>
      </FormGroup>
    )
  }

  return fieldTypes[type]();
}

export default FieldGroup