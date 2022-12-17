import React from "react";

import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { Main } from "../features/feedpage/components/main/Index";



export function Feedpage() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation route={'feed'} />
        </div>
    );
}
