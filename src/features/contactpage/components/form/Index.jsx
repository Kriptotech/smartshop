import React from "react";

import style from "./styles.module.css";

export function Formulary() {
    return (
        <div className={style.formulary}>
            <div className={style.formulary_container}>
                <div className={style.formulary_row}>
                    <div className={style.formulary_item}>
                        <form>
                            <div className={style.input_container}>
                                <div className={style.input_box}>
                                    <label htmlFor='nome'>Nome</label>
                                    <input type='text' id='nome'></input>
                                </div>
                                <div className={style.input_box}>
                                    <label htmlFor='email'>E-mail</label>
                                    <input type='text' id='email'></input>
                                </div>
                            </div>
                            
                            <label htmlFor='desc'>Mensagem</label>
                            <textarea id='desc'></textarea>
                            <button>ENVIAR MENSAGEM</button>
                        </form>
                    </div>
                    <div className={style.formulary_item}>
                        <h3>Nos visite</h3>
                        <p>Rua de tete, Nampula, Moçambique.<br/>Tel:+258847623731</p>

                        <br/>
                        <br/>

                        <h3>Fale conosco</h3>
                        <p>Voce pode falar conosco com o email abaixo:</p>
                        <p>E-mail: eufrasiojoao00@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
