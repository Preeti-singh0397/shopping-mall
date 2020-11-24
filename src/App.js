import React, { Component } from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch } from "react-router-dom";
import Header from './components/header/header.component';
import { auth,createUserProfileDocument } from "./firebase/firebase.utils";


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubsscribeafromAuth=null;

  componentDidMount() {
    this.unsubsscribeafromAuth=auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShort=>{
          this.setState({
            currentUser:{
              id:snapShort.id,
              ...snapShort.data()
            }
          })
          console.log(this.state)
        })
      }
      this.setState({currentUser:userAuth})
    })
  }

  componentWillUnmount(){
    this.unsubsscribeafromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
