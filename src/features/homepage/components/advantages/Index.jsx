import React from "react";
import { ArrowCircleUp, FlyingSaucer, ArrowCounterClockwise, Binoculars } from "phosphor-react";

import style from "./styles.module.css";

export function Advantages() {
    return (
        <div className={style.advantages}>
            <div className={style.advantages_container}>
                <div className={style.advantages_box}>
                    <h4><FlyingSaucer color='#024E82' size={20}/>ENTREGA GRATIS</h4>
                    <p>Desfrute de entregas gratis e confiaveis, nossa missao é agradar voces.</p>
                </div>
                <div className={style.advantages_box}>
                    <h4><ArrowCircleUp color='#024E82' size={20}/>SUPORTE 24/7</h4>
                    <p>A nossa equipe de suporte está aqui para ajudar te ajudar diariamente</p>
                </div>
                <div className={style.advantages_box}>
                    <h4><ArrowCounterClockwise color='#024E82' size={20}/>GARANTIA</h4>
                    <p>Simples retorno em dentro de 30 dias se não quiser mais a conta premium</p>
                </div>
                <div className={style.advantages_box}>
                    <h4><Binoculars color='#024E82' size={20}/> 100% de segurança </h4>
                    <p>Nossos pagamentos são seguros com a melhor encriptação da atualidade</p>
                </div>
            </div>
            
        </div>
    );
}
