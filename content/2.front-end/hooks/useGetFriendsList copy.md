# **Hook useGetFriendsList**
O hook useGetFriendsList é responsável por buscar e gerenciar a lista de amigos do usuário. Ele utiliza a biblioteca react-query para realizar a consulta de dados de forma assíncrona e eficiente, proporcionando um estado reativo para a interface do usuário.

## **Função e Utilização**
- `useQuery`: hook do react-query utilizado para realizar a consulta de dados.
## **Estado e Hooks Utilizados**
- `data`:  dados retornados pela consulta, contendo a lista de amigos.
- `isLoading`:  booleano indicando se a consulta está em andamento.       
- `error`:  erro retornado pela consulta, se houver.
- `queryKey`:  chave única para identificar a consulta na cache do react-query.
- `queryFn`: função de consulta que realiza a requisição para obter os dados dos usuários.

## **Funções Utilizadas**
- `apiFunction.getFriendsList`: função API para buscar a lista de amigos.
  
## **Descrição dos Retornos**
- **status** : Status da operação de consulta, podendo ser 'friendsList' ou 'error'.
- **message** :  Mensagem descritiva sobre o status atual da operação.
- **friendsList** : Lista de amigos retornada pela consulta, ou undefined se não houver dados.
- **friendsListLoading** :Booleano indicando se a lista de amigos está carregando (true enquanto os dados estão sendo carregados).
- **friendsListError** : Booleano indicando se houve um erro na consulta (true se ocorreu um erro).

## **Estrutura do Código**
```javascript
    import { apiFunction } from '@/api/api'
    import { useQuery } from '@tanstack/react-query'

    export const useGetFriendsList = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['friends'],
        queryFn: apiFunction.getFriendsList,
    })

    if (isLoading) return { status: 'friendsList', message: 'Carregando...' }
    if (isError)
        return {
        status: 'error',
        message: 'Ocorreu um erro ao buscar os usuários da sua lista',
    }

    const friendsList = data

    return {
        friendsList,
        friendsListLoading: isLoading,
        friendsListError: isError,
    }
    }

```
## **Exemplo de Uso**
```javascript

```
