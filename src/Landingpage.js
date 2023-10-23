import React from 'react'
import { Link } from 'react-router-dom'
import { FaSistrix } from "react-icons/fa6";


function Mylandingpage() {
    return (
        <div>



            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                {/* <Link className="navbar-brand" to="#"></Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

                    <Link className="navbar-brand" to="#">
                        <img src="img1.png" alt="" width="130" height="24" />
                    </Link>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item ml-auto">
                                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="menu">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="review">Review</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="blogs">Blogs</Link>
                            </li>


                        </ul>
                        <ul className='me-5 search'>
                            <li>
                                <FaSistrix />
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Mylandingpage
