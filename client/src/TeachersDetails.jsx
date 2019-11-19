import React from 'react';


function TeacherDetails(props){  

        return (
            <div>
                <p>{props.match.params.id}</p>

            
            </div>
            
        )
}

export default TeacherDetails;