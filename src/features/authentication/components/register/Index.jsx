import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./styles.module.css";
import { Header } from "../../../../components/header/Index";


export function RegisterContainer() {
    const navigate =  useNavigate()
    const [password, setPassword] =  useState('')
    const [passwordConfirmation, setPasswordConfirmation] =  useState('')
    const [email, setEmail] =  useState('')
    const [username, setUsername] =  useState('')
    const [message, setMessage] =  useState('')

    var cookies = document.cookie.split(';')
        .map((cookie)=> cookie.split('='))
        .reduce((accumulator, [key, value]) => ({...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

    const handleSubmit = (event) =>{
        event.preventDefault();

        const uploadDataObject = {
            username,
            password,
            email,
        }
        
        
        if(password === passwordConfirmation){
            // fetch(`${cookies?.__server}/users/register`, {
            //     method: 'POST',
            //     body: JSON.stringify(uploadDataObject),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(res=>res.json())
            // .then(data=>{
            //     setMessage(data.message)
            //     // console.log(data)

            //     if(data.succes){
            //         //creating user sigla
            //         let i = username.split('')
            //         for (let index = 0; index < i.length; index++) {
            //             if(i[index] == ' '){
            //                 let b = username.split(' ');
            //                 document.cookie = `__sigla=${b[0].split('')[0]}`;

            //                 break;
            //             }else{
            //                 let b = username.split('');
            //                 document.cookie = `__sigla=${b[0].split('')[0]}`;
            //             }
            //         }

            //         document.cookie = `__token=${data.token}`;
            //         document.cookie = `__username=${username}`;
            //         navigate('/dashboard')
            //     }
            // })
            // .catch(err=>console.log(err))

            navigate('/feed')
        }else  setMessage('use uma palavra passe igual na comfirmação')
    }

    return (
        <>
            <Header/>
            <div className={style.register_container}>
                <div className={style.register_container_left} data-aos="fade-right">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h1>Crie sua conta</h1>
                            <input required onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Seu E-mail'/>
                            <input required onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Seu nome'/>
                            <input required onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Sua senha'/>
                            <input required onChange={(e)=>setPasswordConfirmation(e.target.value)} type='password' placeholder='Confirme sua senha'/>

                            {message && <p><span>{message}</span></p>}
                            <p>Ao se registar voçe concorda com os <span>nossos termos</span> de uso e a <span>nossa politica de privacidade</span>.</p>
                            <a href='/signin'>VOLTAR PARA LOGIN</a>
                            
                            <button>CADASTRAR</button>
                        </form>
                    </div>
                </div>
                <div className={style.register_container_right} data-aos="fade-left">
                    <div >
                        <img src='favicon.png' alt=''/> <span>SMARTSHOP</span>
                    </div>
                    <h1>Centenas de pessoas já estão conectadas.</h1>
                    <p>Junte-se a eles e desfrue dos produtos de varias lojas sem sair de casa.</p>
                </div>
            </div>
        </>
    );
}
