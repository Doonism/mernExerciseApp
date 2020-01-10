import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar.component"
import WorkoutList from "./components/workout-list.component";
import EditWorkout from "./components/edit-workout.component";
import CreateWorkout from "./components/create-workout.component";
import CreateUser from "./components/create-user.component";
import UserList from "./components/user-list.component";
import EditUser from './components/edit-user.component';

function App() {
  return (
      <div className="container">
        <Navbar />
        <br/>
        <Switch>
          <Route exact path="/" component={WorkoutList} />
          <Route path="/edit/:id" component={EditWorkout} />
          <Route path="/create" component={CreateWorkout} />
          <Route exact path="/user" component={CreateUser} />
          <Route path = "/user/edit" component = {UserList}/>
          <Route path = '/editUser/:id' component = {EditUser}/>
        </Switch>
      </div>
  );
}

export default App;
