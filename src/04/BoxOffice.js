import { useState, useEffect } from "react";

export default function BoxOffice() {
    //JSON DATA 저장 변수
    const [tdata, setTdata]=useState([]);

    //컴포넌트 생성 시
    useEffect(()=>{
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        url = url + `key=${process.env.REACT_APP_MV}`
        url = url + `&targetDt=20240709`;
        console.log(process.env.REACT_APP_MV)
        console.log(url)
        //fetch함수를 이용하여 오픈 API 데이터 불러오기
        fetch(url)
        .then(resp=>resp.json())
        .then(data => console.log(data));

    },[])

  return (
    <div className="text-black">
      BoxOffice
    </div>
  )
}

