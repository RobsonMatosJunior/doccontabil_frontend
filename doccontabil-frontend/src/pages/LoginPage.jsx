import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const LoginPage = () => {
  // Estados do formulário
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Estados de controle
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Função para atualizar os campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpar erro do campo quando usuário digita
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Função de validação
  const validateForm = () => {
    const newErrors = {};

    // Validar email
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    // Validar senha
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Função de submit do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar formulário
    if (!validateForm()) {
      return;
    }

    // Simular loading
    setLoading(true);

    try {
      // Simular chamada de API (2 segundos)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simular sucesso
      console.log('Login realizado:', formData);
      setLoginSuccess(true);

      // Reset após 3 segundos
      setTimeout(() => {
        setLoginSuccess(false);
        setFormData({ email: '', password: '' });
      }, 3000);

    } catch (error) {
      setErrors({ general: 'Erro ao fazer login. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            DocContábil
          </h1>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Faça login na sua conta
          </h2>
          <p className="text-gray-600">
            Acesse seu painel de documentos contábeis
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Campo Email */}
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              required
            />

            {/* Campo Senha */}
            <Input
              label="Senha"
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              required
            />

            {/* Erro geral */}
            {errors.general && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{errors.general}</p>
              </div>
            )}

            {/* Sucesso */}
            {loginSuccess && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-600 text-sm">
                  ✅ Login realizado com sucesso!
                </p>
              </div>
            )}

            {/* Botão de Login */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>

          {/* Links extras */}
          <div className="mt-6 text-center space-y-2">
            <button
              type="button"
              onClick={() => {
                alert('Funcionalidade de recuperação de senha será implementada em breve!');
              }}
              className="text-sm text-blue-600 hover:text-blue-500 block underline bg-transparent border-none cursor-pointer"
            >
              Esqueceu sua senha?
            </button>
            <p className="text-sm text-gray-600">
              Não tem conta?{' '}
              <button
                type="button"
                onClick={() => {
                  alert('Funcionalidade de cadastro será implementada em breve!');
                }}
                className="text-blue-600 hover:text-blue-500 font-medium underline bg-transparent border-none cursor-pointer"
              >
                Cadastre-se aqui
              </button>
            </p>
          </div>

          {/* Dicas para teste */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">💡 Para testar:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Tente enviar formulário vazio</li>
              <li>• Digite email inválido</li>
              <li>• Use senha com menos de 6 caracteres</li>
              <li>• Email válido: teste@exemplo.com</li>
              <li>• Qualquer senha com 6+ caracteres</li>
            </ul>
          </div>
        </div>
      </div>
      );
};

      export default LoginPage;