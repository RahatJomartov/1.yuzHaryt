import React from 'react'
import './HyzmatdaslykPage.css'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
import ScrollToTop from '../../components/ScrollToTop'
const HyzmatdaslykPage = () => {
    const {} =useParams()
  return (
    <>
    <ScrollToTop/>
      <section id='hyzmatdaslyk'>
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
                <h4>Hyzmatdaşlyk</h4>
                <h5>Biziň hyzmatdaşymyz boluň!</h5>
                <h5>100haryt.com - diňe bir sanly söwdä platformasy bolman,</h5>
                <h5>birnäçe satyjylary we millionlarça alyjylary birleşdirýändir.</h5>
                <p>Hyzmatdaşlarymyz biziň üçin gymmatly we möhüm bölekdir.</p>
                <p>Siziň bilen özara hyzmatdaşlykda bolup üstünlik gazanmaga sabyrsyzlyk bilen garaşýarys.</p>
                <p>Hyzmatdaşlarymyz üçin hödürleýän amatly hyzmatlar we mümkinçilikler bilen</p>
                <p>aşakda bellenen aragatnaşyk maglumatlaryny ulanyp bilersiňiz.</p>
                <h5>Aýratynlyklarymyz:</h5>
                <li><span>Özara peýda: </span>ýeňil ýol bilen girdeýjiňizi artdyryň.</li>
                <li><span>Hilli hyzmat:</span>her satyjy öz şahsy sahypasyna gönükdirilip, harytlaryň ählisi öz ýerinde saklanar.</li>
                <li><span>Ösüş we tejribe: </span>harytlaryň brendini biz bilen tanadyň. Iş tejriýänňizi toplap, öndürjiligiňizi biz bilen ýokarlandyryň.</li>
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

export default HyzmatdaslykPage
