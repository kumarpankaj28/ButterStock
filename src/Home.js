import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import TopNav from "./TopNav";
import Mfg from "./Mfg"
import ShopCategory from "./ShopCategory";
import ViewAll from "./ViewAll";
import ItemListInHome from "./ItemListInHome";

function Home(){
    return(
        <div>
            <TopNav/>
            <NavBar/>
            <Banner/>
            <Mfg/>
            <ShopCategory/>
            <ItemListInHome/>
            <ViewAll/>

        </div>

    );
}

export default Home;