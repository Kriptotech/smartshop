import React from "react";

import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/feedpage/components/main/Index";



export function Feedpage() {
    return (
        <div>
            <AccountHeader />
            <Main />
        </div>
    );
}
