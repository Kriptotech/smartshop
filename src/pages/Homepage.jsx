import React from "react";

import { Header } from "../components/header/Index";
import { Footer } from "../components/footer/Index";
import { Hero } from "../features/homepage/components/hero/Index";
import { RecentProducts } from "../features/homepage/components/recent_products/Index";
import { Advantages } from "../features/homepage/components/advantages/Index";
import { BuyNow } from "../features/homepage/components/buy_now/Index";



export function Homepage() {
    return (
        <div>
            <Header />
            <Hero />
            <RecentProducts />
            <BuyNow />
            <Advantages />
            <Footer />
        </div>
    );
}
