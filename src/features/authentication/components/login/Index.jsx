import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../../../components/header/Index";
import style from "./styles.module.css";


export function LoginContainer() {
    const navigate =  useNavigate()
    const [password, setPassword] =  useState('')
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
        }
        
        
            fetch(`${cookies?.__server}/users/login`, {
                method: 'POST',
                body: JSON.stringify(uploadDataObject),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                setMessage(data.message)

                if(data.succes){
                    //creating user sigla
                    let i = username.split('')
                    for (let index = 0; index < i.length; index++) {
                        if(i[index] == ' '){
                            let b = username.split(' ');
                            document.cookie = `__sigla=${b[0].split('')[0]}`;
                            break;
                        }else{
                            let b = username.split('');
                            document.cookie = `__sigla=${b[0].split('')[0]}`;
                        }
                    }

                    document.cookie = `__token=${data.token}`;
                    document.cookie = `__username=${username}`;

                    navigate('/dashboard')
                }
            })
            .catch(err=>console.log(err))
    }  

    return (
        <>
            <Header/>
            <div className={style.login_container}>
                <div className={style.login_container_right} data-aos="fade-right">
                    <div >
                        <img src='favicon.png' alt=''/> <span>SMARTSHOP</span>
                    </div>
                    <h1>Faça seu login na loja.</h1>
                    
                </div>
                <div className={style.login_container_left} data-aos="fade-left">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h1>FAÇA LOGIN</h1>
                            <input required onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Seu e-mail'/>
                            <input required onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Sua senha'/>
                            {message && <p><span>{message}</span></p>}
                            <p>Não tem uma conta?  <a href='/signup'>Registe-se</a>.</p>
                            <button>LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
