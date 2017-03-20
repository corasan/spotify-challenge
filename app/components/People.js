import React, { Component } from 'react'
import axios from 'axios'

export default class People extends Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
    }
  }

  componentWillMount() {
    axios.get('/people')
    .then((response) => {
      console.log(response.data)
      this.setState({ people: response.data })
    })
  }

  render() {
    return (
      <div>
        <h2>People</h2>

      </div>
    )
  }
}
