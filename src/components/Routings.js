import React from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'


import Header from './Header.js'
import Footer from './Footer.js'
import Home from './Home.js'
import About from './About.js'
import Service from './Service.js'
import Contact from './Contact.js'
import RestapiData from './Restapi_data.js'
import Restapi_data_view from './Restapi_data_view.js'
import Registration from './Registration.js'
import Form_edit from './Form_edit.js'
import Login from './Login.js'


import Ex from './Ex.js'
import Sb from './Sb.js'
import Gc from './Gc.js'
import Pp from './Pp.js'
import Wd from './Wd.js'
import Pagenotfound from './Pagenotfound.js'


const Routings=()=>
{

    return(<>

        <BrowserRouter>


            {/* header */}

                <Header />

            {/* header */}


            <Switch>

                <Route exact path="/home" component={Home} />
                <Route exact path="/explosion boxes" component={Ex} />
                <Route path="/scrap books" component={Sb} />
                <Route path="/greeting cards" component={Gc} />
                <Route path="/popup boxes" component={Pp} />
                <Route path="/wall decors" component={Wd} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/contact" component={Contact} />


                {/*  restapi data */}
                <Route exact path="/user" component={RestapiData} />
                <Route path="/user/view/:idno" component={Restapi_data_view} />
                <Route path="/user/edit/:idno" component={Form_edit} />


                {/*  registration */}
                <Route path="/registration" component={Registration} />
                <Route path="/login" component={Login} />


                {/* redirect to default component */}
                <Redirect to={`/home`} />

                {/* default pagenotfound component */}
                <Route component={Pagenotfound}  />

            </Switch>


            {/* footer */}

                <Footer />

            {/* footer */}

        </BrowserRouter>

    </>)

}


export default Routings