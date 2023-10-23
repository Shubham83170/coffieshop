import React from 'react'

function Myabout() {
  return (
    <div>
      <div className='container'>
        <div className='row about3'>
            <div className='col-sm-12 text-center mt-3 mb-3'>
                <h1><span>ABOUT</span> US</h1>
            </div>
            <div className='col-sm-6 about' >
              {/* <img src='img2.jpg' alt='' width={550} height={500}/> */}
            </div>
            <div className='col-sm-6 about1'>
              <h1>What Make Our Coffee Special?</h1>
              <p>For a coffee to qualify as “speciality”, it must have zero Primary defects and less than five Secondary defects. Cupping involves roasting the coffee and brewing simply with hot</p>
              <p>relies on the skill of the taster to assign scores to each of the coffee's attributes, such the acidity, body, flavour and aroma.</p>
              <button>Shop Now</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Myabout
