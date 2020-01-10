import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


// Exercise component, props parameter, returns a single value (looks a bit more than a single value, because of the JSX syntax)
// Returning a single value can be done with a parentheses
const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.id}>Edit</Link> |
      <span style={{cursor: 'pointer', color: 'blue'}} 
        onClick={() => { props.deleteExercise(props.id) }}>Delete
      </span>
    </td>
  </tr>
)

export default class WorkoutList extends Component {
  constructor(props) {
    super(props);

    // binding like this is always done with an event handler. 'this' changes to the eventhandler
    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => {console.log(response.data)});

    // filter wil return an array of elements which return 'true' to the express condition given in the filter method
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  // map grabs an array list and does whatever computation we ask of it
  // Returns an Exercise component (components given by the capital letters)
  // inside these components are the props which we are handing down to our component
  // Key is required for list items (and it doesnt appear as a prop)
  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} id={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Workout History</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}