**Componente ChatsMenu**

O componente `ChatsMenu` é um menu de gerenciamento de chats que fornece opções para gerenciar o histórico de conversas e mensagens.

# **Funcionalidades Principais**

* `ConfirmActionModal`: uma função que abre um modal de confirmação para confirmar a ação de exclusão de mensagens ou histórico de conversas.

# **Estrutura do Código**
```javascript
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Button, Flex, Modal } from 'antd'
import './styles.css'

const ChatsMenu = () => {
  // código do componente aqui
}

export default ChatsMenu
```
# **Exemplo de uso**

O componente `ChatsMenu` é usado em um aplicativo para fornecer opções de gerenciamento de chats.
```javascript
<ChatsMenu />
```
Este componente é responsável por fornecer opções de gerenciamento de chats, incluindo a exclusão de mensagens e histórico de conversas, e gerenciar a confirmação de ações perigosas.