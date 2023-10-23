import React from 'react'
import { mydata } from './Mydata'

function Mymenu() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 text-center'>
                        <h1><span>OUR</span> MENU</h1>
                    </div>
                    {mydata.map((d) => {
                        return (
                            <div className='col-sm-4 mt-5'>
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
        </div>

    )
}

export default Mymenu
