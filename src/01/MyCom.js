import clock from './colock.png' ;
import './MyCom.css' ;
import { useState, useEffect } from 'react';

function MyCom() {
  //상태변수선언
  const[tm, seTm]=useState(new Date());

  const mycomDiv = {
    width : '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }

  //컴포넌트 생성 시 한번 실행
  useEffect(()=>{
    const timer = setInterval(()=>{
      setTimeout(new Date());
    },1000);

    return(()=>{
      clearInterval(timer);
    });  
  },[]);

  return (
    <div style={mycomDiv}>
      <p className='mycomP'>
        <img src={clock} alt='시계' style={{'width':'400px'}} />
      </p>
      <p className='mycomP'>
        현재 시간 : {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}

export default MyCom ;