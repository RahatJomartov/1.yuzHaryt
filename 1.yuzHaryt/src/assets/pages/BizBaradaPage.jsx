import React from 'react'
import './BizBaradaPage.css'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
import ScrollToTop from '../../components/ScrollToTop'

const BizBaradaPage = () => {

  
  return (
    <>

    <div id='bizbarada'>

    <div className="container">
 
    </div>
      </div>

    <ScrollToTop/>
      <section id='bizbarada'>
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
                <h1>Biz barada</h1>
                <p><span>100haryt.com</span> - müşderilere çalt eltip bermek hyzmatyny hödürleýän, giň kategoriýaly söwda platformalaryň biri. </p>
                <p><span>100haryt.com</span> - alyjylar üçin uly mümkinçilikli söwda nokady bolup, ol 2016-njy ýyldan bäri öz müşderilerine söwdanyň tiz, ýeňil we amatly görnüşlerini hödürläp gelýär.
                Bu söwda platformasy özüniň gaty ýaş bolmagyna seretmezden alyjylar köpçüliginiň arasynda uly meşhurlyga eýedir.</p>
                <p><span>100haryt.com</span> - söwda nokadynyň baş şygaryndan hem belli bolşy ýaly, ol öz hyzmatlaryny müşderilere tiz wagtda, ýeňil görnüşde we örän amatly bahalar bilen ýetirýär.</p>
                <p><span>100haryt.com</span> - yň ýene bir aýratynlyklaryň biri hem alyjylar köpçüliginiň gymmatly wagtyny harjamazdan, şol pursatda we ýeňil görnüşde <span>100haryt.com</span> ykjam goşundysynyň üsti bilen gerekli bolan harytlaryny görüp bilmegine we sargyt etmegine mümkinçilik döredilýändigindedir.</p>
                <p><span>100haryt.com-da</span> ähli müşderiler üçin zerur bolan amatly harytlaryň on müňden gowragy bolup, her hepdäniň içinde birnäçe uludan uly arzanladyşlar yzygiderli geçirilip durýar.

                Bu söwda platformasy müşderileriniň isleglerinden elmydama bir ädim öňde bolmak üçin, iň täze tehnologiýalary, logistikany we innowasiýalary ulanmaga çalyşýar</p>
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

export default BizBaradaPage
