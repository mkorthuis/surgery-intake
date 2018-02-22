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
  neckCircumference,
  gender
} from '../forms/lists'
import {
  save
} from '../../actions/registration'
import FieldGroup from '../forms/field-group'
import union from 'lodash/union'
import {
  disableValidation
} from '../../actions/registration'

class PageFour extends Component {

  page = 4;

  handleSubmit = (evt) => {
    evt.preventDefault();
    var formValues = {};
    var fields = [
      'heightFeet',
      'heightInches',
      'weight',
      'cigaretteSmoker',
      'cigarSmoker',
      'drinkDaily',
      'drinkHeavy',
      'narcoticMeds',
      'illegalDrugs',
      'substanceAbuse',
      'substanceUseCriticism',
      'substanceUseGuilt',
      'substanceDependence',
      'drink',
      'alcoholAbuse',
      'drugs',
      'physicalActivity',
      'sex',
      'malignantHypertermia',
      'pseudocholinesteraseDeficiency',
      'motionSickness',
      'nauseaVomiting',
      'adverseReaction',
      'breathingTube',
      'wakeUp',
      'allergicReaction',
      'highFever',
      'familyComplications',
      'snoreLoudly',
      'feelTired',
      'observedStopBreathing',
      'heartFailure',
      'heartAttack',
      'heartAttackTime',
      'chestPain',
      'heartMurmer',
      'heartDevice',
      'heartSurgery',
      'pulmonaryHypertension',
      'bloodClot',
      'highBloodPressure',
      'heartDoctor',
      'stairs',
      'neckCircumference',
      'ekg',
      'chestXray',
      'sleepApnea',
      'cardiacStress',
      'cardiacEcho',
      'cardiacCatheterization',
      'lungDisease',
      'oxygen',
      'diabetes',
      'dialysis',
      'liverFailure',
      'stroke',
      'muscularDystrophy',
      'hemophilia',
      'bleedEasy',
      'organTransplant',
      'pregnant',
      'oxycodone',
      'methadone',
      'suboxone',
      'otherOpioid'
    ];

    for (var i in fields) {
      formValues[fields[i]] = this.props[fields[i]].value;
    }
    this.props.validate(formValues, this.page);
  }

  handleInputChange = (evt) => {
    this.props.disableValidation(this.page);
    this.props.handleInputChange(evt);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.validation) {
      var changes = {
        heightFeet: this.props.heightFeet.value,
        heightInches: this.props.heightInches.value,
        weight: this.props.weight.value,
        cigaretteSmoker: this.props.cigaretteSmoker.value,
        cigarSmoker: this.props.cigarSmoker.value,
        drinkDaily: this.props.drinkDaily.value,
        drinkHeavy: this.props.drinkHeavy.value,
        narcoticMeds: this.props.narcoticMeds.value,
        illegalDrugs: this.props.illegalDrugs.value,
        substanceAbuse: this.props.substanceAbuse.value,
        substanceUseCriticism: this.props.substanceUseCriticism.value,
        substanceUseGuilt: this.props.substanceUseGuilt.value,
        substanceDependence: this.props.substanceDependence.value,
        drink: this.props.drink.value,
        alcoholAbuse: this.props.alcoholAbuse.value,
        drugs: this.props.drugs.value,
        physicalActivity: this.props.physicalActivity.value,
        sex: this.props.sex.value,
        malignantHypertermia: this.props.malignantHypertermia.value,
        pseudocholinesteraseDeficiency: this.props.pseudocholinesteraseDeficiency.value,
        motionSickness: this.props.motionSickness.value,
        nauseaVomiting: this.props.nauseaVomiting.value,
        adverseReaction: this.props.adverseReaction.value,
        breathingTube: this.props.breathingTube.value,
        wakeUp: this.props.wakeUp.value,
        allergicReaction: this.props.allergicReaction.value,
        highFever: this.props.highFever.value,
        familyComplications: this.props.familyComplications.value,
        snoreLoudly: this.props.snoreLoudly.value,
        feelTired: this.props.feelTired.value,
        observedStopBreathing: this.props.observedStopBreathing.value,
        heartFailure: this.props.heartFailure.value,
        heartAttack: this.props.heartAttack.value,
        heartAttackTime: this.props.heartAttackTime.value,
        chestPain: this.props.chestPain.value,
        heartMurmer: this.props.heartMurmer.value,
        heartDevice: this.props.heartDevice.value,
        heartSurgery: this.props.heartSurgery.value,
        pulmonaryHypertension: this.props.pulmonaryHypertension.value,
        bloodClot: this.props.bloodClot.value,
        highBloodPressure: this.props.highBloodPressure.value,
        heartDoctor: this.props.heartDoctor.value,
        stairs: this.props.stairs.value,
        neckCircumference: this.props.neckCircumference.value,
        ekg: this.props.ekg.value,
        chestXray: this.props.chestXray.value,
        sleepApnea: this.props.sleepApnea.value,
        cardiacStress: this.props.cardiacStress.value,
        cardiacEcho: this.props.cardiacEcho.value,
        cardiacCatheterization: this.props.cardiacCatheterization.value,
        lungDisease: this.props.lungDisease.value,
        oxygen: this.props.oxygen.value,
        diabetes: this.props.diabetes.value,
        dialysis: this.props.dialysis.value,
        liverFailure: this.propsliverFailure.value,
        stroke: this.props.stroke.value,
        muscularDystrophy: this.props.muscularDystrophy.value,
        hemophilia: this.props.hemophilia.value,
        bleedEasy: this.props.bleedEasy.value,
        organTransplant: this.props.organTransplant.value,
        pregnant: this.props.pregnant.value,
        oxycodone: this.props.oxycodone.value,
        methadone: this.props.methadone.value,
        suboxone: this.props.suboxone.value,
        otherOpioid: this.props.otherOpioid.value,
      }

      save(this.props.emailToken, this.props.original, changes)
      this.props.goToPage(this.page + 1);
    }
  }

  getBasicScreening() {
    return (
      <Panel>
        <Panel.Heading>Basic Information</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={3}>
              <FieldGroup
                id="heightFeet"
                type="select"
                label="Height?"
                value={this.props.heightFeet}
                onChange={this.handleInputChange}
                options={union([{name:'Feet', value:''}],feet)}
                />
            </Col>
            <Col md={3} >
              <FieldGroup
                id="heightInches"
                type="select"
                label="&nbsp;"
                value={this.props.heightInches}
                onChange={this.handleInputChange}
                options={union([{name:'Inches', value:''}],inches)}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="weight"
                type="text"
                label="Weight? (lbs)"
                value={this.props.weight}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="physicalActivity"
                type="select"
                label="Physical activity level?"
                value={this.props.physicalActivity}
                options={union([{name:'Select', value:''}],activity)}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="sex"
                type="radio"
                label="Sex?"
                value={this.props.sex}
                options={gender}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getSleepInformation(){
    return (
      <Panel>
        <Panel.Heading>Sleep Information</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
               <FieldGroup
                 id="snoreLoudly"
                 type="select"
                 label="Do you SNORE loudly (louder than talking or heard through closed doors)?"
                 value={this.props.snoreLoudly}
                 options={union([{name:'Select', value:''}],yesNo)}
                 onChange={this.handleInputChange}
                 />
             </Col>
             <Col md={6}>
               <FieldGroup
                 id="feelTired"
                 type="select"
                 label="Do you often feel TIRED, fatigued, or sleepy during daytime?"
                 value={this.props.feelTired}
                 options={union([{name:'Select', value:''}],yesNo)}
                 onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
                <FieldGroup
                  id="neckCircumference"
                  type="select"
                  label="What is your neck circumference? (in inches)"
                  value={this.props.neckCircumference}
                  options={union([{name:'Select', value:''}],neckCircumference)}
                  onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="pseudocholinesteraseDeficiency"
                type="select"
                label="History of pseudocholinesterase deficiency?"
                value={this.props.pseudocholinesteraseDeficiency}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="nauseaVomiting"
                type="select"
                label="Postoperative nausea and vomiting?"
                value={this.props.nauseaVomiting}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
              <Col md={12}>
                <p>Have you had any problems with having anesthesia in the past? Choices:</p>
              </Col>
          </Row>
          <Row>
               <Col md={6}>
                 <FieldGroup
                   id="breathingTube"
                   type="radio"
                   label="Was it hard for them to get the breathing tube in place?"
                   value={this.props.breathingTube}
                   options={yesNo}
                   onChange={this.handleInputChange}
                   />
               </Col>
               <Col md={6}>
                 <FieldGroup
                   id="wakeUp"
                   type="radio"
                   label="Was it hard for you to wake up?"
                   value={this.props.wakeUp}
                   options={yesNo}
                   onChange={this.handleInputChange}
                   />
               </Col>
          </Row>
          <Row>
              <Col md={6}>
                <FieldGroup
                  id="allergicReaction"
                  type="radio"
                  label="Did you have an allergic reaction to the anesthesia drugs?"
                  value={this.props.allergicReaction}
                  options={yesNo}
                  onChange={this.handleInputChange}
                  />
              </Col>
              <Col md={6}>
                <FieldGroup
                  id="highFever"
                  type="radio"
                  label="Did you have a high fever because of the anesthesia drugs (malignant hyperthermia)?"
                  value={this.props.highFever}
                  options={yesNo}
                  onChange={this.handleInputChange}
                  />
              </Col>
          </Row>
          <Row>
              <Col md={6}>
                <FieldGroup
                  id="familyComplications"
                  type="radio"
                  label="Have any close family members had trouble with anesthesia?"
                  value={this.props.familyComplications}
                  options={yesNo}
                  onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="chestXray"
                type="select"
                label="Chest XRAY?"
                value={this.props.chestXray}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="cardiacStress"
                type="select"
                label="Cardiac (Heart) Stress Test?"
                value={this.props.cardiacStress}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange}
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
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="cardiacCatheterization"
                type="select"
                label="Cardiac Catheterization?"
                value={this.props.cardiacCatheterization}
                options={union([{name:'Select', value:''}],yesNo)}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getSubstanceUse() {
    return (
      <Panel>
        <Panel.Heading>Alcohol, Smoking and Drug Use</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="cigaretteSmoker"
                type="select"
                label="Smoking status?"
                value={this.props.cigaretteSmoker}
                options={union([{name:'Select', value:''}],smokerList)}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="cigarSmoker"
                type="radio"
                label="Cigar smoker, pipe smoker, and/or tobacco chewer?"
                value={this.props.cigarSmoker}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="drinkDaily"
                type="radio"
                label="Do you drink alcohol daily?"
                value={this.props.drinkDaily}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="drinkHeavy"
                type="radio"
                label="Do you drink alcohol heavily?"
                value={this.props.drinkHeavy}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="narcoticMeds"
                type="radio"
                label="Do you take narcotic medications not prescribed for you?"
                value={this.props.narcoticMeds}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="illegalDrugs"
                type="radio"
                label="Do you take street (illicit) drugs?"
                value={this.props.illegalDrugs}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="substanceAbuse"
                type="radio"
                label="Have you ever felt that you should cut down on your drinking or drug use?"
                value={this.props.substanceAbuse}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="substanceUseCriticism"
                type="radio"
                label="Are you angry or annoyed when others criticize your drinking or drug use?"
                value={this.props.substanceUseCriticism}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="substanceUseGuilt"
                type="radio"
                label="Have you ever felt bad or guilty about your drinking or drug use?"
                value={this.props.substanceUseGuilt}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="substanceDependence"
                type="radio"
                label="Have you had a drink or used drugs the first thing in the morning as an eyeopener?"
                value={this.props.substanceDependence}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getHeartDisease() {
    return (
      <Panel>
        <Panel.Heading>Heart or Blood Vessel Disease</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={12}>
              <p>Do you currently have or ever had any of the following?:</p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="heartFailure"
                type="radio"
                label="Too much fluid in your lungs (congestive heart failure)?"
                value={this.props.heartFailure}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="heartAttack"
                type="radio"
                label="Heart attack (myocardial infarction)?"
                value={this.props.heartAttack}
                options={yesNo}
                onChange={this.handleInputChange}
               />
            </Col>
           </Row>
           <Row>
             <Col md={6}>
               <FieldGroup
                 id="heartAttackTime"
                 type="radio"
                 label="If you did have a heart attack, was it in the past 6 months?"
                 value={this.props.heartAttackTime}
                 options={yesNo}
                 onChange={this.handleInputChange}
                 />
             </Col>
             <Col md={6}>
               <FieldGroup
                 id="chestPain"
                 type="radio"
                 label="Chest pain, shortness of breath while walking, or irregular, slow, or fast heart beat?"
                 value={this.props.chestPain}
                 options={yesNo}
                 onChange={this.handleInputChange}
                />
             </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FieldGroup
                  id="heartMurmer"
                  type="radio"
                  label="Heart murmur or heart valve problem (aortic stenosis, mitral valve prolapse, etc.)?"
                  value={this.props.heartMurmer}
                  options={yesNo}
                  onChange={this.handleInputChange}
                  />
              </Col>
              <Col md={6}>
                <FieldGroup
                  id="heartDevice"
                  type="radio"
                  label="Any implanted devices in your heart (cardiac stents, heart valves, pacemaker or defibrillator)?"
                  value={this.props.heartDevice}
                  options={yesNo}
                  onChange={this.handleInputChange}
                 />
              </Col>
             </Row>
             <Row>
               <Col md={6}>
                 <FieldGroup
                   id="heartSurgery"
                   type="radio"
                   label="Heart or blood vessel surgery (coronary artery bypass, valve replacement or carotid surgery)?"
                   value={this.props.heartSurgery}
                   options={yesNo}
                   onChange={this.handleInputChange}
                   />
               </Col>
               <Col md={6}>
                 <FieldGroup
                   id="pulmonaryHypertension"
                   type="radio"
                   label="High blood pressure in the lungs (pulmonary hypertension)?"
                   value={this.props.pulmonaryHypertension}
                   options={yesNo}
                   onChange={this.handleInputChange}
                  />
               </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FieldGroup
                    id="bloodClot"
                    type="radio"
                    label="Blood clots in legs or lungs (deep vein thrombosis, pulmonary embolus)?"
                    value={this.props.bloodClot}
                    options={yesNo}
                    onChange={this.handleInputChange}
                    />
                </Col>
                <Col md={6}>
                  <FieldGroup
                    id="highBloodPressure"
                    type="radio"
                    label="High blood pressure in the lungs (pulmonary hypertension)?"
                    value={this.props.highBloodPressure}
                    options={yesNo}
                    onChange={this.handleInputChange}
                   />
                </Col>
               </Row>
               <Row>
                 <Col md={6}>
                   <FieldGroup
                     id="heartDoctor"
                     type="radio"
                     label="Have you seen a heart doctor (cardiologist) within the last year?"
                     value={this.props.heartDoctor}
                     options={yesNo}
                     onChange={this.handleInputChange}
                     />
                 </Col>
                 <Col md={6}>
                   <FieldGroup
                     id="stairs"
                     type="radio"
                     label="Are you unable to walk up 2 flights of stairs or walk 4-6 blocks without stopping? (Do not answer “yes” if the only reason that you are unable to do this is because of an orthopedic condition)"
                     value={this.props.stairs}
                     options={yesNo}
                     onChange={this.handleInputChange}
                    />
                 </Col>
                </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getLungDisease() {
    return (
      <Panel>
        <Panel.Heading>Lung Disease</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="lungDisease"
                type="radio"
                label="Do you have severe lung disease (COPD, pulmonary fibrosis, cystic fibrosis, or frequent asthma attacks)?"
                value={this.props.lungDisease}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="oxygen"
                type="radio"
                label="Do you use oxygen at home during the day or at night?"
                value={this.props.oxygen}
                options={yesNo}
                onChange={this.handleInputChange}
               />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getDiabetes() {
    return (
      <Panel>
        <Panel.Heading>Diabetes</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={12}>
              <FieldGroup
                id="diabetes"
                type="radio"
                label="Do you have Diabetes (Type I or Type II) that is difficult to control?"
                value={this.props.diabetes}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getKidneyDisease() {
    return (
      <Panel>
        <Panel.Heading>Kidney Disease</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={12}>
              <FieldGroup
                id="dialysis"
                type="radio"
                label="Do you receive dialysis for kidney disease?"
                value={this.props.dialysis}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getLiverDisease() {
    return (
      <Panel>
        <Panel.Heading>Liver Disease</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={12}>
              <FieldGroup
                id="liverFailure"
                type="radio"
                label="Do you have chronic hepatitis, cirrhosis or liver failure?"
                value={this.props.liverFailure}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getNervousSystem() {
    return (
      <Panel>
        <Panel.Heading>Nervous System Disorders</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={12}>
              <FieldGroup
                id="stroke"
                type="radio"
                label="Have you had a stroke, transient ischemic attack (TIA), brain aneurysm, Alzheimer’s or dementia, seizures, multiple sclerosis, or brain tumor?"
                value={this.props.stroke}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getMuscleDisorders() {
    return (
      <Panel>
        <Panel.Heading>Muscle Disorders</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={12}>
              <FieldGroup
                id="muscularDystrophy"
                type="radio"
                label="Do you have myasthenia gravis or muscular dystrophy?"
                value={this.props.muscularDystrophy}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getBloodDisorders() {
    return (
      <Panel>
        <Panel.Heading>Bleeding or Blood Disorders</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="hemophilia"
                type="radio"
                label="Do you have hemophilia, sickle cell, or blood cancer?"
                value={this.props.hemophilia}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="bleedEasy"
                type="radio"
                label="Do you bleed easily when cut or scraped?"
                value={this.props.bleedEasy}
                options={yesNo}
                onChange={this.handleInputChange}
               />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getOrganTransplant() {
    return (
      <Panel>
        <Panel.Heading>Organ Transplant</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={12}>
              <FieldGroup
                id="organTransplant"
                type="radio"
                label="Have you had an organ transplant?"
                value={this.props.organTransplant}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getPregnant() {
    return (
      <Panel>
        <Panel.Heading>Pregnancy</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={12}>
              <FieldGroup
                id="pregnant"
                type="radio"
                label="Are you pregnant or do you think you could be pregnant?"
                value={this.props.pregnant}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    )
  }

  getChronicPain() {
    return (
      <Panel>
        <Panel.Heading>Chronic Pain</Panel.Heading>
        <Panel.Body>
          <Row>
            <Col md={12}>
              <p>Do you take long-acting opioids? Choices:</p>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="oxycodone"
                type="radio"
                label="OxyContin (oxycodone)?"
                value={this.props.oxycodone}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="methadone"
                type="radio"
                label="Methadone?"
                value={this.props.methadone}
                options={yesNo}
                onChange={this.handleInputChange}
               />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="suboxone"
                type="radio"
                label="Suboxone (buprenorphine)?"
                value={this.props.suboxone}
                options={yesNo}
                onChange={this.handleInputChange}
                />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="otherOpioid"
                type="text"
                label="Other long-acting opioids?"
                value={this.props.otherOpioid}
                onChange={this.handleInputChange}
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
          {this.getSleepInformation()}
          {this.getHistoryAnesthesiaComplications()}
          {this.getDiagnosticTesting()}
          {this.getSubstanceUse()}
          {this.getHeartDisease()}
          {this.getLungDisease()}
          {this.getDiabetes()}
          {this.getKidneyDisease()}
          {this.getLiverDisease()}
          {this.getNervousSystem()}
          {this.getMuscleDisorders()}
          {this.getBloodDisorders()}
          {this.getOrganTransplant()}
          {this.getPregnant()}
          {this.getChronicPain()}
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
    drinkDaily: state.registration.drinkDaily,
    drinkHeavy: state.registration.drinkHeavy,
    narcoticMeds: state.registration.narcoticMeds,
    illegalDrugs: state.registration.illegalDrugs,
    substanceAbuse: state.registration.substanceAbuse,
    substanceUseCriticism: state.registration.substanceUseCriticism,
    substanceUseGuilt: state.registration.substanceUseGuilt,
    substanceDependence: state.registration.substanceDependence,
    drink: state.registration.drink,
    alcoholAbuse: state.registration.alcoholAbuse,
    drugs: state.registration.drugs,
    physicalActivity: state.registration.physicalActivity,
    sex: state.registration.sex,
    malignantHypertermia: state.registration.malignantHypertermia,
    pseudocholinesteraseDeficiency: state.registration.pseudocholinesteraseDeficiency,
    motionSickness: state.registration.motionSickness,
    nauseaVomiting: state.registration.nauseaVomiting,
    adverseReaction: state.registration.adverseReaction,
    breathingTube: state.registration.breathingTube,
    wakeUp: state.registration.wakeUp,
    allergicReaction: state.registration.allergicReaction,
    highFever: state.registration.highFever,
    familyComplications: state.registration.familyComplications,
    snoreLoudly: state.registration.snoreLoudly,
    feelTired: state.registration.feelTired,
    observedStopBreathing: state.registration.observedStopBreathing,
    heartFailure: state.registration.heartFailure,
    heartAttack: state.registration.heartAttack,
    heartAttackTime: state.registration.heartAttackTime,
    chestPain: state.registration.chestPain,
    heartMurmer: state.registration.heartMurmer,
    heartDevice: state.registration.heartDevice,
    heartSurgery: state.registration.heartSurgery,
    pulmonaryHypertension: state.registration.pulmonaryHypertension,
    bloodClot: state.registration.bloodClot,
    highBloodPressure: state.registration.highBloodPressure,
    heartDoctor: state.registration.heartDoctor,
    stairs: state.registration.stairs,
    neckCircumference: state.registration.neckCircumference,

    ekg: state.registration.ekg,
    chestXray: state.registration.chestXray,
    sleepApnea: state.registration.sleepApnea,
    cardiacStress: state.registration.cardiacStress,
    cardiacEcho: state.registration.cardiacEcho,
    cardiacCatheterization: state.registration.cardiacCatheterization,

    lungDisease: state.registration.lungDisease,
    oxygen: state.registration.oxygen,
    diabetes: state.registration.diabetes,
    dialysis: state.registration.dialysis,
    liverFailure: state.registration.liverFailure,
    stroke: state.registration.stroke,
    muscularDystrophy: state.registration.muscularDystrophy,
    hemophilia: state.registration.hemophilia,
    bleedEasy: state.registration.bleedEasy,
    organTransplant: state.registration.organTransplant,
    pregnant: state.registration.pregnant,
    oxycodone: state.registration.oxycodone,
    methadone: state.registration.methadone,
    suboxone: state.registration.suboxone,
    otherOpioid: state.registration.otherOpioid,

    validation: state.registration.validation['4'],

    original: state.registration.original,

    emailToken: state.authentication.emailToken
  }), {
    disableValidation
  }
)(PageFour)
