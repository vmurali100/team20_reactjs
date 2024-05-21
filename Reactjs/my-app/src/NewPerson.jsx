import { useState, useSyncExternalStore } from "react";




function displayuser(NewPerson) {
function NewPerson(){
    const [person]=useState({
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: "john.doe@example.com",
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zipCode: "12345"
        },
        phoneNumbers: [
            {
                type: "home",
                number: "555-555-5555"
            },
            {
                type: "work",
                number: "555-555-1234"
            }
        ],
        isMarried: false,
        hobbies: ["reading", "travelling", "coding"],
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
     
       
    })
