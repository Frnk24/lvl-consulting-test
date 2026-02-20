import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    plugins
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesDistributionChart = () => {
    const data={
        labels:['Anual', 'Mensual', 'Semanal', 'Diario'],
        datasets: [
            {
                label: 'Ventas',
                data: [100,60,20,30],
                backgroundColor: [
                     '#3b82f6',
                     '#10b981',
                     '#f97316',
                     '#6366f1',
                ],
                bordercolor: '#ffffff',
                borderwidth: 4,
            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutou: '75%',
        plugins:{
            legend: {
                display: false,
            },
        },
    };
    return(
        <div>
            <h2 className="text-lg font-semibold text-gray700 mb-2"> Historial de ventas</h2>
            <div className="flex items-center space-x-6">
                <div className="relative w-40 h-40">
                    <Doughnut data={data} options={options}/>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-gray-1200">100%</span>
                        <span className="text-xs text-gray-800">S/4500</span>
                    </div>
                </div>
                 <div className="grid grid-cols-4 gap-2 w-full text-center">
          {data.labels.map((label, index) => (
            <div key={label} className="flex flex-col items-center justify-center">
              <span className="text-gray-500 text-xs mb-1">{label}</span>
              
              <span className="text-lg font-bold text-gray-800 leading-none">
                {data.datasets[0].data[index]}%
              </span>
              
              <span className="text-[10px] text-gray-500 mt-1">S/4500</span>
            </div>
          ))}
        </div>
            </div>
        </div>
    );
};

export default SalesDistributionChart;