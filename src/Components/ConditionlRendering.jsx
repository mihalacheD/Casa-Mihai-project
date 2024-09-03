/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";




function ConditionalRender({children}){

  const [showChildren, setShowChildren] = useState(false)
  const location = useLocation()



  useEffect(() => {
    if(
      location.pathname === '/camere' ||
      location.pathname === '/activitati' ||
      location.pathname === '/transfer' ||
      location.pathname === '/contact' ||
      location.pathname === '/acord' ||
      location.pathname === '/nota' ||
      location.pathname === '/politica'||
      location.pathname === '/despreNoi' ||
      location.pathname === '/galerie' ||
      location.pathname === '/excursii' ||
      location.pathname === '/gastronomia' ||
      location.pathname === '/obiective' ||
      location.pathname === "/plaja"
    ){
      setShowChildren(false)
    } else {
      setShowChildren(true)
    }
  },[location])

  return(
    <>
    {showChildren && children}
    </>
  )
}

export default ConditionalRender