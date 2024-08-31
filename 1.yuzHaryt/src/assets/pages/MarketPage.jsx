import React from 'react'
import './MarketPage.css'
import { useParams } from 'react-router-dom'
import TazeHarytlar from '../../TazeHarytlar'
import { PiHeartStraight } from "react-icons/pi";
import SportDyncAlys from '../../SportDyncAlys';
import Footer from '../../Footer';
import ScrollToTop from '../../components/ScrollToTop';
const MarketPage = () => {
    const {} = useParams
  return (
    <>
    <ScrollToTop/>
      <section id='market'>
        <div className="container">
            <div className="row">
                <div className="box row2">
                    <div>
                        <h4>Market</h4>
                        <p>126 agza</p>
                    </div>
                </div>
                <div className="box">
                    <a href="">Baş sahypa</a>
                    <a href="">Harytlar</a>
                    <a href="">Maglumatlar</a>
                </div>
                <div className="box">
                    <button><a href=''>Agza bol</a></button>
                </div>
            </div>
        </div>
      </section>
      <section id='baner'>
        <div className="container">
            <div className="box">
                <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fsmall%2Fwebp%2F1715257763238-2f1010.webp&w=1920&q=100" alt="" srcset="" />
            </div>
        </div>
      </section>
      <section id='baner2'>
        <div className="container">
            <div className="row">
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fsmall%2Fwebp%2F1717828634895-0079.webp&w=1920&q=75" alt="" srcset="" />
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fdefault%2F1718770758583-e55c.gif&w=1920&q=75" alt="" srcset="" />
                </div>
            </div>
            {/* <button><a href=''>Ählisini görkez</a></button> */}
        </div>
      </section>
      <section id='saglyk-we-gozellik'>
        <div className="container">
            <h2>Saglyk we gözellik</h2>
            <div className="row">
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2001731.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST6536.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST07834.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1717927081014-d88d.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST7045.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </section>
      <section id='parfyumeriya'>
        <div className="container">
            <h2>Parfýumeriýa</h2>
            <div className="row">
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST06393.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2009466.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2009054.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2001363.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2009056.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </section>
      <section id='egin-esikler'>
        <div className="container">
            <h2>Egin-eşikler</h2>
            <div className="row">
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST8079.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST03476.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST14433.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST05582.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
                <div className="box">
                    <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST1001115.webp&w=750&q=75" alt="" srcset="" />
                    <div className="box1 row">
                         <TazeHarytlar price="99.00tm"/>
                         <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
                         <button><a href=''>Sebede gos</a></button>
                         <div className='div'>
                             <PiHeartStraight />
                         </div>
                     </div>
                </div>
            </div>
        </div>
      </section>
      <section id='sport-we-dync-alys'>
        <div className="container">
          <SportDyncAlys h2="Sport we dynç alyş"/>
          <div className="row">
            <div className="box">
              <SportDyncAlys src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST9593.webp&w=750&q=75"/>
              <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
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

export default MarketPage
