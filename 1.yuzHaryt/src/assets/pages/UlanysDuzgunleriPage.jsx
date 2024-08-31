import React from 'react'
import './UlanysDuzgunleriPage.css'
import { useParams } from 'react-router-dom'
import Footer from '../../Footer'
const UlanysDuzgunleriPage = () => {
    const {} =useParams()
    React.useEffect(() => {
      window.scrollTo(0, 0)
    },[])
  return (
    <>
      <section id='ulanysduzgunleri'>
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
                <h4>Ulanyş düzgünleri</h4>
                <h5>100haryt.com platformasyna  hoş geldiňiz!</h5>
                <p>Aşakda 100haryt.com platformasynyň hödürleýän hyzmatlaryny ulanmagyňyzy düzgünleşdirýän şertler bar.</p>
                <p>100haryt.com platformasyny ulanmazdan öň bu şertleri üns bilen okaň.</p>
                <h5>1.Şertleriň kabul edilmegi</h5>
                <p>100haryt.com platformasyna girmek bilen, siz bu şertnamanyň ähli şertlerini ýerine ýetirmäge we kabul etmäge razylaşýarsyňyz.</p>
                <p>Şertleriň haýsydyr biri bilen ylalaşmadyk ýagdaýyňyzda, dükanlaryň hyzmatlaryndan peýdalanmakdan saklanmagyňyzy haýyş edýäris. </p>
                <h5>2.Saýtyň  ulanylyşy</h5>
                <p>100haryt.com platformasy müşderilere saýtda ýa-da mobil programmamyzda hödürlenýän harytlary we hyzmatlary görmek we satyn almak mümkinçiligini berýär.</p>
                <h5>3.Agza bolmak we hasabyňyzyň howupsyzlygy</h5>
                <p>Sahypamyzyň käbir aýratynlyklaryny ulanmak üçin agza bolmagyňyz gerekli bolup biler.</p>
                <p>Agza bolan ýagdaýyňyzda, özüňiz hakda dogry we häzirki maglumatlary bermäge borçlanýarsyňyz.</p>
                <p>Loginiňiziň we parolyňyzyň howpsuzlygy siziň jogapkärçiligiňizde.</p>
                <p>Hasabyňyzyň ulanylyşy we onda bolup geçýän ähli işler siziň jogapkärçiligiňizde.</p>
                <h5>4.Gizlinlik</h5>
                <p>Gizlinlik syýasatymyza laýyklykda, maglumatlaryňyzyň gizlinligini üpjün edýäris.</p>
                <p>Şahsy maglumatlaryňyzy siziň rugsadyňyz bolmazdan üçünji taraplara mälim etmeýäris.</p>
                <h5>5.Jogapkärçilik çäkleri</h5>
                <p>Maglumatlaryň dogrulygyny üpjün etmek üçin elimizden gelen ähli zady etsek-de, harydyň düzümindäki maglumatlaryň nädogrylygy üçin jogapkärçilik çekmeýäris.</p>
                <h5>6.Ulanyş şertlerine üýtgeşmeler girizmek</h5>
                <p>Ulanyjy şertnamasyna üýtgeşmeler girizme hukugymyzy özümizde saklaýarys. Ähli üýtgeşmeler sahypa giren pursadyndan güýje girýär.</p>
                <h5>7. Harytlary eltip bermek we goşmak</h5>
                <p>Eger-de siz aýratynlykda 2 we ondan köp gezek sargyt edip, eden sargydyňyz 150 manada ýetmedik bolsa, her bir edilen sargytdan aýratynlykda eltip berme hyzmaynyň puly alynjakdy</p>
                <p>Eger-de sargydyňyzyň üstüne ýene haryt goşdurmak isleseňiz, onda operatorlarymyz bilen habarlaşyp bilersiňiz.</p>
                <h5>8.Şertler bilen ylalaşyk</h5>
                <p>Biziň sahypamyzy ulanmak bilen, siz bu ulanyş şertlerine razy bolýarsyňyz.</p>
                <p>Eger-de biziň ulanyş şertlerimiz barada soraglaryňyz ýüze çykan ýagdaýynda, sahypamyzda berlen aragatnaşyk maglumatlaryny ulanyp, biziň bilen habarlaşyp bilersiň.</p>
                <p>Bu ylalaşyk siziň we 100haryt.com platformasy bilen araňyzdaky şertnama bolup durýar.</p>
                <div className="box2">
                    <p>Hormatlamak bilen,</p>
                    <p>100haryt.com platformasy.</p>
                    <p>Täzelenen senesi: 17.05.2024</p>
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

export default UlanysDuzgunleriPage
