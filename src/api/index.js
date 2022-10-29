const baseURL = "http://fitnesstrac-kr.herokuapp.com/api";

export const getActivites = async (token) => {
  try {
    const response = await fetch(`${baseURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log("error getting all activities");
  }
};

export const registerUser = async ({ username, password }) => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error registering user");
  }
};

export const loginUser = async ({ username, password }) => {
  try {
    const response = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error logging in user");
  }
};

export const getUserDetails = async (token) => {
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error getting users details");
  }
};

export const getUserRoutines = async () => {
  try {
    const response = await fetch(`${baseURL}/users/:username/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error getting users routines");
  }
};

export const getAllActivites = async () => {
  try {
    const response = await fetch(`${baseURL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error getting all Activities");
  }
};

export const createActivity = async (token, name, description) => {
  try {
    const response = await fetch(`${baseURL}/activities (*)`, {
      method: "POST",
      body: JSON.stringify({
        name: `${name}`,
        description: `${description}`,
        Authorization: `Bearer ${token}`,
      }),
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error creating Activity");
  }
};

export const updateActivity = async ({ name, description }) => {
  try {
    const response = await fetch(`${baseURL}/activities/:activityId (*)`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error updating Activity");
  }
};

export const publicRoutineOnActivity = async () => {
  try {
    const response = await fetch(`${baseURL}/activities/:activityId/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error getting all Routines for that Activity");
  }
};

export const publicRoutines = async () => {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error getting all Routines");
  }
};

export const createRoutine = async (token, name, goal) => {
  try {
    const response = await fetch(`${baseURL}/routines (*)`, {
      method: "POST",
      body: JSON.stringify({
        name: `${name}`,
        goal: `${goal}`,
        Authorization: `Bearer ${token}`,
      }),
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error creating routine");
  }
};

export const updateRoutine = async ({ name, goal }) => {
  try {
    const response = await fetch(`${baseURL}/routines/:routineId (**)`, {
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        goal: goal,
      }),
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error updating Routine");
  }
};

export const deleteRoutine = async (token) => {
  try {
    const response = await fetch(`${baseURL}/routines/:routineId (**)`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error deleting Routine");
  }
};

export const addActivityToRoutine = async ({ activityId, count, duration }) => {
  try {
    const response = await fetch(`${baseURL}/routines/:routineId/activities`, {
      method: "POST",
      body: JSON.stringify({
        activityId: activityId,
        count: count,
        duration: duration,
      }),
    });

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error adding Activity to Routine");
  }
};

export const updateCountDurationToRoutine = async ({ count, duration }) => {
  try {
    const response = await fetch(
      `${baseURL}/routine_activities/:routineActivityId (**)`,
      {
        method: "PATCH",
        body: JSON.stringify({
          count: count,
          duration: duration,
        }),
      }
    );

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error updating Count or Duration to Routine");
  }
};

export const deleteActivityFromRoutine = async (token) => {
  try {
    const response = await fetch(
      `${baseURL}/routine_activities/:routineActivityId (**)`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();
    return result;
  } catch (ex) {
    console.log("error deleting Activity from Routine");
  }
};
