import { API_KEY, API_URL } from "./constants";

/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */
export const getOperations = async (id, successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
      headers: {
        Authorization: API_KEY,
      },
    });

    const data = await response.json();

    if (data.error || typeof successCallback !== "function") {
      throw new Error("Błąd!");
    }

    successCallback(data.data);
  } catch (err) {
    console.log(err);
  }
};


export const AddOperations = async (obj,taskID) => {
    try {
      await fetch(`${API_URL}/tasks/${taskID}/operations`, {
          method: "POST",
          body: JSON.stringify(obj),
          headers: {
              Authorization: API_KEY,
              "Content-Type": "application/json",
          }
      })
  
  } catch (err) {
      console.log(err)
  }
  }

export const UpdateOperations = async (obj,operationID) => {
    try {
      await fetch(`${API_URL}/operations/${operationID}`, {
          method: "PUT",
          body: JSON.stringify(obj),
          headers: {
              Authorization: API_KEY,
              "Content-Type": "application/json",
          }
      })
  
  } catch (err) {
      console.log(err)
  }
  }


export const getSingleOperations = async (operationID, successCallback) => {
    try {
      const response = await fetch(`${API_URL}/operations/${operationID}`, {
        headers: {
          Authorization: API_KEY,
        },
      });
  
      const data = await response.json();
  
      if (data.error || typeof successCallback !== "function") {
        throw new Error("Błąd!");
      }
  
      successCallback(data.data);
    } catch (err) {
      console.log(err);
    }
  };

export const deleteSingleOperations = async (opID) => {
    try {
      const response = await fetch(`${API_URL}/operations/${opID}`, {
        method: "DELETE",
        headers: {
          Authorization: API_KEY,
        },
      });
  
      const data = await response.json();
  
      if (data.error || typeof successCallback !== "function") {
        throw new Error("Błąd!");
      }
  
    
    } catch (err) {
      console.log(err);
    }
  };