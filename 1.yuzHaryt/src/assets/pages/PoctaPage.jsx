import React from 'react'
import './PoctaPage.css'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
import ScrollToTop from '../../components/ScrollToTop'
const PoctaPage = () => {
    const {} =useParams()
  return (
    <>
    <ScrollToTop/>
      <section id='pocta'>
        <div className="container">
        <div className="row">
                <div className="box">
                    <ul>
                        <li><a href=''>Biz barada</a></li>
                        <li><a href=''>Sargyr etmek</a></li>
                        <li><a href=''>Yzyna gaýtarmak</a></li>
                        <li><a href=''>Eltip berme we töleg</a></li>
                        <li><a href=''>Hyzmatdaşlyk</a></li>
                        <li><a href=''>E-poçtalarymyz</a></li>
                        <li><a href=''>Sorag we jogap</a></li>
                        <li><a href=''>Müşderi hyzmatymyz</a></li>
                    </ul>
                </div>
            </div>
            <div className="box1">
                <h4>E-poçtalarymyz</h4>
                <div className="box2">
                <h5>Arassaçylyk serişdeleri bölümi boýunça:</h5>
                <p>import1@100haryt.com | +99362523663</p>
                </div>
               <div className="box3">
                <h5>Elektronika, gök we süýt önümi bölümleri boýunça:</h5>
                <p>import2@100haryt.com | +99362476336</p>
               </div>
               <div className="box4">
                <h5>Azyk önümleri bölümi boýunça:</h5>
                <p>import3@100haryt.com | +99362476336</p>
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

export default PoctaPage
