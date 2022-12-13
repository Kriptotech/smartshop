import React from "react";

import { AccountHeader } from "../components/account_header/Index";
import { Main } from "../features/storepage/components/main/Index";



export function Storepage() {
    return (
        <div>
            <AccountHeader />
            <Main />
        </div>
    );
}
