# **Hook useGetGroupsChats**
O hook useSearch é responsável por gerenciar a funcionalidade de pesquisa dentro de um contexto de chat. Ele permite que os usuários pesquisem termos específicos nas mensagens e naveguem entre as ocorrências encontradas. O hook utiliza os contextos SearchContext e ChatContext para gerenciar e acessar o estado relacionado à pesquisa e às mensagens.

## **Função e Utilização**
- `useContext`: Hooks do React para acessar o estado de SearchContext e ChatContext.
- `useEffect`: Hook do React para executar efeitos colaterais em resposta a mudanças de estado. 
- `ChangeEvent`: Tipagem de evento para manipulação de mudanças no input de busca.
## **Estado e Hooks Utilizados**
- `searchTerm`:  Termo de pesquisa atual.
- `setSearchTerm`:  Função para atualizar o termo de pesquisa.
- `activeIndex`:  Índice atual do termo de pesquisa destacado.
- `setActiveIndex`: Função para atualizar o índice ativo.
- `messages`: Lista de mensagens no contexto do chat.

## **Funções Utilizadas**
- `getMatchCounts`: Função auxiliar para obter a contagem de correspondências do termo de pesquisa nas mensagens.
- `handleSearchInputChange`: Manipulador de eventos para atualizações no input de busca.
- `handleNextHighlight`:Função para mover para a próxima ocorrência do termo de pesquisa.
- `handlePrevHighlight`: Função para mover para a ocorrência anterior do termo de pesquisa.
  
## **Descrição dos Retornos**
- **searchTerm** :Termo de pesquisa atual.
- **handleSearchInputChange** :   Função para manipular mudanças no input de pesquisa.
- **handleNextHighlight** : Função para mover para a próxima ocorrência do termo de pesquisa.
- **handlePrevHighlight** :Função para mover para a ocorrência anterior do termo de pesquisa.
- **isNextDisabled**: Booleano indicando se o botão de próxima ocorrência está desabilitado.
- **isPrevDisabled**: Booleano indicando se o botão de ocorrência anterior está desabilitado.
- **activeIndex** :Índice da ocorrência atual do termo de pesquisa.
- **totalMatches** : Número total de ocorrências do termo de pesquisa.

## **Estrutura do Código**
```javascript
import { ChatContext } from '@/contexts/chatContext'
import { SearchContext } from '@/contexts/searchContext'
import { getMatchCounts } from '@/utils/helpers/activeIndex'
import { ChangeEvent, useContext, useEffect } from 'react'

export const useSearch = () => {
  const { searchTerm, setSearchTerm, activeIndex, setActiveIndex } =
    useContext(SearchContext)

  const { messages } = useContext(ChatContext)

  const matchCounts = getMatchCounts(messages, searchTerm)
  const totalMatches = matchCounts.reduce((a, b) => a + b, 0)

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)

    if (!totalMatches || totalMatches === 0) {
      setActiveIndex(0)
    }

    if (totalMatches || totalMatches > 0) {
      setActiveIndex(1)
    }
  }

  useEffect(() => {
    document.querySelector('.Active')?.scrollIntoView({
      behavior: 'auto',
      block: 'center',
    })
  }, [activeIndex])

  useEffect(() => {
    if (searchTerm && totalMatches > 0) {
      document.querySelector('.Active')?.scrollIntoView({
        behavior: 'auto',
        block: 'center',
      })
    }
  }, [activeIndex, searchTerm, totalMatches])

  const handleNextHighlight = () => {
    if (activeIndex < totalMatches - 1) {
      setActiveIndex(activeIndex + 1)
      document.querySelector('.Active')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  const handlePrevHighlight = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
      document.querySelector('.Active')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  const isNextDisabled = activeIndex >= totalMatches - 1
  const isPrevDisabled = activeIndex <= 0

  return {
    searchTerm,
    handleSearchInputChange,
    handleNextHighlight,
    handlePrevHighlight,
    isNextDisabled,
    isPrevDisabled,
    activeIndex,
    totalMatches: matchCounts.reduce((acc, curr) => acc + curr, 0),
  }
}


```
## **Exemplo de Uso**
```javascript

```
