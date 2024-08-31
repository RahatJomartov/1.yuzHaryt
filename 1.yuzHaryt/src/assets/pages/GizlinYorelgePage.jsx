import React from 'react'
import './GizlinYorelgePage.css'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
import ScrollToTop from '../../components/ScrollToTop'
const GizlinYorelgePage = () => {
    const {} =useParams()
  return (
    <>
    <ScrollToTop/>
      <section id='gizlinyorelge'>
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
                <h4>Gizlinlik ýörelgesi</h4>
                <h5>1.Toplanýan maglumatlar:</h5>
                <p>1.1. Ady. Familiýa</p>
                <p>1.2. Telefon belgisi</p>
                <p>1.3. Ýaşaýan salgysy</p>
                <h5>2. Maglumat toplamagyň maksatlary:</h5>
                <p>2.1. Şahsy hasabyňyzy açmak üçin</p>
                <p>2.2. Sargytlaryňyzy kabul etmek we gaýtadan işlemek üçin</p>
                <p>2.3. Üýtgeşmeler ýa-da bildirişler ýüze çykan halatynda siziň bilen habarlaşmak üçin</p>
                <p>2.4. Islegleriňizi has gowy bilmek üçin</p>
                <h5>3. Maglumat ýygnamagyň usullary:</h5>
                <p>3.1. Agza bolan wagtyňyzda berýän maglumatlaryňyzdan maglumat ýygnaýarys.</p>
                <h5>4.Maglumatlary saklamak we olaryň howpsuzlygy:</h5>
                <p>4.1. Biz programma üpjünçiligini ulanmak bilen,  siziň şahsy maglumatlaryňyz ulanylanda goramagyň üstünde işleýäris.</p>
                <h5>5.Maglumatlary üçünji taraplara bermek:</h5>
                <p>5.1. Siziň maglumatlaryňyz başga bir hyzmatdaşlarymyza diňe olaryň dükanlaryndan sargyt edip, sargydyňyzy gowşurmak maksady üçin beriler.</p>
                <p>5.2. Berlen maglumatlar:</p>
                <p>- Ady. Familiýa</p>
                <p>- Ady. Familiýa</p>
                <p>- Ýaşaýan salgysy</p>
                <h5>6. Maglumatlary goramak üçin kanunyň berjaý edilmegi:</h5>
                <p>6.1. Bu resminama şahsy durmuşyň el degrilmezligi we goragy esasynda TÜRKMENISTANYŇ KANUNYNDA ýazylan</p>
                <p>Täzelenen senesi: 17.05.2024</p>
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

export default GizlinYorelgePage
