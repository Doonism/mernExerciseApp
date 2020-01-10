import React, { Component } from 'react'
import axios from 'axios';

export default class EditUser extends Component {
  constructor(props){
    super(props);

    this.onChangeUser = this.onChangeUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      oldUser: '',
      newUser: '',
      users: []
    }
  }

  // When component is mounted into the DOM, we send an axios
  // http request with the id of the element which was 'edited'
  // with the returned promise, we set the state data equal to  
  // our element that we 'edited'
  componentDidMount() {
    axios.get('http://localhost:5000/users/' +this.props.match.params.id)
      .then(response => {
        this.setState({
          oldUser: response.data.username
        }) 
      })
      .catch((error) => console.log(error))
  }

  onSubmit(e) {
    e.preventDefault();
    
    const user = {
      user: this.state.newUser
    }

    axios.post('http://localhost:5000/users/update/' +this.props.match.params.id, user)
      .then(res => console.log(res.data));

    window.location = '/user/edit';
  }

  onChangeUser(e) {
    this.setState({
      newUser: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Edit User</h3>
        <form onSubmit = {this.onSubmit}>
          <div className ='form-group'>
            <label>Old User:</label>
            <input ref='userInput'
              className='form-control'
              value={this.state.oldUser}
              readOnly
              required>
            </input>
          </div>
          <div className = 'form-group'>
            <label>New User:</label>
            <input type='text'
              className = 'form-control'
              onChange = {this.onChangeUser}
              required
            >
            </input>
          </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">Update User</button>
            </div>
        </form>
      </div>
    )
  }
}

