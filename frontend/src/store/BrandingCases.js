import axios from 'axios'

const BrandingCases = {
  namespaced: true,
    state: {
        casesBranding:[
            {
              name: 'BrandingCase1' , 
              date: '11.12.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'BrandingCase2' , 
              date: '11.11.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'BrandingCase3' , 
              date: '19.12.2020',
              preview: require('../assets/preview.png'),
              template: 'https://drive.google.com/file/d/1DRXKQWiCRTgqxSoSobMkJXuQOysb1jcU/preview'
            },
            {
              name: 'BrandingCase4' , 
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

export default BrandingCases;
