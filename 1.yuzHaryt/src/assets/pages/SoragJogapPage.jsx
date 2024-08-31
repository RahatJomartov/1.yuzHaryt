import React from 'react'
import './SoragJogapPage.css'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
import ScrollToTop from '../../components/ScrollToTop'
const SoragJogapPage = () => {
    const {} =useParams()
  return (
    <>
    <ScrollToTop/>
      <section id='soragjogap'>
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
                <h4>Sorag we jogap</h4>
                <h5>Sargytlar nädogry ýerine ýetirilendekime ýüz tutmaly?</h5>
                <div className="box2">
                    <p>Sargytlaryňyz nädogry ýerine ýetrilende operatora ýüz tutup bilersiňiz.</p>
                    <p>Habarlaşmak üçin: +99365724311 +99364616311</p>
                    <p>Operatorlar hepdäniň 7 güni 08:30-21:00 aralygynda hyzmat berýär.</p>
                </div>
                <h5>Gijeki berilen sargytlar haçan gelip gowuşýar?</h5>
                <div className="box3">
                    <p>Sargytlaryňyz operator tarapyndan tassyklanandan soň, ertesi gün sagat 10:00 bilen 12:00 aralygynda eltilýär.</p>
                </div>
                <h5>Täzeliklerden we arzanladyşlardan müşderiler nädip habarly bolmaly?</h5>
                <div className="box4">
                    <p>Tekliplerimiz, arzanladyşlarymyz we aksiýalarymyz barada web sahypamyzda ýa-da ykjam programmada bildirişler bölüminde bilip bilersiňiz.</p>
                    <p>Biz olary IMO, Instagram sosial ulgamlarynda paýlaşýarys.</p>
                    <p>Imo: +99365724311</p>
                    <p>Instagram: @100harytcom</p>
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

export default SoragJogapPage
