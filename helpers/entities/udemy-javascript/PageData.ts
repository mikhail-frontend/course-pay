export type CourseType = {
    id: number
    image: string
    link: string
    title: string
    animated?: boolean
}
export const title = `
               Мы купим курсы  <h1 style="white-space: nowrap">Udemy JavaScript</h1>  тебе&nbsp;осталось выбрать
`;
export const description = `Начни изучать <h2>курсы Udemy </h2> JavaScript прямо сейчас!
 На Udemy.com ты найдешь свыше 10000 тысяч всевозможных курсов  по web development и не только: Udemy JS, Udemy HTML,
  Udemy CSS, Udemy Web Разработка`;

export const image = `/js-main.jpg`

export const courses:CourseType[] = [
    {
        id: 1,
        animated: false,
        image: '/js1.jpeg',
        link: 'https://www.udemy.com/course/javascript_full/',
        title: `Полный курс по JavaScript + React - с нуля до результата,
`
    },
    {
        id: 2,
        animated: false,
        image: '/js2.jpeg',
        link: 'https://www.udemy.com/course/javascript-ru/',
        title: `JavaScript - Полный Курс по JavaScript (Включает 80 Задач)`
    },
    {
        id: 3,
        animated: false,
        image: '/js3.jpeg',
        link: 'https://www.udemy.com/course/javascript_practice/',
        title: `Практический JavaScript (Продвинутый уровень)
`
    },
    {
        id: 4,
        animated: false,
        image: '/js4.jpeg',
        link: 'https://www.udemy.com/course/webdeveloper/',
        title: `WEB-разработчик
`
    },
    {
        id: 5,
        animated: false,
        image: '/js5.jpeg',
        link: 'https://www.udemy.com/course/dmitrii-fokeev-web-dev-essential/',
        title: `Верстка и создание веб сайтов 2023 - с нуля до результата !
`
    },
    {
        id: 6,
        animated: false,
        image: '/js6.jpeg',
        link: 'https://www.udemy.com/course/javascript-zero-to-junior-developer/',
        title: `Современный JavaScript - с Нуля до Junior Специалиста
`
    },
];

export const courseDescription = `Выбирайте курсы Udemy JavaScript и присылайте ссылки 
на курсы в <a href="https://t.me/rus_udemy" target="_blank"> наш телеграм </a> чтобы узнать стоимость`;

export const bigDescription = `
<h2>Курсы Udemy JavaScript </h2>
<p> 
 Курсы Udemy JavaScript или Udemy JS посвящены изучению одноименного языка программирования.
  JavaScript используется в веб разработке, а также для создания серверных приложений и в 3D моделировании. 
  Чаще всего JavaScript находится внутри документов HTML, поэтому стоит уделить время изучению курсов Udemy HTML и Udemy CCS.
   
  Если ты web разработчик или собираешься им стать, на udemy.com ты найдешь свыше 10000 тысяч курсов udemy web development.  

</p> 

<p> 
Посетив официальный сайт udemy, ты можешь выбрать курсы udemy на русском или указать в качестве языка курса udemy
английский или любой другой язык. А информация из раздела Udemy Отзывы поможет тебе лучше разобраться в том,
какие именно udemy courses по JavaScript подходят для твоего уровня. 
Среди лидеров продаж - Udemy полный курс по JavaScript, курсы Udemy Петриченко JavaScript, курсы Udemy JavaScript React,
Udemy JavaScript для начинающих.

</p>

<p>Покупая курсы Udemy JavaScript, возникает вопрос как оплатить udemy. 
Вы наверняка уже спрашивали у udemy как купить из России 2023, искали возможность, 
как сделать udemy обучение и курсы udemy бесплатно или по выгодным ценам.
 Сервис <a href="https://rusudemy.com" target="_blank">RusUdemy.com</a> поможет оплатить любые онлайн курсы udemy в России.
 </p>
`