import React from 'react'
import ReactDOM from 'react-dom';
import loader from '../../assets/img/logo/loder.png';
export default function Preloader() {
    return (
        <div className="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                    <img src={loader} alt="hello"/>
                </div>
            </div>
        </div>
    </div>
    )
}
