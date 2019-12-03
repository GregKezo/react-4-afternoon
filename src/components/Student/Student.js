import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentInfo: {}
    }
  }

  handleBack = (e) => {
    this.props.history.goBack()
  }


  componentDidMount(){
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then( res => {
        this.setState({
          studentInfo : res.data
        })
      })
  }

  render() {
    let { first_name, last_name, grade, email } = this.state.studentInfo
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
        <button onClick={this.handleBack}>Back</button>
      </div>
    )
  }
}