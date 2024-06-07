**Componente InputBar**

O componente `InputBar` é o componente responsável por capturar a entrada do usuário e renderizar os botões de enviar e anexar arquivo.

# **Funcionalidades Principais**

* `setShowUpload`: uma função para alternar o modal de upload de arquivo
* `showUpload`: um booleano que indica se o modal de upload de arquivo está aberto
* `sendFiles`: uma função para enviar arquivos para o servidor

# **Componentes**

O componente `InputBar` renderiza os seguintes componentes:

* `EmojiPicker`: um componente que renderiza o seletor de emojis
* `Button`: um componente que renderiza os botões de emoji, anexar arquivo e enviar
* `Input`: um componente que renderiza o campo de entrada
* `Space`: um componente que renderiza o container para o campo de entrada e botões

# **Estrutura do Código**
```javascript
interface InputBarProps {
  setShowUpload: (show: boolean) => void
  showUpload: boolean
  sendFiles: (files: File[]) => void
}

const InputBar: React.FC<InputBarProps> = ({
  setShowUpload,
  showUpload,
  sendFiles,
}) => {
  // Estado e funções do componente
  const [inputValue, setInputValue] = useState('')
  const [showEmojis, setShowEmojis] = useState(false)
  const [closeIconFile, setCloseIconFile] = useState(false)

  const handleSendMessage = () => {
    // Lógica para enviar mensagem
  }

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleOpenEmojiDrawer = () => {
    setShowEmojis(!showEmojis)
  }

  const handleEmoji = (emoji: string) => {
    setInputValue(inputValue + emoji)
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="input-bar">
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputOnChange}
        onKeyDown={handleOnKeyDown}
        placeholder="Digite uma mensagem..."
      />
      <Button
        onClick={handleOpenEmojiDrawer}
        className="emoji-button"
      >
        😊
      </Button>
      <Button
        onClick={() => setShowUpload(true)}
        className="attach-button"
      >
        👉
      </Button>
      <Button
        onClick={handleSendMessage}
        className="send-button"
      >
        ➡️
      </Button>
      {showEmojis && (
        <EmojiPicker
          onSelect={handleEmoji}
        />
      )}
      {showUpload && (
        <UploadModal
          onSend={sendFiles}
        />
      )}
    </div>
  )
}

export default InputBar
```
# **Exemplo de uso**
```javascript
<InputBar
  setShowUpload={(show) => console.log(show)}
  showUpload={false}
  sendFiles={(files) => console.log(files)}
/>
```