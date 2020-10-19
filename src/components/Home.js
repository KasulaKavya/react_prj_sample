import React,{ useState , useEffect } from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import axios from 'axios';

import List_grp from './List_grp.js'




const url1="http://localhost:3002/ex_pics"
const url2="http://localhost:3002/sb_pics"
const url3="http://localhost:3002/gc_pics"
const url4="http://localhost:3002/pp_pics"
const url5="http://localhost:3002/wd_pics"


const Home=()=>
{


    const [expics,setExpics]=useState( [ ] )

    const [sbpics,setSbpics]=useState( [ ] )

    const [gcpics,setGcpics]=useState( [ ] )

    const [pp_pics,setPp_pics]=useState( [ ] )

    const [wdpics,setWdpics]=useState( [ ] )


    useEffect( ()=>
    {
        axios.get(url1).then((res)=> setExpics(res.data) )
        axios.get(url2).then((res)=> setSbpics(res.data) )
        axios.get(url3).then((res)=> setGcpics(res.data) )
        axios.get(url4).then((res)=> setPp_pics(res.data) )
        axios.get(url5).then((res)=> setWdpics(res.data) )

    },[])


    return(<>

        <div className="container-fluid bg-light">
            <div className="row">

                {/* main left column */}
                    <div className="col-lg-3">
                        
                        <List_grp />

                    </div>
                {/* main left column */}


                {/* main right column */} 
                <div className="col-lg-9">

                    {/* EXPLOSION BOX */}
                        {/*  1st container */}
                        <div className="container">

                            <div className="text-center bg-in my-2 p-1 "><h2> EXPLOSION BOX </h2></div>
                        
                            {/*
                            <Link to="/sb" className="mx-2">SCRAP BOOKS</Link>
                            <Link to="/gc" className="mx-2"> GREETING CARDS </Link>
                            <Link to="/pp" className="mx-2"> POP UP BOXES </Link>
                            <Link to="/wall" className="mx-2"> WALL DECORS </Link> 
                            */}

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
                    {/* EXPLOSION BOX */}


                    {/* SCRAP BOOKS */}
                        {/*  1st container */}
                        <div className="container">

                            <div className="text-center bg-in my-2 p-1 "><h2> SCRAP BOOKS </h2></div>
                            
                            {/*
                            <Link to="/ex" class="mx-2"> EXPLOSION BOX </Link> 
                            <Link to="/gc" class="mx-2"> GREETING CARDS </Link>
                            <Link to="/pp" class="mx-2"> POP UP BOXES </Link>
                            <Link to="/wall" class="mx-2"> WALL DECORS </Link> 
                            */}

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
                    {/* SCRAP BOOKS */}


                    {/* GREETING CARDS */}
                        {/*  1st container */}
                        <div className="container">

                            <div className="text-center bg-in my-2 p-1 "><h2> GREETING CARDS </h2></div>
                        
                            {/*
                            <Link to="/ex" class="mx-2"> EXPLOSION BOX </Link> 
                            <Link to="/sb" class="mx-2"> SCRAP BOOKS </Link>
                            <Link to="/pp" class="mx-2"> POP UP BOXES </Link>
                            <Link to="/wall" class="mx-2"> WALL DECORS </Link> 
                            */}

                            {/* 1st ROW */}
                            <div className="row">

                                {
                                    gcpics.map((e,index)=>
                                    {
                                        return(<>

                                            {/* 1st right column */}  
                                            <div className="col-lg-4 my-2 " key={index}>

                                                {/*  1st column card */}
                                                <div className="card bg-light border-0">

                                                    <img src={`craft pics/popup gc/${e.img}`}  
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
                    {/* GREETING CARDS */}


                    {/* POPUP BOXES */}
                        {/*  1st container */}
                        <div className="container">

                            <div className="text-center bg-in my-2 p-1 "><h2> POPUP BOXES </h2></div>
                        
                            {/*
                            <Link to="/ex" class="mx-2"> EXPLOSION BOX </Link> 
                            <Link to="/sb" class="mx-2"> SCRAP BOOKS </Link>
                            <Link to="/gc" class="mx-2"> GREETING CARDS </Link>
                            <Link to="/wall" class="mx-2"> WALL DECORS </Link> 
                            */}

                            {/* 1st ROW */}
                            <div className="row">

                                {
                                    pp_pics.map((e,index)=>
                                    {
                                        return(<>

                                            {/* 1st right column */}  
                                            <div className="col-lg-4 my-2 " key={index}>

                                                {/*  1st column card */}
                                                <div className="card bg-light border-0">

                                                    <img src={`craft pics/popup gc/${e.img}`}  
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
                    {/* POPUP BOXES */}


                    {/* WALL DECORS */}
                        {/*  1st container */}
                        <div className="container">

                            <div className="text-center bg-in my-2 p-1 "><h2> WALL DECORS </h2></div>
                        
                            {/*
                            <Link to="/ex" class="mx-2"> EXPLOSION BOX </Link> 
                            <Link to="/sb" class="mx-2"> SCRAP BOOKS </Link>
                            <Link to="/gc" class="mx-2"> GREETING CARDS </Link>
                            <Link to="/pp" class="mx-2"> POP UP BOXES </Link> 
                            */}

                            {/* 1st ROW */}
                            <div className="row">

                                {
                                    wdpics.map((e,index)=>
                                    {
                                        return(<>

                                            {/* 1st right column */}  
                                            <div className="col-lg-4 my-2 " key={index}>

                                                {/*  1st column card */}
                                                <div className="card bg-light border-0">

                                                    <img src={`craft pics/wall cages/${e.img}`}  
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
                    {/* WALL DECORS */}






                    


                </div>
                {/* main right column */}

            </div>
            {/* main right row */}

        </div>
        {/* container */}



         
        {/*
        <Switch>
            <Route path="/ex" component={Home} />
            <Route path="/sb" component={Home} />
            <Route path="/gc" component={Home} />
            <Route path="/pp" component={Home} />
            <Route path="/wall" component={Home} />
        </Switch>
        */}

        
        
    </>)



}

export default Home