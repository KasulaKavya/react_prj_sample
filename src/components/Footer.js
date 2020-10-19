import React from 'react'
import {Link} from 'react-router-dom'


const Footer=()=>
{

    return(<>

        <div className="container-fluid bg-dark text-white text-center p-5 ">
            <div className="row">

                <div className="col-lg-4">
                    <div className="card bg-fimg">
                        <div className="card-body text-center py-2" >
                            <ul type="none">
                                <li><Link to="/home" className="fl">Home</Link></li>
                                <li><Link to="/about" className="fl">Aout Us</Link></li>
                                <li><Link to="/service" className="fl">Services</Link></li>
                                <li><Link to="/contact" className="fl">Contact Us</Link></li>
                                <li><Link to="/login" className="fl">Log In</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card bg-fimg">
                        <div className="card-body text-center py-2">
                            <ul type="none">
                                <li><Link to="/explosion boxes" className="fl">Explosion Boxes</Link></li>
                                <li><Link to="/scrap books" className="fl">Scrap Books</Link></li>
                                <li><Link to="/greeting cards"className="fl">Greeting Cards</Link></li>
                                <li><Link to="/popup boxes" className="fl">Popup Boxes</Link></li>
                                <li><Link to="/wall decors" className="fl">Wall Decors</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card bg-fimg">
                        <div className="card-body text-center py-2" >
                            <ul type="none">
                                <li><Link to="/home" className="fl">Home</Link></li>
                                <li><Link to="/about" className="fl">Aout Us</Link></li>
                                <li><Link to="/service" className="fl">Services</Link></li>
                                <li><Link to="/contact" className="fl">Contact Us</Link></li>
                                <li><Link to="/login" className="fl">Log In</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <p className="p-5 pr-5 pl-5">
                    &copy; 2020 Software Engineer &reg; | All rights reserved
                </p>
                
            </div>
        </div>
    
    </>)

}


export default Footer