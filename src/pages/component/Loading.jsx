import React, { useState } from 'react'
import '../component/Loading.css'
import "bootstrap/dist/css/bootstrap.css";
import Loading from './Loading.js'



function App() {

    const [loading, setloading] = useState(false);

    const cambiarEstado = () => {
        setloading(true);
        setTimeout(() => {
            setloading(false)
        }, 3000);
    }
    if (loading) {
        return (
            <Loading />
        )
    }
    else {
        return (
            <div className='App-loader'>
                <br></br>
                <button className='btn text-dark' onClick={() => cambiarEstado()}>Loading</button>
            </div>
        )
    }

}



export default App;