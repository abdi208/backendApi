import React from 'react';
import TeacherDetails from './TeachersDetails';
// import UpdateTachers from './UpdateTeachers';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link

} from 'react-router-dom'

class App extends React.Component  {
  state = {
    teachers: [],
    teacherName: ' ',
    className: ' ',
    newName: '',
  }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  handleTeacherNameChange = (e) => {
    e.preventDefault()
    this.setState({
      teacherName: e.target.value
    })
  }
  handleClassNameChange = (e) => {
    e.preventDefault()
    this.setState({
      className: e.target.value
    })
  }
  componentDidMount = () => {
    fetch('/teachers').then(response => response.json())
    .then(json => {
      this.setState({
        teachers: json
      })
    })
  }
  render() {
    const mappedTeachers = this.state.teachers.map((teacher,id) => <li key={teacher._id}><Link to={"/teachers/" + teacher._id} >{teacher.name}</Link></li>)
    return (
      <Router>
        <div className="App">
        <ul>  
        {mappedTeachers}
        

        </ul>
        <Route exact path="/teachers/:id" render={ (props) => 
            <TeacherDetails 
                      {...props}
                      handleTeacherNameChange={this.handleTeacherNameChange}
                      handleClassNameChange={this.handleClassNameChange}
                      handleSubmit = {this.handleSubmit}
                      name={this.state.teacherName}
                      className={this.state.className}/> }/>
            
        
        </div>
      </Router>
    );

  }
}

export default App;
