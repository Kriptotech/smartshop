import  { useNavigate } from "react-router-dom";
import { User, XCircle } from "phosphor-react";
import Style from "./Style.module.css";

export const MenuModal = ({ userData }) => {
    const navigate = useNavigate();

    // submit values
    const logOutUser = async () => {
        document.cookie = "__loggedIn=false"
        navigate('/')
    };

    return (
        <div className={Style.Menu_Modal}>
            <div className={Style.Menu_Modal_account_links}>
                <a href='/profile'><User size={25} color='rgba(157, 109, 235, 0.856)'/> MEU PERFIL</a>
                <span onClick={logOutUser}><XCircle size={25} color='rgba(157, 109, 235, 0.856)'/> SAIR DA PLATFORMA</span>
            </div>
        </div>
    );
};
