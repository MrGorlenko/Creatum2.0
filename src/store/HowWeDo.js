import axios from 'axios'

const HowWeDo = {
  namespaced: true,
    state: {
        SMMs:[
            {
              title: 'Заполнение брифа',
              time: '1 день'
            },
            {
              title: 'Подготовка предложения',
              time: '7 дней'
            },
            {
              title: 'Закрытие юридических и финансовых вопросов',
              time: '3 дня'
            },
            {
              title: 'Разработка концепции и контента и согласование концепции',
              time: '15 дней'
            },
            {
              title: 'Публикация и продвижение',
              time: '25 дней'
            },
            {
              title: 'Отчетность и прогноз масштабирования',
              time: '1 день'
            }
          ],
          Web_apps:[
            {
              title: 'Выбор фирменного стиля донесения',
              time: '5 дней'
            },
            {
              title: 'Дизайн',
              time: '14 дней'
            },
            {
              title: 'Написание кода-оболочки',
              time: '22 дня'
            },
            {
              title: 'Разработка и запуск панели администратора (параллельно с пунктом 3)',
              time: '14 дней'
            },
            {
              title: 'Привязка сервера и Подключение внешних систем аналитики',
              time: '8 дней'
            },
            {
              title: 'Тестирование и ввод в эксплуатацию',
              time: '7 дней'
            }
          ],
          Brandings: [
            {
              title: 'Заполнение брифов и анализ рынка',
              time: '7 дней'
            },
            {
              title: 'Разработка первых прототипов',
              time: '3 дня'
            },
            {
              title: 'Итеративная отрисовка логотипа',
              time: '5 дней'
            },
            {
              title: 'Создание монохромной модели согласованного лого',
              time: '2 дня'
            },
            {
              title: 'Подбор шрифтов и размещение на атрибутике',
              time: '7 дней'
            },
            {
              title: 'Передача всех наработок и компиляция брендбука',
              time: '5 дней'
            }
          ],
          Performances: [
            {
              title: 'Заполнение брифа и  аудит текущих кампаний, если были запуски',
              time: '3 дня'
            },
            {
              title: 'Подготовка предложения. Закрытие юридических и финансовых вопросов',
              time: '3 дня'
            },
            {
              title: 'Установка пикселя и систем аналитики',
              time: '2 дня'
            },            {
              title: 'Разработка и тестирование креативов на холодную аудиторию',
              time: '7 дней'
            },
            {
              title: 'Запуск ретаргетинга на горячую аудиторию',
              time: '7 дней'
            },
            {
              title: 'Отчетность и прогноз масштабирования',
              time: '2 дня'
            }
          ]
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }

}

export default HowWeDo;
