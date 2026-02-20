import { Bell, Settings, Grip, Menu } from 'lucide-react'; 

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar = ({ onToggleSidebar }: NavbarProps) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center">
        <button onClick={onToggleSidebar} className="text-gray-500 mr-4">
          <Menu size={24} />
        </button>
      <div>
        <h2 className="text-gray-500 text-sm">¡Te damos la bienvenida Miguel!</h2>
        <p className="text-xs text-gray-400">Lunes, 15 de abril, 2024</p>
      </div>
</div>
      <div className="flex items-center space-x-4">
        
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-5 h-5 bg-red-500 rounded-sm"></div>
          <span className="text-sm text-gray-600">Español</span>
        </div>

        <div className="flex items-center space-x-3 border-l border-gray-200 pl-4">
          <button className="text-gray-400 hover:text-gray-600">
            <Grip size={20} />
          </button>
          <button className="text-gray-400 hover:text-gray-600 relative">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Settings size={20} />
          </button>
        </div>

        <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs">
            ML
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">Miguel Liberato</p>
            <p className="text-xs text-gray-500">CEO LVL Consulting</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;