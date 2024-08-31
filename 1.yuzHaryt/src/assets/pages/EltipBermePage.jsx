import React from 'react'
import './EltipBermePage.css'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
import ScrollToTop from '../../components/ScrollToTop'
const EltipBermePage = () => {
    const {} =useParams()
  return (
    <>
    <ScrollToTop/>
      <section id='eltipberme'>
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
                <h4>Eltip berme we töleg</h4>
                <p>100haryt.com onlaýn dükanynyň gowşuryş maglumatlary:</p>
                <p>Gadyrly müşderiler!</p>
                <p>Siz bilen eltip beriş amallarymyz barada maglumatlary paýlaşmak isleýäris.</p>
                <p>100haryt onlaýn dükanyndan edilen sargytlar Aşgabat şäherine günde üç gezek amala aşyrylýar.</p>
                <p>Sargytlarňyzy gysga wagtda almak eltip bermek üçin Express mümkinçiligini hem berýäris.</p>
                <p>Siziň amatlylygyňyz üçin, sargydyňyz 150 manatdan ýokary bolanda, eltip bermek hyzmaty mugt amala aşyrylýär.</p>
                <p>Sargydyňyzyň bahasy 150 manatdan az bolsa, eltip bermek hyzmatynyň bahasy 10 manatdyr.</p>
                <p>Express hyzmatynyň bahasy 20 manat.</p>
                <span>Üns beriň!</span>
                <br />
                <span>Täze Zamana we Büzmeýine eltip berme hyzmatymyz wagtlaýyn elýeterli däldir.</span>
                <p>Töleg usullary.</p>
                <p>100haryt.com onlaýn dükany size söwda amatlylygyňyzy üpjün etmek üçin tölegiň dürli usullaryny hödürleýär.</p>
                <p>Biziň onlaýn dükanymyzdan sargytlarňyzy nagt we nagt däl görnüşinde töläp bilersiňiz.</p>
                <p>Siziň ynamyňyz we rahatlygyňyz biziň üçin möhümdir.</p>
                <p>Biziň dükanymyzy saýlanyňyz üçin sag boluň!</p>
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

export default EltipBermePage
