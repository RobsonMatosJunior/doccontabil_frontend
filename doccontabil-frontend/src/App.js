import './App.css';
import Button from './components/ui/Button';
import Input from './components/ui/Input';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-600 text-white p-8">
        <h1 className="text-4xl font-bold">DocContábil</h1>
        <p className="text-xl mt-2">Sistema de Gerenciamento de Documentos</p>
      </header>
      
      <main className="p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Teste do Button */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              ✅ Componente Button
            </h2>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button variant="success">Sucesso</Button>
              <Button loading>Carregando...</Button>
            </div>
          </section>
          
          {/* Teste do Input */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              🧪 Testando Componente Input
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {/* Input básico */}
              <Input
                label="Nome completo"
                placeholder="Digite seu nome"
                required
              />
              
              {/* Input com erro */}
              <Input
                label="Email"
                type="email"
                placeholder="seu@email.com"
                error="Email é obrigatório"
                required
              />
              
              {/* Input senha */}
              <Input
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
              />
              
              {/* Input desabilitado */}
              <Input
                label="Campo desabilitado"
                placeholder="Não pode editar"
                disabled
                value="Valor fixo"
              />
              
              {/* Input sem label */}
              <Input
                placeholder="Input sem label"
              />
              
              {/* Input número */}
              <Input
                label="Idade"
                type="number"
                placeholder="25"
              />
            </div>
          </section>
          
          <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-green-800">
              ✅ Se você vê vários inputs funcionando acima, o componente Input está perfeito!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;