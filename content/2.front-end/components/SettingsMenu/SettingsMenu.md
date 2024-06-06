# **Componente SettingsMenu**

O Menu de Configurações - Configurações de Perfil é parte do sistema de navegação da aplicação. Ele fornece aos usuários uma forma conveniente de acessar e gerenciar suas configurações de perfil.

**Componentes**

- `ProfileMenu`: Um componente que renderiza o menu de configurações de perfil.
- `ChatsMenu`: Um componente que renderiza o menu de chats.
- `Customize`: Um componente que renderiza as opções de personalização.

**Propriedades**

- `settingsMenuOpen`: Um booleano que indica se o menu de configurações está aberto ou não.

## **Estado**

O componente `SettingsMenu` usa as seguintes variáveis de estado:

- `activeButton`: Uma string que indica qual item de menu está atualmente ativo. Ao ativar um dos itens, um dos componentes filhos será renderizado.

**Funções**

- `showDrawer()`: Uma função que alterna o menu de configurações entre aberto e fechado.
- `onClose()`: Uma função que fecha o menu de configurações.
- `handleButtonClick(buttonName)`: Uma função que atualiza o estado `activeButton` com o item de menu selecionado.

## **Contextos e hooks utilizados**
O componente `SettingsMenu` usa os seguintes contextos e hooks customizados:
- `useNavigate`: hook personalizado do `react-router-dom` e para navegar entre as pages

**Estilos**

- `settingsButtonStyle`: Um objeto de estilo CSS que define a aparência do botão de configurações.
- `drawerStyles`: Um objeto de estilo CSS que define a aparência da gaveta.
- `dividerStyles`: Um objeto de estilo CSS que define a aparência da divisa.
- `optionButtonStyles`: Um objeto de estilo CSS que define a aparência dos botões de opção.
- `logoutButtonContainerStyles`: Um objeto de estilo CSS que define a aparência do contêiner do botão de logout.
- `leftMenuContentStyles`: Um objeto de estilo CSS que define a aparência do conteúdo do menu esquerdo.
- `rightMenuContentStyles`: Um objeto de estilo CSS que define a aparência do conteúdo do menu direito.

**Comportamento**

Quando o usuário clica no botão de configurações, a função `showDrawer()` é chamada, que alterna o estado `settingsMenuOpen` para `true`. Isso abre a gaveta do menu de configurações. Quando o usuário clica em um item de menu, a função `handleButtonClick()` é chamada, que atualiza o estado `activeButton` com o item de menu selecionado. O conteúdo de menu correspondente é então renderizado com base no estado `activeButton`.

**Chamadas de API**

O componente faz uma chamada de API para o endpoint `/auth/sair/${userId}` para fazer logout do usuário quando o botão de logout é clicado.