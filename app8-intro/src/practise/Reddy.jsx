import { Component } from "react";

export class Reddy extends Component {
    state = {
        userDetails: {
            Fname: "",
            lname: "",
            email: "",
            address: "",
            ZipCode: "",
            phone: "",
            city: "",
            state: "",
            websiteodomainname: "",

            projectiondescriptor: "",

        },
        index: 0,
        allUsers: [],
        showupdatesbtn: false,

    };

    handleChange = (e) => {
        const inputName = e.target.name;
        const newState = { ...this.state };
        const newStateObj = { ... this.state.userDetails }
        newStateObj[inputName] = e.target.value;
        newState.userDetails = newStateObj
        this.setState(newState);
    }

    addUser = () => {
        const newState = { ...this.state };
        newState.allUsers.push({ ...this.state.userDetails });
        this.setState(newState);
        this.clearForm();
    };

    clearForm = () => {
        const newState = { ...this.state };
        newState.userDetails = {
            Fname: "",
            lname: "",
            email: "",
            address: "",
            ZipCode: "",
            phone: "",
            city: "",
            state: "",
            websiteodomainname: "",

            projectiondescriptor: "",
        }
        this.setState(newState);
    };

    deleteUser = (i) => {
        const newState = { ...this.state };
        newState.allUsers.splice(i, 1);
        this.setState(newState);
    };
    EditUser = (obj) => {
        const newState = { ...this.state };
        newState.userDetails = obj;
        newState.showupdatesbtn = true;
        this.setState(newState);
        console.log(obj)

    }

    handleEdit = (obj, i) => {
        const newState = { ...this.state };
        newState.userDetails = obj;

        newState.showupdatesbtn = true;
        newState.index = i
        this.setState(newState)
    }

    handleUpdate = () => {

        const newState = { ...this.state };
        newState.allUsers[this.state.index] = this.state.userDetails;
        newState.showupdatesbtn = false;

        this.setState(newState)
        this.clearForm()
    };
    render() {
        return (
            <div>
                <h2>Welcome to ReactJS Forms</h2>
                <hr />
                <form>
                    <label htmlFor="">First Name </label>
                    <input type="text" name="Fname" value={this.state.userDetails.Fname} onChange={this.handleChange} />{" "}
                    <br />
                    <label htmlFor="">Last Name </label>
                    <input
                        type="text"
                        name="lname"
                        value={this.state.userDetails.lname}
                        onChange={this.handleChange}
                    />{" "}
                    <br />
                    <label htmlFor="">Email </label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.userDetails.email}
                        onChange={this.handleChange}
                    />{" "}
                    <br />
                    <label htmlFor="">phone </label>
                    <input
                        type="text"
                        name="phone"
                        value={this.state.userDetails.phone}
                        onChange={this.handleChange}

                    />{" "}
                    <br />
                    <label htmlFor="">city </label>
                    <input
                        type="text"
                        name="city"
                        value={this.state.userDetails.city}
                        onChange={this.handleChange}
                    />{" "}
                    <br />
                    <label htmlFor="">Address </label>
                    <input
                        type="text"
                        name="address"
                        value={this.state.userDetails.address}
                        onChange={this.handleChange}
                    />{" "}

                    <br />
                    <label htmlFor="">state </label>
                    <input
                        type="text"
                        name="state"
                        value={this.state.userDetails.state}
                        onChange={this.handleChange}
                    />{" "}
                    <br />
                    <label htmlFor="">Zipcode </label>
                    <input
                        type="text"
                        name="zipcode"
                        value={this.state.userDetails.zipcode}
                        onChange={this.handleChange}
                    />{" "}
                    <br />
                    <label htmlFor="">websiteordomainname </label>
                    <input
                        type="text"
                        name="websiteordomainname"
                        value={this.state.userDetails.websiteordomainname}
                        onChange={this.handleChange}
                    />{" "}

                    <br />
                    <label htmlFor="">projectdescription </label>
                    <input
                        type="text"
                        name="projectdescription"
                        value={this.state.userDetails.projectdescription}
                        onChange={this.handleChange}
                    />{" "}
                    <br />
                    {this.state.showupdatesbtn} ? (
                    <button type="button" onClick={this.handleUpdate}>
                        update user
                    </button>
                    )  (

                    <button type="button" onClick={this.addUser}>
                        Add User
                    </button>)
                </form>

                <table border={1}>
                    <thead>
                        <tr>


                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Email</td>
                            <td>phone</td>
                            <td>address</td>
                            <td>city</td>
                            <td>state</td>
                            <td>ZipCode</td>
                            <td>website or domainname</td>
                            <td>project description</td>
                            <th>Edit User</th>
                            <td>Deleteusr</td>

                        </tr>


                    </thead>
                    <tbody>
                        {this.state.allUsers.map((obj, i) => {
                            return (
                                <tr>
                                    <td>{obj.Fname}</td>
                                    <td>{obj.lname}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.phone}</td>
                                    <td>{obj.address}</td>
                                    <td>{obj.city}</td>
                                    <td>{obj.state}</td>
                                    <td>{obj.zipcode}</td>
                                    <td>{obj.websiteordomainname}</td>
                                    <td>{obj.projectdescription}</td>
                                    <td>
                                        <button onClick={() => { this.handleEdit(obj, i) }}>Edit User</button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                this.deleteUser(i);
                                            }}
                                        >
                                            deleteUser

                                        </button>

                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div >
        );
    }
}
