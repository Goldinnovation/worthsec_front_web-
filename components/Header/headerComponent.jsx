
"use client"
import React from "react"

const HeaderComponent = () => {
 

    return(
        <div style={{
            // backgroundColor: "pink", 
            // backgroundColor: "rgba(42, 42, 42, 0.3)",

            width:"100%", 
            height: "100%", 

        }}>
            <div style={{
                // backgroundColor: "green",
                width: "100%",
                height: "90%"
            }}>
                {/* <LeftnavBarContent/> */}
                nav
            </div>
            <div style={{
                // backgroundColor: "orange",
                width: "100%",
                height: "10%", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                borderTop: "1px solid grey"


            }}>

              <div style={{
                border: "2px solid grey", 
                borderRadius: "50px",
                width: "70%", 
                height: "40%", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 

              }}>
                +
              </div>
            </div>

        </div>
    )
}

export default HeaderComponent