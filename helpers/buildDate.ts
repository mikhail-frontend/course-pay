// type MonthType = 'default' | 'short' | 'numbers' | 'dashedNumbers' | 'slashedNumbers'
//
// export type buildDateReturnValue = {
//     rusDate: string
//     jsDate: Date
//     time: string
//     inTime: string
//     weekday: string
//     weekdayPadejz: string
// }
//
// export interface dateBuilderConfig {
//     monthType: MonthType
//     showTime: boolean
//     GMT: boolean
//     GTMPlus: boolean
//     showYear: boolean
//     isShortYear: boolean
//     separator: string
//     generateDateAlways: boolean
// }
//
// const defaultConfig: dateBuilderConfig = {
//     monthType: 'default',
//     showTime: false,
//     GMT: false,
//     GTMPlus: false,
//     showYear: true,
//     isShortYear: false,
//     separator: ' ',
//     generateDateAlways: false
// };
//
// export default function buildDate(
//     date: string,
//     config: Partial<dateBuilderConfig> = {}
// ): buildDateReturnValue | null  {
//     if (!date && !config.generateDateAlways) return null;
//     const jsDate: Date = date ? new Date(date) : new Date();
//
//     const {
//         monthType, showTime, showYear, GMT, GTMPlus, isShortYear, separator
//     } = { ...defaultConfig, ...config };
//
//     const currentTimeZoneOffsetInHours = jsDate.getTimezoneOffset() / 60;
//
//     if (GMT) jsDate.setHours(jsDate.getHours() - currentTimeZoneOffsetInHours);
//     if (GTMPlus) jsDate.setHours(jsDate.getHours() + currentTimeZoneOffsetInHours);
//
//     const monthVariants: Record<MonthType, string[]> = {
//         numbers: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
//         dashedNumbers: ['- 01 -', '- 02 -', '- 03 -', '- 04 -', '- 05 -', '- 06 -', '- 07 -', '- 08 -', '- 09 -', '- 10 -', '- 11 -', '- 12 -'],
//         slashedNumbers: ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'],
//         short: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сен.', 'Окт.', 'Нбр.', 'Дек.'],
//         default: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
//     };
//     const daysVariants: Record<string, string[]> = {
//         default: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
//         weekdayPadejz: ['воскресенье', 'понедельник', 'вторник', 'среду', 'четверг', 'пятницу', 'субботу']
//     };
//     const month: string[] = monthVariants[monthType || 'default'] || monthVariants.default;
//     const minutes = jsDate.getMinutes() > 9 ? `${jsDate.getMinutes()}` : `0${jsDate.getMinutes()}`;
//     const hours = jsDate.getHours() > 9 ? `${jsDate.getHours()}` : `0${jsDate.getHours()}`;
//     const time = ` ${hours}:${minutes}`;
//     const year = isShortYear ? String(jsDate.getFullYear()).slice(2) : jsDate.getFullYear()
//     let rusDate = jsDate.getDate() ? `${jsDate.getDate()}${separator}${month[jsDate.getMonth()]}${separator}${showYear ? year : ''}${showTime ? time : ''}` : '-';
//     if (monthType === 'numbers') {
//         rusDate = jsDate.getDate() ? `${jsDate.getDate()}.${month[jsDate.getMonth()]}.${showYear ? year : ''}${showTime ? time : ''}` : '-';
//     }
//     const weekday = daysVariants.default[jsDate.getDay()];
//     const weekdayPadejz = daysVariants.weekdayPadejz[jsDate.getDay()];
//     const inTime = ` в ${hours}:${minutes}`;
//     return {
//         rusDate, jsDate, time, weekday, inTime, weekdayPadejz
//     };
// };

export default function buildDate(date: string): string {
    const jsDate: Date = new Date(date);

    // Получаем компоненты даты и времени
    const day = jsDate.getDate();
    const monthNames = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const month = monthNames[jsDate.getMonth()];
    const year = jsDate.getFullYear();
    const hours = jsDate.getHours().toString().padStart(2, '0');
    const minutes = jsDate.getMinutes().toString().padStart(2, '0');

    // Формируем строку с местным временем и правильным падежом для месяца
    return `${day} ${month} ${year} ${hours}:${minutes}`;

}

