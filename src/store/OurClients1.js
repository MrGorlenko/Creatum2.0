import axios from 'axios'

const OurClients1 = {
  namespaced: true,
    state: {
        icons: [
            {
              title: 'icon1',
              themes: ['SMM']
            },
            {
              title: 'icon2',
              themes: ['SMM', 'MMS']
            },
            {
              title: 'icon3',
              themes: ['MMS']
            },
            {
              title: 'icon3',
              themes: ['MMS', 'SMM']
            },
          ],

        themes: [
          'SMM', 'MMS'
        ]
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }

}

export default OurClients1;
