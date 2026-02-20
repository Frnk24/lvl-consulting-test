import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const CreateAccount=()=>{
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div
        className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        >
            <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

            <div className="relative bg-white p-8 rounded-xl shadow-2xl w-full max-w-md mx-4 z-10">

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-blue-900">Crear Cuenta</h2>
                    <p className="text-gray-500 text-sm mt-1">Unete a la comunidad de LVL Consulting</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                            Correo Electronico<span className="text-red-500">*</span>
                        </label>

                        <input type="email" name="email" placeholder="Introducir la dirección del correo electronico" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                            Nombre del usuario<span className="text-red-500">*</span>
                        </label>
                        <input type="text" name="username" placeholder="Introducir nombre del usuario" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Contraseña</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Introducir la contraseña" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="text-xs text-gray-500 mt-2">
                        Al registrarte, aceptas los<a href="#" className="text-blue-700 font-bold underline">Terminos de uso de LVL Consulting</a> 
                    </div>

                    <Link to="/" className="block w-full">
                        <button type="button" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2.5 rounded-md transition-colors mt-4">
                            Crear cuenta
                        </button>
                    </Link>
                </form>
                <div className="text-center mt-6 text-sm">
                    <span className="text-gray-500">¿Ya tienes una cuenta? </span>
                    <Link to="/login" className="text-blue-700 font-bold hover:underline">
                         Inicia sesión
                    </Link>
                </div>
      </div>
    </div>
    );
};

export default CreateAccount;
