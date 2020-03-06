import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PopUpAlertContext from './PopUpAlertContext';
import Toast from '../toast/Toast';

class SnackProvider extends PureComponent {
  state = {
    message: null,
    open: false,
    vertical: 'bottom',
    horizontal: 'left'
  }
  
  showMessage = (message, typeSnack, vertical, horizontal) => {
    this.setState({ open: true, message, typeSnack, vertical, horizontal })
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
        <Toast {...SnackbarProps} message={message} open={open} handleClose={this.handleClose}></Toast>
      </React.Fragment>
    )
  }
}

SnackProvider.propTypes = {
  ButtonProps: PropTypes.object,
  children: PropTypes.node,
  SnackbarProps: PropTypes.object,
}

export default SnackProvider;