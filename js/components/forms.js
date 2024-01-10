import React, {useEffect, useState} from "react";
import { AddOperations } from "./operation";
import { getOperations } from "./operation";
import { UpdateOperations } from "./operation";
import { getSingleOperations } from "./operation";

export const AddTimeForm = ({ cancelAddTime,operationID }) => {

    const [operationtimer, setOperationTimer] = useState(false)
    useEffect(() => {
        getSingleOperations(operationID,setOperationTimer)
    },[operationtimer])

    const [timer, setTimer] = useState(0)
    useEffect(() => {
        setTimer(operationtimer.timeSpent)
    },[operationtimer])

    const [newTimeInput, setNewTimeInput] = useState('')

    const UpdateInput = (e) => {
        const value = e.target.value;
        setNewTimeInput(value)
        console.log(value)
    }

    const timeSubmitHandler = (e) => {
        e.preventDefault()
        if(newTimeInput > 0){
            UpdateOperations({...operationtimer, timeSpent:timer + parseInt(newTimeInput)}, operationID)  
        }
        setNewTimeInput('')
        cancelAddTime()
    }

    return (
        <>
            <form onSubmit={timeSubmitHandler}>
                <div className="input-group input-group-sm">
                    <input type="number"
                        className="form-control"
                        placeholder="Spent time in minutes"
                        style={{ width: "12rem" }} 
                        value={newTimeInput}
                        onChange={UpdateInput}    
                        />
                        
                    <div className="input-group-append">
                        <button className="btn btn-outline-success"><i className="fas fa-save" type='submit'></i></button>
                        <button className="btn btn-outline-dark" onClick={() => cancelAddTime()}><i className="fas fa-times false" ></i></button>
                    </div>
                </div>
            </form>
        </>
    )
}

export const NewOperationForm = ({taskID}) => {

    const [newOperationformData, setNewOperationFormData] = useState({
        description: "",
        status: "open"
      })

    const formSubmitHandler = (e) =>  {
        e.preventDefault()
        if (newOperationformData.title !== "") {
            AddOperations(newOperationformData, taskID)
        }

        setNewOperationFormData(
            {
                description: "",
                status: "open"
            }
        );
        
    }
    
    const inputHandler = (e) => {
        const value = e.target.value;
        setNewOperationFormData((prevState)=>({...prevState,description:value}));             
        }
    

    return (
        <>
            <div className="card-body">
                <form onSubmit={formSubmitHandler}>
                    <div className="input-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Operation description"
                            value = {newOperationformData.description}
                            onChange={inputHandler}
                             />

                        <div className="input-group-append">
                            <button className="btn btn-info" type='submit'>
                                Add
                                <i className="fas fa-plus-circle ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}