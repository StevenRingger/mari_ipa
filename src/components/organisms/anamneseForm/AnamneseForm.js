import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from "yup";
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TextArea from '../../atoms/textArea/TextArea';
import TextButton from '../../atoms/buttons/textButton/TextButton';
import ScalePicker from '../../../components/molecules/scalePicker/ScalePicker';

/**
 * Form to create or edit anamnese
 */

const AnamneseFrom = React.memo(({
  sectionData,
  setSec,
  update,
  disabled,
  ...props
}) => {

  const validationSchema = Yup.object().shape({
    subjective: Yup.string().max(1000, 'Zeichen Limit erreicht (max. 1000)'),
    objective: Yup.string().max(1000, 'Zeichen Limit erreicht (max. 1000)'),
    assessment: Yup.string().max(1000, 'Zeichen Limit erreicht (max. 1000)'),
  })

  return (
    <Container>
      <Formik
        initialValues={
          {
            subjective: sectionData ? sectionData.subjective : '',
            objective: sectionData ? sectionData.objective : '',
            assessment: sectionData ? sectionData.assessment : '',
            severity: sectionData ? sectionData.severity : ''
          }
        }
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={values => {
          values['id'] = sectionData.id ? sectionData.id : '42';
          setSec({ ...sectionData, ...values })
          update({ ...sectionData, ...values })
        }}
      >
        {({ handleSubmit,
          values,
          initialValues,
          touched,
          errors }) => {
          return (
            <Form method="post" onSubmit={handleSubmit}>
              <ScalePicker
                text={'Schmerzskala'}
                scope={["1", "2", "3", "4", "5"]}
                name="severity"
                colorLeft={[134, 62, 44]}
                colorRight={[1, 83, 46]}
                initialCheck={values.severity}
                errorText={errors.severity}
                disabled={disabled}
              />
              <TextArea
                label={"Subjektiv"}
                name={"subjective"}
                disabled={disabled}
              />
              <TextArea
                label={"Objektiv"}
                name={"objective"}
                disabled={disabled}
              />
              <TextArea
                label={"Einschätzung"}
                name={"assessment"}
                disabled={disabled}
              />
              <TextButton type="submit" style={{width: '100%'}} disabled={(initialValues!==values)?false:true} align="center">Lokal Zwischen Speichern</TextButton>
            </Form>
          );
        }}
      </Formik>
    </Container>
  )
})
export default AnamneseFrom;

AnamneseFrom.defaultProps = {
  disabled: false,
  setFirstSave: () => {}
};

AnamneseFrom.propTypes = {
  /**
   * Data object od the selected section
   */
  sectionData: PropTypes.object,
  /**
   * Function to set the section
   */
  setSec: PropTypes.func,
  /**
   * save or update data
   */
  update: PropTypes.func,
  /**
   * Disable the form
   */
  disabled: PropTypes.bool
}