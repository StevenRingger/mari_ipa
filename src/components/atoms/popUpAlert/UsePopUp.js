import React from 'react'
import PopUpAlertContext from './PopUpAlertContext'

const usePopUp = () => {
  return React.useContext(PopUpAlertContext)
}

export default usePopUp;