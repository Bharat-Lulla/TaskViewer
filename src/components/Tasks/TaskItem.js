import React from "react";
import "./TaskItem.css";


const TaskItem = (props) =>{
    return (
        <div className="item_task">
            <p>{props.name}</p>
            <p>{props.time}</p>
           

        </div>
    )
}

export default TaskItem;