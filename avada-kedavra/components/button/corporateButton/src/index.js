import React, {Component} from 'react'
// import PropTypes from 'prop-types'

import Button from '@schibstedspain/sui-atom-button'
import './index.scss'

class ButtonCorporateButton extends Component {
  render() {
    return (
      <div>
        <Button>Normal</Button>
      </div>
    )
  }
}

ButtonCorporateButton.displayName = 'ButtonCorporateButton'

// Remove these comments if you need
// ButtonCorporateButton.contextTypes = {i18n: PropTypes.object}
// ButtonCorporateButton.propTypes = {}
// ButtonCorporateButton.defaultProps = {}

export default ButtonCorporateButton
