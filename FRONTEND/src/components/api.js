
const HOST = "localhost";
const PORT = 8082;
const BASE_URL = `http://${HOST}:${PORT}`;

export const login = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const json = await response.json();
    if (response.status === 200) {
      return { success: true, token: json };
    } else {
      return { success: false, error: json.error };
    }
  } catch (e) {
    return { success: false, error: e.message };
  }
};

export const register = async (registerData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    const result = await response.json();
    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: result.error };
    }
  } catch (e) {
    return { success: false, error: e.message };
  }
};

export const getTasksList = async (id) => {
  try {
    const { accessToken } = JSON.parse(localStorage.getItem("token"));
    const response = await fetch(`${BASE_URL}/api/tasksproject/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const todos = await response.json()
    if (response.status === 200) {
      return { success: true, results: todos };
    } else {
      console.log("Couldn't fetch tasks");
      return { success: false, error: "Couldn't fetch tasks" };
    }
  } catch (e) {
    console.log("Network error");
    return { success: false, error: `Network error: ${e.message}` };
  }
}

export const saveTask = async (task) => {
  try {
    const { accessToken } = JSON.parse(localStorage.getItem("token"));
    const response = await fetch(`${BASE_URL}/api/task`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const added = await response.json()
    if (response.status === 200) {
      return { success: true, results:added };
    } else {
      return { success: false, error: "Couldn't save task" };
    }
  } catch (e) {
    return { success: false, error: `Network error: ${e.message}` };
  }
};

export const destroyTask = async (taskId) => {
  try {
    const { accessToken } = JSON.parse(localStorage.getItem("token"));
    const response = await fetch(`${BASE_URL}/api/task/${taskId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const todos = await response.json();
    if (response.status === 200) {
      return { success: true, results: todos };
    } else {
      return { success: false, error: "Couldn't delete task" };
    }
  } catch (e) {
    return { success: false, error: `Network error: ${e.message}` };
  }
};

export const getTodoList = async () => {
  try {
    const { accessToken } = JSON.parse(localStorage.getItem("token"));
    const response = await fetch(`${BASE_URL}/users/me/todos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const todos = await response.json();
    if (response.status === 200) {
      return { success: true, todoList: todos };
    } else {
      return { success: false, error: "Couldn't fetch todos" };
    }
  } catch (e) {
    return { success: false, error: `Network error: ${e.message}` };
  }
}

export const addTodo = async ({ what }) => {
  try {
    const { accessToken } = JSON.parse(localStorage.getItem("token"));
    const response = await fetch(`${BASE_URL}/users/me/todos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ what }),
    });
    const added = await response.json();
    if (response.status === 201) {
      return { success: true, added };
    } else {
      return { success: false, error: "Couldn't add todo" };
    }
  } catch (e) {
    return { success: false, error: `Network error: ${e.message}` };
  }
};