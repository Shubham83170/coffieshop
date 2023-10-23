import React from 'react'
import { mydata1 } from './Mydata'
import { FaGratipay } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { BsFillEyeFill } from "react-icons/bs";
import {FaStar,FaStarHalf } from "react-icons/fa6";
function Mylatestproduct() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 text-center'>
                    <h1><span>LATEST</span> PRODUCT</h1>
                </div>
                {mydata1.map((e)=>{
                    return(
                        <div className='col-sm-4 mt-5'>
                            <div className='card text-center text-light bg-dark'>
                                <ul className=''>
                                    <li><FaGratipay/></li>
                                    <li><SlBasket/></li>
                                    <li><BsFillEyeFill/></li>
                                </ul>

                               
                            <img src={e.myimg1} alt='' height={400}/>
                            <h4>{e.heading1}</h4>
                            <span><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></span>
                            <p>{e.prize1}</p>
                            </div>
                        </div>
                    )
                })

                }
            </div>
        </div>
      
    </div>
  )
}

export default Mylatestproduct
