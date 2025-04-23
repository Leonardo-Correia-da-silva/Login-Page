import { useState } from "react";

export default function CreatAccount() {
  const [dia, setDia] = useState("");
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");
  const [genero, setGenero] = useState("");

  const dias = Array.from({ length: 31 }, (_, i) => i + 1);
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const anos = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="flex justify-center bg-gradient-to-r to-blue-300 items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-5 shadow-lg rounded-lg bg-white">
        <form>
          <div className="mb-4">
            <h2 className="-mt-3 text-center text-3xl font-sans text-gray-800">
              Crie uma nova conta
            </h2>
            <label className="mt-2 block text-center text-gray-800 text-sm mb-2">
              É rápido e fácil
            </label>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Nome"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
            />

            <input
              type="text"
              placeholder="Sobrenome"
              className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/2"
            />
          </div>

          <br />

          <label className="text-sm text-gray-500">Data de nascimento</label>

          <div className="flex gap-2 mt-1">
            <select
              value={dia}
              onChange={(e) => setDia(e.target.value)}
              className="p-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Dia</option>
              {dias.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <select
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              className="p-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Mês</option>
              {meses.map((m, i) => (
                <option key={i} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>

            <select
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              className="p-2 border rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Ano</option>
              {anos.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label className="text-sm text-gray-500">Gênero</label>
          </div>

          <div className="flex gap-2 mt-2">
            <label className="p-2 border rounded-lg flex items-center space-x-2 w-1/2">
              <input
                type="radio"
                value="feminino"
                checked={genero === "feminino"}
                onChange={(e) => setGenero(e.target.value)}
              />
              <span>Feminino</span>
            </label>

            <label className="p-2 border rounded-lg flex items-center space-x-2 w-1/2">
              <input
                type="radio"
                value="masculino"
                checked={genero === "masculino"}
                onChange={(e) => setGenero(e.target.value)}
              />
              <span>Masculino</span>
            </label>
          </div>

          <div className="mt-7">
            <input
              className="p-2 border rounded-lg flex items-center space-x-2 w-full"
              placeholder="Celular ou email">
            </input>

            <input
              className="mt-2 p-2 border rounded-lg flex items-center space-x-2 w-full"
              placeholder="Nova senha">
            </input>
          </div>

          <div className="mt-7 flex justify-center items-center text-center">
            <button className="p-2 border rounded-lg bg-blue-400 space-x-2 w-1/2">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
