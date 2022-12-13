import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {Star} from "phosphor-react";

import {PaymentModal} from "../PaymentModal/Index";
import style from "./styles.module.css";

export function Main() {
    const location = useLocation()
    const navigate = useNavigate()
    const [isModalVisible, setIsModalVisible] = useState(false)

    function proceedWithPayment (params){
        setIsModalVisible(true)
    }

    return (
        <div className={style.product}>
            <div className={style.product_left}>
                <div className={style.product_left_img_box}>
                    <img src={location.state.image} alt='' />
                </div>

                <div className={style.product_left_img_row_box}>
                    <button>
                        <img src={location.state.image} alt='' />
                    </button>
                    <button>
                        <img src={location.state.image} alt='' />
                    </button>
                    <button>
                        <img src={location.state.image} alt='' />
                    </button>
                    <button>
                        <img src={location.state.image} alt='' />
                    </button>
                </div>
            </div>



            <div className={style.product_right}>
                <h2>Plain T Shirt</h2>
                
                <Star weight="fill"  color='#D6763C'/>
                <Star weight="fill"  color='#D6763C'/>
                <Star weight="fill"   color='#D6763C'/>
                <Star weight="fill"   color='#D6763C'/>
                <Star weight="duotone" color='#D6763C'/>

                <span>$1.400.00 MT</span>
                <p>Um produto que custa $1.400.00 MT da mais alta qualidade feita com cliche e seila o que for...</p>
                <p><strong>CATEGORIA</strong>: Camisas</p>
                <p><strong>LOJA</strong>: SMARTSHOP</p>

                <label>Selecione a quantidade:</label>
                <select >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>

                <button onClick={()=>{
                    1===2 ? navigate('/signin') : proceedWithPayment()
                }}>PROSSEGUIR COM A COMPRA</button>
            </div>

            {isModalVisible && <PaymentModal close={()=> setIsModalVisible(false)}/>}
        </div>
    );
}
