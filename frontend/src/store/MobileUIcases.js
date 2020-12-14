import axios from 'axios'

const MobileUICases = {
  namespaced: true,
    state: {
        casesMobileUI:[
            {
              name: 'MobileUIcase1' , 
              date: '11.12.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'MobileUIcase2' , 
              date: '11.11.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'MobileUIcase3' , 
              date: '19.12.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'MobileUIcase4' , 
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

export default MobileUICases;
