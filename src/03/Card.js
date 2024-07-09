export default function Card({ imgSrc, title, content }) {
    return (
        <div className='flex justify-center items-center
                    w-full h-100 border-slate-300
                    p-5
                    '>
            <div className='w-1/3 h-full'>
                <img src={imgSrc} />
            </div>
            <div className='w-2/3 h-full'>
                <p className="text-xl font-bold text-blue-900">
                    {title}
                </p>
                <p className="text-xl text-blue-700">
                    {content}
                </p>
                <p className="text-xl text-blue-900">
                    ❤️ 좋아요 0
                </p>

            </div>
        </div>
    )
}
