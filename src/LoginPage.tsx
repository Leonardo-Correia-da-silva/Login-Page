import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-1 bg-gradient-to-r to-blue-400 items-center justify-center p-6">
        <h1 className="text-white text-2xl md:text-3xl font-bold text-center">
          Bem-vindo de volta!
        </h1>
      </div>

      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Entrar</h2>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Senha
              </label>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between text-sm mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Lembrar-me
              </label>
              <Link to="/password-recovery" className="text-blue-500 hover:underline">
                Esqueceu sua senha?
              </Link>
            </div>

            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Entrar
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Não tem uma conta?{" "}
            <Link to="/creat-account" className="text-blue-500 hover:underline">
              Criar uma
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
