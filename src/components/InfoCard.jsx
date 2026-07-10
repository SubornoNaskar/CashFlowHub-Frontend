const InfoCard = ({icon, label, value, color}) => {
    return(
        //<div className="flex gap-6 bg-white p-6 rounded-2xl shadow-md shadow-gray-100 border border-gray-400/50">
        <div
  className="
    flex gap-6
    bg-white
    p-6
    rounded-2xl
    border border-gray-200
    shadow-lg shadow-gray-200/60
    transition-all duration-300
    hover:-translate-y-2
    hover:scale-[1.02]
    hover:shadow-2xl
    hover:shadow-purple-300/30
    hover:border-purple-300
    cursor-pointer
  "
>
            <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
                {icon}
            </div>
            <div>
                <h5 className="text-lg font-semibold text-gray-600 mb-1">{label}</h5>
                <span className="text-[22px]">&#8377;{value}</span>
            </div>
        </div>
    )
}

export default InfoCard;