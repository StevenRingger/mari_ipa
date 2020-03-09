import React, { Fragment, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import Section from '../../atoms/section/Section';
import TherapyMethod from '../../molecules/therapyMethod/TherapyMethod';
import TextArea from '../../atoms/textArea/TextArea';
import InputField from '../../atoms/inputField/InputField';
import TextButton from '../../atoms/buttons/textButton/TextButton';
import { getSectionsRecommendations } from '../../../services/SectionService';

/**
 * The component to select a therapymethod or create a new one
 */

const TherapyMethodPicker = ({ 
  onSubmit,
  disabled,
  recommendations,
  therapy,
  collapsed,
  setCollapsed,
  setSelectedMethod,
  selectedMethod,
  ...props 
}) => {
  const [methods, setMethods] = useState();
  useEffect(() => {
      if (recommendations !== null) {
        getSectionsRecommendations(recommendations).then(res => {
          setMethods(res.data)
        })
      }
    
  }, [recommendations])

  const therapyClicked = (therapy) => {
    props.setSelectedMethod(therapy)
  }

  return (
    <Fragment>
      {therapy ? <TherapyMethod method={therapy} clickable={false} /> : ''}
      {(collapsed) ?
        <TextButton
          type="submit"
          style={{ width: 'calc(100% - 30px)', marginLeft: '15px' }}
          onClick={() => { setCollapsed(false); }}
          disabled={disabled}
        >
          Therapiemethode Hinzufügen
      </TextButton>
        :
        <Section>
          {console.log(methods)}
          <Formik
            initialValues={{
              name: '',
              description: '',
            }}
            enableReinitialize={true}
            // validationSchema={validationSchema}
            onSubmit={values => {
              // setSubmitting(true);
              onSubmit(values);
              // setSubmitting(false);
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
                    name="name"
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
}

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