import React from 'react';
import axios from 'axios';

state = {
    teacher: []
}
componentDidMount = () => {
    axios.get('/teachers/:id')
    .then(json => {
        this.setState({
            teacher: json
        })
    })
}
class UpdateTeachers extends React.Component {  
        render() {
            
            return (
                <div>
                    <div>
                        {props.match.params.id}
                    </div>
                        <h1>Add a new teacher</h1>
                    <div>
                        <form action="/teachers" method="POST" onChange={props.handleSubmit}>
                            <input type="text" onChange={props.handleTeacherNameChange} name="name" value={props.name} placeholder="Enter a name"/><br></br>
                            <input type="text" onChange={props.handleClassNameChange}name='className'value={props.className} placeholder="Enter a  class name"/><br></br>
                            <input type="submit"/>
                        
                        </form>

                    </div>

                </div>
                
            )
                
        }
    
}


export default UpdateTeachers;
