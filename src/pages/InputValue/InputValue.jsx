import React, { useState, useEffect } from 'react'
import Loading from '../component/Loading'
import "./InputValue.css"

// export default class InputValue extends Component 



export const InputValue = ({ producto, setproductos, getdata }) => {

    const [buscador, setbuscador] = useState("")


    const searchItem = async (busqueda) => {

        await setbuscador(busqueda)
        console.log(buscador);

        let resultado = [];

        if (busqueda !== '') {
            resultado = producto.filter(item => item.product_name.toLocaleLowerCase().includes(busqueda))
        }
        else {
            getdata();
        }
        console.log(resultado);
        setproductos(resultado)
    }



    return (
        <>
            <div className='input-box'>
                <div className='main-input'>
                    <div className='main-input-container'>
                        <span className="search-icon"></span>
                        <input type="text" placeholder='Search...' value={buscador}
                            onChange={(e) => searchItem(e.target.value)} />
                        <a className="micro-icon" href="/"></a>
                    </div>
                </div>
            </div>
        </>
    )

}


