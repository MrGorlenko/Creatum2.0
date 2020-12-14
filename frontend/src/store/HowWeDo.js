import axios from 'axios'

const HowWeDo = {
  namespaced: true,
    state: {
        SMMs:[
            {
              title: 'Выбор фирменного стиля донесения',
              time: '4 дня'
            },
            {
              title: 'Дизайн',
              time: '4 дня'
            }
          ],
          Web_sites:[
            {
              title: 'Написание кода-оболочки',
              time: '7 дней'
            },
            {
              title: 'Разработка и запуск панели администратора',
              time: '3 дня'
            }
          ],
          Mobile_apps: [
            {
              title: 'Привязка сервера',
              time: '7 дней'
            },
            {
              title: 'Подключение внешних систем аналитики',
              time: '1 день'
            }
          ],
          Performances: [
            {
              title: 'Перформанс1',
              time: '71 дней'
            },
            {
              title: 'Перформанс3',
              time: '13 дней'
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
