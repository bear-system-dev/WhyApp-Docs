# **Componente SendAt**
Responsável por exibir informação da hora do envio da mensagem.

# **Bibliotecas**
- `DayJs`: Biblioteca para formatação de data

# **Exemplo de uso**

- `userId`: obtido dos cookies usando Cookies.get('userId').
```javascript
import dayjs from 'dayjs'

interface SentAt {
  time: string
}
const SentAt: React.FC<SentAt> = ({ time }) => {
  return (
    <p
      style={{
        fontSize: '0.75rem',
        lineHeight: 1.5,
        margin: '0px',
        textAlign: 'end',
        color: 'white',
      }}
    >
      {dayjs(time).format('HH:mm')}
    </p>
  )
}
export default SentAt

```