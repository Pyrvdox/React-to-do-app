import React, { useEffect, useState } from "react";
import {TrashButton, FinishTaskButton, AddOperationButton} from "./buttons"
import { getOperations } from "./operation";
import ShowOperations from "./showoperations";
import {NewOperationForm} from "./forms"
import { deleteTasks } from "./task";
import { UpdateTasks } from "./task";

const ShowTasks = ({task}) => {
    
    const [allOperations, setAllOperations] = useState(false);
    useEffect(() => {
        getOperations(task.id,setAllOperations)
    },[allOperations])

    const [addNewOperation, setAddNewOperation] = useState(false);
    
    const AddOpertaionSwitch = () => {
        setAddNewOperation(!addNewOperation)
    }

    const DeleteTask = () => {
        deleteTasks(task.id)
    }

    const UpdateTaskStatus = () => {
        UpdateTasks({...task, status:"closed"},task.id)
        setAddNewOperation(false)
    }

    return (
        <>
            <section className="card mt-5 shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                        <h5>{task.title}</h5>
                        <h6 className="card-subtitle text-muted">{task.description}</h6>
                    </div>

                    {task.status == "open" ? 
                    <div>
                        <AddOperationButton switcher={AddOpertaionSwitch} addNewOperation={addNewOperation}/>
                        <FinishTaskButton finish={UpdateTaskStatus}/>
                        <TrashButton deleteAction={DeleteTask}/>
                    </div>
                    :
                    <TrashButton deleteAction={DeleteTask}/>
                    }

                </div>
                {addNewOperation ? <NewOperationForm taskID={task.id}/> : null}
                
                <ul className="list-group list-group-flush">
                    {allOperations ? allOperations.map((Operation) => <ShowOperations key={Operation.id} Operation={Operation}/>): null}
                </ul>
            </section>
        </>
    )
}

export default ShowTasks;