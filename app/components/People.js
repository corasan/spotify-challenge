import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import PeopleList from './peopleList'
import AddPersonModal from './addPerson'

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

        <AddPersonModal />
      </div>
    )
  }
}
