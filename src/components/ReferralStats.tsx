const ReferralStats = () => {
    const percentage = 87;

    return (
        <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2"> Historial de ventas</h2>
            <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-bold text-gray-800">1024</p>
                        <p className="text-sm text-gray-500">Referidos</p>
                    </div>
                    <span className="font-semibold text-gray-600">{percentage}%</span>
                </div>

                <div className="mt-4 bg-gray-200 rounded-full h-2 w-full">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: `${percentage}%`}}></div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-2xl font-bold text-gray-800">1024</p>
                        <p className="text-sm text-gray-500">Referidos</p>
                    </div>
                    <span className="font-semibold text-gray-600">{percentage}%</span>
                </div>

                <div className="mt-4 bg-gray-200 rounded-full h-2 w-full">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: `${percentage}%`}}></div>
                </div>
            </div> 
        </div>
    </div>
    );
};

export default ReferralStats;