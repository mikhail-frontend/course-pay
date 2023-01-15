import React from "react";
import Link from "next/link";

const ExtraText:React.FC<{className: string}> = ({className}) => {
    return (
        <div className={className}>
            <p>
                В юности я очень хотел стать программистом и даже закончил университет в России, но именно IT курсы,
                особенно <strong> Курсы Udemy </strong>, а также регулярная практика сделали из меня профессионала.
            </p>
            <p>
                У Udemy есть масса преимуществ перед российскими аналогами: начиная от низкой стоимости и заканчивая уникальностью контента.
                К примеру, <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target='_blank' rel='noreferrer'> курс по React </a>
                на отечественном рынке будет стоить в пять раз дороже, чем на Udemy, где он включает 498 уроков
                (самый полный гайд по теме, на мой взгляд).
            </p>
            <p>
                Из-за санкций <strong>купить курсы Udemy из России </strong> на сайте Udemy.com российской картой больше нельзя.
                Поэтому я создал этот сервис <Link href={'/'}
                                                   target={'_blank'}>rusudemy.com</Link>, где каждый мой соотечественник
                теперь может <strong>оплатить Udemy курсы любой картой</strong> без ограничений.
                Больше не нужно вводить запросы Udemy торрент или Udemy free! Образование должно быть доступным для всех!
            </p>
        </div>
    )
}

export default ExtraText;