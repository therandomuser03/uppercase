import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
  </div>
</nav>
  )
}
Navbar.propTypes = {title: PropTypes.string, aboutText: PropTypes.string}
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
}
