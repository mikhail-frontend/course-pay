import {ReviewItemType} from "../ReviewItem/ReviewItem";
//https://www.reduceimages.com/
const reviewsListArray: ReviewItemType[] = [
    {
        id: 6,
        name: 'Федор',
        text: `Буквально 5 минут назад Михаил помог приобрести курс на Udemy, заняло минут 10. Спасибо!`,
        link: '@nikshinavi',
        photo: '/fedor.jpg',
        publishDate: '2023-01-12T19:42:00.649Z'

    },
    {
        id: 7,
        name: 'Рустам',
        text: `Огонь, ребят! Искал <strong> курс по автоматизации на Java Леши Маршала на всех площадках… </strong> но он был только на <strong>Юдеми</strong>. И вот, благодаря вам, наконец смогу его пройти) Спасибо ❤️  `,
        link: '@rustam_yolo',
        photo: '/rustam.jpg',
        publishDate: '2023-01-21T09:54:00.649Z'
    },
    {
        id: 2,
        name: 'Александр',
        text: `<p>Купил с помощью Михаила два курса  на Udemy: <strong>«WEB-разработчик 2022»</strong> 
            и  <strong>«Верстка и создание веб сайтов 2022 - с нуля до результата!»</strong>. </p> 
               <p>Все честно: Михаил завел мне аккаунт и купил курс, прислал скрин о покупке. </p>
               <p>Я перевел деньги на его кошелек и получил логин с паролем от личного кабинета. 7 минут! Рекомендую!</p>`,
        link: '@busheswillbetrimmed',
        photo: '/alex.jpg',
        publishDate: '2023-01-12T19:59:00.649Z'
    },
    {
        id: 9,
        name: 'Olga Madonova',
        text: `
Очень благодарная Михаилу из <strong>rusUdemy</strong> за помощь в покупке курсов по <strong> JavaScript и React с сервиса Udemy </strong>. Теперь нет ни единого шанса не стать Фронтенд разработчиком😁
        `,
        link: '@olga_madonova',
        photo: '/olga.jpg',
        publishDate: '2023-01-28T09:18:00.649Z'
    },
    {
        id: 4,
        name: 'Mikhail Kurakhtanov',
        text: `
        <p>
         До сегодняшнего дня не было необходимости использовать Udemy, однако был приятно удивлен обнаружить <a href="/" target="_blank">rusudemy.com </a> в топах поисковой выдачи!
         </p>
<p>
Выражаю огромную благодарность Михаилу за помощь в приобретении необходимых для работы курсов. Отзывчивый продавец, оперативно ответил на интересующие моменты и выполнил предоставляемую услугу в лучшем виде. Буду рад снова обратиться в будущем, если понадобятся другие курсы. 
</p>
<p>
Успехов в деятельности, больше клиентов!👍👏👏
</p>        `,
        link: '@mikhailkurakhtanov',
        photo: '/mikhail.jpg',
        publishDate: '2023-01-17T18:11:00.649Z'
    },
    {
        id: 8,
        name: 'Ivan',
        text: `
        Искал, как купить курсы на udemy по Python Django. Спасибо <strong> RusUdemy </strong>, всё сделали хорошо.
        `,
        link: '@van_van1',
        photo: null,
        publishDate: '2023-01-26T16:24:00.649Z'
    },
    {
        id: 3,
        name: 'Леонид',
        text: `
        <p>Знаком с Михаилом с 2018 года. </p>
        <p>   По рекомендации Михаила обратил внимание на преподавателя Максимилиана Шварцмюллера и в итоге купил Udemy с его помощью: 
        <strong>  Docker & Kubernetes: The Practical Guide [2023 Edition]</strong>, <strong> CleanCode</strong>, и <strong> Understanding Typescript 2023.</strong></p>
         <p>  Прохождение курсов позволило мне значительно улучшить знания по этим темам. Планирую сотрудничать с Михаилом в дальнейшем.</p>
        `,
        link: '@rikser123',
        photo: null,
        publishDate: '2023-01-12T14:06:00.649Z'
    },
    {
        id: 5,
        name: 'Alena Gordon',
        text: `
     Использую <strong> Udemy </strong> уже года три, очень нравится доступность курсов и постоянные скидки.
      И не приятно удивилась когда обнаружила, что не могу больше оплачивать ничего.
      О сайте узнала от Михаила, поэтому просто перевела деньги и получила нужный мне курс. Всё честно быстро и просто. 
Спасибо за помощь 🐣
        `,
        link: '@Umpa_lump_oO',
        photo: null,
        publishDate: '2023-01-15T21:29:00.649Z'
    },
    {
        id: 1,
        name: 'Сергей',
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
        photo: '/sergey.jpg',
        publishDate: '2023-01-13T11:00:00.649Z',
    },
    {
        id: 10,
        name: 'Vitaly Oschcenko',
        text: `
       <p> Нашёл через интернет, были сомнения... Так как не знал Михаила. Но очень хотел курс с <strong> юдеми </strong>. И что - внëс оплату и получил желаемое) 
Дальше вперёд))) курсы тут есть по качеству лучше чем скиллбоксы и подобные школы.  </p>

<p> Ещё раз спасибо!</p>
        `,
        link: '@OvitalyO',
        photo: '/vitaliy.jpg',
        publishDate: '2023-02-01T11:10:00.649Z'
    },
    {
        id: 11,
        name: 'Иван Эсенкулов',
        text: `
   Большое спасибо <strong> RusUdemy </strong> за приобретение курса! Работают оперативно, буквально 10 - 15 минут и курс твой. Быстро отвечают на вопросы.
        `,
        link: 'скрыто',
        photo: null,
        publishDate: '2023-02-01T12:20:00.649Z'
    },
    {
        id: 12,
        name: 'Tatyana F',
        text: `
        Приобрела нужный мне курс по той же цене, которая указана на Udemy (сегодня скидка), вся процедура заняла буквально 5 минут.
         Отличный сервис, буду обращаться ещё.
        `,
        link: '@fau1701',
        photo: null,
        publishDate: '2023-02-11T10:30:00.649Z'
    },
    {
        id: 13,
        name: 'Ksenia ¯\\_(ツ)_/¯',
        text: `
Купила сразу несколько курсов, без переплаты, что очень сильно порадовало. Спасибо большое <strong> RusUdemy </strong>, рекомендую!
        `,
        link: '@ksenia_kap_1',
        photo: '/ksenia.jpg',
        publishDate: '2023-02-11T17:13:00.649Z'
    },
    {
        id: 14,
        name: 'Дмитрий',
        text: `
<p>Очень быстро и четко все. Спасибо.  </p>
<p> Получил курс и доступ к нему  в  течении 10 минут👍 </p>
<p>Все  понятно и прозрачно. Когда  создавался  аккаунт на  почту, которую я  указал пришло подтверждающее  письмо. 
 </p>
<p>То есть я  практически наблюдал процесс создания  аккаунта. Спасибо </p>
        `,
        link: '@dmitry_coach_tri',
        photo: '/dmitriy.jpg',
        publishDate: '2023-02-12T07:57:00.649Z'
    },
    {
        id: 15,
        name: 'Евгений',
        text: `
 <p>Отличный сервис. 5 минут - и нужный курс уже у меня, спасибо за оперативность!</p>
  <p>Обязательно воспользуюсь ещё.</p>
        `,
        link: '@Sloppy_Joe',
        photo: null,
        publishDate: '2023-02-17T14:06:00.649Z'
    },
    {
        id: 16,
        name: 'Андрей Гребенкин',
        text: `Доступ к курсу получен) Большое спасибо, все работает!
        `,
        link: '@Skylark1985',
        photo: '/andrey.jpg',
        publishDate: '2023-02-19T08:53:00.649Z'
    },
    {
        id: 17,
        name: 'Екатерина Мелкова',
        text: `
Покупала курс на свой страх и риск, смущало то, что нет дополнительных надбавок за услугу покупки. 
Но, к счастью, все прошло, как и было обговорено. Курс куплен, доступ получен! Большое спасибо!
        `,
        link: '@melkovaeo',
        photo: '/ekaterina.jpg',
        publishDate: '2023-02-22T17:33:00.649Z'
    },
    {
        id: 18,
        name: 'Alexey88',
        text: `
<p> Долгое время покупал курсы на <strong> Udemy </strong> до недавнего времени. Недавно наткнулся на сайт <strong> <a href="/" target="_blank">rusudemy.com </a> </strong> , где могли помочь с покупкой курсов без переплат.
 Был приятно удивлён. Весь процесс занял около 10-15 минут. </p>
<p>Все курсы получил по отличной цене. Буду и дальше пользоваться данным сервисом. Большое спасибо! </p>
        `,
        link: '@darksait88',
        photo: '/alexey.jpg',
        publishDate: '2023-02-23T08:19:00.649Z'
    },
    {
        id: 19,
        name: 'Дмитрий',
        text: `
Купил 3 курса. За 10 минут. Все честно.
        `,
        link: '@dmitii_i',
        photo: '/dmiitriy.jpg',
        publishDate: '2023-02-23T19:03:00.649Z'
    },
    {
        id: 20,
        name: 'Dmitry Smirnov',
        text: `
Купил 3 курса, была применена  скидка. Доступ получил, буду учиться
        `,
        link: '@fantaseour1',
        photo: '/dmitriy2.jpg',
        publishDate: '2023-02-25T18:48:00.649Z'
    },
    {
        id: 21,
        name: 'Максим',
        text: `
Купил 2 курса, все прошло отлично, а самое главное быстро! Доступ получил. Большое Спасибо!
        `,
        link: '@Fenicks2708',
        photo: '/maxim.jpg',
        publishDate: '2023-02-27T17:46:00.649Z'
    },
];
export default reviewsListArray