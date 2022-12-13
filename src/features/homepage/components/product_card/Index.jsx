import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";

export function ProductCard({imagem}) {
    const navigate = useNavigate()

    const item ={
        image: imagem,
    }

    return (
        <div className={style.product_card} onClick={()=>navigate('/product', {state: item})}>
            <div className={style.product_card_img}>
                <img src={imagem} alt=''/>
                {/* <span>Categoria</span> */}
            </div>
            <div className={style.product_card_row}>
                <div>
                    <span>Camisa nova</span>
                    <span>Brand Product</span>
                </div>
                <small>$25</small>
            </div>
        </div>
            
    );
}
