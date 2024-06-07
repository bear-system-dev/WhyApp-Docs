**Componente ColorsGrid**

O componente `ColorsGrid` é um componente que permite ao usuário selecionar um plano de fundo personalizado para o chat.

# **Funcionalidades Principais**

* `generateGradient`: uma função que gera um estilo de gradiente de cor
* `handleColorSelection`: uma função que é chamada quando o usuário seleciona uma cor ou um gradiente de cor
* `handleColorPickerChange`: uma função que é chamada quando o usuário seleciona uma cor usando o componente `ColorPicker`

# **Contexto**

O componente `ColorsGrid` utiliza o contexto `ChatBackgroundContext` para acessar e atualizar o estilo de plano de fundo do chat utilizando as `PresetBackgroundColors`.

# **Estrutura do Código**
```javascript
import { ChatBackgroundContext } from '@/contexts/chatBackgroundContext'
import { Button, Col, ColorPicker, Row } from 'antd'
import { useContext } from 'react'
import { presetBackgroundColors } from './PresetBackgroundColors'
import './styles.css'

const ColorsGrid = () => {
  // código do componente aqui
}

export default ColorsGrid
```
# **Exemplo de uso**

O componente `ColorsGrid` é usado em um aplicativo para fornecer opções de personalização do plano de fundo do chat.
```javascript
<ColorsGrid />
```