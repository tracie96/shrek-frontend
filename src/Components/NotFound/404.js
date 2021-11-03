import React from 'react'
import { Link } from 'react-router-dom'
import "../../assets/css/notfound.css"
export default function NotFound() {
    return (
        <div className="page-404">
        <div className="outer">
            <div className="middle">
                <div className="inner">
                    <div className="inner-circle"><i className="fa fa-home"></i><span>404</span></div>
                    <span className="inner-status">Oops! You're lost</span>
                    <span className="inner-detail">
                        We can not find the page you're looking for.
                        <div style={{marginTop:"3%"}}></div>
                        <Link to="/" className="btn btn-info mtl"><i className="fa fa-home"></i>&nbsp;
                            Return home
                        </Link> 
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}
