**Componente SettingsMenu**

O componente `SettingsMenu` é um componente que fornece uma lista de opções para o usuário personalizar sua experiência. Inclui opções para configurações gerais, gerenciamento de perfil, gerenciamento de chats, personalização e ajuda.

# **Funcionalidades Principais**

* `showDrawer()`: uma função que abre o menu de configurações
* `onClose()`: uma função que fecha o menu de configurações
* `handleButtonClick(buttonName)`: uma função que é chamada quando um botão é clicado

# **Estado**

O componente `SettingsMenu` tem dois estados:

* `settingsMenuOpen`: um booleano que indica se o menu de configurações está aberto
* `activeButton`: uma string que indica qual opção está ativa atualmente

# **Estilos**

O componente `SettingsMenu` usa os seguintes estilos:

* `settingsButtonStyle`: um objeto de estilo que define a aparência do botão de configurações
* `drawerStyles`: um objeto de estilo que define a aparência do menu de configurações
* `dividerStyles`: um objeto de estilo que define a aparência do divisor entre as opções
* `optionButtonStyles`: um objeto de estilo que define a aparência dos botões de opção
* `logoutButtonContainerStyles`: um objeto de estilo que define a aparência do contêiner do botão de logout
* `leftMenuContentStyles`: um objeto de estilo que define a aparência do conteúdo do menu esquerdo
* `rightMenuContentStyles`: um objeto de estilo que define a aparência do conteúdo do menu direito

# **Estrutura do Código**
```javascript
import React from 'react'

const SettingsMenu = () => {
  // estados e funções aqui

  return (
    /* renderização do menu de configurações aqui */
  )
}

export default SettingsMenu
```
# **Exemplo de uso**

O componente `SettingsMenu` é usado em um aplicativo para fornecer uma lista de opções de configurações.
```javascript
<SettingsMenu />
```