import { X } from 'lucide-react';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Switch = ({ isOn, onToggle }: { isOn: boolean, onToggle: () => void }) => (
  <button 
    onClick={onToggle}
    className={`w-11 h-6 rounded-full relative transition-colors ${
      isOn ? 'bg-blue-900' : 'bg-gray-300'
    }`}
  >
    <div 
      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
        isOn ? 'translate-x-5' : 'translate-x-0'
      }`} 
    />
  </button>
);

const ContactFormModal = ({ isOpen, onClose }: ModalProps) => {
  const [switches, setSwitches] = useState({
    nombre: true,
    correo: true,
    telefono: false,
    empresa: true,
    pais: true,
    mensaje: false,
    terminos: true,
  });

  const handleToggle = (key: keyof typeof switches) => {
    setSwitches(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg flex flex-col max-h-[90vh]">
        
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-blue-900">Formulario de contacto</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto">
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Nombre de formulario</label>
            <input type="text" placeholder="Introducir nombre del formulario" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
          </div>

          <div>
            <h3 className="font-bold text-gray-800 text-sm">Administrador</h3>
            <p className="text-xs text-gray-500 mt-1 mb-4">Seleccione los campos que desea incluir en el formulario de contacto.</p>
            
            <div className="space-y-4">
              <div className="grid grid-cols-3 text-sm text-gray-500 font-medium">
                <span>Campo</span>
                <span className="text-center">Mostrar</span>
                <span className="text-right pr-2">Obligatorio</span>
              </div>
              
              <div className="grid grid-cols-3 items-center py-2 border-b border-gray-50">
                <span>Nombres y apellidos</span>
                <div className="text-center"><input type="checkbox" defaultChecked className="w-5 h-5 text-blue-900 rounded focus:ring-blue-900" /></div>
                <div className="flex justify-end"><Switch isOn={switches.nombre} onToggle={() => handleToggle('nombre')} /></div>
              </div>

              <div className="grid grid-cols-3 items-center py-2 border-b border-gray-50">
                <span>Número de teléfono</span>
                <div className="text-center"><input type="checkbox" className="w-5 h-5 text-blue-900 rounded focus:ring-blue-900" /></div>
                <div className="flex justify-end"><Switch isOn={switches.telefono} onToggle={() => handleToggle('telefono')} /></div>
              </div>

              <div className="grid grid-cols-3 items-center py-2 border-b border-gray-50">
                <span>Correo electrónico</span>
                <div className="text-center"><input type="checkbox" className="w-5 h-5 text-blue-900 rounded focus:ring-blue-900" /></div>
                <div className="flex justify-end"><Switch isOn={switches.correo} onToggle={() => handleToggle('correo')} /></div>
              </div>

              <div className="grid grid-cols-3 items-center py-2 border-b border-gray-50">
                <span>Nombre de empresa</span>
                <div className="text-center"><input type="checkbox" defaultChecked className="w-5 h-5 text-blue-900 rounded focus:ring-blue-900" /></div>
                <div className="flex justify-end"><Switch isOn={switches.empresa} onToggle={() => handleToggle('empresa')} /></div>
              </div>

              <div className="grid grid-cols-3 items-center py-2 border-b border-gray-50">
                <span>País</span>
                <div className="text-center"><input type="checkbox" defaultChecked className="w-5 h-5 text-blue-900 rounded focus:ring-blue-900" /></div>
                <div className="flex justify-end"><Switch isOn={switches.pais} onToggle={() => handleToggle('pais')} /></div>
              </div>

              <div className="grid grid-cols-3 items-center py-2">
                <span>Mensaje</span>
                <div className="text-center"><input type="checkbox" defaultChecked className="w-5 h-5 text-blue-900 rounded focus:ring-blue-900" /></div>
                <div className="flex justify-end"><Switch isOn={switches.mensaje} onToggle={() => handleToggle('mensaje')} /></div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Mensaje de agradecimiento</label>
            <input 
              type="text" 
              placeholder="¡Gracias!" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-700">Términos y condiciones personalizados</label>
                <Switch isOn={switches.terminos} onToggle={() => handleToggle('terminos')} />
            </div>
            
            <div className="relative">
                <span className="absolute left-4 top-2 text-sm font-bold text-gray-500">https://</span>
                <input 
                type="text" 
                placeholder="Añadir enlace" 
                className="w-full pl-16 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" 
                />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 flex justify-center">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-12 py-3 rounded-lg font-bold transition-colors w-full sm:w-auto">
            Crear formulario
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContactFormModal;