import React from 'react'
import { mydata3 } from './Mydata'
// import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Myblog() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <h1><span>OUR </span>BLOGS</h1>
                    </div>

                    {
                        mydata3.map((g) => {
                            return(
                            <div className='col-sm-4 mt-5'>
                                <div className="card bg-dark text-light"  >
                                    <img src={g.myimg3} className="card-img-top" alt="..." height={250}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{g.heading2}</h5>
                                            <h6 className="card-title">{g.heading3}</h6>
                                            <p className="card-text">{g.para1}</p>
                                            <button className='parant-color' to="buy">Buy Now</button>
                                            
                                        </div>
                                </div>
                            </div>)
                        })
                    }

                </div>

            </div>

        </div>
    )
}

export default Myblog
