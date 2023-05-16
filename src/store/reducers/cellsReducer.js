import * as actionTypes from '../actions'

const initialState = [
    {
        title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
        description: 'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Юрий Колокольников пытается спасти Землю в клипе «Космические силы»',
        description: 'Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'BTS получили четыре награды MTV EMA',
        description: 'BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Открытие сезона «Ла Скала» отменено',
        description: 'Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
        description: 'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Открытие сезона «Ла Скала» отменено',
        description: 'Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'BTS получили четыре награды MTV EMA',
        description: 'BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
        description: 'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Юрий Колокольников пытается спасти Землю в клипе «Космические силы»',
        description: 'Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'BTS получили четыре награды MTV EMA',
        description: 'BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Открытие сезона «Ла Скала» отменено',
        description: 'Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
        description: 'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Открытие сезона «Ла Скала» отменено',
        description: 'Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'BTS получили четыре награды MTV EMA',
        description: 'BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
        description: 'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Юрий Колокольников пытается спасти Землю в клипе «Космические силы»',
        description: 'Премьера клипа «Космические силы» группы «Мумий Тролль» состоялась 6 ноября 2020 года.',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'BTS получили четыре награды MTV EMA',
        description: 'BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Открытие сезона «Ла Скала» отменено',
        description: 'Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Ким и Валерия Брейтбурги написали книгу про искусство',
        description: 'Работа над книгой велась более пяти лет, и действенные методики, описанные в ней, созданные в результате анализа и синтеза идей…',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'Открытие сезона «Ла Скала» отменено',
        description: 'Миланский театр La Scala отменил открытие сезона. Первый спектакль был назначен на 7 декабря — «Лючия ди Ламмермур».',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    },
    {
        title: 'BTS получили четыре награды MTV EMA',
        description: 'BTS получили четыре награды MTV EMA 27-я ежегодная церемония награждения MTV Europe Music Awards состоялась 8 ноября 2020 г.',
        date: '10.11.2020',
        image: '../../assets/image-template.png',
        link: 'https://nuts-agency.ru/'
    }
]

export const cellsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};