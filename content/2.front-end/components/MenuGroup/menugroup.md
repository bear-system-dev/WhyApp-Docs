## **Componente MenuGroup**
O componente MenuGroup é responsável por exibir um menu lateral contendo informações relacionadas a um grupo de chat específico. Ele exibe uma lista de membros do grupo, permitindo visualizar quem está online e offline.
## **Funcionalidades**

- Exibe um botão para acessar o menu lateral do grupo.
- Quando o botão é clicado, o menu lateral é aberto, exibindo uma lista de membros do grupo.
- Os membros são separados entre online e offline.
- Cada membro é representado por um componente Contact, que exibe a imagem, nome e status do membro.
- Permite fechar o menu lateral clicando fora dele ou em um botão de fechar.


## **Contextos Utilizados**
- [`ChatContext`](): para acessar informações sobre o grupo de chat atual.

## **Hooks Utilizados**
O componente MenuInfo utiliza os seguintes estados e hooks:

- `useGetAllUsersList`: utilizado para obter a lista de todos os usuários.

# **Componentes Utilizados**

- `Button`:  componente do Ant Design para renderizar um botão de ação.
- `Drawer`: componente do Ant Design para renderizar o menu lateral.
- `Flex`: componente do Ant Design para fornecer um layout flexível.
- [`Contact`](./Components/NomeContact.md):  componente interno para representar os membros do grupo.
- 
- # **Fluxo de Funcionamento**
- Ao clicar no botão de configurações, o menu lateral é aberto.
- O menu exibe o cabeçalho com o nome do grupo e uma lista de membros separados entre online e offline.
- Os membros são representados por componentes Contact.
- O menu pode ser fechado clicando fora dele ou em um botão de fechar.
  
```javascript

type ContactProps = {
  image: string
  name: string
  role: string
  status: boolean
}
const containerCaontactStyle: React.CSSProperties = {
  alignItems: 'center',
  gap: '1rem',
}
const Contact: React.FC<ContactProps> = ({ status, image, name, role }) => {
  return (
    <>
      {status ? (
        <ContainerContact>
          <Flex style={containerCaontactStyle}>
            <ProfileImage image={image} size="2.5rem" />
            <Flex vertical>
              <NameContact color={'#FFFFFF'} name={name} />
              <UserRole role={role} />
            </Flex>
          </Flex>
          <div
            style={{
              height: '12px',
              width: '12px',
              borderRadius: '100%',
              backgroundColor: '#00FF04',
            }}
          ></div>
        </ContainerContact>
      ) : (
        <ContainerContact>
          <Flex style={containerCaontactStyle}>
            <ProfileImage image={image} size="2.5rem" />
            <Flex vertical>
              <NameContact color={'#8D8686'} name={name} />
              <UserRole role={role} />
            </Flex>
          </Flex>
          <div
            style={{
              height: '12px',
              width: '12px',
              borderRadius: '100%',
              border: '3px solid #8D8686',
            }}
          ></div>
        </ContainerContact>
      )}
    </>
  )
}
export default Contact


```