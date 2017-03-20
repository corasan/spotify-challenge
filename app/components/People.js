import React, { Component } from 'react'
import axios from 'axios'
import PeopleList from './peopleList'

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
        <PeopleList people={this.state.people} />
      </div>
    )
  }
}
