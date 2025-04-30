import React from "react";


export async function LoginAPI(email, password) {

    try {
        const res = await fetch(`${process.env.BACKEND_API_URL}/api/login-token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content-type to JSON
          },
  
          body: JSON.stringify({
            loginEmail: email,
            loginPassword: password,
          }),
        });
       
        return res
      } catch (error) {
        console.error("fetch error on LoginAPI", error);
      }
}