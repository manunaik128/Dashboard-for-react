import React from 'react'
import './Content2.css'
import Graph from '../../assets/graph1.jpg'
import down from '../../assets/down.png'
import graph2 from '../../assets/graph2.jpg'
import graph3 from '../../assets/graph3.jpg'


const Content2 = () => {
  return (
    <>
      <div>
        <div className="content2">
          <div className="item1">
            <div className="top">
              <div className="con"> <small>Created by</small> <br />
                <h5>LIBOR Impact</h5>
              </div>
              <button>Today <img src={down} alt="" /></button>
            </div>
            <div className="item1-image">
              <img src={Graph} alt="" />

            </div>
            <div className="item2">
           <label> <input type="radio" name="status" value="impacted"/> Impacted</label>
<label> <input type="radio" name="status" value="non_impacted"/> Non Impacted</label>


            </div>
          </div>

           <div className="item1">
            <div className="top">
              <div className="con"> <small>Created by</small> <br />
                <h5>LIBOR Impact</h5>
              </div>
              <button>Today <img src={down} alt="" /></button>
            </div>
            <div className="item1-image2">
              
              <img src={graph2} alt="" />

            </div>
            <div className="item2">
           <label> <input type="radio" name="status" value="impacted"/> Impacted</label>
<label> <input type="radio" name="status" value="non_impacted"/> Non Impacted</label>


            </div>
          </div>

           <div className="item1">
            <div className="top">
              <div className="con"> <small>Created by</small> <br />
                <h5>LIBOR Impact</h5>
              </div>
              <button>Today <img src={down} alt="" /></button>
            </div>
            <div className="item1-image">
              <img src={graph3} alt="" />

            </div>
            <div className="item2">
           <label> <input type="radio" name="status" value="impacted"/> Impacted</label>
<label> <input type="radio" name="status" value="non_impacted"/> Non Impacted</label>


            </div>
          </div>

        </div>


      </div>




    </>
  )
}

export default Content2
