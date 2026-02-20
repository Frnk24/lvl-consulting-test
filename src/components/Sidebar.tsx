import { LayoutDashboard, ShoppingBag, Folder, Server, Store, HelpCircle, ChevronDown, Space } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface SidebarProps {
  isCollapsed: boolean;
}

const Sidebar = ({ isCollapsed }: SidebarProps) => {
    
    const location = useLocation();
    const navigate = useNavigate();

const [iswebPagesOpen, setIsWebPagesOpen]=useState(true);
    
const isWebSectionActive = () => {
        return location.pathname.startsWith('/Web-Pages') || location.pathname.startsWith('/new-form');
    };

    const isActive = (path: string)=> location.pathname === path;

    const handleWebPagesClick = () => {
        navigate('/Web-Pages');
        setIsWebPagesOpen(!iswebPagesOpen);
    };
  return (
    <aside className={`fixed h-full bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out z-30 ${
      isCollapsed ? 'w-20' : 'w-64'
    }`}>
      <div className="p-6 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-blue-600">
          {isCollapsed ? 'L' : 'LVL Consulting'}
        </h1>
      </div>

      <nav className="flex-1 px-4">
        {!isCollapsed &&<p className="px-4 py-2 text-xs text-gray-400 uppercase">Menu</p>}
        <Link 
        to="/"
        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
            isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}
        `}
        >
          <LayoutDashboard size={20} />
          {!isCollapsed &&<span className="ml-3 font-medium">Dashboard</span>}
        </Link>

        <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-not-allowed opacity-50">
          <ShoppingBag size={20} />
          {!isCollapsed &&<span className="ml-3">Productos</span>}
        </div>

        <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-not-allowed opacity-50">
          <Folder size={20} />
          {!isCollapsed &&<span className="ml-3">Apps</span>}
        </div>

        <div>
            <button
              onClick={handleWebPagesClick}
              title="Páginas Web"
              className={`flex items-center justify-between w-full px-4 py-2 rounded-md transition-colors ${isWebSectionActive() ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <div className='flex items-center'>
                <Folder size={20} />
                {!isCollapsed && <span className='ml-3 font-medium whitespace-nowrap'>Páginas Web</span>}
              </div>
              {/* Flechita que gira */}
              {!isCollapsed && <ChevronDown size={16} className={`transition-transform ${iswebPagesOpen ? 'rotate-180' : ''}`} />}
            </button>
            { iswebPagesOpen && !isCollapsed &&(
              <div className='mt-1 ml-4 pl-4 border-l border-gray-200 space-y-1'>
                
                  <Link to="/new-form" className={`block px-4 py-2 rounded-md ${isActive('/new-form')? 'bg-gray-100 font-semibold' : 'hover:bg-gray-100'}`}>
                   Administrador
                   </Link>

                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100">Recursos humanos</a>
                  <a href="#" className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100">Estudios contables</a>
              </div>
            )}
        </div>

        <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-not-allowed opacity-50">
          <Server size={20} />
          {!isCollapsed &&<span className="ml-3">Servidores</span>}
        </div>
        <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
          <Store size={20} />
          {!isCollapsed &&<span className="ml-3">Tienda</span>}
        </div>
        <div className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
          <HelpCircle size={20} />
          {!isCollapsed &&<span className="ml-3">Centro de ayuda</span>}
        </div>

      </nav>
    </aside>
  );
};

export default Sidebar;