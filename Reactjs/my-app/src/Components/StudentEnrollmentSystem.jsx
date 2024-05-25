import {Component} from "react";


export class StudentEnrollmentSystem extends Component {
    function (StudentEnrollmentSystem) {
        
    }
    state = {
        studentID: '200',
        studentname: 'hima',
        courseEnrolled: 'Front End',
        person:{
            fname:"hima"
        },
        students:["DDk","HHJ"],
        addNewStudent: function () { },
        removeStudent: function () { },
        updateCourse: function () { },
    }
    render(){
        return <div>
            <p>{this.state.studentID}</p>
            <p>{this.state.studentname}</p>
            <p>{this.state.courseEnrolled}</p>
        </div>
    }

   
}
export default StudentEnrollmentSystem;