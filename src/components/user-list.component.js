import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = (props) => {
  return (
    <tr>
      <td>{props.user}</td>
      <td>
        <Link to={'/editUser/'+props.id}>Edit |</Link>
        <span style={{cursor: 'pointer', color: 'blue'}} 
          onClick={() => { props.deleteUser(props.id) }}> Delete
        </span>
      </td>
    </tr>
  )
}


export default class UserList extends Component {
  constructor(props){
    super(props)

    this.deleteUser = this.deleteUser.bind(this);
    
    this.state= {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        this.setState({users: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(
        this.setState({
          users: this.state.users.filter(user => user._id !== id)
        })
      )
  }

  getUsers() {
    return this.state.users.map(user => {
      return <User user={user.username} key={user._id} deleteUser={this.deleteUser} id={user._id}/>
    })
  }


  render() {
    return (
      <div>
        <h3>User List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.getUsers() }
          </tbody>
        </table>
      </div>
    )
  }
}