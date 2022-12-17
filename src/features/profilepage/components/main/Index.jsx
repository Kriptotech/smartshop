import React from "react";
import style from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export function Main() {
    const navigate = useNavigate()

    const item ={
        image: '/images/products/p4.jpg',
    }



    return (
        <div className={style.main}>
            <div className={style.store_banner}>
                <img src="/images/bg_hero.png" alt=''/>
                <img src="/profile.png" alt=''/>
            </div>

            <div className={style.store_content}>
                <strong>Diego fernandes</strong>
                <p>Nampula</p>
                
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur asperiores molestiae possimus veritatis praesentium, voluptates ex sequi.</p>
            </div>
          
        </div>
    );
}
