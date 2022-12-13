import React from "react";

import { Header } from "../components/header/Index";
import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/productpage/components/main/Index";



export function Productpage() {
    return (
        <div>
             1==2 ?<Header /> : <AccountHeader/>
            <Main />
        </div>
    );
}
