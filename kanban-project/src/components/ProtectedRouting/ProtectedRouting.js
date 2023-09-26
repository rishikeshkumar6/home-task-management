import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

const ProtectedRoutng=()=>{
    const auth=localStorage.getItem('userData')
    return auth?<Outlet/>:<Navigate to="/register"/>
}

export default ProtectedRoutng