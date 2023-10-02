import React from "react";
import About from "../components/About";
import Cards from "../components/Cards";
import UdemyAbout from "../components/UdemyAbout";
import DescriptionLine from "../components/UI/DescriptionLine";
import HowBuy from "../components/HowBuy";
import Faq from "../components/Faq";
import Contacts from "../components/Contacts";
import Reviews from "../components/Reviews/Reviews";


export default function Home() {
  return (
    <>

        <About customTitle={`Купим  <h1>курсы Udemy</h1>  за&nbsp;вас`}
               description={` Наш&nbsp;сервис позволяет легко <h2> оплатить&nbsp;Udemy</h2> c российской карты`}
        />
        <Cards/>
        <DescriptionLine text='Почему Udemy' color='#40C8E0'/>
        <UdemyAbout/>
        <DescriptionLine text='Шаги оплаты' color='#B59AFF'/>
        <HowBuy/>
        <Reviews/>
        <Faq/>
        <Contacts/>
    </>

  )
}
