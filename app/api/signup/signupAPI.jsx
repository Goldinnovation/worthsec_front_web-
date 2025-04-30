import React from "react";


export async function SignUpAPI(register) {

 
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const res = await fetch(
          `${apiUrl}/api/signUpAcc`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set the content-type to JSON
            },
            body: JSON.stringify(register),
          }
        );
  
      return res 
      } catch (error) {
        console.error("fetch failed");
      }
}