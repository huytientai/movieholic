import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import MovieDetailsAndReviewsPage from './pages/movie-details-and-reviews/movie-details-and-reviews.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import UserProfilePage from './pages/user-profile/user-profile.component';
import AdministrationPage from './pages/administration/administration.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import './App.css';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route
          exact
          path='/movies/:movieId'
          component={MovieDetailsAndReviewsPage}
        />
        <Route
          exact
          path='/signin'
          render={() =>
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
        <Route
          exact
          path='/profile'
          render={() =>
            currentUser ? <UserProfilePage /> : <Redirect to='/signin' />
          }
        />
        <Route
          exact
          path='/administration'
          render={() =>
            currentUser ? (
              currentUser.isAdmin ? (
                <AdministrationPage />
              ) : (
                <Redirect to='/' />
              )
            ) : (
              <Redirect to='/signin' />
            )
          }
        />
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
