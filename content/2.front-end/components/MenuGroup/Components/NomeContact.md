# **Componente NomeContact**

Componente que indica o nome de contato do usuário, renderizado no componente [`Header`]('../../../../header.md')

## **Propriedades**
- `name`: contém informação do nome do contato do usuário a se iniciar conversa.
- `color`: Cor pe definida se o usuário está ou não ativo na aplicação.

## **Estrutura do Código**
```javascript
type NameContactProps = {
  name: string
  color: string
}
const NameContact: React.FC<NameContactProps> = ({ color, name }) => {
  return (
    <p
      style={{
        color,
        fontSize: '.9rem',
        fontWeight: '600',
      }}
    >
      {name}
    </p>
  )
}
export default NameContact

```