# **ModalAlert Component**
O componente ModalAlert é um modal personalizável usado para adicionar ou remover membros em um contexto de chat. Ele permite que os usuários selecionem amigos de uma lista para adicionar a um grupo ou removam membros existentes.

![Texto alternativo](../../../../../../imagens/modalAlert.png)

## **Propriedade**

### **ModalAlertProps**
- `title`: Título do modal.
- `subtitle`: Subtítulo do modal.
- `children`:  Conteúdo adicional a ser renderizado dentro do modal.
- `setMembers`: Função para atualizar a lista de membros.
- `members`: Lista atual de membros. 
- `setIsModalOpen`: Função para controlar a visibilidade do modal.
- `isModalOpen`:  Estado que indica se o modal está aberto.
- `tagModal`:  Informações sobre o modal, como título.
### **ModalAlertProps**
- `adicionadoPor`: ID do usuário que adicionou o amigo.
- `usuarioId`:ID do usuário amigo.
  
## **Descrição**
O ModalAlert é um componente que apresenta um modal contendo uma lista de amigos que podem ser adicionados ou removidos de um grupo. Ele utiliza vários hooks e contextos para gerenciar estados e listas de usuários.
## **Funcionalidades Principais**

- Renderização de um modal com título e subtítulo.
- Exibição de uma lista de amigos com a capacidade de adicionar ou remover membros de um grupo.
- Controle de estado para a visibilidade do modal e a seleção de amigos.
## **Hooks Utilizados**
- `useState`: Utilizado para gerenciar o estado dos amigos selecionados (selectedFriends).
- `useRef`: Utilizado para referenciar o botão dentro do componente.
- `useContext`:  Utilizado para acessar o contexto do chat (ChatContext), que fornece informações sobre o grupo de destinatários da conversa.
- `useGetAllUsersList`: Utilizado para obter a lista de todos os usuários disponíveis no sistema.
- `useGetFriendsList`:Utilizado para obter a lista de amigos do usuário logado.
## **Contexto Utilizados**
- `ChatContext`: Fornece informações sobre o grupo de destinatários da conversa, como os usuários pertencentes a esse grupo.


## **Funções Utilizadas**
O componente MenuInfo renderiza os seguintes componentes:

- `targetFriend`: A função targetFriend adiciona um amigo à lista de membros selecionados e marca esse amigo como selecionado. Função recebe um objeto de usuário (friend). Em seguida, cria um pedido (request) contendo o ID do usuário atual e o ID do amigo. Após isso, adiciona esse pedido à lista de membros e atualiza o estado para indicar que o amigo foi selecionado.
- `groupUsers`: Mapeia os usuários que fazem parte de um grupo específico. Isso é feito através do uso da função map que itera sobre a lista de usuários do grupo (recipientGroup?.usuarios) e para cada usuário, procura o correspondente na lista geral de usuários (users) utilizando a função find. O objetivo é criar uma lista de usuários do grupo contendo informações como nome, ID, entre outras.
- `handleCancel`: É responsável por fechar o modal quando o usuário decide cancelar a operação. Ela é chamada quando ocorre o evento de cancelamento e simplesmente atualiza o estado do modal para fechado, através da chamada de setIsModalOpen(false). Isso garante que o modal seja ocultado da interface quando não é mais necessário.








