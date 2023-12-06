export type CourseType = {
    id: number
    image: string
    link: string
    title: string
    animated?: boolean
}

export const title = `
               Мы купим курсы  <h1 style="white-space: nowrap">Udemy React</h1> - тебе&nbsp;осталось выбрать
`;
export const description = `Начни изучать <h2>курсы Udemy </h2> React прямо сейчас!
Начни изучать курсы Udemy React уже сейчас. С помощью курсов Udemy ты освоишь все возможности данного фреймворка.
 На udemy.com найдется более 9000 тысяч курсов а также курсы Udemy Django, Udemy Zbrush, курсы Петриченко Udemy, 
 Udemy Java Script и многие другие.
`;

export const image = `/ue-main.jpg`

export const courses: CourseType[] = [
    {
        id: 1,
        animated: false,
        image: `/r1.jpg`,
        link: `https://www.udemy.com/course/react-ru/`,
        title: `React - Полный Курс по React и Redux`,

    },
    {
        id: 2,
        animated: false,
        image: `/r2.jpg`,
        link: `https://www.udemy.com/course/javascript_full/`,
        title: `Полный курс по JavaScript + React - с нуля до результата`
    },
    {
        id: 3,
        animated: false,
        image: `/r3.jpg`,
        link: `https://www.udemy.com/course/pro-react-redux/`,
        title: `React + Redux - Профессиональная Разработка`
    },
    {
        id: 4,
        animated: false,
        image: `/r4.jpg`,
        link: `https://www.udemy.com/course/reactjs_admin_panel/`,
        title: `Создание административной панели на React.js + PHP`
    },
    {
        id: 5,
        animated: false,
        image: `/r5.jpg`,
        link: `https://www.udemy.com/course/react-the-complete-guide-incl-redux/`,
        title: `React - The Complete Guide 2023 (incl. React Router & Redux)
`
    },
    {
        id: 6,
        animated: false,
        image: `/r6.jpg`,
        link: `https://www.udemy.com/course/react-from-scratch/`,
        title: `React с нуля для начинающих. +3 проекта в портфолио!
`
    },
];

export const courseDescription = `Выбирайте курсы Udemy React и присылайте ссылки 
на курсы в <a href="https://t.me/rus_udemy" target="_blank"> наш телеграм </a> чтобы узнать стоимость
`;

export const bigDescription = `
<h2>Курсы Udemy React </h2>
<p> 
Начни изучать курсы Udemy React уже сейчас. С помощью курсов Udemy ты освоишь все возможности данного фреймворка. 
На udemy.com найдется более 9000 тысяч курсов а также курсы Udemy Django, Udemy Zbrush, курсы Петриченко Udemy, Udemy Java Script и многие другие.
</p> 

<p> 
Посетив официальный сайт udemy, ты можешь выбрать курсы udemy на русском или указать в качестве языка курса udemy
английский или любой другой язык. А информация из раздела Udemy Отзывы поможет тебе лучше разобраться в том,
какие именно udemy courses по Python подходят для твоего уровня.  Среди лидеров продаж - Udemy Rect полный курс по React Udemy, курсы Udemy Петриченко React,
 курсы Udemy JavaScript React.



<p>Покупая курсы Udemy React, возникает вопрос как оплатить udemy. 
Вы наверняка уже спрашивали у udemy как купить из России 2023, искали возможность, 
как сделать udemy обучение и курсы udemy бесплатно или по выгодным ценам.
 Сервис <a href="https://rusudemy.com" target="_blank">RusUdemy.com</a> поможет оплатить любые онлайн курсы udemy в России.
 </p>
`