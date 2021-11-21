import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import TopNav from "./TopNav";
import Mfg from "./Mfg"
import ShopCategory from "./ShopCategory";
import ItemList from "./ItemList";

function Home(){
    return(
        <div>
            <TopNav/>
            <NavBar/>
            <Banner/>
            <Mfg/>
            <ShopCategory/>
            <ItemList/>

        </div>

    );
}

export default Home;