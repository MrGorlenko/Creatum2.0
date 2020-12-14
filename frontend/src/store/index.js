import Vue from 'vue'
import Vuex from 'vuex'

import SMMCases from '@/store/SMMcases.js'
import WEBUICases from '@/store/WEBUIcases'
import MobileUICases from '@/store/MobileUIcases'
import BrandingCases from '@/store/BrandingCases'
import HowWeDo from '@/store/HowWeDo'
import ForWho from '@/store/ForWho'
import OurClients from '@/store/OurClients'
import Crew from '@/store/Crew'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    SMMCases,
    WEBUICases,
    MobileUICases,
    BrandingCases,
    HowWeDo,
    ForWho,
    OurClients,
    Crew
  }
})