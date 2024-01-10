import React from "react";


export const NewTaskButton = () => {

    return (
        <>
            <button type="submit" className="btn btn-info">
                Add task
                <i className="fas fa-plus-circle ml-1"></i>
            </button>
        </>
    )
}

export const AddOperationButton = ({switcher, addNewOperation}) => {

    return (
        <button className="btn btn-info btn-sm mr-2" onClick={()=> switcher()}>      
        {addNewOperation ? 
        <>Dismiss action <i className="fas fa-minus-circle"></i></>
        : 
        <>Add operation <i className="fas fa-plus-circle ml-1"></i></>
        }
        </button>
        
    )
}

export const FinishTaskButton = ({finish}) => {

    return (
        <button className="btn btn-dark btn-sm" onClick={() => finish()}>
            Finish
            <i className="fas fa-archive ml-1"></i>
        </button>
    )
}

export const TrashButton = ({deleteAction}) => {
    return (
        <button className="btn btn-outline-danger btn-sm ml-2" onClick={()=> deleteAction()}>
            <i className="fas fa-trash false"></i>
        </button>
    )
}

export const AddTimeButton = ({onAction}) => {

    return (
        <button className="btn btn-outline-success btn-sm mr-2" onClick={()=> onAction()}>
            Add time
            <i className="fas fa-clock ml-1"></i>
        </button>
    )
}

export const DeleteOperationButton = ({deleteOpAction}) => {
    return (
        <button className="btn btn-outline-danger btn-sm" onClick={()=> deleteOpAction()}><i className="fas fa-trash" ></i></button>
    )
}
