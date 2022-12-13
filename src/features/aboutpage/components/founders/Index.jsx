import React from "react";

import style from "./styles.module.css";

export function Founders() {
    return (
        <div className={style.founders}>
            <div className={style.founders_container}>
                <h3>OS FUNDADORES</h3>
                <div className={style.founders_row}>
                    <div>
                        <img alt='' src='\images\people\student-2.png' />
                        <span>Abraham Lincom</span>
                    </div>
                    <div>
                        <img alt='' src='\images\people\student-5.png' />
                        <span>Abraham Lincom</span>
                    </div>
                    <div>
                        <img alt='' src='\images\people\student-4.png' />
                        <span>Abraham Lincom</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
