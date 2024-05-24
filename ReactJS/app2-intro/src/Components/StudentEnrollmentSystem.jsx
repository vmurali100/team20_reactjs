const { Component } = require("react");

class StudentEnrollmentSystem extends Component {
  state = {
    studentID: 123,
    studnetname: "Ram",
    person:{
        fname:"ss"
    },
    students:["DDK","HHj"],
    addnewstudents:function (){}, 
    removestudents:function () {
    },  
    updatecourseenrollment:function(){
    }
  };
  render() {
    return <div>
        <p>{this.state.studentID}</p>
        <p>{this.state.studnetname}</p>
    </div>
  }
}
export default StudentEnrollmentSystem;
