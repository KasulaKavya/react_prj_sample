import React,{ useState , useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'



const url2="http://localhost:3002/sb_pics"

const Sb=()=>
{

    const [sbpics,setSbpics]=useState( [ ] )


    useEffect( ()=>
    {
        axios.get(url2).then((res)=> setSbpics(res.data) )
    },[])


    return(<>

        <div className="container-fluid bg-light">

            <div className="row">

                <div className="col-lg-3">
                    {/* LIST-GROUP */}
                    <div className="list-group px-1 ">

                        <h4 className="list-group-item text-center bg-info my-2 p-1"> MENU </h4>

                        <div className="list-group-item bg-i border-0">
                            <Link to={`/explosion boxes`} className="list-group-link text-uppercase "> explosion boxes </Link>
                        </div>

                        <div className="list-group-item bg-i border-0">
                            <Link to={`/scrap books`} className="list-group-link text-uppercase "> scrap books </Link>
                        </div>

                        <div className="list-group-item bg-i border-0">
                            <Link to={`/greeting cards`} className="list-group-link text-uppercase "> greeting cards </Link>
                        </div>

                        <div className="list-group-item bg-i border-0">
                            <Link to={`/popup boxes`} className="list-group-link text-uppercase "> popup box </Link>
                        </div>

                        <div className="list-group-item bg-i border-0">
                            <Link to={`/wall decors`} className="list-group-link text-uppercase "> wall decors</Link>
                        </div>

                    </div>
                    {/* LIST-GROUP */}


                    {/* Card */}
                    <div className="card my-2 w-100">

                        <div className="card-header text-center border-0" style={{backgroundColor:" mediumturquoise"}}>
                            <h6> RECENT ITEMS </h6>
                        </div>

                        <div className="card-body">

                            {/* MEDIA OBJECTS */}
                            <div className="media">
                                <img src="craft pics/scrap books/sb1.jpg" className="img-thumbnail mx-auto w-50 "/>
                                <div className="media-body mx-3">
                                    <h6> Scrap Books </h6>
                                    <p>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </p>
                                    <p>cost: &#8377; 250</p>
                                </div>
                            </div>
                            {/* MEDIA OBJECTS */}
                            
                        </div>

                        <div className="card-body">

                            {/* MEDIA OBJECTS */}
                            <div className="media">
                                <img src="craft pics/scrap books/sb2.jpg" className="img-thumbnail mx-auto w-50 "/>
                                <div className="media-body mx-3">
                                    <h6> Scrap Books  </h6>
                                    <p>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </p>
                                    <p>cost: &#8377; 250</p>
                                </div>
                            </div>
                            {/* MEDIA OBJECTS */}
                            
                        </div>  

                    </div>
                    {/* CARD */}

                </div>

                {/* RIGHT COLUMN */}
                <div className="col-lg-9">
                    <div className="container">

                        <div className="text-center bg-in my-2 p-1 "><h2> SCRAP BOOKS </h2></div>

                        {/* 1st ROW */}
                        <div className="row">

                            {
                                sbpics.map((e,index)=>
                                {
                                    return(<>

                                        {/* 1st right column */}  
                                        <div className="col-lg-4 my-2 " key={index}>

                                            {/*  1st column card */}
                                            <div className="card bg-light border-0">

                                                <img src={`craft pics/scrap books/${e.img}`}  
                                                className="card-img-top mx-auto w-90 h-300 " />

                                                <div className="card-body text-center">

                                                    <h5 className="card-title text-uppercase ">{e.name}</h5>
                                                    
                                                        <ul type="none">
                                                            <li> {` Size : ${e.features[0]}`} </li>
                                                            <li> {` Price : ${e.features[1]}`} </li>
                                                        </ul>
                                                    
                                                    <Link className="btn btn-primary ">{e.buy}</Link>

                                                </div>

                                            </div>
                                            {/*  1st column card */}

                                        </div>
                                        {/* 1st right column */}
                                        
                                        
                                    </>)
                                })
                            }
                        

                        </div>
                        {/* 1st ROW */}

                    </div> 
                    {/* 1st container */}
                        

                </div>
                {/* RIGHT COLUMN */}

            </div>
        </div>

    </>)

}


export default Sb