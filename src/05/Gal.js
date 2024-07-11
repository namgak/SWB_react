import{useState, usEffect} from 'react'
export default function GalMain() {
    //상태 변수
    const [tdata, setTdata]=useState([]);

    //데이터 가져오기
    const getData =(kw)=>{
        console.log(kw)
        let url =''
        url=url+''

    }
    //맨 처음 한번
    useEffect ( ()=>{
        let kw=encodeURI('부산역');
        getData(kw);        

    },[]);

  return (
    <div className="text-black">
      Galmain
    </div>
  )
}
