import React, { Component } from 'react'
import { Modal, Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap'

export default class AddPersonModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      name: '',
      favCity: '',
    }
  }

  open = () => {
    this.setState({ showModal: true })
  }

  close = () => {
    this.setState({ showModal: false })
  }

  handleName = (e) => {
    e.preventDefault()
    this.setState({ name: e.target.value })
  }

  handleFavCity = (e) => {
    e.preventDefault()
    this.setState({ favCity: e.target.value })
  }

  render() {
    return (
      <div>
        <Button bsStyle="success" onClick={this.open}>Add Person</Button>

        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Add Person</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form horizontal>
              <FormGroup>
                <ControlLabel>Name</ControlLabel>
                <FormControl type="text" value={this.state.name} onChange={this.handleName} />
                <ControlLabel>Favorite City</ControlLabel>
                <FormControl type="text" value={this.state.favCity} onChange={this.handleFavCity} />
              </FormGroup>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button bsStyle="success">Save</Button>
          </Modal.Footer>

        </Modal>    
      </div>
    )
  }
}