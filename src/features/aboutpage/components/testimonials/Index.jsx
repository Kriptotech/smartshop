import React from "react";

import style from "./styles.module.css";

export function Testimonials() {
    return (
        <div className={style.testimonials}>
            <div className={style.testimonials_container}>
                <h3>Testimonials</h3>
                <div className={style.testimonials_column}>
                    <div className={style.testimonials_row_item}>
                        <img alt='' src='\images\people\student-2.png' />
                        <div>
                            <span>"Abraham LincomAbraham LincomvAbraham Lincom Abraham LincomAbraham LincomAbraham LincomAbraham LincomvAbraham Lincom Abraham LincomAbraham LincomAbraham LincomAbraham LincomvAbraham Lincom Abraham LincomAbraham LincomAbraham LincomAbraham Lincom"</span>
                            <span>Stacy</span>
                        </div>
                    </div>
                    <div className={style.testimonials_row_item}>
                        <img alt='' src='\images\people\student-2.png' />
                        <div>
                            <span>"Abraham LincomAbraham LincomvAbraham Lincom Abraham LincomAbraham LincomAbraham LincomAbraham LincomvAbraham Lincom Abraham LincomAbraham LincomAbraham LincomAbraham LincomvAbraham Lincom Abraham LincomAbraham LincomAbraham LincomAbraham Lincom"</span>
                            <span>Stacy</span>
                        </div>
                    </div>
                    <div className={style.testimonials_row_item}>
                        <img alt='' src='\images\people\student-2.png' />
                        <div>
                            <span>"Abraham LincomAbraham LincomvAbraham Lincom Abraham LincomAbraham LincomAbraham LincomAbraham LincomvAbraham Lincom Abraham LincomAbraham LincomAbraham LincomAbraham LincomvAbraham Lincom Abraham LincomAbraham LincomAbraham LincomAbraham Lincom"</span>
                            <span>Stacy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
