import { useState, useEffect } from "react";

export default function BoxOffice() {
    //JSON DATA 저장 변수
    const [tdata, setTdata] = useState([]);
    const [tags, setTags] = useState([]);

    //컴포넌트 생성 시
    useEffect(() => {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?'
        url = url + `key=${process.env.REACT_APP_MV}`
        url = url + `&targetDt=20240709`;
        console.log(process.env.REACT_APP_MV)
        console.log(url)
        //fetch함수를 이용하여 오픈 API 데이터 불러오기
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList));

    }, []);

    //tdata가 변경될 때 실행
    useEffect(() => {
        if (tdata.length === 0) return;

        console.log(tdata)
        let tm = tdata.map(item =>
            <tr className="bg-white border-b hover:bg-gray-50 font-bold">
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                    {item.rank}
                </th>
                <td className="px-6 py-2">
                    {item.movieNm}
                </td>
                <td className="px-6 py-2 text-right">
                    {parseInt(item.salesAmt).toLocaleString()}
                </td>
                <td className="px-6 py-2 text-right">
                    {parseInt(item.audiCnt).toLocaleString()}
                </td>
                <td className="px-6 py-2 text-right">
                    {item.audiInten}
                </td>
            </tr>)

            setTags(tm)
    }, [tdata]);

    return (
        <div className="text-black w-10/12">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-lg text-gray-300 uppercase bg-black">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            순위
                        </th>
                        <th scope="col" className="px-6 py-3">
                            영화명
                        </th>
                        <th scope="col" className="px-6 py-3">
                            매출액
                        </th>
                        <th scope="col" className="px-6 py-3">
                            관객수
                        </th>
                        <th scope="col" className="px-6 py-3">
                            증감
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tags}

                </tbody>
            </table>


        </div>
    )
}
