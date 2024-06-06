# **Componente ChatBubble**
O Chat Bubble é o componente responsável por capturar as mensagens dos usuários e renderiza-los em um componente interativo e dinâmico.
# **Funcionalidades Principais**
- `mensagem: string`: A mensagem a ser exibida na bolha de chat
- `fromUserId: string`: O ID do usuário que enviou a mensagem.
- `createdAt: Date | undefined`: O horário de envio da mensagem.
  
# **Componentes**
O componente ChatBubble renderiza os seguintes componentes:

- [`SentAt`](./Components/SendAt.md): um componente que exibe a data e hora de envio da mensagem.
- `children`: Conteúdo que é envilvido pelo chat bubble.
## **Estrutura do Código**
```javascript
export interface BubbleChatProps extends Message {
  children: ReactNode
}

const userId = Cookies.get('userId')

const ChatBubble: React.FC<BubbleChatProps> = ({
  mensagem: message,
  createdAt,
  fromUserId,
}) => {
  return (
    <div
      style={{
        flex: '0 1 auto',
        maxWidth: '100%',
        height: 'fit-content',
        padding: '1rem',
        backgroundColor: `${fromUserId === userId ? 'var(--shadow-primary-500)' : 'var(--neutral-600)'}`,
        borderRadius: '14px',
        color: '#FFFFFF',
        marginLeft: '4rem',
        wordWrap: 'break-word',
      }}
    >
      <p
        style={{
          width: 'max-content',
          maxWidth: '22.5rem',
        }}
      >
        {message}
      </p>
      {createdAt && <SentAt time={createdAt} />}
    </div>
  )
}
export default ChatBubble

```
# **Exemplo de uso**

- `userId`: obtido dos cookies usando Cookies.get('userId').
```javascript
    <ChatBubble
        mensagem={chat.mensagem}
        createdAt={chat.createdAt}
        fromUserId={chat.fromUserId}
        >
        <Highlighter
            style={{
            color: '#FFFFFF',
            paddingRight: '1.5rem',
            maxWidth: '16rem',  
            fontSize: '1rem',
            lineHeight: 1.5,
            margin: '0px',
            }}
            activeClassName="Active"
            activeIndex={localActiveIndex}
            autoEscape={true}
            highlightClassName="Highlight"
            searchWords={[searchTerm]}
            textToHighlight={chat.mensagem}
        />
    </ChatBubble>
```