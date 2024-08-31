
import './App.css'
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import Header from './Header'
import TopHeader from './TopHeader'
import Kategoriya from './Kategoriya';
import { BiCategory } from "react-icons/bi";
import OneCykanlar from './OneCykanlar';
import Meshur from './Meshur';
import Hyzmatlar from './Hyzmatlar';
import { PiHeartStraight } from "react-icons/pi";
import TazeHarytlar from './TazeHarytlar';
import Baner2 from './Baner2';
import AzykHarytlar from './AzykHarytlar';
import Baner3 from './Baner3';
import OyHarytlary from './OyHarytlary';
import Mebeller from './Mebeller';
import Elektronika from './Elektronika';
import MekdepOfisHarytlary from './MekdepOfisHarytlary';
import SportDyncAlys from './SportDyncAlys';
import OyHaywanlarUcin from './OyHaywanlarUcin';
import AwtoulagUcin from './AwtoulagUcin';
import GurlusukRemont from './GurlusukRemont';
import Baner4 from './Baner4';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import 'swiper/css'



function App() {
 

  return (
    <>
   
      <section id='topHeader'>
            <TopHeader src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fsmall%2Fwebp%2F1713528366842-4bfb.webp&w=1920&q=100"/>
      </section>
      <section id='header'>
        <div className="container">
          <div className="row">
            <div className="box row">
              <Header src="https://100haryt.com/_next/static/media/logoRec.cee89e48.svg"/>
              <input placeholder="search"></input>
              <button className='btn1'><a href=''><FaRegUser/> Girmek </a></button>
              <button className='btn2'><a href=''>TM</a></button>
              <button className='btn2'><a href=''><IoBagOutline /></a></button>
            </div>
          </div>
        </div>
      </section>
      <section id='kategoriya'>
        <div className="container">
          <div className="row">
            <div className="box row">
            <BiCategory/>
           <Link to="/kategoriyalar"><h4>Kategoriyalar</h4></Link>
           <Kategoriya src="https://100haryt.com/_next/static/media/online-shopping.86a829a6.svg"/>
          <Link to='/dukanlar'> <h5>Dukanlar</h5></Link>
           <Kategoriya src="https://100haryt.com/_next/static/media/brand.55ef596b.svg"/>
           <Link to='/brendlar'><h5>Brendlar</h5></Link>
           <Kategoriya src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fothers%2Fdefault%2F1713278894266-4382.png&w=32&q=75"/>
           <Link to='/market'><h5>Market</h5></Link>
           <Kategoriya src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fothers%2Fdefault%2F1712326127116-a5df.png&w=32&q=75"/>
           <Link to='/ikea'><h5>IKEA</h5></Link>
            </div>
          </div>
        </div>
      </section>
      <section id='swiper'>
      <div className="container">
      <Swiper
       spaceBetween={50}
       slidesPerView={1}
       onSlideChange={() => console.log('Slide change')}
       onSwiper={(swiper) => console.log(swiper)}
       modules={[Autoplay]}
       loop={true}
             autoplay={{
               delay:3000,
               disableOnInteraction: false
             }}
      >
        <SwiperSlide className='box'>
          <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1721367483942-4edc.jpg&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
          <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1721215625393-5be7.jpg&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
          <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1721278281701-e231.jpg&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
        <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1721023482041-45e4.jpg&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
        <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1721118466996-10bef.jpg&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
        <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1720178809220-a3f8.png&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
        <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1720172989233-ef6e.gif&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
        <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1721131784189-8df5.jpg&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
        <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1720446201020-1a75.jpg&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
        <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1719477972455-bedb.jpg&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
        <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1720429031729-016e.jpg&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide className='box'>
        <img src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmainbanners%2Fdefault%2F1719639085453-c16d.gif&w=1920&q=100" alt="" srcset="" />
        </SwiperSlide>
       
      </Swiper>
      </div>
     </section>
      <section id='one-cykanlar'>
        <div className="container">
          <OneCykanlar h2="Öňe çykanlar"/>
          <div className="row">
            <div className="box">
              <Link to="/saglykwegozellik"><OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705213323132-76d9.webp&w=750&q=75"/></Link>
             <Link to="/onecykanlar"> <OneCykanlar h5="Saglyk we gözellik"/></Link>
            </div>
            <div className="box">
              <Link to="/mebeller"><OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705213673621-8094.webp&w=750&q=75"/></Link>
              <Link to="/mebeller"><OneCykanlar h5="Mebeller"/></Link>
            </div>
            <div className="box">
            <Link to="/parfyumeriya"><OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705230836275-e49a.webp&w=750&q=75"/></Link>
            <Link to="/parfyumeriya"><OneCykanlar h5="Parfýumeriýa"/></Link>
            </div>
            <div className="box">
            <Link to="/korpeler"><OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705218938231-7af8.webp&w=750&q=75"/></Link>
            <Link to="/korpeler"><OneCykanlar h5="Körpelermiz üçin"/></Link>
            </div>
            <div className="box">
            <Link to="/mekdepharytlary"><OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fsmall%2Fwebp%2F1713177590801-ce3b.webp&w=750&q=75"/></Link>
            <Link to="/mekdepharytlary"><OneCykanlar h5="Mekdep we ofis harytlary"/></Link>
            </div>
            <div className="box">
            <Link to="/oyerahatlyk"><OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705219202489-41ee.webp&w=750&q=75"/></Link>
            <Link to="/oyerahatlyk"><OneCykanlar h5="Öýe rahatlyk"/></Link>
            </div>
            <div className="box">
            <Link to="/ashana"><OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fsmall%2Fwebp%2F1713165039610-5938.webp&w=750&q=75"/></Link>
            <Link to="/ashana"><OneCykanlar h5="Aşhana arassaçylygy"/></Link>
            </div>
            <div className="box">
            <Link to="/elektronika"><OneCykanlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fcategories%2Fwebp%2F1705219431760-01e3.webp&w=750&q=75"/></Link>
            <Link to="/elektronika"><OneCykanlar h5="Elektronika"/></Link>
            </div>
          </div>
        </div>
      </section>
      <section id='meshur-dukanlar'>
        <div className="container">
          <Meshur h2="Meşhur dükanlar"/>
          <div className="row">
            <div className="box">
              <Link to="/market"><Meshur src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmarkets%2Fsmall%2Fwebp%2F1713265412569-35a7.webp&w=384&q=75"/></Link>
              <Link to="/oyerahatlyk"><Meshur src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmarkets%2Fsmall%2Fwebp%2F1712839632374-b642.webp&w=384&q=75"/></Link>
              <Link to="/elektronika"><Meshur src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fmarkets%2Fsmall%2Fwebp%2F1712839632373-31db.webp&w=384&q=75"/></Link>
            </div>
          </div>
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='hyzmatlar'>
        <div className="container">
          <Hyzmatlar h2="Hyzmatlar"/>
          <div className="row">
            <div className="box">
              <Link to="/dukanlar"><Hyzmatlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fsmall%2Fwebp%2F1717744819980-135b.webp&w=750&q=75"/></Link>
            </div>
            <div className="box">
            <Link to="/market"><Hyzmatlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fdefault%2F1718256002527-6af4.gif&w=750&q=75"/></Link>
            </div>
            <div className="box">
            <Link to="/market"><Hyzmatlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fdefault%2F1720600333308-10343.gif&w=750&q=75"/></Link>
            </div>
            <div className="box">
            <Link to="/gokonumler"><Hyzmatlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fsmall%2Fwebp%2F1717504789690-379d.webp&w=750&q=75"/></Link>
            </div>
          </div>
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='taze-harytlar'>
        <div className="container">
          <TazeHarytlar h2="Täze harytlar"/>
          <div className="row">
            <div className="box">
              <Link to="/mebeller"><TazeHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1720530812417-cbfc.webp&w=750&q=75"/></Link>
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
              <Link to="/oyerahatlyk"><TazeHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1720445794665-6f2d.webp&w=750&q=75"/></Link>
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
            <Link to="/ashana"><TazeHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1720531515930-f9c5.webp&w=750&q=75"/></Link>
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
           <Link to="/saglykwegozellik"> <TazeHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1720527622087-12e2.webp&w=750&q=75"/></Link>
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
           <Link to="/saglykwegozellik"> <TazeHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1720524081448-34106.webp&w=750&q=75"/></Link>
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
      <section id='baner2'>
        <div className="container">
          <div className="row">
            <div className="box">
              <Link to="/suytonumleri"><Baner2 src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fsmall%2Fwebp%2F1712989027475-eb13.webp&w=750&q=75"/></Link>
            </div>
            <div className="box">
            <Link to="/gokonumler"><Baner2 src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fsmall%2Fwebp%2F1717851350286-1221.webp&w=750&q=75"/></Link>
            </div>
          </div>
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='azyk-harytlary'>
        <div className="container">
          <AzykHarytlar h2="Azyk harytlar"/>
          <div className="row">
            <div className="box">
              <Link to="/market"><AzykHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2841.webp&w=750&q=75"/></Link>
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
            <Link to="/dukanlar"><AzykHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2006259.webp&w=750&q=75"/></Link>
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
            <Link to="suytonumleri"><AzykHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST06073.webp&w=750&q=75"/></Link>
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
            <Link to="/market"><AzykHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2010352.webp&w=750&q=75"/></Link>
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
            <Link to="/korpeler"><AzykHarytlar src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST14726.webp&w=750&q=75"/></Link>
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
      <section id='baner3'>
        <div className="container">
          <div className="row">
            <div className="box">
               <Link to="/gokonumler"> <Baner3 src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fsmall%2Fwebp%2F1720602743971-67fa.webp&w=750&q=75  "/></Link>
            </div>
            <div className="box">
            <Link to="/suwicgiler"><Baner3 src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fbanners%2Fsmall%2Fwebp%2F1717660513406-dc109.webp&w=750&q=75"/></Link>
            </div>
          </div>
           <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='oy-harytlar'>
        <div className="container">
          <OyHarytlary h2="Öý harytlar"/>
          <div className="row">
            <div className="box">
             <Link to="/oyerahatlyk"> <OyHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST6458.webp&w=750&q=75"/></Link>
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
            <Link to="/ashana"><OyHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1716031280727-840a.webp&w=750&q=75  "/></Link>
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
           <Link to="/oyerahatlyk"> <OyHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1716273764647-b10b9.webp&w=750&q=75"/></Link>
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
            <Link to="/ashana"><OyHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FHT00450.webp&w=750&q=75"/></Link>
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
            <Link to="/oyerahatlyk"><OyHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FHT00858.webp&w=750&q=75"/></Link>
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
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='mebeller'>
        <div className="container">
          <Mebeller h2="Mebeller"/>
          <div className="row">
            <div className="box">
              <Link to="/mebeller"><Mebeller src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1720532591480-d914.webp&w=750&q=75"/></Link>
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
           <Link to="/mebeller"> <Mebeller src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FHT00576.webp&w=750&q=75"/></Link>
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
            <Link to="/mebeller"><Mebeller src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1716275773559-2e65.webp&w=750&q=75"/></Link>
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
            <Mebeller src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1716288266454-1a5e.webp&w=750&q=75"/>
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
            <Link to="/mebeller"><Mebeller src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1716211733004-6786.webp&w=750&q=75"/></Link>
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
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='elektronika'>
        <div className="container">
          <Elektronika h2="Elektronika"/>
          <div className="row">
            <div className="box">
              <Link to="/elektronika"><Elektronika src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FGT-ST10149.webp&w=750&q=75"/></Link>
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
            <Link to="/elektronika"><Elektronika src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FGT-ST09519.webp&w=750&q=75"/></Link>
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
            <Link to="/elektronika"><Elektronika src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FGT-ST2217.webp&w=750&q=75"/></Link>
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
           <Link to="/elektronika"> <Elektronika src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FGT-ST7574.webp&w=750&q=75"/></Link>
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
           <Link to="/elektronika"> <Elektronika src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FGT-ST93667.webp&w=750&q=75"/></Link>
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
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='mekdep-we-ofis-harytlary'>
        <div className="container">
          <MekdepOfisHarytlary h2=" Mekdep we ofis harytlary"/>
          <div className="row">
            <div className="box">
              <Link to="/mekdepharytlary"><MekdepOfisHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2005949.webp&w=750&q=75"/></Link>
              <div className="box1 row">
            <TazeHarytlar price="9.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <Link to="/mekdepharytlary"><MekdepOfisHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1716646745075-8406.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="19.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <Link to="/mekdepharytlary"><MekdepOfisHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2005935.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="25.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
           <Link to="/mekdepharytlary"> <MekdepOfisHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2009212.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="16.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <Link to="/mekdepharytlary"><MekdepOfisHarytlary src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1711105428641-765e.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="35.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
          </div>
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='sport-we-dync-alys'>
        <div className="container">
          <SportDyncAlys h2="Sport we dynç alyş"/>
          <div className="row">
            <div className="box">
              <Link to="/saglykwegozellik"><SportDyncAlys src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST9593.webp&w=750&q=75"/></Link>
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
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='oy-haywanlar-ucin'>
        <div className="container">
          <OyHaywanlarUcin h2="Öý haýwanlar üçin"/>
          <div className="row">
            <div className="box">
              <Link to="/oyhaywanlary"><OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2007803.webp&w=750&q=75"/></Link>
              <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
           <Link to="/oyhaywanlary"> <OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2003091.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
           <Link to="/oyhaywanlary"> <OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2004409.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
           <Link to="/oyhaywanlary"> <OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2009421.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <Link to="/oyhaywanlary"><OyHaywanlarUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2003101.webp&w=750&q=75"/></Link>
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
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='awtoulag-ucin'>
        <div className="container">
          <AwtoulagUcin h2="Awtoulag üçin"/>
          <div className="div">
            <div className="box">
             <Link to="/awtoulag"> <AwtoulagUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST5862.webp&w=750&q=75"/></Link>
              <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <Link to="/awtoulag"><AwtoulagUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST1006022.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <Link to="/awtoulag"><AwtoulagUcin src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST02358.webp&w=750&q=75"/></Link>
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
          <button><a href=''>Ählisini görkez</a></button>
        </div>
      </section>
      <section id='gurlusuk-we-remont'>
        <div className="container">
          <GurlusukRemont h2="Gurluşuk we remont"/>
          <div className="row">
            <div className="box">
              <Link to="/gurlusuk"><GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2007663.webp&w=750&q=75"/></Link>
              <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <Link to="/gurlusuk"><GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1714557315326-4cd4.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
           <Link to="/gurlusuk"> <GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2F1715584836005-073a.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <Link to="/gurlusuk"><GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2002913.webp&w=750&q=75"/></Link>
            <div className="box1 row">
            <TazeHarytlar price="235.00tm"/>
            <TazeHarytlar lorem="Lorem ipsum dolor sit amet."/>
            <button><a href=''>Sebede gos</a></button>
            <div className='div'>
              <PiHeartStraight />
             </div>
            </div>
            </div>
            <div className="box">
            <Link to="/gurlusuk"><GurlusukRemont src="https://100haryt.com/_next/image?url=https%3A%2F%2Fapi.100haryt.com%2Fuploads%2Fproducts%2Fsmall%2Fwebp%2FST2002914.webp&w=750&q=75"/></Link>
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
      <section id='baner4'>
        <div className="container">
          <div className="row">
            <div className="box">
              <Baner4 h3="Mobil programmasyny telefonyňyza ýükläp alyň"/>
              <Baner4 paragraf="Gündelik arzanladyşlary we aksiýalary bilen çalt eltip bermek hyzmaty bolan 100haryt.com programmasy smartfonlaryňyzda elýeterlidir. Programmany App Store ýa-da Google Play-den ýükläp bilersiňiz."/>
              <div className="row">
              <div className="box1">
                <Baner4 src="https://100haryt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-store.f62e0c1b.png&w=256&q=75"/>
              </div>
              <div className="box1">
              <Baner4 src="https://100haryt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-play.7fa83e6a.png&w=256&q=75 "/>
              </div>
              <div className="box1">
              <Baner4 src="https://100haryt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhuawei-icom.b0d46b31.png&w=256&q=75"/>
              </div>
              </div>
             
            </div>
            <div className="box">
              <Baner4 src="https://100haryt.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp_img.45e0ab92.png&w=1920&q=75"/>
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
             <Link to="/bizbarada"><Footer ab="Biz barada"/></Link>
              <Link to="/sargytetmek"><Footer ab="Sargyt etmek"/></Link>
              <Link to="/yzynagaytarmak"><Footer ab="Yzyna gaytarmak"/></Link>
            </div>
            <div className="box">
              <Footer h4="Hyzmatdaşlyk"/>
             <Link to="/eltipberme"><Footer ab="Eltip berme we töleg"/></Link>
              <Link to="/hyzmatdaslyk"><Footer ab="Hyzmatdaşlyk"/></Link>
             <Link to="/pocta"> <Footer ab="E-poçtalarmyz"/></Link>
            </div>
            <div className="box">
              <Footer h4="Kömek we goldaw"/>
              <Link to="/musderiler"><Footer ab="Müşderi hyzmatymyz"/></Link>
              <Link to="/soragjogap"><Footer ab="Sorag-jogap"/></Link>
            </div>
            <div className="box">
            <Footer h4="Gizlinlik ýörelgesi"/>
            <Link to="/ulanysduzgunleri"><Footer ab="Ulanyş düzgünleri"/></Link>
            <Link to="/gizlinyorelge"><Footer ab="Gizlinlik ýörelgesi"/></Link>
            </div>
            <div className="box">
            <Footer h4="Habarlaşmak"/>
            <Footer ab="+993 65 724311"/>
            <Footer ab="info@100haryt.com"/>
            <button><Link to='/bizehatgaldyr'>Bize hat galdyryň</Link></button>
            </div>
          </div>
        </div>
       </section>
    </>
  )
}

export default App
