import axios from 'axios'

const SMMCases = {
  namespaced: true,
    state: {
        casesSMM:[
            {
              name: 'SMMcase1' , 
              date: '11.12.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'SMMcase2' , 
              date: '11.11.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'SMMcase3' , 
              date: '19.12.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'SMMcase4' , 
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

export default SMMCases;
