import axios from 'axios'

const Crew = {
  namespaced: true,
    state: {
        Vacancies: [
            {
              title: 'Таргетолог',
              state: 'Удаленка или офис',
              subject: 'Branding',
              location: 'Moscow',
              // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla fermentum egestas libero netus risus proin elementum consequat. Pellentesque pulvinar turpis malesuada sed congue pulvinar ornare leo auctor. Varius neque egestas nunc, nunc, viverra tristique viverra egestas. Faucibus odio commodo dui sed. Amet tincidunt hac elit nunc. Purus feugiat ultrices sit sit volutpat dolor in cursus. Amet sit et ut donec vel nulla commodo. Nunc non hac nisi enim faucibus morbi. Id molestie molestie quam auctor suspendisse.',
              duties: [
                'Участие в штурме гипотез и аудиторий;',
                'Участие в в подготовке дизайн-макетов совместно с дизайнером;',
                'Настройка рекламных кампаний и перенастройка, сделав выводы после аналитики',
                'Понимание UX/UI, копирайтинга, офферов на сайте и других причин, почему таргетинг может НЕ РАБОТАТь.' 
              ],
              demands: [
                'Потдвержденный опыт работы с проектами, бюджет которых превышает 1,000,000₽',
                'Умение работать с оптимизацией на конверсию в кабинетах: Facebook Ads. Важно знать и уметь пользоваться всеми инструментами площадки;',
                'Умение настроить все метрики, в том числе динамический ретаргетинг;',
                'Умение читать аналитику и отслеживать все этапы воронки;'
              ],
              conditions: [
                'До февраля — удаленно. Далее в офис.'
              ]
            },
            {
              title: 'Стажировка',
              state: 'Удаленка',
              subject: 'SMM',
              location: 'Moscow',
              description: 'Привет. Меня зовут Инсаф. Я отвечаю за процессы в направлении контента и перформанса в агентстве Creatum. Ищу в свою команду креатора, может даже двух, чтобы выдавать для клиентов свежий, незамыленный креатив.',
              duties: [
                'Четко формулируете мысли в текстовом формате',
                'Ведете свои социальные сети в instagram или TikTok',
                'Наличие камеры для ZOOM-конференций',
                'Понимаете, что такое конструктивная критика и умеете ее принимать.',
                'Пишите без ошыбок.'
              ],
              demands: [
                'Полная удаленка. При желании можете приходить в офис в центре Москвы;',
                'Оплата курсов для повышения скиллов;',
                'Фулл тайм',
                'ЗП на время стажировки 20,000₽. Потенциал роста до 100,000₽'
              ],
              conditions: [
                'Оплата труда: от 20000 рублей'
              ]
            },
          ],

        AboutCreatum: {
          text: 'Помогаем клиентам делать сайты и брендинг. Также креативно вести социальные сети и трафик. По последнему пункту ищем сильное пополнение, чтобы делать это лучше. По таргетированной рекламе работаем с интернет-магазинами и оффлайн бизнесами. Ищем выпусника Targetorium, который живет в Москве, чтобы выдавать положительный ROAS'
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }

}

export default Crew;
