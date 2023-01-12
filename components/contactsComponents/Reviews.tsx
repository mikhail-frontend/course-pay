import React, {useState} from 'react';
import {ReviewItemType} from "./ReviewItem";
import ReviewItem from "./ReviewItem";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const reviews: ReviewItemType[] = [
    {
        id: 1,
        name: 'Отзыв от Сережи',
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
        name: 'Отзыв от Сашули',
        text: `Отзыв от Сашули`,
        link: '@busheswillbetrimmed',
        photo: '/sashulya.jpeg'
    },

    {
        id: 3,
        name: 'Отзыв от Лёни',
        text: `
              <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque iusto minus pariatur possimus,
            provident quidem ratione sed ut! Cupiditate eveniet facilis harum magni nesciunt nostrum, possimus provident
            quasi quis quo?
        </div>
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
    const [reviewsList] = useState<ReviewItemType[]>(reviews)
    return (
        <section>
            <h2 className='heading'>Отзывы</h2>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter={'5px 20px'}>
                    {reviewsList.map(item => {
                        return <ReviewItem text={item.text} name={item.name}
                                           photo={item.photo} id={item.id} link={item.link} key={item.id}/>
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </section>
    );
};

export default Reviews;