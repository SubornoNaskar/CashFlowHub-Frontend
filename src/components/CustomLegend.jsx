const CustomLegend = ({ payload }) => {
    return (
        <div className="flex flex-wrap justify-center gap-6 mt-6">
            {payload.map((entry, index) => (
                <div key={`legend-${index}`} className="flex items-center space-x-2">
                    <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-base font-semibold text-gray-800 ">
            {entry.value}
          </span>
                </div>
            ))}
        </div>
    );
};

export default CustomLegend;
