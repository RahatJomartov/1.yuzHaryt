import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import KategoriyaPage from './assets/pages/KategoriyaPage.jsx'
import DukanlarPage from './assets/pages/DukanlarPage.jsx'
import BrendlarPage from './assets/pages/BrendlarPage.jsx'
import MarketPage from './assets/pages/MarketPage.jsx'
import IkeaPage from './assets/pages/IkeaPage.jsx'
import OneCykanlarPage from './assets/pages/OneCykanlarPage.jsx'
import SaglykWeGozellik from './assets/pages/SaglykWeGozellik.jsx'
import MebellarPage from './assets/pages/MebellarPage.jsx'
import ParfyumeriyaPage from './assets/pages/ParfyumeriyaPage.jsx'
import KorpelerimizUcinPage from './assets/pages/KorpelerimizUcinPage.jsx'
import MekdepOfisHarytlaryPage from './assets/pages/MekdepOfisHarytlaryPage.jsx'
import OyeRahatlykPage from './assets/pages/OyeRahatlykPage.jsx'
import AshanaArassacylygyPage from './assets/pages/AshanaArassacylygyPage.jsx'
import ElektronikaPage from './assets/pages/ElektronikaPage.jsx'
import GokOnumlerPage from './assets/pages/GokOnumlerPage.jsx'
import SuytOnumleriPage from './assets/pages/SuytOnumleriPage.jsx'
import SuwIcgilerPage from './assets/pages/SuwIcgilerPage.jsx'
import OyHaywanlaryPage from './assets/pages/OyHaywanlaryPage.jsx'
import AwtoulagPage from './assets/pages/AwtoulagPage.jsx'
import GurlusukRemontPage from './assets/pages/GurlusukRemontPage.jsx'
import BizBaradaPage from './assets/pages/BizBaradaPage.jsx'
import SargytEtmekPage from './assets/pages/SargytEtmekPage.jsx'
import YzynaGaytarmakPage from './assets/pages/YzynaGaytarmakPage.jsx'
import EltipBermePage from './assets/pages/EltipBermePage.jsx'
import HyzmatdaslykPage from './assets/pages/HyzmatdaslykPage.jsx'
import PoctaPage from './assets/pages/PoctaPage.jsx'
import MusderiHyzmatlaryPage from './assets/pages/MusderiHyzmatlaryPage.jsx'
import SoragJogapPage from './assets/pages/SoragJogapPage.jsx'
import UlanysDuzgunleriPage from './assets/pages/UlanysDuzgunleriPage.jsx'
import GizlinYorelgePage from './assets/pages/GizlinYorelgePage.jsx'
import BizeHatgaldyrynPage from './assets/pages/BizeHatgaldyrynPage.jsx'

const router = createBrowserRouter ([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/kategoriyalar",
    element:<KategoriyaPage/>
  },
  {
    path:"/dukanlar",
    element:<DukanlarPage/>
  },
  {
    path:"/brendlar",
    element:<BrendlarPage/>
  },
  {
    path:"/market",
    element:<MarketPage/>
  },
  {
    path:"/ikea",
    element:<IkeaPage/>
  },
  {
    path:"/onecykanlar",
    element:<OneCykanlarPage/>
  },
  {
    path:"/saglykwegozellik",
    element:<SaglykWeGozellik/>
  },
  {
    path:"/mebeller",
    element:<MebellarPage/>
  },
  {
    path:"/parfyumeriya",
    element:<ParfyumeriyaPage/>
  },
  {
    path:"/korpeler",
    element:<KorpelerimizUcinPage/>
  },
  {
    path:"/mekdepharytlary",
    element:<MekdepOfisHarytlaryPage/>
  },
  {
    path:"/oyerahatlyk",
    element:<OyeRahatlykPage/>
  },
  {
    path:"/ashana",
    element:<AshanaArassacylygyPage/>
  },
  {
    path:"/elektronika",
    element:<ElektronikaPage/>
  },
  {
    path:"/gokonumler",
    element:<GokOnumlerPage/>
  },
  {
    path:"/suytonumleri",
    element:<SuytOnumleriPage/>
  },
  {
    path:"/suwicgiler",
    element:<SuwIcgilerPage/>
  },
  {
    path:"/oyhaywanlary",
    element:<OyHaywanlaryPage/>
  },
  {
    path:"/awtoulag",
    element:<AwtoulagPage/>
  },
  {
    path:"/gurlusuk",
    element:<GurlusukRemontPage/>
  },
  {
    path:"/bizbarada",
    element:<BizBaradaPage/>
  },
  {
    path:"/sargytetmek",
    element:<SargytEtmekPage/>
  },
  {
    path:"/yzynagaytarmak",
    element:<YzynaGaytarmakPage/>
  }, 
  {
    path:"/eltipberme",
    element:<EltipBermePage/>
  },
  {
    path:"/hyzmatdaslyk",
    element:<HyzmatdaslykPage/>
  },
  {
    path:"/pocta",
    element:<PoctaPage/>
  },
  {
    path:"/musderiler",
    element:<MusderiHyzmatlaryPage/>
  },
  {
    path:"/soragjogap",
    element:<SoragJogapPage/>
  },
  {
    path:"/ulanysduzgunleri",
    element:<UlanysDuzgunleriPage/>
  },
  {
    path:"/gizlinyorelge",
    element:<GizlinYorelgePage/>
  },
  {
    path:"/bizehatgaldyr",
    element:<BizeHatgaldyrynPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
