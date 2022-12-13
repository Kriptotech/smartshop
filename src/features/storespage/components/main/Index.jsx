import React from "react";
import style from "./styles.module.css";
import { MagnifyingGlass, Tote } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function Main() {
    const navigate = useNavigate()

    const item ={
        image: '/images/products/p4.jpg',
    }



    return (
        <div className={style.main}>
            <div className={style.search_container}>
                <input type='text' placeholder='pesquise por lojas'/>
                <button>
                    <MagnifyingGlass color='white' weight='fill' size={20}/>
                </button>
            </div>
            
            
            
            <div className={style.first_scroll_div}>
                {
                    [1,1,11,1,1,1,1,11,11].map(()=>{
                        return (
                            <div className={style.first_scroll_item} onClick={()=>navigate('/store', {state: item})}>
                                <img src="\images\products\p5.jpg"/>

                                <div className={style.price_top}>
                                    <Tote size={30} weight='fill' color='white'/>
                                </div>

                                <div className={style.desc_bottom}>
                                    <strong>Delfim shops</strong>
                                    <p>Nampula</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
