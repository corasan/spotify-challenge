import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap'
import People from './components/People/People'

const App = (props) => {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            {props.children}
          </Col>
          <Col xs={2} />
        </Row>
      </Grid>
    </div>
  )
}

export default class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={People} />
          <Route path="/people/:id" />
        </Route>
      </Router>
    )
  }
}
