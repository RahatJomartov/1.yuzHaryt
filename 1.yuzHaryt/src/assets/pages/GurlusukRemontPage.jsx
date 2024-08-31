import React from 'react'
import './GurlusukRemontPage.css'
import { useParams } from 'react-router-dom'
import { PiHeartStraight } from "react-icons/pi";
import GurlusukRemont from '../../GurlusukRemont';
import TazeHarytlar from '../../TazeHarytlar';
import Footer from '../../Footer';
import ScrollToTop from '../../components/ScrollToTop';
const GurlusukRemontPage = () => {
    const {} = useParams()
  return (
    <>
    <ScrollToTop/>
        <section id='gurlusuk'>
        <div className="container">
          <GurlusukRemont h2="Gurluşuk we remont"/>
          <div className="row">
            <div className="box">
              <GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2007663.webp&w=750&q=75"/>
              <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1714557315326-4cd4.webp&w=750&q=75"/>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1715584836005-073a.webp&w=750&q=75"/>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2002913.webp&w=750&q=75"/>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2002914.webp&w=750&q=75"/>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section id='footer'>
        <div className="container">
          <Footer src="https://100haryt.com/_next/static/media/logoRec.cee89e48.svg"/>
          <div className="row">
            <div className="box">
              <Footer h4="Biz barada"/>
              <Footer ab="Biz barada"/>
              <Footer ab="Sargyt etmek"/>
              <Footer ab="Yzyna gaytarmak"/>
            </div>
            <div className="box">
              <Footer h4="Hyzmatdaşlyk"/>
              <Footer ab="Eltip berme we töleg"/>
              <Footer ab="Hyzmatdaşlyk"/>
              <Footer ab="E-poçtalarmyz"/>
            </div>
            <div className="box">
              <Footer h4="Kömek we goldaw"/>
              <Footer ab="Müşderi hyzmatymyz"/>
              <Footer ab="Sorag-jogap"/>
            </div>
            <div className="box">
            <Footer h4="Gizlinlik ýörelgesi"/>
            <Footer ab="Ulanyş düzgünleri"/>
            <Footer ab="Gizlinlik ýörelgesi"/>
            </div>
            <div className="box">
            <Footer h4="Habarlaşmak"/>
            <Footer ab="+993 65 724311"/>
            <Footer ab="info@100haryt.com"/>
            <button><a href=''>Bize hat galdyryň</a></button>
            </div>
          </div>
        </div>
       </section>
    </>
  )
}

export default GurlusukRemontPage
