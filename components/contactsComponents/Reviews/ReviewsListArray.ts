import {ReviewItemType} from "../ReviewItem/ReviewItem";

const reviewsListArray: ReviewItemType[] = [
    {
        id: 6,
        name: 'Отзыв от Федора',
        text: `Буквально 5 минут назад Михаил помог приобрести курс на Udemy, заняло минут 10. Спасибо!`,
        link: '@nikshinavi',
        photo: '/fedor.jpg'
    },
    {
        id: 1,
        name: 'Отзыв от Сергея',
        text: `
              <div>
<p>
     Поклонник Udemy c 2020 года. По началу расстроился, что из-за санкций потерял доступ к топовым курсам.
      Ведь моя цель - это получить вакансию <strong>frontend разработчика</strong> в крупной европейской компании. 
</p>
     <p>
     С Михаилом знаком 3 года. Осенью узнал от него, что он переехал заграницу и теперь занимается "импортом" образования в Россию. 
</p>
<p>     С помощью его авторского сервиса <strong><a href="/" target="_blank">rusudemy.com</a></strong> я снова продолжаю учиться по лучшим мировым курсам. Спасибо Михаилу за предоставленную возможность!
</p>
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

];
export default reviewsListArray