"use client"
import React, { useEffect } from 'react'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import UserComponent from '../../../components/main/user'


export default function Page() {

  const [pageState, setPageState] = useState(false)
  const params = useParams()
  const {username}  = params

  console.log('user', username);
  const router = useRouter()
  const [userState, setUserState] = useState(false)

 
    const handleCheckForUser = async () => {

      const token = localStorage.getItem("jwtToken")

      if (!token) {
        router.push(`/`);
        console.error("No token found, user is not authenticated");
        return;
      }
      try {

         const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const res = await fetch(`${apiUrl}/user/c/${username}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        
        if (!res.ok) {
          console.error("Response Error on handleCheckForUser function:",);
          return;
        }else{

        }

        const data = await res.json();

        if(data.message === "User Authenticated"){
          setPageState(true)
          setUserState(true)

        }else if(data.message == "Invalid User Request"){
          const activeUser = data.activeUser
          await router.push(`/user/${activeUser}`);

        }else {
          await router.push(`/`);
        }

      } catch (error) {
        console.error("Error in handleCheckForUser:", error);
      }
    };

    useEffect(() => {
    
    if (pageState == false) {
      handleCheckForUser();
    }
  }, [pageState]);

  return (

    <div>
      {/* {
        pageState && userState &&  (
          <div>
           
              <UserComponent/>
          </div>
        )
      } */}
                    <UserComponent/>

    </div>
  )
  
  
}

