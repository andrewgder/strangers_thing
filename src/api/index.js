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
  console.log("Json test:", test);
  fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}
