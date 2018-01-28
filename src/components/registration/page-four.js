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
import {
  yesNo,
  feet,
  inches,
  smokerList,
  activity,
  neckCircumference
} from '../forms/lists'
import FieldGroup from '../forms/field-group'
import union from 'lodash/union'

class PageFour extends Component {

  handleSubmit = (evt) => {
    evt.preventDefault();
    var formValues = {};
    var fields = [
      'heightFeet',
      'heightInches',
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
      'snoreLoudly',
      'feelTired',
      'observedStopBreathing',
      'highBloodPressure',
      'neckCircumference',
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
    this.props.validate(formValues, 4);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.validation) {
      this.props.goToPage(5);
    }
  }

  getBasicScreening() {
    return (
      <Panel>
        <Panel.Heading>Basic Screening</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={3}>
              <FieldGroup
                id="heightFeet"
                type="select"
                label="Height?"
                value={this.props.heightFeet}
                onChange={this.props.handleInputChange} 
                options={union([{name:'Feet', value:''}],feet)}
                />
            </Col>
            <Col md={3} >
              <FieldGroup
                id="heightInches"
                type="select"
                label="&nbsp;"
                value={this.props.heightInches}
                onChange={this.props.handleInputChange} 
                options={union([{name:'Inches', value:''}],inches)}
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
                options={union([{name:'Select', value:''}],smokerList)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="cigarSmoker"
                type="select"
                label="Cigar smoker, pipe smoker, and/or tobacco chewer?"
                value={this.props.cigarSmoker}
                options={union([{name:'Select', value:''}],yesNo)}
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
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />              
            </Col>
            <Col md={6}>
              <FieldGroup
                id="alcoholAbuse"
                type="select"
                label="History of alcohol abuse?"
                value={this.props.alcoholAbuse}
                options={union([{name:'Select', value:''}],yesNo)}
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
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="physicalActivity"
                type="select"
                label="Physicial activity level?"
                value={this.props.physicalActivity}
                options={union([{name:'Select', value:''}],activity)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row> 
            <Col md={6}>
              <FieldGroup
                id="snoreLoudly"
                type="select"
                label="Do you SNORE loudly (louder than talking or heard through closed doors)?"
                value={this.props.snoreLoudly}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="feelTired"
                type="select"
                label="Do you often feel TIRED, fatigued, or sleepy during daytime?"
                value={this.props.feelTired}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row> 
            <Col md={6}>
              <FieldGroup
                id="observedStopBreathing"
                type="select"
                label="Has anyone OBSERVED you stop breathing during your sleep?"
                value={this.props.observedStopBreathing}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="highBloodPressure"
                type="select"
                label="Do you have or are you being treated for high blood PRESSURE?"
                value={this.props.highBloodPressure}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="neckCircumference"
                type="select"
                label="What is your neck circumference? (in inches)"
                value={this.props.neckCircumference}
                options={union([{name:'Select', value:''}],neckCircumference)}
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
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="pseudocholinesteraseDeficiency"
                type="select"
                label="History of pseudocholinesterase deficiency?"
                value={this.props.pseudocholinesteraseDeficiency}
                options={union([{name:'Select', value:''}],yesNo)}
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
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="nauseaVomiting"
                type="select"
                label="Postoperative nausea and vomiting?"
                value={this.props.nauseaVomiting}
                options={union([{name:'Select', value:''}],yesNo)}
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
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="chestXray"
                type="select"
                label="Chest XRAY?"
                value={this.props.chestXray}
                options={union([{name:'Select', value:''}],yesNo)}
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
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="cardiacStress"
                type="select"
                label="Cardiac (Heart) Stress Test?"
                value={this.props.cardiacStress}
                options={union([{name:'Select', value:''}],yesNo)}
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
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.props.handleInputChange} 
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="cardiacCatheterization"
                type="select"
                label="Cardiac Catheterization?"
                value={this.props.cardiacCatheterization}
                options={union([{name:'Select', value:''}],yesNo)}
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
        <Grid className="main-grid">
          {this.getBasicScreening()}
          {this.getHistoryAnesthesiaComplications()}
          {this.getDiagnosticTesting()}
          <Row className="last-row">
            <Col xs={12}>
              <Button bsStyle="primary" type="submit">
                Save and continue
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
    heightFeet: state.registration.heightFeet,
    heightInches: state.registration.heightInches,
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
    snoreLoudly: state.registration.snoreLoudly,
    feelTired: state.registration.feelTired,
    observedStopBreathing: state.registration.observedStopBreathing,
    highBloodPressure: state.registration.highBloodPressure,
    neckCircumference: state.registration.neckCircumference,

    ekg: state.registration.ekg,
    chestXray: state.registration.chestXray,
    sleepApnea: state.registration.sleepApnea,
    cardiacStress: state.registration.cardiacStress,
    cardiacEcho: state.registration.cardiacEcho,
    cardiacCatheterization: state.registration.cardiacCatheterization,
    validation: state.registration.validation['4']
  }), {

  }
)(PageFour)