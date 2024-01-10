import React, { useEffect, useState } from "react";
import NewTask from "./components/newtask";
import ShowTasks from "./components/showtasks";
import { getTasks } from "./components/task";

const MainApp = () => {

    const [allTasks, setAllTasks] = useState(false);
    useEffect(() => {
      getTasks(setAllTasks)
    },[allTasks])

    
  
    return (
      <>
        <NewTask />
        {allTasks ? allTasks.map((task) => <ShowTasks key={task.id} task={task} />) : null}
      </>
    )

}

export default MainApp;