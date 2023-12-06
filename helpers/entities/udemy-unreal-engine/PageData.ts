export type CourseType = {
    id: number
    image: string
    link: string
    title: string
    animated?: boolean
}

export const title = `
               Мы купим курсы  <h1 style="white-space: nowrap">Udemy Unreal Engine</h1> - тебе&nbsp;осталось выбрать
`;
export const description = `Начни изучать курсы Udemy Unreal Engine прямо сейчас! Научись управлять компьютерной графикой с помощью программ Udemy 
Unity и Udemy Unreal. На udemy.com найдется более 4000 тысяч курсов для создания udemy 3D анимаций, а также курсы Udemy Django, Udemy Zbrush, курсы 
Петриченко Udemy, Udemy Java Script и многие другие.`;


export const image = `/r-main.jpg`


export const courses: CourseType[] = [
    {
        id: 1,
        animated: false,
        image: `/ue1.jpg`,
        link: `https://www.udemy.com/course/unrealcourse/?persist_locale=&locale=ru_RU`,
        title: `Unreal Engine 5 C++ Developer: Learn C++ & Make Video Games`

    },
    {
        id: 2,
        animated: false,
        image: `/ue2.jpg`,
        link: `https://www.udemy.com/course/unrealengine/`,
        title: `Unreal Engine — полное руководство по разработке на С++`
    },
    {
        id: 3,
        animated: false,
        image: `/ue3.jpg`,
        link: `https://www.udemy.com/course/unreal-engine-5-the-ultimate-game-developer-course/`,
        title: `Unreal Engine 5 C++ The Ultimate Game Developer Course`
    },
    {
        id: 4,
        animated: false,
        image: `/ue4.jpg`,
        link: `https://www.udemy.com/course/blender-3d-model/`,
        title: `Blender 2023 - полный базовый курс 3D моделирования`
    },
    {
        id: 5,
        animated: false,
        image: `/ue5.jpg`,
        link: `https://www.udemy.com/course/fpsshooterfornewbies/`,
        title: `Шутер от первого лица на Unreal Engine с нуля для начинающих`
    },
    {
        id: 6,
        animated: false,
        image: `/ue6.jpg`,
        link: `https://www.udemy.com/course/unreal-engine-5-gas-top-down-rpg/`,
        title: `Unreal Engine 5 - Gameplay Ability System - Top Down RP`
    },
];

export const courseDescription = `Выбирайте курсы Udemy Unreal Engine и присылайте ссылки
    на курсы в <a href="https://t.me/rus_udemy" target="_blank"> наш телеграм </a> чтобы узнать стоимость
    `;

export const bigDescription = `
<h2>Курсы Udemy Unreal Engine </h2>
<p>
Начни изучать курсы Udemy Unreal Engine прямо сейчас! Научись управлять компьютерной графикой с помощью программ Udemy Unity и Udemy Unreal.
    На udemy.com найдется более 4000 тысяч курсов для создания 3D анимации, а также курсы Udemy Django, Udemy Zbrush, курсы Петриченко Udemy,
    Udemy Java Script и многие другие.
</p> 

<p>
Посетив официальный сайт udemy, ты можешь выбрать курсы udemy на русском или указать в качестве языка курса udemy
    английский или любой другой язык. А информация из раздела Udemy Отзывы поможет тебе лучше разобраться в том,
    какие именно udemy courses по Unreal Engine подходят для твоего уровня.
    Среди лидеров продаж - курсы Udemy Unreal Engine полный курс, Udemy tutorials по Unreal Engine 5, курсы Ивана Петриченко Udemy,
    курс udemy bim unreal engine zero to advance, курс на русском Udemy Unreal Engine 4.


</p>

<p>Покупая курсы Udemy Unreal Engine, возникает вопрос как оплатить udemy.
    Вы наверняка уже спрашивали у udemy как купить из России 2023, искали возможность,
    как сделать udemy обучение и курсы udemy бесплатно или по выгодным ценам.
    Сервис <a href="https://rusudemy.com" target="_blank">RusUdemy.com</a> поможет оплатить любые онлайн курсы udemy в России.
    </p>
        `