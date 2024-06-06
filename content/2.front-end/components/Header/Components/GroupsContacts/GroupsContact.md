# **Componente GroupsContacts**

Componente responsável por trazer nome dos integrantes incluídos no grupo, renderizado no componente [`Header`]('../../../../header.md')

## **Propriedades**
- `mensagem`: o texto da mensagem a ser exibida.
- `createdAt`: a data e hora de criação da mensagem.
- `usuarioId`: o ID do usuário que enviou a mensagem.
- `showProfileContact`: um booleano que indica se as informações de perfil do remetente devem ser exibidas.
- `children`: conteúdo filho que será englobado pelo componente GroupChatBubble.

## **Estados e Contextos Utilizados**

- `ProfileContact`: um componente que renderiza as informações de perfil do remetente da mensagem.
- `users`: Traz uma lista com todos os usuários da aplicação.
  
## **Funções**
- `GroupUsers`: Realiza um mapeamento no usuarios e verifica se o usuário ele está incluso na lista do grupo em questão. 
- `FirstEightContacts`: Faz uma paginação nos usuários do grupo trazendo os oito primeiros usuários.
-   
## **Estrutura do Código**
```javascript
const GroupsContacts = () => {
  const { recipientGroup } = useContext(ChatContext)
  const { users } = useGetAllUsersList()

  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })

  const firstEightContacts = groupUsers?.slice(0, 8)

  return (
    <div style={ContainerStyle}>
      {firstEightContacts?.map((member, index) => {
        const firstName = member?.nome.split(' ')[0].slice(0, 12)
        return (
          <span key={member?.id} style={TextStyle}>
            {firstName}
            {index < firstEightContacts.length - 1
              ? ','
              : index === firstEightContacts.length - 1
                ? ''
                : '...'}
          </span>
        )
      })}
    </div>
  )
}

export default GroupsContacts


```