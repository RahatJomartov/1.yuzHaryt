import React from 'react'
import './OyHaywanlaryPage.css'
import { useParams } from 'react-router-dom'
import { PiHeartStraight } from "react-icons/pi";
import TazeHarytlar from '../../TazeHarytlar';
import Footer from '../../Footer';
import OyHaywanlarUcin from '../../OyHaywanlarUcin';
import ScrollToTop from '../../components/ScrollToTop';
const OyHaywanlaryPage = () => {
    const {} = useParams()
  return (
    <>
    <ScrollToTop/>
        <section id='oyhaywanlary'>
        <div className="container">
          <OyHaywanlarUcin h2="Öý haýwanlar üçin"/>
          <div className="row">
            <div className="box">
              <OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2007803.webp&w=750&q=75"/>
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
            <OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2003091.webp&w=750&q=75"/>
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
            <OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2004409.webp&w=750&q=75"/>
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
            <OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2009421.webp&w=750&q=75"/>
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
            <OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2003101.webp&w=750&q=75"/>
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

export default OyHaywanlaryPage
