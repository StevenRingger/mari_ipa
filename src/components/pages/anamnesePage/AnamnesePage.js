import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import ImageMapper from '../../molecules/imageMapper/ImageMapper';
import AnamneseForm from '../../organisms/anamneseForm/AnamneseForm';
import Section from '../../atoms/section/Section'

import image from '../../../resources/image_for_mapper.jpg';
import './AnamnesePage.css';
import { getAnamneseData, setAnamneseData } from '../../../services/AnamneseService';
import TherapyMethodPicker from '../../organisms/therapyMethodPicker/TherapyMethodPicker';
import { setTherapies } from '../../../services/TherapyService';

import MyDatePicker from '../../molecules/myDatePicker/MyDatePicker';
import ButtonGroup from '../../molecules/buttonGroup/ButtonGroup';
import ErrorBoundary from '../../atoms/errorBoundary/ErrorBoundary'
import useSnackbar from '../../atoms/SnackbarError/UseSnack';

function AnamnesePage(props){
  const snackbar = useSnackbar();
  const id = props.match.params.id;
  const [data, setData] = useState({});
  const [awd, setAwd] = useState([])
  const [selectedMethod, setSelectedMethod] = useState();
  const [open, setOpen] = useState(false);
  const [changesMade, setChangesMade] = useState(false);
  const [sec, setSec] = useState(null);
  const [firstSave, setFirstSave] = useState(true);
  
  useEffect(() => {
    getAnamneseData(id,setData).then(res => {
      setData(res)
      console.log(res)
      areasWithData(res)
    }).catch(e => {
      console.log('error outside:', e)
      
    })
  }, [id])

  const areasWithData = (data) => {
    let awd = [];
    data.sections.forEach(sec => {
      awd.push(sec.section.id)
    })
    setAwd(awd)
  }

  const clickedArea = (area) => {
    if(changesMade){
      alert('changes made')
    }else{
      setOpen(false)
      setSelectedMethod()
      let sec = data.sections.find(sec => sec.section.id === area.id);
      if(typeof sec === 'undefined'){
        setSec({section: area})
      }else{
        setSec(sec)
      }
    }
  }

  const updateData = (sec) => {
    let index = data.sections.findIndex(section => section.id === sec.id);
    if(index !== -1){
      let d = data;
      data.sections[index] = sec;
      setData(d)
    }else{
      data.sections.push(sec);
      areasWithData(data)
    }
    setChangesMade(true)
  }

  const onSubmitTherapy = values => {
    if(selectedMethod){
      setSec(sec, sec["therapy"]=selectedMethod)
      updateData(sec)
      setOpen(false)
    }else{
      setTherapies(values).then(res =>{
        setSec(sec, sec["therapy"]=res.data);
        updateData(sec)
        setOpen(false)
      })
    }
  };
  const handleOpen = () => {
    snackbar.showMessage(
      'Something happened!',
      'success',
      'top', 
      'right'
      )
  }

  return(
    <Container fluid>
      <h2>Anamnese erstellen</h2>
      <Section>
        <Row>
          <Col>
            <MyDatePicker
              label={"Datum der Anamnese"}
              // selected={values.date}
              // onChange={(e) => { setFieldValue("date", e) }}
              dateFormat={"dd.MM.yyyy"}
              disabled={props.disabled}
            />
          </Col>
          <Col>
            {(typeof data.user !== 'undefined')? data.user.firstname + ' ' + data.user.lastname: ''}
          </Col>
        </Row>
      </Section>
      <Button onClick={handleOpen}>asdfsadf</Button>
      <Row>
        {(sec)? 
          <Col lg={{ order: 1, span: 6  }} md={{ order: 12, span: 12  }} xs={{ order: 12, span: 12 }}>
            <ButtonGroup 
              editMode={true}
              actionCancle={ () => {props.history.push('/customers/'+data.user.id)} }
              actionSave={ () => {
                console.log(data); 
                setAnamneseData(id, data);
                setChangesMade(false)
                } 
              }
            />
            <Section>
              <Row>
                <Col lg={{ order: 1, span: 8  }} xs={{ order: 12, span: 12 }}><div className="placeholder">{sec?<h1>{sec.section.name}</h1>:''}</div></Col>
                <Col lg={{ order: 12, span: 4  }} xs={{ order: 1, span: 12 }}>{changesMade?<div className="unsaved-changes">(ungespeicherte Änderungen)</div>:''}</Col>
              </Row>
              <AnamneseForm 
                disabled={sec ? false : true} 
                sectionData={sec ? sec : null} 
                setFirstSave={setFirstSave}
                setSec={setSec}
                update={updateData}
              />
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
                disabled={firstSave} 
              />
              
              </ErrorBoundary>
            </Section>
          </Col>
        : 
        <Col lg={{ order: 1, span: 6  }} md={{ order: 12, span: 12  }} xs={{ order: 12, span: 12 }}>
          <Section>
            <h3>Bitte wählen Sie einen Punkt auf dem Bild aus um Daten zu erfassen</h3>
            <p>Falls Sie eine bestehende Anamnese bearbeiten enthalten die roten Punkte schon bereits erfasste Daten.</p>
          </Section>
        </Col>
        }
        <Col lg={{ order: 12, span: 6  }} md={{ order: 1, span: 12 }} xs={{ order: 1, span: 12 }}>
          <Section>
            <ImageMapper 
              width={600} 
              imgWidth={700} 
              clicked={clickedArea}
              image={image} 
              hasData={awd}
              color="#fff" 
              background="rgba(0,0,0,0.7)" 
              hoverColor="rgba(255,255,255,1)" 
              hoverBackground="rgba(0,0,0,0.6)" 
            />
          </Section>
        </Col>
      </Row>
    </Container>
  )
}
export default withRouter(AnamnesePage);