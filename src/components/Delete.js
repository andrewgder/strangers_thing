import { useState } from "react";

export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2211-FTB-et-web-pt";

export async function DeletePost(id) {
  console.log("deleted post id", id);
  await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
    .catch(console.error);
}

export default DeletePost;
