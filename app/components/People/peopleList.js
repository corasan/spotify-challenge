import React, { Component, PropTypes } from 'react'
import { Table, Glyphicon } from 'react-bootstrap'
import axios from 'axios'

export default class PeopleList extends Component {
  static propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      favCity: '',
      modalShow: false,
    }
  }

  handleFavCity = (e) => {
    e.preventDefault()
    this.setState({ favCity: e.target.value })
  }

  updateCity = (id) => {
    axios.get(`public/${id}`, {
      favoriteCity: this.state.favCity
    }).then((response) => {
      console.log('Updated')
    })
  }

  removePerson = (id) => {
    axios.delete(`/people/${id}`)
    .then(() => console.log('hello'))
    .catch(err => console.log(err))
  }

  renderRow = (arr) => {
    const elements = []
    for (let i = 0; i < arr.length; i++) {
      elements.push(
        <tr key={i}>
          <td>{arr[i].name}</td>
          <td>{arr[i].favoriteCity}</td>
          <td><a onClick={() => this.removePerson(arr[i]._id)}><Glyphicon glyph="glyphicon glyphicon-trash" /></a></td>
        </tr>,
      )
    }
    return elements
  }

  render() {
    return (
      <div>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Favorite City</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {this.renderRow(this.props.people)}
          </tbody>
        </Table>
      </div>
    )
  }
}
