'use client'
import React from 'react'
import { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import HeaderComponent from '../Header/headerComponent'
import ExploreComponent from '../Explore/exploreComponent'
import StoryComponent from '../Explore/Story/storyComponent'

const UserComponent = () => {

    
    // const [showNav, setShowNav] =  useState(true)
    const [searchArea, setSearchArea] = useState(false)
    const [explorePage, setExplorePage] = useState(true)
    const [homePage, setHomePage] = useState(false)
    const [optionToggle, setOptionToggle] = useState(false)
    const [notifcation, setNotification] = useState(false)
    const [connectUserToggle, setConnectUserToggle] = useState(false)
    const [eventInvitesToggle, setEventInvitesToggle] = useState(false)
    const [expandUserOption, setExpandUserOption] = useState(true)



    // const router = useRouter();




   
    const handleToggleSearch = () => {

        setSearchArea(!searchArea)
        setOptionToggle(false)
        setNotification(false)
        setConnectUserToggle(false)
        setEventInvitesToggle(false)


    }

    const handleExploreToggle = () =>  {
        setExplorePage(true)
        setHomePage(false)
        setSearchArea(false)
        setNotification(false)
        setConnectUserToggle(false)
        setEventInvitesToggle(false)



    }

    const handProfileToggle = () => {
        setHomePage(true)
        setExplorePage(false)
        setSearchArea(false)
        setNotification(false)
        setConnectUserToggle(false)
        setEventInvitesToggle(false)

    }


    const handleOptionToggle = () => {
        setOptionToggle(!optionToggle)
        setSearchArea(false)
        setConnectUserToggle(false)
        setEventInvitesToggle(false)
        setNotification(false)


    }


    const handleNotification = () => {
        setNotification(!notifcation)
        setConnectUserToggle(false)
        setSearchArea(false)
        setEventInvitesToggle(false)
        setOptionToggle(false)

    }

    const handleToggleConnect = () => {
        setConnectUserToggle(true)
        setEventInvitesToggle(false)
    }
    

    const handleToggleEventInvite = () => {
        setEventInvitesToggle(true)
        setConnectUserToggle(false)
    }

    const handleExpandUserOptions = () => {
        setExpandUserOption(!expandUserOption)
    }


  return (
   <div style={{
    color: "white", 
    height: "100vh",
    // flex: 1,
    width: "100%",
    // backgroundColor: "pink", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
   }}>
    {/*Middle Layer  */}
     <div  style={{
        // backgroundColor: "green",
        width: "99%",
        height: "99%",
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        flexDirection: "row",
        gap: "1%"

     }}>

         <div style={{
            // backgroundColor: "rgba(2, 11, 24, 0.51)", 
            height: "100%",
            width: "4%",
            borderTop: "1px solid grey",
            borderLeft: "1px solid grey", 
            borderBottom: "1px solid grey",
            borderRight: "1px solid grey", 
            borderRadius: "7px"



         }}>
            <HeaderComponent/>
            {/* hello header */}
         </div>
         <div style={{
            // backgroundColor: "black", 
            backgroundColor: "rgba(2, 11, 24, 0.51)", 
            height: "100%",
            width: "70%",
            borderTop: "1px solid grey",
            borderLeft: "1px solid grey", 
            borderBottom: "1px solid grey",
            borderRight: "1px solid grey", 
            borderRadius: "7px"


         }}>
            <ExploreComponent/>
         </div>
         <div style={{
            backgroundColor: "rgba(2, 11, 24, 0.51)", 
            height: "100%",
            width: "26%",
            borderTop: "1px solid grey",
            borderLeft: "1px solid grey", 
            borderBottom: "1px solid grey",
            borderRight: "1px solid grey", 
            borderRadius: "7px"

        


         }}>
            <StoryComponent/>
         </div>
        
     </div>
    
   </div>
  )

       

}


export default UserComponent
