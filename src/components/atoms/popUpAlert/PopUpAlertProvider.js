import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PopUpAlertContext from './PopUpAlertContext';
import CustomToast from '../customToast/CustomToast';

class PopUpAlertProvider extends PureComponent {
  state = {
    message: null,
    open: false,
    vertical: 'bottom',
    horizontal: 'left'
  }
  
  showMessage = (message, variant, position) => {
    this.setState({ open: true, message, variant, position })
  }

  handleActionClick = () => {
    this.handleClose()
    this.state.handleAction()
  }

  handleClose = () => {
    this.setState({ open: false, handleAction: null })
  }

  render () {
    const {
      message,
      position,
      variant,
      open
    } = this.state

    const {
      children,
      SnackbarProps = {}
    } = this.props

    return (
      <React.Fragment>
        <PopUpAlertContext.Provider
          value={{
            showMessage: this.showMessage
          }}
        >
          {children}
        </PopUpAlertContext.Provider>
        <CustomToast {...SnackbarProps} message={message} variant={variant} open={open} handleClose={this.handleClose} position={position} />
      </React.Fragment>
    )
  }
}

PopUpAlertProvider.propTypes = {
  ButtonProps: PropTypes.object,
  children: PropTypes.node,
  SnackbarProps: PropTypes.object,
}

export default PopUpAlertProvider;