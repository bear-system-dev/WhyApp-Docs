# **Hook RemMemberMutation**
O hook RemMemberMutation é responsável por gerenciar a remoção de membros de um grupo de chat. Ele utiliza a biblioteca react-query para realizar a mutação de remoção de membros, invalidando a cache de consultas relacionadas aos membros para garantir que os dados mais recentes sejam obtidos.

## **Função e Utilização**
- `removeMembersGroup`:  uma mutação que remove membros de um grupo, utilizando a função apiFunction.removeMembersGroup.

## **Estado e Hooks Utilizados**
- `queryClient`:  instância do cliente de consulta do react-query para gerenciar a cache de consultas.
- `useMutation`:  hook do react-query para gerenciar mutações.

## **Funções Utilizadas**
- `apiFunction.removeMembersGroup`:  função API para remover membros de um grupo.
- `queryClient.invalidateQueries`:   função para invalidar e atualizar consultas específicas na cache.

## **Exemplo de Uso**
```javascript
   const remMemberMutation = RemMemberMutation()

   useEffect(() => {
    if (remMemberMutation.isSuccess) {
      setIsModalOpen(!isModalOpen)
      openNotification({
        title: 'Removidos',
        subtitle: 'Membros foram removidos do grupo',
      })
    }

  }, [remMemberMutation.isSuccess])
```
