import React from 'react'
import Footer from './Footer';
import main from './Main.module.scss';
import tileData from './tileData';
import pic1 from "../css/img/pic1.jpg";
import pic4 from "../css/img/pic4.jpg";
import pic3 from "../css/img/pic3.jpg";


const Main = () => {
  return (
    <div className={main.main}>
      <div className={main.container}>
        <div className={main.contents}>
          {/* <div className={main.work1}> */}
            <a href="#" className={main.work1}><span>Work 1</span></a>
          {/* </div>
          <div className={main.work2}> */}
          <a href="#" className={main.work2}><span>Work 2</span></a>
          {/* </div>
          <div className={main.work3}> */}
          <a href="#" className={main.work3}><span>Work 3</span></a>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main;