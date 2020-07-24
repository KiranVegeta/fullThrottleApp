import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsClock } from "react-icons/bs";
import Activities from './Activities';
import swal from '@sweetalert/with-react'

export default function Card (member) {
    const [info, setInfo] = useState({
      modalVisibility: false,
      activity: member.member.activity_periods
    });
    function a(e) {
      setInfo({...info, modalVisibility: true})
    }
  
    useEffect(() => {
      if(info.modalVisibility === true) {
        swal({
          title: 'Activities',
          content: <Activities info={info}/>,
          showConfirmButton: false
        });
      }
    }, [info])
    return (
  <div class="col mb-3">
    <div class="card">
      <img src="https://via.placeholder.com/340x120/87CEFA/000000" alt="Cover" class="card-img-top"></img>
      <div class="card-body text-center"> 
      <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User" class="profile-image img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
      <h5 class="card-title">{member.real_name}</h5>
      <p class="text-muted font-size-sm">{member.tz}</p>
      <div class="float-right">
      <BsClock class="text-muted iconStyle" onClick={a}/>
      </div>
      </div>
    </div>
  </div>
  )
}