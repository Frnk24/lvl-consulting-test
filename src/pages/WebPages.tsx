import { Plus, Filter, Pencil, Eye, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import tableData from '../data/webPagesData.json';

const WebPages = () => {
  
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Imágenes': return 'bg-orange-100 text-orange-600';
      case 'Documento': return 'bg-green-100 text-green-600';
      case 'Videos': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded px-2 py-1 text-sm text-gray-600 focus:outline-none">
                <option>10</option>
                <option>20</option>
                <option>50</option>
            </select>
            <span className="text-sm text-gray-500">Datos por página</span>
        </div>

        <div className="flex items-center space-x-3">
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 text-sm">
                <Filter size={16} className="mr-2" />
                Filtrar
            </button>
            
            <Link to="/new-form">
              <button className="flex items-center px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm font-medium">
                  <Plus size={16} className="mr-2" />
                  Agregar categoría
              </button>
            </Link>
        </div>
      </div>

      {/* La Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="p-4 w-10"><input type="checkbox" className="rounded border-gray-300" /></th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">N°</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Categoría</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Descripción</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase">Fecha</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Categoría</th>
              <th className="p-4 text-xs font-bold text-gray-500 uppercase text-center">Acciones</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-100">
            {tableData.map((row, index) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                <td className="p-4 text-sm text-gray-500 font-medium">{index + 1}</td>
                <td className="p-4">
                  <div className="flex items-center space-x-3 w-48">
                    <img 
                      src={`https://picsum.photos/id/${row.imageId}/40/40`} 
                      alt="Recurso" 
                      className="w-10 h-10 rounded object-cover bg-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-sm text-gray-800">{row.category}</p>
                      <p className="text-xs text-gray-400">Recursos gráficos</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 max-w-xs">
                    <p className="text-sm text-gray-500 truncate" title={row.description}>{row.description}</p>
                </td>
                <td className="p-4 whitespace-nowrap"><p className="text-sm text-gray-500">{row.date}</p></td>
                <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(row.tag)}`}>{row.tag}</span>
                </td>
                <td className="p-4">
                    <div className="flex items-center justify-center space-x-3">
                        <button className="text-gray-400 hover:text-blue-600 transition-colors"><Pencil size={16} /></button>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors"><Eye size={16} /></button>
                        <button className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <p>Mostrando 1 a 10 de 19 datos</p>
        <div className="flex items-center space-x-2">
            <button className="p-1 hover:bg-gray-100 rounded"> &lt; </button>
            <button className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-600 font-bold rounded">1</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded">2</button>
            <button className="p-1 hover:bg-gray-100 rounded"> &gt; </button>
        </div>
      </div>
    </div>
  );
};

export default WebPages;