import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './index.scss'

const BASE_CLASS = 'sktest-ButtonButtoncard'
const SIZES = {
  MEDIUM: 'm',
  SMALL: 's'
}
const TYPE = {
  default: 'default',
  secondary: 'secondary'
}

class ButtonButtoncard extends Component {
  getClassNames({size, type}) {
    return cx(BASE_CLASS, `${BASE_CLASS}-${size}`, `${BASE_CLASS}-${type}`)
  }
  render() {
    return (
      <button
        className={this.getClassNames({
          size: this.props.size,
          type: this.props.type
        })}
      >
        {this.props.name}
      </button>
    )
  }
}

ButtonButtoncard.displayName = 'ButtonButtoncard'

// Remove these comments if you need
// ButtonButtoncard.contextTypes = {i18n: PropTypes.object}
ButtonButtoncard.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string
}
ButtonButtoncard.defaultProps = {
  type: 'default'
}

export default ButtonButtoncard
export {SIZES as inputSizes}
export {TYPE as inputType}
