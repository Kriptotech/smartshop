import React from "react";
import style from "./styles.module.css";

export function Footer() {
    return (
        <footer className={style.footer}>
            <div  className={style.footer_row}>
                <div>
                    <span>CONTACT INFO</span>
                    <a href='/'>Home</a>
                    <a href='/'>Sobre nós</a>
                    <a href='/'>Contactar</a>
                    <a href='/'>Nossos termos</a>
                </div>
                <div>
                    <span>LINKS</span>
                    <a href='/'>LOGIN</a>
                    <a href='/'>REGISTAR</a>
                    <a href='/'>DELEVERY</a>
                    <a href='/'>NFORMAÇÃO DE ENTREGA</a>
                    <a href='/'>FAQ</a>
                </div>
                <div>
                    <span>LINKS VISUAIS</span>
                    <a href='/'>GITHUB</a>
                    <a href='/'>PROPAGANDAS</a>
                    <a href='/'>PARCERIA</a>
                    <a href='/'>TERMOS DE USO</a>
                    <a href='/'>COMUNIDADE</a>
                </div>
                <div>
                    <span>NOSSA MISSÃO</span>
                    <a href='/'>TECH</a>
                    <a href='/'>OBJETIVO</a>
                </div>
            </div>

            <div  className={style.footer_last_row}>
                <span>&copy; 2022 Todos direitos reservados | SMART SHOP</span>
                <a href='/'>politica de privacidade</a>
            </div>
        </footer>
    );
}
