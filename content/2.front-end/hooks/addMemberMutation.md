# **Hook AddMemberMutation**
O hook AddMemberMutation é responsável por gerenciar a adição de membros a um grupo de chat. Ele utiliza a biblioteca react-query para realizar a mutação de adição de membros, invalidando a cache de consultas relacionadas aos membros para garantir que os dados mais recentes sejam obtidos.

## **Função e Utilização**
- `addMembersGroup`:  uma mutação que adiciona membros a um grupo, utilizando a função apiFunction.newFriendGroup.

## **Estado e Hooks Utilizados**
- `queryClient`:  instância do cliente de consulta do react-query para gerenciar a cache de consultas.
- `useMutation`:  hook do react-query para gerenciar mutações.

## **Funções Utilizadas**
- `apiFunction.newFriendGroup`:  função API para adicionar membros a um grupo.
- `queryClient.invalidateQueries`:   função para invalidar e atualizar consultas específicas na cache.

## **Exemplo de Uso**
```javascript
   const addMemberMutation = AddMemberMutation()

   useEffect(() => {
    if (addMemberMutation.isSuccess) {
      setIsModalOpen(!isModalOpen)
      openNotification({
        title: 'Adicionados',
        subtitle: 'Membros foram adicionados ao grupo',
      })
    }

  }, [addMemberMutation.isSuccess])
```
