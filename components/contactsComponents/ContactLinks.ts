
export type contactLink = {
    id:  number
    href: string | null
    icon: string
    text: string
    animated?: boolean
}
const contactLinks:contactLink[] = [
    {
        id: 1,
        href: 'mailto:mikhail.kharitonov2016@yandex.ru',
        icon: '/social-icons/email.svg',
        text: `E-mail: <span>mikhail.kharitonov2016@yandex.ru</span>`
    },
    {
        id: 2,
        href: null,
        icon: '/social-icons/phone.svg',
        text: `Телефон (только WhatsApp) <span> +7(925)-516-16-92</span>`
    },
    {
        id: 3,
        href: 'https://t.me/chargos93',
        icon: '/social-icons/telegram.svg',
        text: `Telegram личный`
    },
    {
        id: 4,
        href: 'https://t.me/rus_udemy',
        icon: '/social-icons/telegram.svg',
        text: `Telegram проекта <strong> RusUdemy</strong>`
    },
    {
        id: 5,
        href: 'https://vk.com/id13334433',
        icon: '/social-icons/vk.svg',
        text: `VK`
    },
    {
        id: 6,
        href: 'https://www.instagram.com/chargos1993/',
        icon: '/social-icons/instagram.svg',
        text: `Instagram`
    },
]

export default contactLinks