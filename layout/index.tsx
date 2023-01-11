import React from 'react';
import SiteHead from "../components/SiteHead";
import Header from "../components/Header";
import Footer from "../components/Footer";

type LayoutType = {
    children: React.ReactNode,
}
const Layout:React.FC<LayoutType> = ({children}) => {
    return (
        <>
            <SiteHead/>
            <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;