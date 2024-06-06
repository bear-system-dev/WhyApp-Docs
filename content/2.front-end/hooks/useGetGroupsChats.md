# **Hook useGetGroupsChats**
O hook useGetGroupsChats é responsável por buscar e gerenciar a lista de grupos de chat do usuário. Ele utiliza a biblioteca react-query para realizar a consulta de dados de forma assíncrona e eficiente, proporcionando um estado reativo para a interface do usuário.

## **Função e Utilização**
- `useQuery`: hook do react-query utilizado para realizar a consulta de dados.
## **Estado e Hooks Utilizados**
- `data`:  dados retornados pela consulta, contendo a lista de grupos de chat.
- `isLoading`:  booleano indicando se a consulta está em andamento.       
- `error`:  booleano indicando se ocorreu um erro durante a consulta.
- `queryKey`:  chave única para identificar a consulta na cache do react-query.
- `queryFn`: função de consulta que realiza a requisição para obter os dados dos grupos de chat.

## **Funções Utilizadas**
- `apiFunction.getUserGroups`: função API para buscar a lista de grupos de chat do usuário.
  
## **Descrição dos Retornos**
- **status** :  Status da operação de consulta, podendo ser 'groupsLoading' ou 'error'.
- **message** :  Mensagem descritiva sobre o status atual da operação.
- **groupsList** : Lista de grupos de chat retornada pela consulta, ou undefined se não houver dados.
- **groupsLoading** :Booleano indicando se a lista de grupos de chat está carregando (true enquanto os dados estão sendo carregados).
- **groupsError** : Booleano indicando se houve um erro na consulta (true se ocorreu um erro).

## **Estrutura do Código**
```javascript
    import { apiFunction } from '@/api/api'
    import { GroupResponse } from '@/model/GroupModel'
    import { useQuery } from '@tanstack/react-query'

    export const useGetGroupsChats = () => {
    const {
        data,
        isLoading: groupsLoading,
        error: groupsError,
    } = useQuery<GroupResponse[]>({
        queryKey: ['groups'],
        queryFn: apiFunction.getUserGroups,
    })

    if (groupsLoading)
        return { status: 'groupsLoading', message: 'Carregando...' }
    if (groupsError)
        return {
        status: 'error',
        message: 'Ocorreu um erro ao buscar os grupos da sua lista',
        }

    const groupsList = data

    return { groupsList, groupsLoading, groupsError }
    }

```
## **Exemplo de Uso**
```javascript

```
