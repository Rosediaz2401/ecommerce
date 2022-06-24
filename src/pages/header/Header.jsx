import React from "react";
import { InputValue } from "../InputValue/InputValue";

import "./header.css";

export default function Header({ producto, setproductos, getdata }) {
    return (
        <>
            <div className="nav">
                <p className="envio-title">ENVIO GRATIS</p>
            </div>
            <div className="navbar is-primary">
                <div className="navbar-brand">
                    <img className="logo-header" src="frh.png" alt="/" />
                    <InputValue producto={producto} setproductos={setproductos} getdata={getdata} />
                    <a className="ai" href="/">Inicio</a>
                    <a className="ai" href="/">Mi cuenta</a>
                    <a className="ai" href="/">Comprar</a>
                </div>
            </div>
        </>
    );
}