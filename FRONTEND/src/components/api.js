
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
      return { success: false, error: "Coudln't fetch todos" };
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
      return { success: false, error: "Coudln't add todo" };
    }
  } catch (e) {
    return { success: false, error: `Network error: ${e.message}` };
  }
};

export const createProject = async (projectData) => {

  console.log(`registerData: ${projectData.title}`);

  const projectDataMapped = {
    project_name: projectData.title,
    description: projectData.description,
    product_owner: projectData.userId,
    team_members: projectData.teamIds,
  };

  try {
    const response = await fetch(`${BASE_URL}/api/project`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectDataMapped),
    });
    const result = await response.json();
    if (response.status === 200) {
      return { success: true, results: result };
    } else {
      return { success: false, error: result.error };
    }
  } catch (e) {
    return { success: false, error: e.message };
  }
};

export const checkUserExists = async (username) => {
  try {
    const { accessToken } = JSON.parse(localStorage.getItem("token"));
    const response = await fetch(`${BASE_URL}/users/${username}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const userId = await response.json();
    if (response.status === 200) {
      return { success: true, userId: userId };
    } else {
      return { success: false, error: "Couldn't find user" };
    }
  } catch (e) {
    return { success: false, error: `Network error: ${e.message}` };
  }
}