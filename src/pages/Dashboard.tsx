import SalesChart from "../components/SalesChart";
import statsData from "../data/dashboarData.json";
import SalesDistributionChart from "../components/SalesDistributionChart";
import ReferralStats from "../components/ReferralStats";

const Dashboard = () => {
    return (
        <div className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index)=>(
                    <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-sm text-gray-500">{stat.title}</h3>
                        <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                        <div className="flex items-center text-xs mt-2">
                            <span className={`font-semibold ${
                                stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                            }`}>
                                {stat.change}
                            </span>
                            <span className="text-gray-400 ml-1">{stat.time}</span>
                        </div>
                    </div>
                ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-700">Historial de ventas</h2>
            <SalesChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <SalesDistributionChart />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
                <ReferralStats />
            </div>
        </div>


        </div>
    );
};

export default Dashboard;