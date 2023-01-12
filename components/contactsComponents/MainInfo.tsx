import React from 'react';
const meImg = require('/pages/contacts/me.jpeg')

const MainInfo = () => {
    return (
        <section className='about '>
            <h1>Обо мне</h1>

            <img src={meImg.default.src} alt="Михаил Харитонов" loading='eager' width={500}/>
        </section>
    );
};

export default MainInfo;