import { HouseLine, User, Storefront, TShirt } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";

export function BottomNavigation({route}) {
    const navigate = useNavigate()

    const navigateToPage = async (rota) =>{
        navigate(`/${rota}`)
    }

    return (
        <div className={style.bottom_navigation}>
            <button onClick={()=>navigateToPage('feed')}>
                <HouseLine color={route === "feed" ? "rgb(50, 170, 225)" : "#024E82"} weight='fill'/>
                {route === 'feed' && <span>Inicio</span>}
            </button>
            <button onClick={()=>navigateToPage('stores')}>
                <Storefront color={route === "stores" ? "rgb(50, 170, 225)" : "#024E82"} weight='fill'/>
                {route === 'stores' && <span>Lojas</span>}
            </button>
            <button onClick={()=>navigateToPage('colections')}>
                <TShirt color={route === "colections" ? "rgb(50, 170, 225)" : "#024E82"} weight='fill'/>
                {route === 'colections' && <span>Coleções</span>}
            </button>
            <button onClick={()=>navigateToPage('store')}>
                <User color={route === "profile" ? "rgb(50, 170, 225)" : "#024E82"} weight='fill'/>
                {route === 'profile' && <span>Perfil</span>}
            </button>
        </div>
    );
}
