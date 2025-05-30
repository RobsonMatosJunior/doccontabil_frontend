import './App.css';
import Button from './components/ui/Button';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-8">
        <h1 className="text-4xl font-bold">DocContábil</h1>
        <p className="text-xl mt-2">Sistema de Gerenciamento de Documentos</p>
      </header>
      
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            🧪 Testando Componente Button
          </h2>
          
          {/* Teste dos botões */}
          <div className="space-y-4">
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">Botão Primário</Button>
              <Button variant="secondary">Botão Secundário</Button>
              <Button variant="success">Botão Sucesso</Button>
              <Button variant="danger">Botão Perigo</Button>
              <Button variant="outline">Botão Outline</Button>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <Button size="sm">Pequeno</Button>
              <Button size="md">Médio</Button>
              <Button size="lg">Grande</Button>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <Button disabled>Desabilitado</Button>
              <Button loading>Carregando...</Button>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-green-800">
              ✅ Se você vê vários botões coloridos acima, o componente Button está funcionando!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;