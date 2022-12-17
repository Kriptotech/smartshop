import React from "react";

import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { Main } from "../features/storespage/components/main/Index";



export function Storespage() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation route={'stores'} />
        </div>
    );
}
