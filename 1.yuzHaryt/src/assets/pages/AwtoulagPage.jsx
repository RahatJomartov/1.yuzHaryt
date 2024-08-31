import React from 'react'
import './AwtoulagPage.css'
import { useParams } from 'react-router-dom'
import { PiHeartStraight } from "react-icons/pi";
import AwtoulagUcin from '../../AwtoulagUcin';
import TazeHarytlar from '../../TazeHarytlar';
import Footer from '../../Footer';
import ScrollToTop from '../../components/ScrollToTop';
const AwtoulagPage = () => {
    const {} = useParams()
  return (
    <>
    <ScrollToTop/>
        <section id='awtoulag'>
        <div className="container">
          <AwtoulagUcin h2="Awtoulag üçin"/>
          <div className="div">
            <div className="box">
              <AwtoulagUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST5862.webp&w=750&q=75"/>
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
            <AwtoulagUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST1006022.webp&w=750&q=75"/>
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
            <AwtoulagUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST02358.webp&w=750&q=75"/>
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

export default AwtoulagPage
