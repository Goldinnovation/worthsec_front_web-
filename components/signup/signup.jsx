"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {SignUpAPI} from "../../app/api/signup/signupAPI"

const SignUpComponents = () => {
  const [showmismatch, setshowmisMatch] = useState(false);
  const [emptyinput, setemptyInput] = useState(false);
  const [userexist, setUserexist] = useState(false);

  const router = useRouter();

  const [register, setRegister] = useState({
    userName: "",
    userEmail: "",
    userPassword1: "",
    userPassword2: "",
  });

  const handleInput = (e) => {
    setRegister({ ...register, [e.target.className]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(register.userPassword1)

    if (register.userPassword1 === "" || register.userPassword2 === "") {
      setemptyInput(true);
      setshowmisMatch(false);

      return;
    }

    if (
      register.userPassword1 !== register.userPassword2 ||
      register.userPassword1 === ""
    ) {
      setshowmisMatch(true);
      setemptyInput(false);

      return;
    }

    await SignUpAPI(register)
   
  };

  return (
    <div style={{
        backgroundColor: "rgb(0, 0, 0)",

    }}>
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.36)",

            width: "30%",
            height: "330px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              textAlign: "center",
              height: "300px",
            }}
          >
            <div>
              <h2>Sign Up</h2>
              <hr />
            </div>
            <form onSubmit={handleSubmit}> 
                    <div style={{
                         height: "200px",
                         display: "flex",
                         flexDirection: "column",
                         justifyContent: "center",
                    }}>
                            <div style={{
                                 height: "30px",
                                 display: "flex",
                                 justifyContent: "center",
                                 gap: "15%",
                                 marginTop: "5%",
                                 marginBottom: "5%"
                            }}>
                                    <input type="text"  style={{
                                          backgroundColor: "rgb(254, 254, 254)",
                                          width: "40%",
                                          border: "1px solid black",
                                          borderRadius: "7px",
                                          paddingLeft: "2%",
                                    }} className='userName' onChange={handleInput} placeholder='Enter your Username'/>
                                    <input type="text"  
                                    style={{
                                        backgroundColor: "rgb(254, 254, 254)",
                                        width: "40%",
                                        border: "1px solid black",
                                        borderRadius: "7px",
                                        paddingLeft: "2%",
                                    }}
                                    className='userEmail' onChange={handleInput} placeholder='Enter your Email'/>
                            </div>
                            <div  style={{
                                    height: "30px",
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "15%",
                                    marginBottom: "10%",
                            }}>
                                <input type="password" 
                                style={{
                                    backgroundColor: "rgb(254, 254, 254)",
                                    width: "40%",
                                    border: "1px solid black",
                                    borderRadius: "7px",
                                    paddingLeft: "2%",
                                }}
                                 className="userPassword1"  onChange={handleInput}   placeholder='Enter your Password'/>
                                <input type="password" 
                                style={{
                                    backgroundColor: "rgb(254, 254, 254)",
                                    width: "40%",
                                    border: "1px solid black",
                                    borderRadius: "7px",
                                    paddingLeft: "2%",
                                }}
                                
                                className="userPassword2" onChange={handleInput}  placeholder='Please Repeat your Password'/>
                            </div>
                            <div className='errorMessage'>
                            {showmismatch &&(
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                         <div  style={{
                                                backgroundColor: "rgb(211, 94, 94)",
                                                width: "200px",
                                                height: "20px",
                                                borderRadius: "10px",
                                                border: "1px solid rgb(61, 9, 9)",
                                         }}>
                                         Password does not match
                                    </div>  
                                    </div>
                                    
                                )}
                            {emptyinput &&(
                                <div style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}>
                                    <div style={{
                                         backgroundColor: "rgb(211, 94, 94)",
                                         width: "200px",
                                         height: "20px",
                                         borderRadius: "10px",
                                         border: "1px solid rgb(61, 9, 9)",
                                    }}>
                                            Password field is empty
                                    </div>
                                    
                                </div>
                            )}
                            </div>
                            {userexist && (
                                <div>
                                     <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                     }}>
                                    <div style={{
                                           backgroundColor: "rgb(211, 94, 94)",
                                           width: "200px",
                                           height: "20px",
                                           borderRadius: "10px",
                                           border: "1px solid rgb(61, 9, 9)",
                                    }}>
                                            Username already exist
                                    </div>
                                    
                                </div>

                                </div>
                            )}
                           
                           

                    </div> 
                     <div
                                    style={{
                                      //   backgroundColor: "pink",
                                      height: "10%",
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      textAlign: "center",
                                    }}
                                  >
                                    <button
                                      style={{
                                        backgroundColor: "white",
                                        border: "1px solid black",
                                        height: "60%",
                                        width: "50%",
                                        borderRadius: "50px",
                                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Adds shadow
                                        cursor: "pointer", // Makes it look clickable
                                        fontSize: "16px", // Adjusts font size
                                        fontWeight: "400", // Makes text bold
                                        transition: "all 0.3s ease-in-out",
                                      }}
                                      onClick={handleSubmit}
                                    >
                                      Create Account
                                    </button>
                                  </div>
                    <div
                style={{
                //   backgroundColor: "blue",
                  height: "10%",
                  display: "flex",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5%",
                  marginTop: "3%"

                }}
              >
                <p style={{
                    colro: "white"
                }}>You have an Account ?</p>
                <Link
                  href={"/"}
                  style={{
                    width: "15%",
                    height: "1%",
                    fontSize: "15px",
                    color: "skyblue",
                    border: "1px solid white",
                    backgroundColor: "rgba(18, 18, 18, 0.32)",
                    textDecoration: "none",
                    borderRadius: "7px",
                    padding: "2%",
                  }}
                >
                  Login
                </Link>
              </div>

                    </form>
           
          </div>
        </div>
    </div>
  );
};

export default SignUpComponents;
