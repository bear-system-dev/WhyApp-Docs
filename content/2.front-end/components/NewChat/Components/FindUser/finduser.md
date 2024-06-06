## **Componente FindUser**
O componente FindUser é responsável por buscar usuários na lista de todos os usuários disponíveis, adicionar amigos e exibir a lista de amigos do usuário atual. Ele permite a interação do usuário para buscar e adicionar novos amigos, além de exibir a lista de amigos existentes.
## **Propriedade**
O componente FindUser aceita as seguintes propriedades:
- `onClose`: uma função para fechar o drawer ou modal de busca de usuários.
## **Estado e Hooks Utilizados**
O componente FindUser utiliza os seguintes estados e hooks:

- `userNameSearchedList`: um estado que armazena o nome do usuário pesquisado.
- `users`: a lista de todos os usuários disponíveis, obtida pelo hook useGetAllUsersList.
- `usersListLoading`: um estado booleano que indica se a lista de usuários está carregando.
- `usersListError`: um estado que armazena erros na obtenção da lista de usuários.
- `friendsList`:   a lista de amigos do usuário atual, obtida pelo hook useGetFriendsList.
- `addFriendMutation`: um hook de mutação para adicionar novos amigos.
## **Funções Utilizadas**

- `onFindInputChange`: uma função para atualizar o estado userNameSearchedList conforme o usuário digita na barra de busca.
- `isFriend`: uma função que verifica se um usuário está na lista de amigos do usuário atual.         
- `filteredUserNameList`: uma função que filtra a lista de usuários com base no nome pesquisado e na lista de amigos.

- # **Componentes Renderizados**
- `Input`:  um componente do Ant Design usado como barra de busca para encontrar usuários.
- `Flex`: um componente de layout para organizar elementos em uma coluna.
- `Button`: um componente do Ant Design usado para adicionar novos amigos.
- `FriendsList`:  um componente que exibe a lista de amigos do usuário atual.
- `UserCard`:  um componente que exibe as informações de um usuário em um cartão.

## **Estrutura do Código**
```javascript

export const FindUser = ({ onClose }: FindUserProps) => {
  const { setRecipient } = useContext(ChatContext)
  const [userNameSearchedList, setUserNameSearchedList] = useState('')
  const userId = Cookies.get('userId')
  const { users, usersListLoading, usersListError } = useGetAllUsersList()
  const { friendsList } = useGetFriendsList()
  const addFriendMutation = AddFriendMutation()

  const onFindInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const findUserNameValue = event?.target.value
    setUserNameSearchedList(findUserNameValue)
  }

  const isFriend = (user: User) => {
    return friendsList?.some((friend: User) => friend.id === user.id)
  }

  const filteredUserNameList = users?.filter((user: User) => {
    return (
      user?.nome?.toLowerCase().includes(userNameSearchedList.toLowerCase()) &&
      !isFriend(user)
    )
  })

  return (
    <>
      <Input
        className="find-input-bar"
        style={searchInputBarStyles}
        onChange={onFindInputChange}
        value={userNameSearchedList}
        placeholder="busque por um usuário..."
      />
      <Flex vertical style={{ gap: '1.5rem', height: '100%', width: '100%' }}>
        {usersListLoading && <h3>carregando...</h3>}
        {usersListError && (
          <h3>
            Não foi possível carregar a lista de usuários. Por favor, tente
            novamente.
          </h3>
        )}
        {userNameSearchedList &&
          filteredUserNameList
            ?.filter((userNome) => userNome.id !== userId)
            .map((user: User) => {
              return (
                <div key={user.id} className="userCardStyle">
                  <UserCard
                    name={user.nome}
                    image={user.avatar}
                    onClick={() => {
                      setRecipient(user)
                      onClose()
                    }}
                  />
                  <Button
                    style={newChatButtonStyle}
                    className="newChatButtonStyle"
                    shape="circle"
                    icon={<PlusOutlined />}
                    typeof="primary"
                    onClick={() => {
                      if (userId) {
                        addFriendMutation.mutate({
                          userId,
                          friendId: user.id,
                        })
                      }
                      setUserNameSearchedList('')
                    }}
                  />
                </div>
              )
            })}
      </Flex>
      {!userNameSearchedList && (
        <Flex vertical gap={16}>
          <h3>Lista de amigos</h3> <FriendsList onClose={onClose} />
        </Flex>
      )}
    </>
  )
}


```