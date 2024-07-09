export default function Card({ imgSrc, title, content }) {
    return (
        <div className='flex justify-center items-center
                    w-full h-100 border-slate-300
                    p-3
                    '>
            <div className='w-1/3 h-full flex justify-center items-start'>
                <img src={imgSrc} />
            </div>
            <div className='w-2/3 h-full flex flex-col justify-center items-start bg-slate-200 '>
                <p className="text-xl font-bold text-blue-900">
                    {title}
                    <p className="text-xl font-mono text-blue-700">
                        {content}
                    </p>
                </p>

                <p className="text-xl text-blue-900 mt-10">
                    ❤️ 좋아요 0
                </p>

            </div>
        </div>
    )
}
