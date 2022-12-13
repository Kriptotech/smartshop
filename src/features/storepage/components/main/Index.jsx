import React from "react";
import style from "./styles.module.css";
import { Star } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function Main() {
    const navigate = useNavigate()

    const item ={
        image: '/images/products/p4.jpg',
    }



    return (
        <div className={style.main}>
            <div className={style.store_banner}>
                <img src="/images/store.png" alt=''/>
                <img src="/images/store.png" alt=''/>
            </div>

            <div className={style.store_content}>
                <strong>Game zone</strong>
                <p>Nampula</p>
                {
                    [1,2,3,4].map(()=>{
                        return(
                            <Star color="yellow" size={30} weight='fill'/>
                        )
                    })
                }
                <a href="#">Ver artigos</a>
                <a href="#">Ver coleções</a>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur asperiores molestiae possimus veritatis praesentium, voluptates ex sequi. Nesciunt delectus laboriosam maiores magni. Dicta sequi quam, voluptatibus fugiat cum quae similique deleniti a nemo, distinctio aliquid veniam ratione illo facilis in debitis ut sapiente. Quod esse officiis ullam cum consequatur nisi autem ipsa ea, ab debitis minima unde veniam illo optio quasi tempore dicta illum dolore dolorum! Assumenda dignissimos, facere fuga provident quibusdam quod expedita adipisci non placeat dolores esse rem repellat corporis illum dolor, voluptatem tempore fugiat voluptates hic officiis molestiae at, voluptatum soluta. Incidunt illum porro voluptates animi veniam!</p>
            </div>
          
        </div>
    );
}
