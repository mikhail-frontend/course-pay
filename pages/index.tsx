import SiteHead from "../components/SiteHead";
import Header from "../components/Header";
import About from "../components/About";
import Cards from "../components/Cards";
import UdemyAbout from "../components/UdemyAbout";
import DescriptionLine from "../components/UI/DescriptionLine";
import HowBuy from "../components/HowBuy";
import Faq from "../components/Faq";
import Contacts from "../components/Contacts";
import React from "react";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
        <SiteHead/>
        <Header/>
        <About/>
        <Cards/>
        <DescriptionLine text='Почему Udemy' color='#40C8E0'/>
        <UdemyAbout/>
        <DescriptionLine text='Шаги оплаты' color='#B59AFF'/>
        <HowBuy/>
        <Faq/>
        <Contacts/>
        <Footer/>
    </>
  )
}
