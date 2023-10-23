import React from 'react'
import { mydata } from './Mydata'
import { mydata1 } from './Mydata'
import { FaGratipay } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { BsFillEyeFill } from "react-icons/bs";
import { mydata3 } from './Mydata'
// import { Link } from 'react-router-dom'
// import {FaStar,FaStarHalf } from "react-icons/fa6";
import { mydata2 } from './Mydata'
import { FaAtlassian, FaStar, FaStarHalf } from "react-icons/fa6";
import Myfooterpage from './Footerpage';


function Myhome() {
  return (
    <div>
      <div className='container  home p-5'>
        <div className='row'>
          <div className='col-lg-12 contain'>
            <h1>FRESH COFFEE IN  THE MORNING</h1>
            <p>Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans.</p>
            <button>Coffee</button>

          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row about3'>
          <div className='col-lg-12 text-center mt-3 mb-3'>
            <h1> <span>ABOUT</span> US</h1>
          </div>
          <div className='col-lg-6 about' >
            {/* <img src='img2.jpg' alt='' width={550} height={500}/> */}
          </div>
          <div className='col-lg-6 about1'>
            <h1>What Make Our Coffee Special?</h1>
            <p>For a coffee to qualify as “speciality”, it must have zero Primary defects and less than five Secondary defects. Cupping involves roasting the coffee and brewing simply with hot</p>
            <p>relies on the skill of the taster to assign scores to each of the coffee's attributes, such the acidity, body, flavour and aroma.</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h1><span>OUR</span> MENU</h1>
          </div>
          {mydata.map((d) => {
            return (
              <div className='col-lg-4 mt-5'>
                <div className='card text-center text-light bg-dark'>
                  <img src={d.myimg} alt='' className='rounded-circle mx-auto' height={100} width={100} />
                  <h5 >{d.heading}</h5>
                  <h4 >{d.prize}</h4>
                  <button className='btn-center'>Buy Now</button>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h1><span>LATEST</span> PRODUCT</h1>
          </div>
          {mydata1.map((e) => {
            return (
              <div className='col-lg-4 mt-5'>
                <div className='card text-center text-light bg-dark'>
                  <ul className=''>
                    <li><FaGratipay /></li>
                    <li><SlBasket /></li>
                    <li><BsFillEyeFill /></li>
                  </ul>


                  <img src={e.myimg1} alt='' height={400} />
                  <h4>{e.heading1}</h4>
                  <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></span>
                  <p>{e.prize1}</p>
                </div>
              </div>
            )
          })

          }
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center mt-5'>
            <h1><span>CUSTOMER'S</span> REVIEW</h1>
          </div>
          {
            mydata2.map((f) => {
              return (
                <div className='col-lg-4 mt-5'>
                  <div className='card text-center text-light bg-dark'>
                    <span className='font'><FaAtlassian /></span>
                    <p>{f.para}</p>
                    <img src={f.myimg2} alt='' className='rounded-circle mx-auto mt-3' height={100} width={100} />
                    <h6 className='mt-2'>{f.name}</h6>
                    <span className='mb-5 font-child'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h1> <span>OUR</span> BLOGS</h1>
          </div>

          {
            mydata3.map((g) => {
              return (
                <div className='col-lg-4 mt-5'>
                  <div class="card bg-dark text-light"  >
                    <img src={g.myimg3} class="card-img-top" alt="..." height={250} />
                    <div class="card-body">
                      <h5 class="card-title">{g.heading2}</h5>
                      <h6 class="card-title">{g.heading3}</h6>
                      <p class="card-text">{g.para1}</p>
                      <button className='parant-color' to="buy">Buy Now</button>
                    </div>
                  </div>
                </div>)
            })
          }

        </div>

      </div>
      <Myfooterpage/>

    
    </div>
  )
}

export default Myhome
