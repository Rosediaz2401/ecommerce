import axios from "axios";
import { useEffect, useState } from 'react';
import Loading from "../component/Loading";
import Header from "../header/Header";
import "./EcomScreen.css";

export const EcomScreen = () => {

  const [producto, setproductos] = useState([]);
  const [loading, setloading] = useState(false);


  const getProductos = async () => {
    setloading(false)
    const res = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/item/')
    console.log('api', res.data);
    setproductos(res.data)
      setloading(true)
  }
  

  useEffect(() => {
    getProductos();
  }, [])



  return (
    <>
      <Header producto={producto} setproductos={setproductos} getdata={getProductos} />
      {loading?loading : <Loading />}
      {
      
        producto.map((producto) => (
          < div className="parent app app-header">
             
            <div className="child">
              <div className="card">
                <img className="imagen" src={producto.image} alt={producto.product_name} />
                <p> {`${producto.product_name} `}</p>
                <p>{`Precio: $ ${producto.price} `}</p>
              </div>
            </div>
          </div>
        ))
      }

    </>

  )
}
