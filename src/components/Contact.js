import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFax, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'



const fontawsome_css={
    color: "rgb(43, 13, 128)",
    fontSize: "45px"
}

const Contact=()=>
{

    return(<>

        {/* JUMBOTRON */}

        <div className="jumbotron">

            <div className="container w-75 text-left text-white">

                <h6 className="display-4 font-weight-bold">Get In Touch</h6>
            
                <p className="py-2">
                    What Should You Include on a Contact Page? Ideally, a contact page should include both an email address and a contact form for visitors to fill out. You may also choose to include a business address, phone number, or specific employee/department contact information.
                </p>
                <button className="btn btn-primary text-white"> CONTACT </button>
            
            </div>
            
        </div>
        {/* JUMBOTRON */}


        {/* FORMS */}

        <div className="container-fluid my-2">
            <div className="row">

                {/* FIRST COLUMN */}
                <div className="col-lg-8">

                    {/* CARD */}
                    <div className="card my-2 bg-light">
                        <div className="card-body">
                            
                            <form className="row">

                                <div className="col-lg-6">
                                    <label className="font-weight-bold"> FIRST NAME </label>
                                    <input type="text" className="form-control"/>
                                </div>

                                <div className="col-lg-6">
                                    <label className="font-weight-bold"> LAST NAME </label>
                                    <input type="text" className="form-control"/>
                                </div>

                                <div className="col-lg-6">
                                    <label className="font-weight-bold"> EMAIL </label>
                                    <input type="mail" className="form-control"/>
                                </div>

                                <div className="col-lg-6">
                                    <label className="font-weight-bold"> PHONE NUMBER </label>
                                    <input type="number" className="form-control"/>
                                </div>

                                <div className="col-lg-12">
                                    <label className="font-weight-bold"> MESSAGE </label>
                                    <textarea className="form-control font-weight-bold"></textarea>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary p-1 m-3 "> SUBMIT </button>
                                </div>

                            </form>

                        </div>
                    </div>
                    {/* CARD */}

                </div>
                {/* FIRST COLUMN */}



                {/* SECOND COLUMN */}
                <div className="col-lg-4">

                    {/* CONTAINER */}
                    <div className="container">

                        <div className="card m-2 bg-light">
                            <div className="card-body">

                                <div className="media text-center">
                                    <FontAwesomeIcon icon={ faMobileAlt } style={fontawsome_css} />
                                    <div className="media-body">
                                        <h5> PHONE NUMBER </h5>
                                        <b> +91-823-254-3692</b>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="card m-2 bg-light ">
                            <div className="card-body">

                                <div className="media text-center">
                                    <FontAwesomeIcon icon={ faEnvelope } style={fontawsome_css} />
                                    <div className="media-body">
                                        <h5> EMAIL ID </h5>
                                        <b> kav@gmail.com </b>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="card m-2 bg-light ">
                            <div className="card-body">

                                <div className="media text-center">
                                    <FontAwesomeIcon icon={ faFax } style={fontawsome_css} />
                                    <div className="media-body">
                                        <h5> FAX ADDRESS </h5>
                                        <b> +91-823-254-3692 </b>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="card m-2 bg-light">
                            <div className="card-body">

                                <div className="media text-center">
                                    <FontAwesomeIcon icon={ faMapMarkerAlt } style={fontawsome_css} />
                                    <div className="media-body">
                                        <h5> LOCATION </h5>
                                        <b> L.B NAGAR,HYD </b>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* CONTAINER */}
                    
                </div>
                {/* SECOND COLUMN */}

            </div>

        </div>
        {/* FORMS */}

        <div className="container-fluid">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30464.799239604123!2d78.53249007502686!3d17.358925038110524!2m3!1f0!2f0!3f0!3m2!
            1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98aeadc10291%3A0x6e2e7faa27222ade!2sL.%20B.%20Nagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1596280423068!5m2!1sen!2sin"
            className="w-100 m-2 p-1" style={{height:"500px"}} >
            </iframe>

        </div>

    </>)

}


export default Contact