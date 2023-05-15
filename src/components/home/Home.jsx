import React,{useState} from 'react';
import "./home.css"

export default function Home() {
    const [Plan1, setPlan1] = useState(179);
    const [price, setPrice] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);
  return (
    <div className='home-container'>
        <div className='home-wrapper'>
            <div className='home-left'>
                <div className="home-top text-white">
                    <p>Access curated courses worth</p>
                    <p style={{"marginRight":"30px"}}>
                        <span className='home-left-inr'>&#8377; 
                        <del className="home-del">
                            <span style={{"color":"white"}}>18,500</span>
                        </del>
                        </span> at just 
                        <span className='home-left-inr'>
                            <span style={{"color": "#0096FF","fontSize":"40px"}}>
                                &#8377; 99
                            </span>
                        </span> 
                        per year!
                    </p>
                </div>
                <div className="home-list text-white">
                    <div className='home-list-icon my-4 d-flex'>
                        <img src="/images/Group 20.png" width="39.46px" height="40.8px" alt="" />
                        <p className='home-list-text'>
                            <span style={{"color": "#0096FF"}}>
                                100+
                            </span> Job relevant courses
                        </p>
                    </div>
                    <div className='home-list-icon my-4 d-flex'>
                        <img src="/images/Group 19.png" width="39.46px" height="40.8px" alt="" />
                        <p className='home-list-text'>
                            <span style={{"color": "#0096FF"}}>
                                20,000+
                            </span> Hours of content
                        </p>
                    </div>
                    <div className='home-list-icon my-4 d-flex'>
                        <img src="/images/Group 16.png" width="39.46px" height="40.8px" alt="" />
                        <p className='home-list-text'>
                            <span style={{"color": "#0096FF"}}>
                                Exclusive
                            </span> webinar access
                        </p>
                    </div>
                    <div className='home-list-icon my-4 d-flex'>
                        <img src="/images/Group 17.png" width="39.46px" height="40.8px" alt="" />
                        <p className='home-list-text'>
                            Scholarship worth <span style={{"color": "#0096FF"}}>
                                &#8377; 94,500
                            </span>
                        </p>
                    </div>
                    <div className='home-list-icon my-4 d-flex'>
                        <img src="/images/Group 15.png" width="39.46px" height="40.8px" alt="" />
                        <p className='home-list-text'>
                            <span style={{"color": "#0096FF"}}>
                                Ad Free
                            </span> learning experience
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-right text-white">
            <div className="home-right-wrapper">
                <div className="home-right-top d-flex justify-content-around py-4">
                    <div className="home-right-top-left">
                        <p className='home-right-signup text-white'>1</p>
                        <p className='home-right-text1 text-black'>Sign Up</p>
                    </div>
                    <div className="home-right-top-right">
                        <p className='home-right-signup text-white'>2</p>
                        <p className='text-black home-right-text2'>Subscribe</p>
                    </div>
                </div>
                <div className="home-right-middle">
                    <h6>Select your subcription plan</h6>
                    <div className='home-right-middle-box1'>
                        <div className='home-righ-offer-expired'>
                            <p>Offer expired</p>
                        </div>
                        <div className='home-right-middle-box2'>
                            <input type="radio" className='home-right-middle-select' />
                            <label>12 Months Subscription</label>
                            <div className='home-right-middle-amount'>
                                <p>Total <span style={{"fontSize":"1rem"}}>&#8377;99</span> <br /> &#8377;8 <span style={{"color":"#BEBEBE"}}>/mo</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='home-right-middle-box'>
                    <div className='home-righ-offer-recommended'>
                            <p>Recommended</p>
                        </div>
                        <div className='home-right-middle-box2'>
                            <input type="radio" className='home-right-middle-select' />
                            <label>12 Months Subscription</label>
                            <div className='home-right-middle-amount'>
                                <p>Total <span style={{"fontSize":"1rem"}}>&#8377;179</span> <br /> &#8377;15 <span style={{"color":"#BEBEBE"}}>/mo</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='home-right-middle-box'>
                        <div className='home-right-middle-box2' style={{"marginTop":"25px"}}>
                            <input type="radio" className='home-right-middle-select' />
                            <label>6 Months Subscription</label>
                            <div className='home-right-middle-amount'>
                                <p>Total <span style={{"fontSize":"1rem"}}>&#8377;149</span> <br /> &#8377;25 <span style={{"color":"#BEBEBE"}}>/mo</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='home-right-middle-box'>
                        <div className='home-right-middle-box2' style={{"marginTop":"25px"}}>
                            <input type="radio" className='home-right-middle-select' />
                            <label>3 Months Subscription</label>
                            <div className='home-right-middle-amount'>
                                <p>Total <span style={{"fontSize":"1rem"}}>&#8377;99</span> <br /> &#8377;33 <span style={{"color":"#BEBEBE"}}>/mo</span></p>
                            </div>
                        </div>
                    </div>
                    <hr className='hrLine' />
                    <div className='home-subs'>
                        <p>Subscription Fee</p>
                        <p>&#8377;18,500</p>
                    </div>
                    <div className='home-right-middle-box3'>
                        <div className='home-right-middle-limited'>
                            <div>
                                <p className='limited'>
                                    Limited time offer
                                </p>
                                <p className='limited-offer'><span style={{"marginRight":"10px"}}><img src="/images/red-vector.png" alt="" /></span>offer valid till 25th March 2023</p>
                            </div>
                            <p className='limited-price'>
                                -&#8377;18,401
                            </p>
                        </div>
                    </div>
                    <div className='limited-total'>
                        <p>Total <spna style={{"color":"#3C4852"}}>(Incl of 18% GST)</spna></p>
                        <p>&#8377;149</p>
                    </div>
                </div>
                <div className="home-right-bottom">
                    <div className='home-right-bottom-btn'>
                        <button className="bottom-btn-cancel">CANCEL</button>
                        <button className="bottom-btn-pay">PROCEED TO PAY</button>
                    </div>
                    <div className='home-right-bottom-img' style={{}}>
                        <img src="/images/Frame 12537.png" />
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

