import React from 'react'
import './YzynaGaytarmakPage.css'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
import ScrollToTop from '../../components/ScrollToTop'
const YzynaGaytarmakPage = () => {
    const {} = useParams()
  return (
    <>
    <ScrollToTop/>
      <section id='yzynagaytarmak'>
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
                <h4>Yzyna gaýtarmak</h4>
                <ul>
                     <li><p>Harydy satyn alan wagtyndan başlap 24 sagadyň dowamynda yzyna gaýtarylyp ýa-da çalşylyp beriler.</p></li>
                </ul>
                <ul>
                    <li><p>Haryt öňki gabynda we ýagdaýynda, ulanylmadyk we zeper ýetmedik bolmaly.</p></li>
                </ul>
                <ul>
                     <li><p>Harytlary yzyna gaýtarmak ýa-da çalyşmak üçin e- poçta ýa-da web sahypada görkezilen telefon belgisi bilen müşderi hyzmat bölümimize ýüz tutup bilersiňiz.</p></li>
                </ul>
                <ul>
                    <li><p>Satyn alyjy gaýdyp bermegiň ýa-da çalyşmagyň sebäbini we isleýän zady (harydy yzyna gaýtarmak ýa-da çalyşmak) barada maglumat bermeli.</p></li>
                </ul>
                <ul>
                     <li> <p>Biz size harydy yzyna gaýtarmak üçin görkezmeler bereris.</p></li>
                </ul>
               <ul>
                     <li><p>Yzyna gaýtarylan harydy alyp, bölümimiz tarapyndan gözden geçirilenden soň 14 iş gününiň dowamynda şol bir töleg eden ulgamyňyza yzyna gaýtarylar.</p></li>
               </ul>
                <ul>
                     <li><p>Eger satyn alyjy satyn alan harydyny başga bir haryda çalyşmak islese biz öňki alan harydyny ýygnap alyp we täze aljak harydy barada görkezmeler görkezeris.</p></li>
                </ul>
                <ul>
                    <li><p>Harydyň alyş-çalyş şertlerine laýyk gelmese, yzyna gaýtarmakdan ýa-da çalyşmakdan ýüz öwürmek hukugymyz bar.</p></li>
                </ul>
                
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

export default YzynaGaytarmakPage
