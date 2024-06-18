import { Component } from "react";



export class User_Class_Component extends Component {

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="">name : </label>
                    <input type="text" name="names" /> <br />
                    <label htmlFor="">email : </label>
                    <input type="email" name="email" /> <br />
                    <label htmlFor="">number : </label>
                    <input type="number" name="number" /> <br />

                </form>

                <table border={1}>

                    <thead>

                    </thead>

                    <tbody>

                    </tbody>


                </table>


            </div>
        )
    }
}