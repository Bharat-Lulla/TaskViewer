import React, {useEffect, useState} from "react";
import NewTask from "./components/NewTask/NewTask"
import TaskDetails from "./components/Tasks/TaskDetails";
import "./app.css"
function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const temp= JSON.parse(localStorage.getItem("my_tasks"));

    if(temp != null)
      setTasks([...temp]);
    
  
  },[]);
  const addTaskHandler =(task)=>{

    var tmp = [];
    if(tasks === null)
    {
      tmp = [...task];
      setTasks([...tmp]);
    }
     

    else
    {
      tmp = [...tasks,task];
      setTasks((prevState)=>{
        return [
          ...prevState,
          task,
        ]
      })
    }


    console.log(tasks);
 
    window.localStorage.setItem('my_tasks', JSON.stringify(tmp));
  }
  //
 
  return (
    <div className="parent">
      
      <div className="left">
    
        
        <NewTask onSaveTaskData = {addTaskHandler} />
        

      </div>
      <div className="right"> 
  
          <TaskDetails taskData = {tasks} /> 
      </div>
    </div>
  );
}

export default App;
