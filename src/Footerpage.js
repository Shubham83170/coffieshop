import React from 'react'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

function Myfooterpage() {
  return (

    <div>
      <div className='contain2'>
        <div className='icon1'><div className='icon'><BsFacebook /></div></div>
        <div className='icon1'><div className='icon'><BsInstagram /></div></div>
        <div className='icon1'><div className='icon'><BsTwitter /></div></div>
        <div className='icon1'><div className='icon'><BsLinkedin /></div></div>
      </div>


        <div className='parant'>
        <div className='box1'>Home</div>
        <div className='box1'>About</div>
        <div className='box1'>Menu</div>
        <div className='box1'>Product</div>
        <div className='box1'>Review</div>
        <div className='box1'>Contact</div>
        <div className='box1'>Blogs</div>
        </div>

        <div className='parent1'>
          <div className='last'>Created By Mr. Shubham Singh | All Right Reserved</div>
        </div>

    </div>
  )
}

export default Myfooterpage
