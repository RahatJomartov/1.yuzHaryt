import React from 'react'
import './SargytEtmekPage.css'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
import ScrollToTop from '../../components/ScrollToTop'
const SargytEtmekPage = () => {
    const {} = useParams()
  return (
    <>
    <ScrollToTop/>
      <section id='sargytetmek'>
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
                <h1>Sargyt etmek</h1>
                <h4>Sargytlar barada</h4>
                <p>Sargytlar günüň dowamynda islendik wagtda sargyt etmek mümkindir.</p>
                <p>Sargyt doly ýerine ýetirilenden soň operator size jaň edip, sargydy tassyklaýar.</p>
                <p>Sargytlar 3 wagtyna amala aşyrylýar.</p>
                <p>09:00-13:00</p>
                <p>13:00-17:00</p>
                <p>17:00-21:00</p>
                <p>Mundan başga-da Express dostawkamyzdan peýdalanyp bilesiňiz. Express hyzmaty saýalanan sargytlar 60 min dowamynda eltip berlýär.</p>
                <p>Operator sargytlary sagat 09:00-18:00 aralygynda tassyklaýar.</p>
                <p>Sargydyňyz tassyklanmadyk ýagdaýynda ol hasaba alynmaýar we ýerine ýetirilmeýär.</p>
                <p>Tassyklanan sargydyň eýesi 24 sagadyň dowamynda tapylmadyk halatynda sargyt güýjüni ýitirýär.</p>
                <h4>Kepillik</h4>
                <p>100haryt.com harytlaryň işleýşini we asyl ýagdaýyny kepillendirýär. Elektron harytlaryň kepilligi kepillik şertnamasynda görkezilen. Eltip bermek hyzmatynyň işgärleri size kepillik resminamasy barada habar bererler. </p>
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

export default SargytEtmekPage
