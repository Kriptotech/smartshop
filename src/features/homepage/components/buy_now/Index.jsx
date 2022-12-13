import React from "react";

import style from "./styles.module.css";

export function BuyNow() {
    return (
        <div className={style.buy_now}>
            <div className={style.buy_now_container}>
                <div className={style.buy_now_box}>
                    <h2>PEACE OF MIND</h2>
                    <p>Uma plataforma para todas as suas necessidades fashion de graça. compre com a segurança da SMART SHOP.</p>
                    <a href=''>COMPRE AGORA</a>
                </div>
                <div className={style.buy_now_box}>
                    <h2>BUY 10 GET 3 FREE</h2>
                    <p>Promoção do final do ano. compre 10 leve 3 de graça.</p>
                    <a href=''>COMPRE AGORA</a>
                </div>
            </div>
            
        </div>
    );
}
