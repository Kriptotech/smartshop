import React from "react";

import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { Main } from "../features/storepage/components/main/Index";



export function Storepage() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation route={'stores'} />
        </div>
    );
}
