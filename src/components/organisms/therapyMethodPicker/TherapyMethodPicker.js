import React, { Fragment, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from "yup";

import Section from '../../atoms/section/Section';
import TherapyMethod from '../../molecules/therapyMethod/TherapyMethod';
import TextArea from '../../atoms/textArea/TextArea';
import InputField from '../../atoms/inputField/InputField';
import TextButton from '../../atoms/buttons/textButton/TextButton';
import { getSectionsRecommendations } from '../../../services/SectionService';

/**
 * The component to select a therapymethod or create a new one
 */

const TherapyMethodPicker = React.memo(({
  onSubmit,
  disabled,
  recommendations,
  therapy,
  open,
  setOpen,
  setSelectedMethod,
  selectedMethod,
  ...props 
}) => {
  const [methods, setMethods] = useState([]);
  useEffect(() => {
      if (recommendations !== null) {
        getSectionsRecommendations(recommendations).then(res => {
          setMethods(res)
        })
      }
    
  }, [recommendations])

  const therapyClicked = (therapy) => {
    setSelectedMethod(therapy)
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(38, 'Zeichen Limit erreicht (max. 38)'),
    description: Yup.string().max(1000, 'Zeichen Limit erreicht (max. 1000)'),
  })

  return (
    <Fragment>
      {therapy ? <TherapyMethod method={therapy} clickable={false} /> : ''}
      {(!open) ?
        <TextButton
          type="submit"
          style={{ width: 'calc(100% - 30px)', marginLeft: '15px' }}
          onClick={() => { setOpen(true); }}
          disabled={disabled}
        >
          {therapy?'Therapiemethode ändern':'Therapiemethode Hinzufügen'}
      </TextButton>
        :
        <Section>
          <Formik
            initialValues={{
              name: '',
              description: '',
            }}
            enableReinitialize={true}
            validationSchema={validationSchema}
            onSubmit={values => {
              onSubmit(values);
            }}
          >
            {({ handleSubmit,
              resetForm,
              touched,
              errors }) => {
              return (
                <Form method="post" onSubmit={handleSubmit} onChange={() => {
                  setSelectedMethod(null);
                }}>
                  <InputField
                    name={"name"}
                    label={"Title"}
                  />
                  <TextArea
                    label={"Beschreibung"}
                    name={"description"}
                  />
                  {methods.map((m, index) => {
                    return <TherapyMethod
                      key={index}
                      method={m}
                      selected={selectedMethod}
                      therapy={(id) => {
                        therapyClicked(id);
                        resetForm()
                      }}
                    />
                  })}
                  <TextButton type="submit" style={{ width: '100%' }}>Therapiemethode Speichern</TextButton>
                </Form>
              );
            }}
          </Formik>
        </Section>
      }
    </Fragment>
  )
})

export default TherapyMethodPicker;

TherapyMethodPicker.defaultProps = {
  disabled: false,
  setFirstSave: () => {}
};

TherapyMethodPicker.propTypes = {
  /**
   * Functon for the onSubmit event of the form
   */
  onSubmit: PropTypes.func,
  /**
   * Disable component
   */
  disabled: PropTypes.bool,
  /**
   * Id of the section
   */
  recommendations: PropTypes.string,
  /**
   * Object that is set if there is a selected therapy method in the beginning
   */
  therapy: PropTypes.object,
  /**
   * Boolean if component is expanded
   */
  collapsed: PropTypes.bool,
  /**
   * Set for useState to set open
   */
  setCollapsed: PropTypes.func,
  /**
   * Set for useState for the selected method
   */
  setSelectedMethod: PropTypes.func,
  /**
   * Object of the selected method
   */
  selectedMethod: PropTypes.object
}