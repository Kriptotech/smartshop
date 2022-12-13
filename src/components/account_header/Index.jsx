import React, { useState } from "react";
import { List, User, XCircle } from "phosphor-react";

import style from "./styles.module.css";

export function AccountHeader() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <header className={style.main_header}>
            <nav>
                <div className={style.logo_container}>
                    <img src='favicon.png' alt=''></img>

                    <div className={style.links}>
                        <a href="/feed">FEED</a>
                        <a href="/stores">LOJAS</a>
                        <a href="/colections">COLEÇÕES</a>
                    </div>
                </div>


                <div className={style.auth_links}>
                    <img src='/profile.png' alt='' width='40px'/>
                </div>



                {
                    isMenuVisible && 
                    <div className={style.mobile_auth_links}>
                        <a href="/feed">FEED</a>
                        <a href="/stores">LOJAS</a>
                        <a href="/colections">COLEÇÕES</a>
                        <a href="#" className={style.auth_anchor}><User weight='fill'  color='rgba(157, 109, 235, 0.856)' size={20}/> Conta</a>
                        
                        <button onClick={()=>setIsMenuVisible(false)}>
                            <XCircle color='white' weight='fill' size={35}/>
                        </button>
                    </div>
                }

                {
                    !isMenuVisible ?
                    <button onClick={()=>setIsMenuVisible(true)}>
                        <List color='rgba(157, 109, 235, 1)' size={35}/>
                    </button>
                    :
                    <button onClick={()=>setIsMenuVisible(false)} style={{opacity: '0'}}>
                        <XCircle color='rgba(157, 109, 235, 1)' size={35}/>
                    </button>
                }

                
            </nav>
        </header>
    );
}
