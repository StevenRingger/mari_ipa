import React, { Fragment } from 'react';
import IconButton from '../../atoms/buttons/iconButton/IconButton';
import PropTypes from 'prop-types';

import './ButtonGroup.css';

/**
 * Two buttons that change depending if page is in edit mode or not
 */

const ButtonGroup = ({
  actionEdit,
  actionCancle,
  actionSave,
  editMode,
  saveDisabled,
  submit,
  ...props
}) => {
  const buttonTypeOne = editMode === false ? "pen" : "times";
  return (
    <div className="btn-group">
      {!editMode ?
        <IconButton
          variant="primary"
          icon={buttonTypeOne}
          onClick={() => {
            actionEdit()
          }}
        />
        :
        <Fragment>
          <IconButton
            variant="delete"
            icon={buttonTypeOne}
            onClick={() => {
              actionCancle()
            }}
          />
          <IconButton
            type="submit"
            variant="primary"
            icon="save"
            disabled={saveDisabled}
            onClick={!submit ? () => {
              actionSave()
            } : null}
          />
        </Fragment>
      }
    </div>
  )
}
export default ButtonGroup;

ButtonGroup.defaultProps = {
  editMode: false
};

ButtonGroup.propTypes = {
  /**
   * function for the edit button
   */
  actionEdit: PropTypes.func,
  /**
   * Function for the cancle button
   */
  actionCancle: PropTypes.func,
  /**
   * Function for the save button
   */
  actionSave: PropTypes.func,
  /**
   * Prop to change editmode
   */
  editMode: PropTypes.bool,
  /**
   * Make save button of type submit, else it's type button
   */
  submit: PropTypes.bool
};