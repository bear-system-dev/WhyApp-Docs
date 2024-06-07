**Componente Customize**

O componente `Customize` é um componente que permite ao usuário personalizar a aparência do aplicativo, incluindo a escolha do tema e do plano de fundo.

# **Funcionalidades Principais**

* `handleThemeChange`: uma função que é chamada quando o usuário seleciona um novo tema
* `setTheme`: uma função que atualiza o tema do aplicativo

# **Contexto**

O componente `Customize` utiliza o contexto `ThemeContext` para acessar e atualizar o tema do aplicativo.

# **Estrutura do Código**
```javascript
import { Theme, ThemeContext } from '@/contexts/themeContext'
import { Flex, Select } from 'antd'
import { useContext } from 'react'
import { ColorsGrid } from './ColorsGrid'
import './styles.css'

const Customize = () => {
  // código do componente aqui
}

export default Customize
```
# **Exemplo de uso**

O componente `Customize` é usado em um aplicativo para fornecer opções de personalização.
```javascript
<Customize />
```