// import { useState } from "react";
import { XCircle } from "phosphor-react";
import Style from "./Style.module.css";

export const PaymentModal = ({close}) => {

    // submit values
    const closeModal = async () => {
        document.cookie = "__loggedIn=false"
        close()
    };

    return (
        <div className={Style.Menu_Modal}>

            <div className={Style.Menu_Modal_box} data-aos="fade-down">
                <button onClick={closeModal} className={Style.Menu_Modal_close}>
                    <XCircle size={35} weight='fill' color='rgb(50, 170, 225)'/>
                </button>

                <div className={Style.Menu_Modal_content}>
                    <strong>Importante:</strong>
                    
                    <p>Todos os dados recolhidos nessa janela serão usados para o delivery {'(entrega)'} do seu produto, certifique-se de preencher correctamente o formulario com seus dados correctos.</p>

                    <strong>ATT: Nem a Smartshop nem a Gamezone se responsabiliza pelo usuario no acto de fornecer o contacto de entrega.</strong>

                    <form>
                        <input required type="text" placeholder='Informe seu nome'/>
                        <input required type="number" placeholder='Informe-nos seu telfone (+285)'/>
                        <input required type="email" placeholder='Informe-nos seu e-mail'/>
                        <p>Selecione o metodo de pagamento:</p>
                        <button>
                            <img src='\images\mpesa.png'/>
                        </button>
                    </form>
                </div>
            </div>

            
        </div>
    );
};
