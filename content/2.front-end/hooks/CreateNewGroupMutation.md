# **Hook CreateNewGroupMutation**
O hook CreateNewGroupMutation é responsável por gerenciar a criação de novos grupos de chat. Ele utiliza a biblioteca react-query para realizar a mutação de criação de grupo, invalidando a cache de consultas relacionadas aos grupos para garantir que os dados mais recentes sejam obtidos.

## **Função e Utilização**
- `createNewGroupMutation`:  uma mutação que cria um novo grupo, utilizando a função apiFunction.createGroup.
## **Estado e Hooks Utilizados**
- `queryClient`:  instância do cliente de consulta do react-query para gerenciar a cache de consultas.
- `useMutation`:  hook do react-query para gerenciar mutações.

## **Funções Utilizadas**
- `apiFunction.createGroup`:   função API para criar um novo grupo.
- `queryClient.invalidateQueries`:   função para invalidar e atualizar consultas específicas na cache.
  
## **Descrição dos Parâmetros**
- **nome** : Nome do novo grupo a ser criado.
- **foto: URL** : da foto do novo grupo.
- **descricao** : Descrição do novo grupo.

## **Estrutura do Código**
```javascript
    import { apiFunction } from '@/api/api'
    import { useMutation, useQueryClient } from '@tanstack/react-query'

    export const CreateNewGroupMutation = () => {
    const queryClient = useQueryClient()

    const createNewGroupMutation = useMutation({
        mutationFn: ({
        nome,
        foto,
        descricao,
        }: {
        nome: string
        foto: string
        descricao: string
        }) => {
        return apiFunction.createGroup({ nome, foto, descricao })
        },
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['groups'] })
        },

        onError: (error) => {
        console.error('Algo saiu mal na requisição:', error)
        },
    })

    return createNewGroupMutation
    }

```
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
