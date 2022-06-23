import React from 'react'
import { Spinner } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.css";
import './Loading.css'

function Loading() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='divHijo'>
                <Spinner color="text-dark" className="spinner-grow" />
            </div>
        </div>
    )
}

export default Loading;
