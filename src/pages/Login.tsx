import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login=()=>{
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/');};
    return(
        <div 
        className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
    >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

        <div className="relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-4 <-10">

            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-blue-900">Iniciar Sesión</h2>
                <p className="text-gray-500 text-sm mt-1">Bienvenido a LVL Consulting</p>
            </div>
            
            
            <form className="space-y-4">

                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Correo Electrónico o Usuario</label>
                    <input
                        type="email"
                        placeholder="Ingrese su correo o usuario"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-gray-700 mb-1">  Contraseña</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Ingrese su contraseña"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600">
                                            {showPassword ? <EyeOff size={18} /> :<Eye size={18}/>}
                                    </button>
                            </div>
                        </div>

                        <div className="flex justify-end text-xs text-blue-700 hover:underline">
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </div>

                        
                            <button
                            type="button"
                            onClick={handleLogin}
                            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-2.5 rounded-md transition-colors mt-4">
                                Ingresar
                            </button>
                        
            </form>

            <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-400 text-xs">Iniciar sesión con</span>
            <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center space-x-4">
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition border border-gray-200">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            </button>
            <button className="p-2 bg-[#1877F2] rounded-lg hover:bg-blue-700 transition text-white w-9 h-9 flex items-center justify-center">
            <span className="font-bold text-lg">f</span>
            </button>
            <button className="p-2 bg-[#FF0000] rounded-lg hover:bg-red-600 transition text-white w-9 h-9 flex items-center justify-center">
            <span className="font-bold text-sm">A</span>
            </button>
            </div>

            <div className="text-center mt-6 text-sm">
                <span className="text-gray-500">¿No tienes cuenta?</span>
                <Link to="/register" className="text-blue-700 hover:underline">
                    Registrate aqui
                </Link>
            </div>

        </div>
    </div>
    );
};

export default Login;