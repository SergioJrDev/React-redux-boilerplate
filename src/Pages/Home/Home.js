import React from 'react'
import { connect } from 'react-redux'
import './Home.style'

class Home extends React.Component {

  render() {
    const { welcome } = this.props
    return (
      <h1>{welcome}</h1>
    )
  }
}

const mapStateToProps = ({ welcome }, props) => {
  return {
    welcome,
    ...props
  }
}

export default connect(mapStateToProps)(Home)