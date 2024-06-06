# **Componente StatusGroups**

Componente que indica se o usuário está ou não online na aplicação, renderizado no componente [`Header`]('../../../../header.md')

## **Propriedades**
- `status`: contém informação se o usuário ele está online ou offline 

## **Estrutura do Código**
```javascript
interface Status {
  status: 'online' | 'offline'
}

const StatusContact: React.FC<Status> = ({ status }) => {
  return (
    <p
      style={{
        fontSize: '.7rem',
        textTransform: 'capitalize',
        color:
          status === 'online' ? 'var(--t-primary-20)' : 'var(--neutral-100)',
        fontWeight: '700',
      }}
    >
      {status}
    </p>
  )
}
export default StatusContact
```