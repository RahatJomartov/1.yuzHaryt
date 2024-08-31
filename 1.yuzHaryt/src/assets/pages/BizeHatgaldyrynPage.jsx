import React from 'react'
import Footer from '../../Footer'
import './BizeHatgaldyrynPage.css'
import ScrollToTop from '../../components/ScrollToTop'
const BizeHatgaldyrynPage = () => {
  return (
    <>
    <ScrollToTop/>
      <section id='bizehatgaldyr'>
        <div className="container">
            <h4>Baş sahypa / Bize hat galdyryň</h4>
            <h1>Bize hat galdyryň</h1>
            <div className="box">
            <h4>Maglumatlar</h4>
                <div className='div row'>
                
                <div className="box1">
                    <p>Adyňyz</p>
                    <input type="text" />
                </div>
                <div className="box1">
                    <p>Telefon belgisi</p>
                    <input type="text" />
                </div>
                <div className="box1">
                    <p>E-poçta salgysy</p>
                    <input type="text" />
                </div>
                </div>
                <p>Hatyňyz...</p>
                <input type="text" />
                <button><a href=''>Ugratmak</a></button>
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

export default BizeHatgaldyrynPage



