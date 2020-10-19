import React,{useState , useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'




const url1="http://localhost:3002/ex_pics"

const Ex=()=>
{

    const [expics,setExpics]=useState( [ ] )


    useEffect( ()=>
    {
        axios.get(url1).then((res)=> setExpics(res.data) )
    },[])



    return(<>

        <div className="container-fluid bg-light">

            {/*  SUB NAV */}
            <ul className="nav my-2 justify-content-center mx-5" style={{ backgroundColor: " rgb(119, 208, 243)"}} >

                <li className="nav-item ">
                    <Link className="nav-link text-center text-black "
                    style={{ fontWeight:"bold", color:"rgb(30, 4, 121)", fontSize:"22px"}}> MENU </Link>
                </li>

                <li className="nav-item ">
                    <Link to={`/scrap books`} className="nav-link text-uppercase "
                    style={{ fontWeight:"bold", fontFamily:"italic", fontSize:"20px"}}> scrap books </Link>
                </li>

                <li className="nav-item ">
                    <Link to={`/greeting cards`} className="nav-link text-uppercase " 
                    style={{ fontWeight:"bold", fontFamily:"italic", fontSize:"20px"}}> greeting cards </Link>
                </li>

                <li className="nav-item ">
                    <Link to={`/popup boxes`} className="nav-link text-uppercase " 
                    style={{ fontWeight:"bold", fontFamily:"italic", fontSize:"20px"}} > popup box </Link>
                </li>

                <li className="nav-item ">
                    <Link to={`/wall decors`} className="nav-link text-uppercase "
                    style={{ fontWeight:"bold", fontFamily:"italic", fontSize:"20px"}}> wall decors</Link>
                </li>

            </ul>
            {/* SUB NAV */}

            <div className="row">

                <div className="col-lg-3">

                    {/*  EXPLOSION LIST-GROUP */}
                    <div className="list-group px-1 ">

                        <h4 className="list-group-item text-center bg-in my-2 p-1"> EXPLOSION BOXES MENU </h4>

                        <div className="list-group-item bg-i border-0 dropdown ">

                            <Link to={`/layer`} className="list-group-link text-uppercase " 
                            data-toggle="dropdown" id="navbar dropdown "  > layer explosion box </Link>

                            <div className="dropdown-menu" >
                                <Link className="nav-link " to="/1l" 
                                style={{ fontSize:"18px"}}> 1 Layer Explosion Box </Link>

                                <Link className="nav-link " to="/2l" 
                                style={{ fontSize:"18px"}}> 2 Layer Explosion Box </Link>

                                <Link className="nav-link " to="/3l" 
                                style={{ fontSize:"18px"}}> 3 Layer Explosion Box </Link>

                                <Link className="nav-link " to="/4l" 
                                style={{ fontSize:"18px"}}> 4 Layer Explosion Box </Link>

                                <Link className="nav-link " to="/5l" 
                                style={{ fontSize:"18px"}}> 5 Layer Explosion Box </Link>

                                <Link className="nav-link " to="/6l" 
                                style={{ fontSize:"18px"}}> 6 Layer Explosion Box </Link> 

                                <Link className="nav-link " to="/7l" 
                                style={{ fontSize:"18px"}}> 7 Layer Explosion Box </Link>         
                            </div>

                        </div>

                         <div className="list-group-item bg-i border-0">
                            <Link to={`/square`} className="list-group-link text-uppercase "> square explosion box </Link>
                        </div>

                        <div className="list-group-item bg-i border-0">
                            <Link to={`/heart `} className="list-group-link text-uppercase "> heart explosion box </Link>
                        </div>

                        <div className="list-group-item bg-i border-0">
                            <Link to={`/hexa`} className="list-group-link text-uppercase "> hexa explosion box </Link>
                        </div>

                    </div>
                    {/* EXPLOSION LIST-GROUP */}


                    {/* FOR MEDIA OBJECTS */}

                        {/* CARD */}
                        <div className="card my-2 w-100">

                            <div className="card-header text-center border-0" style={{backgroundColor:"mediumturquoise"}}>
                                <h6> RECENT ITEMS </h6>
                            </div>

                            <div className="card-body">
                                {/* MEDIA OBJECTS */}
                                <div className="media">
                                    <img src="craft pics/explosion box/1l.jpg" className="img-thumbnail mx-auto w-50 "/>
                                    <div className="media-body mx-3">
                                        <h6> 1 layer explosion box </h6>
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
                                    <img src="craft pics/explosion box/2l.jpg" className="img-thumbnail mx-auto w-50 "/>
                                    <div className="media-body mx-3">
                                        <h6> 1 layer explosion box  </h6>
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
                        {/*  CARD */}

                    {/* FOR MEDIA OBJECTS */}



                </div>
                {/* LEFT COLUMN */}


                {/* RIGHT COLUMN */}
                <div className="col-lg-9">

                    <div className="container">

                        <div className="text-center bg-in my-2 p-1 "><h2> EXPLOSION BOX </h2></div>

                        {/* 1st ROW */}
                        <div className="row">

                            {
                                expics.map((e,index)=>
                                {
                                    return(<>

                                        {/* 1st right column */}  
                                        <div className="col-lg-4 my-2 " key={index}>

                                            {/*  1st column card */}
                                            <div className="card bg-light border-0">

                                                <img src={`craft pics/explosion box/${e.img}`}  
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


export default Ex