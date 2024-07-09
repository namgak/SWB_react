import MyDiv2 from "./MyDiv2";

function MyDiv1() {
    const n1='MyDiv1';
    const n2='MyDiv2';
    const n3='MyDiv3';
    return (
        <div className="flex flex-col  justify-start items-center align-top w-1/2 h-1/2 bg-rose-700 text-xl text-rose-100 p-2">
            <p className="w-full h-8 text-left p-2 mb-4">
                {n1}
            </p>
        <MyDiv2 d1={n1} d2={n2} d3={n3} />

        </div>
    );
}

export default MyDiv1;