function MyDiv3({dd1,dd2,dd3}) {
    return (
        <div className="flex flex-col justify-start items-center align-top w-4/5 h-4/5 bg-rose-300 text-xl text-rose-100 p-2">
            <p className="w-full h-8 text-left px-10">
                {dd1} > {dd2} > {dd3}
            </p>
        </div>
    );
}

export default MyDiv3;