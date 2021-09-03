import React, { useState } from "react"
import "./NewTask.css"; 


const NewTask = (props) =>{
    const [enteredName, setEnteredName] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredTime, setEnteredTime] = useState("");
    const nameChangeHandler = (event)=>{
        setEnteredName(event.target.value);
    }
    const descriptionChangeHandler = (event)=>{
        setEnteredDescription(event.target.value);
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    }
    const timeChangeHandler = (event)=>{
        setEnteredTime(event.target.value);
    }

    const submitHandler = event =>{
        
        event.preventDefault();
        

        const taskData = {
            id : Math.random().toString(),
            name : enteredName,
            description : enteredDescription,
            date : enteredDate,
            time : enteredTime,
            done : false
        };
        
        props.onSaveTaskData(taskData);

        setEnteredDate("");
        setEnteredDescription("");
        setEnteredTime("");
        setEnteredName("");
    };
    return(

        <div className="container">
            <form onSubmit={submitHandler}>
                <label for="tname">Task Name</label>
                <input type ="text" id="tname" value={enteredName} onChange={nameChangeHandler} required />

                <label for="dname">Task Description</label>
                <input type ="text" id="dname" value={enteredDescription} onChange={descriptionChangeHandler}/><br/>

                <input type = "date" placeholder = "Select Date" value={enteredDate} onChange={dateChangeHandler} required/>
                <input type = "time" placeholder = "Select Time " value={enteredTime} onChange={timeChangeHandler} required/><br/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default NewTask;