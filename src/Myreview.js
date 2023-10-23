import React from 'react'
import { mydata2 } from './Mydata'
import { FaAtlassian,FaStar,FaStarHalf } from "react-icons/fa6";

function Myreview() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 text-center'>
                    <h1><span>CUSTOMER'S </span>REVIEW</h1>
                </div>
                {
                    mydata2.map((f)=>{
                        return(
                            <div className='col-sm-4 mt-5'>
                                <div className='card text-center text-light bg-dark'>
                                    <span className='font'><FaAtlassian/></span>
                                    <p>{f.para}</p>
                                    <img src={f.myimg2} alt='' className='rounded-circle mx-auto mt-3' height={100} width={100} />
                                    <h6 className='mt-2'>{f.name}</h6>
                                    <span className='mb-5 font-child'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/></span>
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

export default Myreview
