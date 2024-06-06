# **Componente GroupChatBubble**

O componente GroupChatBubble é responsável por renderizar a mensagem de um usuário em uma bolha de chat. Este componente pode opcionalmente exibir as informações de perfil do remetente da mensagem.

## **Propriedades**
- `mensagem`: o texto da mensagem a ser exibida.
- `createdAt`: a data e hora de criação da mensagem.
- `usuarioId`: o ID do usuário que enviou a mensagem.
- `showProfileContact`: um booleano que indica se as informações de perfil do remetente devem ser exibidas.
- `children`: conteúdo filho que será englobado pelo componente GroupChatBubble.
- 
## **Estado**
O componente GroupChatBubble usa as seguintes variáveis de estado:

- `userId`: ID do usuário atual, obtido dos cookies.
- 
## **Funções**
O componente GroupChatBubble usa as seguintes funções:

Não há funções específicas definidas dentro deste componente, mas ele utiliza componentes auxiliares como ProfileContact e SentAt para funcionalidades adicionais.

## **Componentes**
O componente GroupChatBubble renderiza os seguintes componentes:

- `ProfileContact`: um componente que renderiza as informações de perfil do remetente da mensagem.
- `SentAt`: um componente que exibe a data e hora de envio da mensagem.
- `Flex`: um contêiner flexível para layout.
  
## **Estados e Contextos Utilizados
O componente GroupChatBubble utiliza o seguinte estado:

- `userId`: obtido dos cookies usando Cookies.get('userId') 
  
## **Estrutura do Código**
```javascript
export interface GroupChatBubbleProps extends GroupMessage {
  showProfileContact: boolean
  children: ReactNode
}

const userId = Cookies.get('userId')

const GroupChatBubble: React.FC<GroupChatBubbleProps> = ({
  mensagem: message,
  createdAt,
  usuarioId,
  showProfileContact,
}) => {
  return (
    <Flex
      vertical
      style={{
        gap: '0.5rem',
      }}
    >
      {showProfileContact && usuarioId !== userId && (
        <ProfileContact fromUserId={usuarioId} />
      )}
      <div
        style={{
          flex: '0 1 auto',
          maxWidth: '100%',
          height: 'fit-content',
          padding: '1rem',
          backgroundColor: `${usuarioId === userId ? 'var(--shadow-primary-500)' : 'var(--neutral-600)'}`,
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
    </Flex>
  )
}
export default GroupChatBubble

```