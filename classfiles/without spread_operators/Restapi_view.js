import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'



const url='http://localhost:3002/users';


class Restapi_view extends Component
{
    
    constructor(props){
        super(props)

        this.state={ userdetails : [''] }

    }
   
    
    render()
    {

        const { id, name, email, phone, lang }= this.state.userdetails

        return(
            <>
                <div className="container py-2 ">

                    <h2 className="text-center"> selected {this.props.match.params.idno} restapi data </h2>

                    <ul>
                        <li> {id} </li>
                        <li> {name} </li>
                        <li> {email} </li>
                        <li> {phone} </li>
                        <li> {lang} </li>
                    </ul>

                    <Link to={`/user`} className="btn btn-primary text-center" > GO BACK </Link>

                </div> 
            </>
        )
    }


    componentDidMount()
    {
        axios.get(`${url}/${this.props.match.params.idno}`).then((x)=> this.setState({ userdetails : x.data}))
    }


}


export default Restapi_view;