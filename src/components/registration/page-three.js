import React, {
  Component
} from 'react'
import {
  Grid,
  Row,
  Col,
  Panel,
  Button
} from 'react-bootstrap'
import {
  connect
} from 'react-redux'
import FieldGroup from '../forms/field-group'

class PageThree extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault();
    var formValues = {};
    var fields = [
      'height',
      'weight',
      'cigaretteSmoker',
      'cigarSmoker',
      'drink',
      'alcoholAbuse',
      'drugs',
      'physicalActivity',
      'malignantHypertermia',
      'pseudocholinesteraseDeficiency',
      'motionSickness',
      'nauseaVomiting',
      'adverseReaction',
      'ekg',
      'chestXray',
      'sleepApnea',
      'cardiacStress',
      'cardiacEcho',
      'cardiacCatheterization'
    ];

    for (var i in fields) {
      formValues[fields[i]] = this.props[fields[i]].value;
    }
    this.props.validate(formValues, 3);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.validation) {
      this.props.goToPage(4);
    }
  }

  getBasicScreening() {
    return (
      <Panel>
        <Panel.Heading>Basic Screening</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="height"
                type="text"
                label="Height? (inches)"
                value={this.props.height}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="weight"
                type="text"
                label="Weight? (lbs)"
                value={this.props.weight}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="cigaretteSmoker"
                type="select"
                label="Smoking status?"
                value={this.props.cigaretteSmoker}
                options={[{name:'Select', value:''},{name:'Never Smoked', value:'never'},{name:'Former Smoked', value:'former'},{name:'Current Smoker', value:'current'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="cigarSmoker"
                type="select"
                label="Cigar smoker, pipe smoker, and/or tobacco chewer?"
                value={this.props.cigarSmoker}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="drink"
                type="select"
                label="Drink beer, wine or liquor?"
                value={this.props.drink}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />              
            </Col>
            <Col md={6}>
              <FieldGroup
                id="alcoholAbuse"
                type="select"
                label="History of alcohol abuse?"
                value={this.props.alcoholAbuse}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="drugs"
                type="select"
                label="History of using recreational or street drugs?"
                value={this.props.drugs}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="physicalActivity"
                type="select"
                label="Physicial activity level?"
                value={this.props.physicalActivity}
                options={[{name:'Select', value:''},{name:'High', value:'high'},{name:'Medium', value:'medium'},{name:'Low', value:'low'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getHistoryAnesthesiaComplications() {
    return (
      <Panel>
        <Panel.Heading>History of Anesthesia Complications</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="malignantHypertermia"
                type="select"
                label="History of malignant hypertermia?"
                value={this.props.malignantHypertermia}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="pseudocholinesteraseDeficiency"
                type="select"
                label="History of pseudocholinesterase deficiency?"
                value={this.props.pseudocholinesteraseDeficiency}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="motionSickness"
                type="select"
                label="Motion sickness?"
                value={this.props.motionSickness}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="nauseaVomiting"
                type="select"
                label="Postoperative nausea and vomiting?"
                value={this.props.nauseaVomiting}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FieldGroup
                id="adverseReaction"
                type="text"
                label="Other serious adverse reactions to anesthesia medications?"
                value={this.props.adverseReaction}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getDiagnosticTesting() {
    return (
      <Panel>
        <Panel.Heading>Recent or Planned Diagnostic Testing</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="ekg"
                type="select"
                label="EKG?"
                value={this.props.ekg}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="chestXray"
                type="select"
                label="Chest XRAY?"
                value={this.props.chestXray}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="sleepApnea"
                type="select"
                label="Sleep Apnea Study?"
                value={this.props.sleepApnea}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="cardiacStress"
                type="select"
                label="Cardiac (Heart) Stress Test?"
                value={this.props.cardiacStress}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="cardiacEcho"
                type="select"
                label="Cardiac (Heart) Echo (Ultrasound)?"
                value={this.props.cardiacEcho}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="cardiacCatheterization"
                type="select"
                label="Cardiac Catheterization?"
                value={this.props.cardiacCatheterization}
                options={[{name:'Select', value:''},{name:'Yes', value:'yes'},{name:'No', value:'no'}]}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid>
          {this.getBasicScreening()}
          {this.getHistoryAnesthesiaComplications()}
          {this.getDiagnosticTesting()}
          <Row>
            <Col xs={12}>
              <Button bsStyle="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Grid>
      </form>
    )
  }
}

export default connect(
  (state) => ({
    height: state.registration.height,
    weight: state.registration.weight,
    cigaretteSmoker: state.registration.cigaretteSmoker,
    cigarSmoker: state.registration.cigarSmoker,
    drink: state.registration.drink,
    alcoholAbuse: state.registration.alcoholAbuse,
    drugs: state.registration.drugs,
    physicalActivity: state.registration.physicalActivity,
    malignantHypertermia: state.registration.malignantHypertermia,
    pseudocholinesteraseDeficiency: state.registration.pseudocholinesteraseDeficiency,
    motionSickness: state.registration.motionSickness,
    nauseaVomiting: state.registration.nauseaVomiting,
    adverseReaction: state.registration.adverseReaction,
    ekg: state.registration.ekg,
    chestXray: state.registration.chestXray,
    sleepApnea: state.registration.sleepApnea,
    cardiacStress: state.registration.cardiacStress,
    cardiacEcho: state.registration.cardiacEcho,
    cardiacCatheterization: state.registration.cardiacCatheterization,
    validation: state.registration.validation['3']
  }), {

  }
)(PageThree)