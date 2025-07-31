import React from 'react'
import './Content1.css'
import text from '../../assets/text.png'
import active from '../../assets/active.png'
import review from '../../assets/review.png'
import approve from '../../assets/approve.png'
import signature from '../../assets/signature.png'

const content1 = () => {
  return (
    <>
      <div>
        <div className="container">
            <div className="item">
                <div className="item-image">
                     <img src={text}alt="" />
                </div>
               
                <div className="item-content">
                    <h4>322</h4>
                  <span>Completed</span>
                </div>
            
            </div>
              <div className="item">
                <div className="item-image">
                     <img src={active}alt="" />
                </div>
               
                <div className="item-content">
                    <h4>208</h4>
                  <span>Active</span>
                </div>
            
            </div>
              <div className="item">
                <div className="item-image">
                     <img src={review}alt="" />
                </div>
               
                <div className="item-content">
                    <h4>85</h4>
                  <span>Review</span>
                </div>
            
            </div>
              <div className="item">
                <div className="item-image">
                     <img src={approve}alt="" />
                </div>
               
                <div className="item-content">
                    <h4>48</h4>
                  <span>Approval</span>
                </div>
            
            </div>
              <div className="item">
                <div className="item-image">
                     <img src={signature}alt="" />
                </div>
               
                <div className="item-content">
                    <h4>72</h4>
                  <span>Signature</span>
                </div>
            
            </div>
        </div>


      </div>

    </>
  )
}

export default content1
