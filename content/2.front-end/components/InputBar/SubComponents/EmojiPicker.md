**Componente EmojiPicker**

O componente `EmojiPicker` é um subcomponente do componente `InputBar` e é responsável por renderizar o seletor de emojis.

# **Funcionalidades Principais**

* `handleEmoji`: uma função que é chamada quando um emoji é selecionado
* `open`: um booleano que indica se o seletor de emojis está aberto

# **Propriedades**

O componente `EmojiPicker` aceita as seguintes propriedades:

* `handleEmoji`: uma função que é chamada quando um emoji é selecionado
* `open`: um booleano que indica se o seletor de emojis está aberto

# **Estilos**

O componente `EmojiPicker` usa o seguinte estilo:

* `EmojiStyle`: um objeto de estilo que define a posição, bottom, left e zIndex do seletor de emojis

# **Estrutura do Código**
```javascript
import EmojiPicker, { EmojiClickData, Theme } from 'emoji-picker-react'
import React from 'react'

const EmojiStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '65px',
  left: '70px',
  zIndex: '999',
}

type EmojiPickerProps = {
  handleEmoji: (emojiData: EmojiClickData) => void
  open: boolean
}

export const EmojiPicker: React.FC<EmojiPickerProps> = ({
  handleEmoji,
  open,
}) => {
  return (
    <div style={EmojiStyle}>
      <EmojiPicker open={open} theme={Theme.DARK} onEmojiClick={handleEmoji} />
    </div>
  )
}
```
# **Exemplo de uso**

O componente `EmojiPicker` é usado no componente `InputBar` para renderizar o seletor de emojis.
```javascript
<InputBar>
  {/* ... */}
  {showEmojis && (
    <EmojiPicker
      handleEmoji={(emojiData) => handleEmoji(emojiData)}
      open={showEmojis}
    />
  )}
</InputBar>
```
Este componente é responsável por renderizar o seletor de emojis e chamar a função `handleEmoji` quando um emoji é selecionado.