import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as Yup from "yup";
import { Formik, Form as FormikForm } from 'formik';

import ImageMapper from '../../molecules/imageMapper/ImageMapper';
import AnamneseForm from '../../organisms/anamneseForm/AnamneseForm';
import Section from '../../atoms/section/Section'

import image from '../../../resources/image_for_mapper.png';
import './AnamnesePage.css';
import { getAnamneseData, setAnamneseData } from '../../../services/AnamneseService';
import TherapyMethodPicker from '../../organisms/therapyMethodPicker/TherapyMethodPicker';
import { setTherapies } from '../../../services/TherapyService';

import ButtonGroup from '../../molecules/buttonGroup/ButtonGroup';
import ErrorBoundary from '../../atoms/errorBoundary/ErrorBoundary';
import usePopUp from '../../atoms/popUpAlert/UsePopUp';
import CustomDatePicker from '../../atoms/customDatePicker/CustomDatePicker';
import CustomModal from '../../molecules/customModal/CustomModal';

const AnamnesePage = React.memo((props) => {
  const popUp = usePopUp();
  const id = props.match.params.id;
  const [data, setData] = useState({});
  const [awd, setAwd] = useState([])
  const [selectedMethod, setSelectedMethod] = useState();
  const [open, setOpen] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const [sec, setSec] = useState(null);
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (id !== 'new') {
      getAnamneseData(id, setData).then(res => {
        setData(res);
        areasWithData(res);
      }).catch(e => {
        popUp.showMessage(
          'Daten konnten nicht geladen werden',
          'ct-alert',
          'top-right'
        );
      })
    } else {
      setData({
        date_of_analysis: new Date(),
        user: { id: "1", firstname: "John", lastname: "Doe" },
        sections: []
      })
    }
  },[id]);

  const areasWithData = (data) => {
    let awd = [];
    data.sections.forEach(sec => {
      awd.push(sec.section.id);
    })
    setAwd(awd);
  }

  const clickedArea = (area) => {
    setOpen(false);
    setSelectedMethod();
    let sec = data.sections.find(sec => sec.section.id === area.id);
    if (typeof sec === 'undefined') {
      setSec({ section: area });
    } else {
      setSec(sec);
    }
  }

  const updateData = (section) => {
    setSec(section)
    let index = data.sections.findIndex(section => section.id === sec.id);
    if (index !== -1) {
      let d = data;
      d.sections[index] = section;
      setData(d);
    } else {
      data.sections.push(section);
      areasWithData(data);
    }
    setChangesMade(true);
  }

  const onSubmitTherapy = values => {
    if (selectedMethod) {
      setSec(sec, sec["therapy"] = selectedMethod)
      updateData(sec)
      setOpen(false)
    } else {
      setTherapies(values).then(res => {
        setSec(sec, sec["therapy"] = res);
        popUp.showMessage(
          'Neue Therapymethode wurde gespeichert',
          'ct-default',
          'top-right'
        );
        updateData(sec)
        setOpen(false)
      }).catch(e => {
        popUp.showMessage(
          'Neue Therapymethode konnte nicht gespeichert werden',
          'ct-alert',
          'top-right'
        );
      })
    }
  };
  const validationSchema = Yup.object().shape({
    date_of_analysis: Yup.string().required('Es muss ein Datum gesetzt sein'),
  });

  const handleAnamneseSave = (values) => {
    setAnamneseData(values).then(res => {
      popUp.showMessage(
        'Anamnese wurde erfolgreich gespeichert',
        'ct-default',
        'top-right'
      );
      setChangesMade(false)
    }).catch(e => {
      popUp.showMessage(
        'Beim Speichern ist ein Fehler aufgetreten',
        'ct-alert',
        'top-right'
      );
    });
  }

  return (
    <Container fluid style={{marginBottom:'50px'}}>
      <Formik
        initialValues={
          {
            date_of_analysis: data.date_of_analysis ? new Date(data.date_of_analysis) : new Date(),
          }
        }
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={values => {
          handleAnamneseSave({ ...data, ...values });
        }}>
        {({ handleSubmit,
          values,
          setFieldValue,
          errors }) => {
          return (
            <FormikForm onSubmit={handleSubmit}>
              <h2>Anamnese erstellen</h2>
              <Section>
                <Row>
                  <Col>
                    <CustomDatePicker
                      label={"Datum der Anamnese"}
                      selected={values.date_of_analysis}
                      onChange={(e) => { setFieldValue("date_of_analysis", e) }}
                      dateFormat={"dd.MM.yyyy"}
                    />
                  </Col>
                  <Col>
                    Klient <br></br>
                    <div style={{ marginTop: '15px' }}>
                      {(typeof data.user !== 'undefined') ? data.user.firstname + ' ' + data.user.lastname : ''}
                    </div>
                  </Col>
                </Row>
              </Section>
              <CustomModal
                title="this is title"
                message="this is message"
                show={modal}
                onHide={()=>setModal(false)}
                primaryButtonAction={()=>setModal(false)}
                primaryButtonText="Bleiben"
                secondaryButtonAction={ () => {props.history.push('/customer/' + data.user.id)}}
                secondaryButtonText="Verlassen"
              />
              <ButtonGroup
                editMode={true}
                actionCancle={() => {
                  if (changesMade) {
                    setModal(true);
                  } else {
                    props.history.push('/customer/' + data.user.id);
                  }
                }}
                submit
                saveDisabled={!changesMade}
              />
            </FormikForm>
          );
        }}
      </Formik>
      <Row>
        {(sec) ?
          <Col lg={{ order: 1, span: 6 }} md={{ order: 12, span: 12 }} xs={{ order: 12, span: 12 }}>
            <Section>
              <Row>
                <Col lg={{ order: 1, span: 8 }} xs={{ order: 12, span: 12 }}>
                  <div className="placeholder">
                    {sec ? <h1>{sec.section.name}</h1> : ''}
                  </div>
                </Col>
                <Col lg={{ order: 12, span: 4 }} xs={{ order: 1, span: 12 }}>
                  {changesMade ? <div className="unsaved-changes">(ungespeicherte Änderungen)</div> : ''}
                </Col>
              </Row>
              <ErrorBoundary>
                <AnamneseForm
                  disabled={sec ? false : true}
                  sectionData={sec ? sec : null}
                  setSec={setSec}
                  update={updateData}
                />
              </ErrorBoundary>
            </Section>
            <Section>
              <Container>
                <label>Therapie</label>
              </Container>
              <ErrorBoundary>
                <TherapyMethodPicker
                  recommendations={sec ? sec.section.id : null}
                  therapy={sec ? sec.therapy : null}
                  selectedMethod={selectedMethod}
                  setSelectedMethod={setSelectedMethod}
                  open={open}
                  setOpen={setOpen}
                  onSubmit={onSubmitTherapy}
                  disabled={(sec.id) ? false : true}
                />
              </ErrorBoundary>
            </Section>
          </Col>
          :
          <Col lg={{ order: 1, span: 6 }} md={{ order: 12, span: 12 }} xs={{ order: 12, span: 12 }}>
            <Section>
              <h3>Bitte wählen Sie einen Punkt auf dem Bild aus um Daten zu erfassen</h3>
              <p>Falls Sie eine bestehende Anamnese bearbeiten enthalten die roten Punkte schon bereits erfasste Daten.</p>
            </Section>
          </Col>
        }
        <Col lg={{ order: 12, span: 6 }} md={{ order: 1, span: 12 }} xs={{ order: 1, span: 12 }}>
          <Section>
            <ErrorBoundary>
              <ImageMapper
                width={600}
                imgWidth={890}
                clicked={clickedArea}
                image={image}
                hasData={awd}
                color="#fff"
                background="rgba(0,0,0,0.7)"
                hoverColor="rgba(255,255,255,1)"
                hoverBackground="rgba(0,0,0,0.6)"
              />
            </ErrorBoundary>
          </Section>
        </Col>
      </Row>
    </Container>
  )
})
export default withRouter(AnamnesePage);