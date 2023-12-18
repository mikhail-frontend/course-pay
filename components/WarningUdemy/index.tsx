import React from 'react';
import DescriptionLine from '../UI/DescriptionLine';
import styles from './warning.module.scss'

const WarningUdemy = () => {
    return (
        <div className={`${styles.warning} container`}>
            <DescriptionLine text='Проблемы со входом на Udemy' color='#ec3c39'/>
            <p>
                C 4 декабря 2023 пользователи из России испытывают трудности при открытии сайта Udemy. На странице
                загрузки может появляться сообщение «Не удалось получить доступ к сайту». Чтобы посетить Udemy
                воспользуйтесь <strong>нашей инструкцией:</strong>
            </p>

            <ul>
                <li>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/vpn.png'
                         loading='lazy'
                         alt='RusUdemy. Udemy как купить. Udemy как оплатить российской картой. Как оплатить Udemy'/>
                    Включите VPN. В большинстве случаев этого шага будет достаточно. Вы сможете продолжить обучение и
                    выбрать новые курсы (а мы поможем их приобрести).
                </li>
                <li>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/brave.png'
                         loading='lazy'
                         alt='RusUdemy. Udemy как купить. Udemy как оплатить российской картой. Как оплатить Udemy'/>
                    <div>
                        Скачайте браузер <a href='https://brave.com/ru/' target='_blank' rel='noreferrer'>Brave</a> - и Вы сможете посещать udemy.com без
                        VPN, свободно покупать курсы и совершенствовать скиллы.
                    </div>
                </li>
                <li>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/chrome.webp'
                         loading='lazy'
                         alt='RusUdemy. Udemy как купить. Udemy как оплатить российской картой. Как оплатить Udemy'/>
                    <div>
                        Если вы пользуетесь Chrome, то в адресной строке необходимо изменить протокол https: на http: и
                        убрать приставку www. Или просто скопируйте нашу готовую ссылку
                        отсюда <strong>http://udemy.com</strong>
                    </div>
                </li>
                <li>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/mozilla.png'
                         loading='lazy'
                         alt='RusUdemy. Udemy как купить. Udemy как оплатить российской картой. Как оплатить Udemy'/>
                    <div> В браузере Mozila страница <a href='http://udemy.com'>udemy.com</a> открывается в безопасном
                        режиме
                    </div>
                </li>
            </ul>

            <p>
                Данная проблема для РФ, скорее всего, возникла по инициативе самой компании и согласно ее политики (с
                2022 на сайте не принималась оплата с карт российских банков). По нашим данным, сайт не внесен в черный
                список Роскомнадзора и не заблокирован на территории РФ - наоборот,
                <a href='https://www.vedomosti.ru/technology/news/2022/04/08/917232-mintsifri-rossiiskie-analogi-inostrannih-sotssetei'
                   target='_blank'  rel='noreferrer'> рекомендован к посещению</a>
            </p>
            <p>
                Невзирая на временные трудности, важно продолжать стремиться к знаниям, ведь каждый шаг к новым умениям
                – это шаг к лучшему 'себе'! 🚀💡Курсы Udemy по-прежнему лучший вариант по сравнению с отечественными аналогами.
                Как по качеству материала, так и по стоимости. А сервис <strong>RusUdemy</strong> всегда
                поможет Вам в их приобритении!
            </p>
        </div>
    );
};

export default WarningUdemy;