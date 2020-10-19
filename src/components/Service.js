import React from 'react'
import { faHeart, faLightbulb, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const fontawsome_css={
    color: "rgb(1, 40, 77)",
    fontSize: "30px"
}

const fontawsome_icon={
    color: "darkblue",
    fontSize: "36px"
}



const Service=()=>
{

    return(<>

        {/* jumbotron */}
        <div className="jumbotron">

            <div className="container w-75 text-center text-black">

                <h3 className="display-4" style={{color:"white"}}> WELCOME </h3>
                <p style={{color:"white"}} >
                    At Website.com, we believe everyone deserves to have a website or online store. Innovation and simplicity makes us happy: our goal is to remove any technical or financial barriers that can prevent business owners from making their own website. We're excited to help you on your journey!
                </p>

            </div>

        </div>

        <div className="container my-5">
            <div className="row">

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


export default Service