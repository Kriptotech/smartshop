import React from "react";

import { Header } from "../components/header/Index";
import { Footer } from "../components/footer/Index";
import { Hero } from "../features/aboutpage/components/hero/Index";
import { Content } from "../features/aboutpage/components/content/Index";
import { Founders } from "../features/aboutpage/components/founders/Index";
import { Testimonials } from "../features/aboutpage/components/testimonials/Index";



export function Aboutpage() {
    return (
        <div>
            <Header />
            <Hero />
            <Founders />
            <Content />
            <Testimonials />
            <Footer />
        </div>
    );
}
