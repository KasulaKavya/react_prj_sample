import React from 'react'
import {Link,Switch,Route} from 'react-router-dom'



const Link_grp=()=>
{

    return(<>
        <div className="container">
            <div className="row">

                {/* LIST-GROUP */}
                <div className="list-group w-100 ">

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

                {/*
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path={`/explosion boxes`} component={Ex} />
                    <Route path={`/scrap books`} component={Sb} />
                    <Route path={`/greeting cards`} component={Gc} />
                    <Route path={`/popup boxes`} component={Pp} />
                    <Route path={`/wall decors`} component={Wd} />
                </Switch>
                */}
                

            </div>
        </div>

    </>)

}




export default Link_grp