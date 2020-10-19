import React from 'react'
import { faHeart, faLightbulb, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const fontawsome_css={
    color: "rgb(1, 40, 77)",
    fontSize: "30px"
}

const fontawsome_icon={
    color:"rgb(104, 212, 248)",
    fontSize: "36px"
}


const About=()=>
{

    return(<>

        <div className="container">
            <div className="row m-2 p-2">
                <div className="col-lg-12 text-center">
                    <h2 className="h2"> WELCOME TO CRAFTERINA </h2>
                    <h4 className="py-2" style={fontawsome_css} >What We Do Everyday</h4>
                    <p style={{fontSize: "medium" }}>
                        We starts our morning with news offers and trendy crafts. we take feedback from clients and improvements are made to satisfy clients requirements .
                    </p>
                </div>
            </div>
        </div>

        <div className="jumbotron">
            <div className="container w-75 text-center text-white">
                <h3 className="display-4" style={{color:"salmon"}} > ABOUT US </h3>
                <p style={{fontSize: "medium" }}>
                    Being motivated with cilents compliments.Always tries to give more excited crafts.
                    <b className="c">CUSTOMERS SATISFACTORY IS OUR ACHIEVEMNET.</b>
                    We do take feedbacks from clients and improvements are made to satisfy clients requirements .
                </p>

            </div>
        </div>

        <div className="container-fluid">
            <div className="row my-5 ">

                <div className="col-lg-4">
                    <div className="card border-0">
                        <div className="card-body">
                            <h4 className="py-2" style={fontawsome_css} > <FontAwesomeIcon icon={ faHeart } style={fontawsome_icon} className="px-1" /> Passion</h4>
                            <p style={{fontSize: "medium" }}>We are passionated towards doings crafts.We keep our heart and soul in making of crafts.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0">
                        <div className="card-body">
                            <h4 className="py-2" style={fontawsome_css} > <FontAwesomeIcon icon={ faLightbulb } style={fontawsome_icon} className="px-1" /> Creativity</h4>
                            <p style={{fontSize: "medium" }}>We are here to satisfy clients requirements and gets updated with new trends.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card border-0">
                        <div className="card-body">
                            <h4 className="py-2" style={fontawsome_css} > <FontAwesomeIcon icon={ faStar } style={fontawsome_icon} className="px-1" /> Quality</h4>
                            <p style={{fontSize: "medium" }}> Quality of our crafts will be 100% pure and perfect.Craftreina provides a quality crafts. </p>
                        </div>
                    </div>
                </div>


                
            </div>
        </div>



    </>)

}


export default About

