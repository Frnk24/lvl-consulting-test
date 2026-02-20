import { Save, UploadCloud, X } from 'lucide-react';
import { useState, useRef } from 'react';
import ContactFormModal from '../components/ContactFormModal';
import { uploadToCloudinary } from '../services/imageService';

const NewForm = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadImage = async (file: File) => {
    setIsUploading(true);
    
    const secureUrl = await uploadToCloudinary(file);

    if (secureUrl) {
      setImageUrl(secureUrl);
      console.log("Imagen subida con éxito:", secureUrl);
    } else {
      alert("Error al subir la imagen. Revisa la consola.");
    }
    
    setIsUploading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      uploadImage(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
 
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadImage(e.dataTransfer.files[0]);
    }
  };

  return (
    <>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="space-y-6">
        
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Nuevo formulario</h1>
            <p className="text-gray-500">Complete sus datos y continúe con los siguientes pasos.</p>
          </div>
          
          <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 font-medium transition-colors"
            >
              <Save size={18} className="mr-2" />
              Guardar
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de categoría <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de categoría <span className="text-red-500">*</span></label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Empresa <span className="text-red-500">*</span></label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
                <option>Seleccionar una empresa</option>
                <option>Empresa A</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de empresa</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
                <option>Seleccionar tipo de empresa</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Escribe una descripción para la categoría"></textarea>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col h-full">
              <h3 className="text-gray-500 mb-4 font-medium">Documentos</h3>
              
              <div 
                  className={`
                      flex-1 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 transition-colors
                      ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-blue-200 bg-gray-50'}
                  `}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
              >
                  {isUploading ? (
                      <div className="text-center">
                          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-900 mx-auto mb-3"></div>
                          <p className="text-blue-900 font-medium">Subiendo a Cloudinary...</p>
                      </div>
                  ) : imageUrl ? (
                      
                      <div className="relative w-full h-full flex flex-col items-center justify-center">
                          <img 
                              src={imageUrl} 
                              alt="Uploaded" 
                              className="max-h-60 object-contain rounded-md shadow-md" 
                          />

                          <a 
                            href={imageUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-2 text-xs text-blue-600 underline hover:text-blue-800"
                          >
                            Abrir imagen en Cloudinary (Prueba de subida)
                          </a>

                          <div className="mt-4 flex items-center space-x-2">
                               <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-1 rounded">¡Subida Exitosa!</span>
                          </div>
                          
                          <button 
                              onClick={() => setImageUrl(null)}
                              className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-md transform -translate-y-2 translate-x-2"
                          >
                              <X size={16} />
                          </button>
                      </div>

                  ) : (

                      <div className="text-center">
                          <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                              <UploadCloud size={32} className="text-blue-600" />
                          </div>
                          
                          <input 
                              type="file" 
                              ref={fileInputRef}
                              className="hidden" 
                              accept="image/*"
                              onChange={handleFileChange}
                          />
                          
                          <button 
                              onClick={() => fileInputRef.current?.click()}
                              className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition mb-3 block mx-auto"
                          >
                              Seleccionar archivos
                          </button>
                          
                          <p className="text-gray-400 text-sm">o arrastra y suelta tu imagen aquí</p>
                      </div>
                  )}
              </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default NewForm;