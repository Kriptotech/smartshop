import React from "react";
import { MagnifyingGlass } from "phosphor-react";

import style from "./styles.module.css";
import { ProductCard } from "../product_card/Index";

export function RecentProducts() {
    return (
        <div className={style.recent_products}>
            <div className={style.recent_products_header}>
                <h1>Discover new arrivals</h1>
                <p>Produtos adicionados recentemente!</p>
            </div>

            <div className={style.search_container}>
                <div className={style.search_box}>
                    <button>
                        <MagnifyingGlass color='#555' size={20}/>
                    </button>
                    <input type='text' placeholder='Pesquise aqui'/>
                    <button>Explorar</button>
                </div>
            </div>

            <div className={style.filter_options}>
                <button>Populares</button>
                <button>Recentes</button>
                <button>Hot</button>
                <button>Verao</button>
                <button>Inverno</button>
                <button>Outono</button>
            </div>

            <div className={style.product_list_box}>
                <div className={style.product_list}>
                    <ProductCard imagem={'/images/products/p4.jpg' }/>
                    <ProductCard imagem={'/images/products/p5.jpg' }/>
                    <ProductCard imagem={'/images/products/p6.jpg' }/>
                    <ProductCard imagem={'/images/products/p7.jpg' }/>
                    <ProductCard imagem={'/images/products/p8.jpg' }/>
                    <ProductCard imagem={'/images/products/p6.jpg' }/>
                    <ProductCard imagem={'/images/products/p9.jpg' }/>
                    <ProductCard imagem={'/images/products/p4.jpg' }/>
                </div>
            </div>
            
        </div>
    );
}
