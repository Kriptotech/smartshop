import React, { useState } from "react";
import { List, User, XCircle } from "phosphor-react";

import style from "./styles.module.css";

export function Header() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <header className={style.main_header}>
            <nav>
                <div className={style.logo_container}>
                    <img src='favicon.png' alt=''></img>
                    <h1>SMART<span>SHOP</span></h1>
                </div>

                <div className={style.links}>
                    <a href="/">HOME</a>
                    <a href="/about">SOBRE NÓS</a>
                    <a href="/contact">CONTACTE-NOS</a>
                </div>

                <div className={style.auth_links}>
                    <a href="/signin"><User color='rgba(157, 109, 235, 0.856)' size={20}/> ENTRAR</a>
                    <a href="/signup">CRIAR CONTA</a>
                </div>
                {
                    isMenuVisible && 
                    <div className={style.mobile_auth_links}>
                        <a href="/">HOME</a>
                        <a href="/about">SOBRE NÓS</a>
                        <a href="/contact">CONTACTE-NOS</a>
                        <a href="/signin" className={style.auth_anchor}><User color='rgba(157, 109, 235, 0.856)' size={20}/> ENTRAR</a>
                        <a href="/signup" className={style.auth_anchor}>CRIAR CONTA</a>
                    </div>
                }

                {
                    !isMenuVisible ?
                    <button onClick={()=>setIsMenuVisible(true)}>
                        <List color='rgba(157, 109, 235, 1)' size={35}/>
                    </button>
                    :
                    <button onClick={()=>setIsMenuVisible(false)}>
                        <XCircle color='rgba(157, 109, 235, 1)' size={35}/>
                    </button>
                }

                
            </nav>
        </header>
    );
}
