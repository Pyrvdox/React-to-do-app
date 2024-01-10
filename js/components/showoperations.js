import React, { useState } from "react";
import { AddTimeButton, DeleteOperationButton } from "./buttons"
import { AddTimeForm } from "./forms"
import { deleteSingleOperations } from "./operation";

const ShowOperations = ({ Operation }) => {

    const [showForm, setShowForm] = useState(false);

    const ShowAddTimeHandler = () => {
        setShowForm(true)
    }

    const HideAddTimeHandler = () => {
        setShowForm(false)
    }

    const DeleteOperation = () => {
        deleteSingleOperations(Operation.id)

    }


    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    {Operation.description}
                    <span className="badge badge-success badge-pill ml-2">
                        {Operation.timeSpent}
                    </span>
                </div>
                {Operation.task.status == "open" ?
                    <>
                        {showForm ? <AddTimeForm cancelAddTime={HideAddTimeHandler} operationID={Operation.id} /> :

                            <div>
                                <AddTimeButton onAction={ShowAddTimeHandler} />
                                <DeleteOperationButton deleteOpAction={DeleteOperation} />
                            </div>
                        }
                    </>
                    :
                    null
                }
            </li>
        </>
    )

}

export default ShowOperations;