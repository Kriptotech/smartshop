import React from "react";

import { AccountHeader } from "../components/account_header/Index";
import { BottomNavigation } from "../components/bottom_navigation/Index";
import { Main } from "../features/colectionspage/components/main/Index";



export function Colectionspage() {
    return (
        <div>
            <AccountHeader />
            <Main />
            <BottomNavigation route={'colections'} />
        </div>
    );
}
