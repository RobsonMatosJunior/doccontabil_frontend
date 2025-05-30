import './App.css';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-8">
        <h1 className="text-4xl font-bold">DocContábil</h1>
        <p className="text-xl mt-2">Sistema de Gerenciamento de Documentos</p>
      </header>
      
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Bem-vindo ao DocContábil! 🎉
          </h2>
          <p className="text-gray-600">
            Projeto em desenvolvimento. Tailwind CSS está funcionando!
          </p>
          
          <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-green-800">
              ✅ Se você está vendo esta caixa verde, o Tailwind CSS está funcionando!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;