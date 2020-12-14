import axios from 'axios'

const WEBUICases = {
  namespaced: true,
    state: {
        casesWEBUI:[
            {
              name: 'WEBUIcase1' , 
              date: '11.12.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'WEBUIcase2' , 
              date: '11.11.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'WEBUIcase3' , 
              date: '19.12.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'WEBUIcase4' , 
              date: '1.12.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
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

export default WEBUICases;
