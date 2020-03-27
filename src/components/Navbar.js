import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <div id="topBlock">
        <p id="blockName">Logan Heffernan</p>
        <p id="blockMore">?</p>
      </div>
    )
  }
}

export default Navbar
