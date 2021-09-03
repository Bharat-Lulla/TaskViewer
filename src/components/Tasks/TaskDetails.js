import React, { useState } from "react";
import "./TaskDetails.css";
import TaskItem from "./TaskItem";



function TaskDetails(props) {

  const [showAll, setShowAll] = useState(false);


  const upcomingHandler = () => {
    setShowAll(false);
  }

  const allHandler = ()=>{
    setShowAll(true);
  }

  props.taskData.sort(function (a, b) {
    if(new Date(a.date) - new Date(b.date) === 0)
      return a.time.localeCompare(b.time);
    return new Date(a.date) - new Date(b.date);
  });

  



  return (
    <div>
      <div className="buttons">
        <button onClick={upcomingHandler}>Upcoming</button>
        <button onClick={allHandler}>All</button>

      </div>
      <div className="ul_list">


        {showAll ? props.taskData.map((task) => (
          <TaskItem
            //this key is important to tell react that this elemnt is different from other element because if we set some event on first item
            //    it may change becuase order changes again and agian if key is not provided every data gets update which is not good practice
            // so always use unique identifiers
            key={task.id}
            name={task.name}
            description={task.description}
            date={task.date}
            time={task.time}
            done={task.done}
          />
        )) : props.taskData.slice(0,3).map((task) => (
          <TaskItem
            //this key is important to tell react that this elemnt is different from other element because if we set some event on first item
            //    it may change becuase order changes again and agian if key is not provided every data gets update which is not good practice
            // so always use unique identifiers
            key={task.id}
            name={task.name}
            description={task.description}
            date={task.date}
            time={task.time}
            done={task.done}
            /> 
         )) }


      </div>

    </div>


  );
}

export default TaskDetails;