import React, { Component, PropTypes } from 'react'
import { Table } from 'react-bootstrap'

export default class PeopleList extends Component {
  static propTypes = {
    people: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  renderRow = (arr) => {
    const elements = []
    for (let i = 0; i < arr.length; i++) {
      elements.push(
        <tr key={i}>
          <td>{arr[i].name}</td>
          <td>{arr[i].favoriteCity}</td>
        </tr>,
      )
    }
    return elements
  }

  render() {
    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite City</th>
          </tr>
        </thead>

        <tbody>
          {this.renderRow(this.props.people)}
        </tbody>
      </Table>
    )
  }
}
