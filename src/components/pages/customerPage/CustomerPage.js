import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';

import Section from '../../atoms/section/Section';
import CustomTable from '../../atoms/customTable/CustomTable';
import TextButton from '../../atoms/buttons/textButton/TextButton';
import { withRouter } from 'react-router-dom';
import { getAllAnamneseData } from '../../../services/AnamneseService';
import './CustomerPage.css';

const CustomerPage = (props) => {
  const [anamnesen, setAnamnesen] = useState([])
  useEffect(() => {
    getAllAnamneseData().then(res => {
      let temp = [];
      res.forEach((res,index) => {
        temp[index] = {id:res.id, date:res.date_of_analysis}
      });
      setAnamnesen(temp);
    }).catch(e => {
      
    })
  }, [])
  return (
    <Container fluid>
      <Row>
        <Col md={4}>
          <Section>
            <CustomTable header={['#', 'Datum']} data={anamnesen} url='/anamnese' canClick />
            <TextButton align='center' onClick={() => {props.history.push('/anamnese/new')}}>Neue Anamnese erfassen</TextButton>
          </Section>
        </Col>
      </Row>
    </Container>
  )
}
export default withRouter(CustomerPage);