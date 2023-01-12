import React, {useState} from 'react';
import ReviewItem, {ReviewItemType} from "../ReviewItem/ReviewItem";
import useAnimation from "../../../hooks/useAnimation";
import styles from './Reviews.module.scss'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const reviews: ReviewItemType[] = [
    {
        id: 1,
        name: 'Отзыв от Сергея',
        text: `
              <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iusto minus pariatur possimus,
            provident quidem ratione sed ut! Cupiditate eveniet facilis harum magni nesciunt nostrum, possimus provident
            quasi quis quo?
        </div>
        `,
        link: '@serjleo',
        photo: '/sergey.jpg'
    },
    {
        id: 2,
        name: 'Отзыв от Александра',
        text: `<p>Купил с помощью Михаила два курса  на Udemy: <strong>«WEB-разработчик 2022»</strong> 
            и  <strong>«Верстка и создание веб сайтов 2022 - с нуля до результата!»</strong>. <p/> 
               <p>Все честно: Михаил завел мне аккаунт и купил курс, прислал скрин о покупке. </p>
               <p>Я перевел деньги на его кошелек и получил логин с паролем от личного кабинета. 7 минут! Рекомендую!</p>`,
        link: '@busheswillbetrimmed',
        photo: '/sashulya.jpeg'
    },

    {
        id: 3,
        name: 'Отзыв от Леонида',
        text: `
        <p>Знаком с Михаилом с 2018 года. </p>
        <p>   По рекомендации Михаила обратил внимание на преподавателя Максимилиана Шварцмюллера и в итоге купил Udemy с его помощью: 
        <strong>  Docker & Kubernetes: The Practical Guide [2023 Edition]</strong>, <strong> CleanCode</strong>, и <strong> Understanding Typescript 2023.</strong></p>
         <p>  Прохождение курсов позволило мне значительно улучшить знания по этим темам. Планирую сотрудничать с Михаилом в дальнейшем.</p>
        `,
        link: '@rikser123',
        photo: null
    },
    {
        id: 4,
        name: 'Отзыв от Дениса',
        text: `
              <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iusto minus pariatur possimus,
            provident quidem ratione sed ut! Cupiditate eveniet facilis harum magni nesciunt nostrum, possimus provident
            quasi quis quo?
        </div>
        `,
        link: '@votapil',
        photo: '/denis.jpg'
    },

    {
        id: 5,
        name: 'Отзыв от Алены',
        text: `<div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iusto minus pariatur possimus,
            provident quidem ratione sed ut! Cupiditate eveniet facilis harum magni nesciunt nostrum, possimus provident
            quasi quis quo?
            </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iusto minus pariatur possimus,
            provident quidem ratione sed ut! Cupiditate eveniet facilis harum magni nesciunt nostrum, possimus provident
            quasi quis quo?
        </div>
`,
        link: '@Umpa_lump_oO',
        photo: '/umpa.jpg'
    },

]
const Reviews = () => {
    const [reviewsList, setReviewsList] = useState<ReviewItemType[]>(reviews);
    const wrapRef = useAnimation<ReviewItemType>(reviewsList, setReviewsList);
    return (
        <section ref={wrapRef} className={styles.reviews}>
            <h2 className={`${styles.reviewsHeading} heading`}>Отзывы</h2>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter={'5px 20px'}>
                    {reviewsList.map(item => {
                        return <ReviewItem text={item.text} name={item.name}
                                           animated={item.animated}
                                           photo={item.photo} id={item.id} link={item.link} key={item.id}/>
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    );
};

export default Reviews;