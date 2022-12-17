import React from "react";
import style from "./styles.module.css";

export function Hero() {
    return (
        <div className={style.hero}>
            <div className={style.content}>
                <h1>BEM VINDO A SMARTSHOP</h1>
                <p>O melhor aplicativo indexador de lojas em Moçambique...</p>
                <div  className={style.line}></div>
                
                <div className={style.row}>
                    <a href="https://bantuc.s3.us-east-2.amazonaws.com/gomovie/download/smartshop.apk" target="_blank" rel="noopener noreferrer">Baixar para android</a>

                    <a href="tel:+258866460507">Falar com desenvolvedores</a>
                </div>
            </div>
        </div>
    );
}
