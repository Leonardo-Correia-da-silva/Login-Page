export default function PasswordRecovery() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-semibold text-center mb-6">Esqueci a senha</h2>
  
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                E-mail ou Telefone
              </label>
              <p 
              className="text-black-300 text-sm mb-2">Enviaremos um código de verificação a este e-mail ou telefone se corresponder a uma conta</p>
              <input
                type="text"
                placeholder="Insira seu e-mail ou telefone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
  