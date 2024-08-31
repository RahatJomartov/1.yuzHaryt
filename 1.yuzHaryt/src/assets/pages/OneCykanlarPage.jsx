import React from 'react'
import './OneCykanlarPage.css'
import { useParams } from 'react-router-dom'
import OneCykanlar from '../../OneCykanlar'
import Footer from '../../Footer'
import ScrollToTop from '../../components/ScrollToTop'
const OneCykanlarPage = () => {
    const {} = useParams
  return (
    <>
    <ScrollToTop/>
       <section id='one-cykanlar'>
        <div className="container">
          <OneCykanlar h2="Öňe çykanlar"/>
          <div className="row">
            <div className="box">
              <OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705213323132-76d9.webp&w=750&q=75"/>
              <OneCykanlar h5="Saglyk we gözellik"/>
            </div>
            <div className="box">
              <OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705213673621-8094.webp&w=750&q=75"/>
              <OneCykanlar h5="Mebeller"/>
            </div>
            <div className="box">
            <OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705230836275-e49a.webp&w=750&q=75"/>
            <OneCykanlar h5="Parfýumeriýa"/>
            </div>
            <div className="box">
            <OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705218938231-7af8.webp&w=750&q=75"/>
            <OneCykanlar h5="Körpelermiz üçin"/>
            </div>
            <div className="box">
            <OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fsmall%2Fwebp%2F1713177590801-ce3b.webp&w=750&q=75"/>
            <OneCykanlar h5="Mekdep we ofis harytlary"/>
            </div>
            <div className="box">
            <OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705219202489-41ee.webp&w=750&q=75"/>
            <OneCykanlar h5="Öýe rahatlyk"/>
            </div>
            <div className="box">
            <OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fsmall%2Fwebp%2F1713165039610-5938.webp&w=750&q=75"/>
            <OneCykanlar h5="Aşhana arassaçylygy"/>
            </div>
            <div className="box">
            <OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705219431760-01e3.webp&w=750&q=75"/>
            <OneCykanlar h5="Elektronika"/>
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

export default OneCykanlarPage
