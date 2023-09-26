import React from 'react'
import { MDBIcon } from 'mdb-react-ui-kit'
import { BsPersonCircle } from "react-icons/bs";
import styles from './UserProfile.module.css'
const UserProfile = () => {
  const user=JSON.parse(localStorage.getItem('userData')) 
    
    return (
    <div className={styles.userContainer}>
        <h1>Personal Information</h1>
      { user.map((userData)=>{
          return  <ul class="list-group w-50 m-3" style={{fontSize:'1.5rem',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
          <li class="list-group-item" ><BsPersonCircle fontSize={'1.8rem'}/><span style={{position:'relative',bottom:'0.5rem',left:'4rem',fontSize:'1.4rem'}}>User Name:- {userData.name}</span></li>
          <li class="list-group-item"><BsPersonCircle fontSize={'1.8rem'}/><span style={{position:'relative',bottom:'0.5rem',left:'4rem',fontSize:'1.4rem'}}>Id:- {userData.id}</span></li>
          <li class="list-group-item"><MDBIcon icon="envelope" className="me-3" />Email:- {userData.email}<span style={{position:'absolute',bottom:'0.2rem',right:'1rem',fontSize:'1.4rem'}}></span></li>
         
           </ul> 
        })}
      
      
      
    </div>
  )
}

export default UserProfile
