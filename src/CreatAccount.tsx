
export default function CreatAccount () {
    return( 
        <div className="flex justify-center bg-gradient-to-r  to-blue-300 items-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-5 shadow-lg rounded-lg bg-white">
          <form>
            <div className="mb-4">
              <h2 className=" -mt-3 text-center text-3xl font-sans text-gray-800">Crie uma nova conta</h2>
              <label className="mt-2 block text-center text-gray-800 text-sm mb-2">
                É rápido e fácil
              </label>
            </div>


            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nome"
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input 
              type="text"
              placeholder="Sobrenome"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
          </form>
        </div>
      </div>
    );

}