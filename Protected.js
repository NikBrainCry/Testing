import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

import WeatherPage from '../pages/WeatherPage';
import RequestHistoryDetails from '../pages/RequestHistoryDetails';
import RequestHistoryList from '../pages/RequestsHistoryList';
import EditProfile from '../pages/EditProfile';

import { checkLogin } from '../store/actions/auth/auth.thunk'

class Protected extends Component {

  componentDidMount() {
    this.props.checkLogin()
  }

  render() {
    const { isLogin, checkLoginCompleted } = this.props;

    if (!isLogin && !checkLoginCompleted) return null;
    if (!isLogin && checkLoginCompleted) return <Redirect to='/login' />
    if (isLogin || checkLoginCompleted) {
      return (
        <Container className="mt-5">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Switch>
                <Route path="/" exact component={WeatherPage} />
                <Route path="/history/details/:id" component={RequestHistoryDetails} />
                <Route path="/history" component={RequestHistoryList} />
                <Route path="/profile/edit" component={EditProfile} />
              </Switch>
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin,
    checkLoginCompleted: state.auth.checkLoginCompleted
  }
}

export default connect(mapStateToProps, {
  checkLogin
})(Protected);