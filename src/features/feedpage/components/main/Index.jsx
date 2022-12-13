import React from "react";
import style from "./styles.module.css";
import { MagnifyingGlass } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function Main() {
    const navigate = useNavigate()

    const item ={
        image: '/images/products/p4.jpg',
    }



    return (
        <div className={style.main}>
            <div className={style.search_container}>
                <input type='text' placeholder='pesquise por produtos'/>
                <button>
                    <MagnifyingGlass color='white' weight='fill' size={20}/>
                </button>
            </div>
            
            <div className={style.filter_options}>
                <button>Tudo</button>
                <button>Jovens</button>
                <button>Adultos</button>
                <button>Crianças</button>
            </div>
            
            
            <div className={style.first_scroll_div}>
                {
                    [1,1,11,1,1,1,1,11,11].map(()=>{
                        return (
                            <div className={style.first_scroll_item} onClick={()=>navigate('/product', {state: item})}>
                                <img src="\images\products\p4.jpg"/>

                                <div className={style.price_top}>-25 %</div>

                                <div className={style.desc_bottom}>
                                    <strong>Delfim shops</strong>
                                    <p>Air Jordan</p>
                                    <p>2000 MT</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
            
            <div className={style.mega_promo_header}>
                <h4>Mega<span>Promo</span></h4>
                <p>Produtos incriveis em promoção</p>
            </div>
            <div className={style.mega_promo}>
                {
                    [1,1,11,1,1,1,1,11,11].map(()=>{
                        return (
                            <div className={style.mega_promo_item} onClick={()=>navigate('/product', {state: item})}>
                                <img src="\images\products\p5.jpg"/>

                                <div className={style.price_top}>-25 %</div>
                            </div>
                        )
                    })
                }
            </div>
            
            
            <div className={style.products_div}>
                {
                    [1,1,11,1,1,1,1,11,11].map(()=>{
                        return (
                            <div className={style.products_item}  onClick={()=>navigate('/product', {state: item})}>
                                <img src="\images\products\p4.jpg"/>

                                <div className={style.price_top}>-25 %</div>

                                <div className={style.desc_bottom}>
                                    {/* <strong>Delfim shops</strong> */}
                                    <p>Air Jordan</p>
                                    <p>2000 MT</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    );
}
