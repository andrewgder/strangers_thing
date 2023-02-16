export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2211-FTB-et-web-pt";
// export const KEY = "apikey=56938d8d-2f9d-40c4-9ad0-53f569690680";

export async function getPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createAccount(username, password) {
  const credentials = JSON.stringify({
    user: {
      username: username,
      password: password,
    },
  });

  fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("the register result", result);
    })
    .catch(console.error);
}

export async function login(username, password) {
  console.log(username, password);
  const credentials = JSON.stringify({
    user: {
      username: username,
      password: password,
    },
  });

  await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        const newToken = localStorage.setItem("token", result.data.token);
        const tokenValue = localStorage.getItem("token");
        console.log("token is:", tokenValue);
        console.log(result.data.message);
      } else {
        console.log(result.error.message);
        alert(result.error.message);
      }
      console.log("the login result", result);
    })
    .catch(console.error);
}

export async function createPost(
  title,
  description,
  price,
  location,
  willDeliver
) {
  const token = localStorage.getItem("token");
  console.log("create post function token is:", token);
  fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        location: location,
        willDeliver: willDeliver,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}
