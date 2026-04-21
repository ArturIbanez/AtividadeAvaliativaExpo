# Trabalho de React Native - Consumo de Fake Store API 

Este projeto é um aplicativo mobile desenvolvido em **React Native** com **Expo** que consome dados da **Fake Store API**. O app inclui autenticação de usuários, listagem de produtos com filtros por categoria, exibição de detalhes e informações sobre os desenvolvedores.

---

## Tecnologias e Requisitos Técnicos

O projeto foi construído seguindo os seguintes requisitos
- **Framework**: Expo e React Native (JavaScript)
- **Consumo de API**: Utilização obrigatória da biblioteca **Axios**
- **Navegação**: Uso de **React Navigation** (Stack Navigation)
- **Gerenciamento de Estado**: Utilização de `useState` e `useEffect`
- **Feedback Visual**: Implementação de `ActivityIndicator` em todos os carregamentos
- **Estilização**: Utilização de `StyleSheet` nativo (sem bibliotecas externas de CSS)

---

## Como Rodar o Projeto

Siga os passos abaixo para executar o app em seu ambiente local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ArturIbanez/AtividadeAvaliativaExpo.git (https://github.com/ArturIbanez/AtividadeAvaliativaExpo)
- Entre na pasta do projeto: cd AtividadeAvaliativaExpo
- Instale as dependências: npm install
- Inicie o servidor do Expo: npx expo start ou npm start
- Acesse o App: Escaneie o QR Code com o aplicativo Expo Go no seu celular Android ou iOS.
- Autenticação (Login), o acesso ao aplicativo é restrito a contas existentes na Fake Store API. 
- Como verificar usuários disponíveis: os usuários podem ser consultados através do endpoint GET https://fakestoreapi.com/users 
- Exemplo de credenciais para teste: Username: johnd, Password: m38rmnZ📱 

---

- Funcionalidades Principais Tela de Login: Validação de credenciais via POST na API.
- Tela Home: Listagem de produtos via FlatList com imagem, nome e preço formatado, filtros: Seleção de categorias (electronics, jewelery, etc.) com opção de limpar filtro. 
- Detalhes: Visualização completa do produto selecionado.
- Logout & Info: Botões personalizados no header da Home para sair do app ou ver os créditos. 

---

👥 Integrantes do Grupo e RAs Conforme exigido pelos entregáveis: 
Nome Completo RA Artur Ibañez 1137674 Tino Navarro 1138028
