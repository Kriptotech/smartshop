import React from "react";
import style from "./styles.module.css";

export function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.content}>
                <h1>FAÇA ESCOLHAS ESTILOSAS COM OS PRODUCTOS DO MOMENTO NA SMART SHOP</h1>
                <a href='/signin'>SHOP NOW</a>
            </div>
            
        </div>
    );
}
