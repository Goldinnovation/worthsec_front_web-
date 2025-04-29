import React from "react";


export async function SignUpAPI(register) {

    try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/signUpAcc`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set the content-type to JSON
            },
            body: JSON.stringify(register),
          }
        );
  
        const data = await res.json();
  
        if (res.ok && data.message === "new user created") {
          router.push("/");
        } else if (!res.ok && data.message === "User already Exist") {
          setUserexist(true);
        } else {
        }
      } catch (error) {
        console.error("fetch failed");
      }
}