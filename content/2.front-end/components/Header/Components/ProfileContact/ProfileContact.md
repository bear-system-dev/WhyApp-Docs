# **Componente ProfileContact**
O componente ProfileContact é responsável por exibir as informações de perfil de um usuário dentro de um chat em grupo.
# **Propriedades**
Componente ProfileContact aceita as seguintes propriedades:
- `fromUserId`: o ID do usuário remetente.
  

# **Estado**
O componente ProfileContact usa os seguintes contextos e hooks:

- [`ChatContext`](): contexto para buscar o grupo de destinatários.
- [`useGetUsersAndFriends`]('../../../../../../hooks/useGetAllUsersList.md): hook para buscar usuários e amigos.
# **Função**
O componente ProfileContact usa as seguintes funções:

- `ProfileContact`: Função principal que busca e renderiza as informações do usuário remetente com base no ID fornecido.
# **Componentes**
O componente ProfileContact renderiza os seguintes componentes:

- `ProfileImage`: um componente que exibe a imagem de perfil do usuário.
- `ProfileName`: um componente que exibe o nome do perfil do usuário.
- `UserRole`: um componente que exibe a função do usuário.
# **Estado e Contextos Utilizados**
O componente ProfileContact utiliza os seguintes estados e contextos:

- `recipientGroup`: grupo de destinatários do contexto ChatContext.
- `users`: lista de usuários obtida pelo hook useGetUsersAndFriends.

