import React, {useState} from "react";
import { NewTaskButton } from "./buttons";
import { AddTasks } from "./task";

const NewTask = () => {

    const [newTaskformData, setNewTaskFormData] = useState({
        title: "",
        description: "",
        status: "open"
      })

    const formSubmitHandler = (e) =>  {
        e.preventDefault()
        if (newTaskformData.title !== "") {
            AddTasks(newTaskformData)
        }

        setNewTaskFormData(
            {
                title: "",
                description: "",
                status: "open"
            }
        );
        
    }
    

    const inputHandler = (e, type) => {
        const value = e.target.value;
        switch (type) {
            case "title":
                setNewTaskFormData((prevState)=>({...prevState,title:value}));
                break;
            case "description":
                setNewTaskFormData((prevState)=>({...prevState,description:value}));
                break;
        }
    }

    return (
        <>
            <div className="card shadow">
                <div className="card-body">
                    <h1 className="card-title">New task</h1>
                    <form onSubmit={formSubmitHandler}>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                name="title"
                                placeholder="Title"
                                value={newTaskformData.title}
                                onChange={(e, type) => inputHandler(e, "title")} />
                        </div>
                        <div className="form-group">
                            <input type="text"
                                className="form-control"
                                name="description"
                                placeholder="Description" 
                                value={newTaskformData.description}
                                onChange={(e, type) => inputHandler(e, "description")}    
                                />
                        </div>
                        <NewTaskButton/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewTask;