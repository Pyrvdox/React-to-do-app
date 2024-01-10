import { API_KEY, API_URL } from "./constants";

/**
 * Fetch all tasks
 * @param {function} successCallback - Function that saves incoming data
 */
export const getTasks = async (successCallback) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
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

export const AddTasks = async (obj) => {
  try {
    await fetch(`${API_URL}/tasks`, {
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

export const deleteTasks = async (taskID) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskID}`, {
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

export const UpdateTasks = async (obj, taskID) => {
  try {
    await fetch(`${API_URL}/tasks/${taskID}`, {
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