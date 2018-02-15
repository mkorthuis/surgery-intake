import React from 'react'
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Radio,
  Checkbox,
  Tooltip,
  OverlayTrigger
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
    question,
    ...otherProps
  } = props;

  const fieldTypes = {
    "text": getText,
    "select": getSelect,
    "checkbox": getCheckbox,
    "radio": getRadio,
    "datePicker": getDatePicker
  }

  function generateToolTip(text) {
    return (
      <Tooltip id="tooltip">
        {text}
      </Tooltip>
    )
  }

  function getValidation() {
    return (value.touched ? value.validation : null) || value.serverValidation
  }

  function getHelp() {
    return (value.touched ? value.message : null) || value.serverMessage
  }

  function getEnabledText() {
    var formControl = <FormControl type={type} value={value.value} {...otherProps} />;

    var overlay = <OverlayTrigger placement="bottom" overlay={generateToolTip(question)}>{formControl}</OverlayTrigger>

    return (
      <FormGroup controlId={id} validationState={getValidation()}>
        {label && <ControlLabel>{label}</ControlLabel>}
        {question ? overlay : formControl}
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
              return (<Radio name={id} key={option.value} value={option.value} checked="checked" inline {...otherProps} >{option.name}</Radio>);
            } else {
              return (<Radio name={id} key={option.value} value={option.value} inline {...otherProps} >{option.name}</Radio>);
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