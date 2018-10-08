const defaultCategories = {
    'ноутбуки':{
        'Марка': {options: ['Lenovo', 'HP', 'Sony', 'Apple', 'Samsung'], value: ''},
        'Год':{options: ['2010', '2012', '2014', '2015' ], value: ''},
        'Тип': {options: ['универсальный', 'домашний (мультимедийный)', 'рабочий (офисный)', 'игровой (геймерский)', 'рабочая станция'], value: ''},
        'Диагональ экрана': {options: ['13', '14', '15', '17', '22'], value: ''},
        'Разрешение экрана': {options: ['HD/HD+ (768p/900p)', 'Full HD (1080p)', 'QHD (1440p)', 'QHD+ (1800p)', '4K UHD (2160p)'], value: ''},
        'Процессор': {options: ['Intel Core i9', 'Intel Core i7', 'Intel Core i5', 'Intel Core i3', 'Intel Core M'], value: ''},
        'Оперативная память': {options: ['8-12 ГБ', '16-24 ГБ'], value: ''},
        'Корпус': {options: ['Метал', 'Пластик'], value: ''},
        'Камера': {options: ['2мп', '4мп', '6мп', '8мп'], value: ''}
    },
    'Телефоны':{
        'Марка': {options: ['Lenovo', 'HP', 'Sony', 'Apple', 'Samsung'], value: ''},
        'Год':{options: ['2010', '2012', '2014', '2015' ], value: ''},
        'Корпус': {options: ['Метал', 'Пластик'], value: ''},
        'Камера': {options: ['2мп', '4мп', '6мп', '8мп'], value: ''},
        'Наушники': {options: ['В комплекте', 'нет'], value: ''},
        'Размер экрана': {options: ['4 - 4.5', '4.5 - 5', '5 - 5.5'], value: ''},
        'Разрешение экрана': {options: ['720x1280 (HD)', '1080x1920 (FullHD)', '1440x2560 (QHD)'], value: ''},
        'Соотношение сторон': {options: ['стандартное 16:9', 'вытянутое 18:9'], value: ''},
        'Технология экрана': {options: ['TFT', 'IPS', 'AMOLED', 'OLED', 'PVA (SLCD)'], value: ''},
    }
}

export default defaultCategories;