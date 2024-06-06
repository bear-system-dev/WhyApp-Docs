# **Hook useGetAllUsersList**
O hook useGetAllUsersList é responsável por buscar e gerenciar a lista de todos os usuários. Ele utiliza a biblioteca react-query para realizar a consulta de dados de forma assíncrona e eficiente, proporcionando um estado reativo para a interface do usuário.

## **Função e Utilização**
- `useQuery`: hook do react-query utilizado para realizar a consulta de dados.
## **Estado e Hooks Utilizados**
- `data: allUsersListData`:  dados retornados pela consulta, contendo a lista de todos os usuários.
- `isLoading: usersLoading`:  booleano indicando se a consulta está em andamento.       
- `error: usersError`:  erro retornado pela consulta, se houver.
- `queryKey`:  chave única para identificar a consulta na cache do react-query.
- `queryFn`: função de consulta que realiza a requisição para obter os dados dos usuários.

## **Funções Utilizadas**
- `apiFunction.getUser`: função API para buscar a lista de todos os usuários.
  
## **Descrição dos Retornos**
- **status** : Status da operação de consulta, podendo ser 'usersListLoading' ou 'error'.
- **message** :  Mensagem descritiva sobre o status atual da operação.
- **users** : Lista de usuários retornada pela consulta, ou uma lista vazia se não houver dados.
- **usersListLoading** : Booleano indicando se a lista de usuários está carregando (false quando os dados já foram carregados).
- **usersListError** : Booleano indicando se houve um erro na consulta (false quando não há erro).

## **Estrutura do Código**
```javascript
    import { apiFunction } from '@/api/api'
    import { useMutation, useQueryClient } from '@tanstack/react-query'

    export const CreateNewGroupMutation = () => {
    const queryClient = useQueryClient()

    import { apiFunction } from '@/api/api'
    import { useQuery } from '@tanstack/react-query'

    export const useGetAllUsersList = () => {
    const {
        data: allUsersListData,
        isLoading: usersLoading,
        error: usersError,
    } = useQuery({
        queryKey: ['users'],
        queryFn: apiFunction.getUser,
    })

    if (usersLoading)
        return { status: 'usersListLoading', message: 'Carregando...' }
    if (usersError)
        return {
        status: 'error',
        message: 'Ocorreu um erro ao buscar os usuários da sua lista',
        }

    const users = allUsersListData ? Object.values(allUsersListData).flat() : []

    return {
        users,
        usersListLoading: false,
        usersListError: false,
    }    const createNewGroupMutation = useMutation({
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

    }

```
## **Exemplo de Uso**
```javascript

```
