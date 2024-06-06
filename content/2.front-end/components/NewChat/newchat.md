## **Componente NewChat**
O componente NewChat oferece uma interface para iniciar novas conversas ou criar novos grupos. Ele utiliza um Drawer do antd para exibir um painel lateral onde os usuários podem buscar novos contatos ou visualizar a lista de grupos.
## **Funcionalidades**
- Exibe um botão de adição na barra lateral.
- Ao clicar no botão, abre um painel lateral com opções para iniciar uma nova conversa individual ou criar um novo grupo.
- Permite selecionar entre iniciar uma nova conversa individual ou criar um novo grupo.
- Renderiza diferentes componentes com base na opção selecionada: FindUser para iniciar uma nova conversa e GroupsList para criar um novo grupo.
## **Funções**
- `showDrawer`:  Abre o drawer ao definir newChatDrawerOpen como true.
- `onClose`: Fecha o drawer ao definir newChatDrawerOpen como false.
-   
## **Componentes**
- `FindUser`: Componente para buscar novos usuários.
- `GroupsList`: Componente para listar grupos existentes.

## **Retorno**
- `Nova Conversa`: Utiliza o componente FindUser para buscar e adicionar novos contatos.
- `Novo Grupo`:  Utiliza o componente GroupsList para visualizar e criar novos grupos.
- ## **Resumo **
- 
```javascript
export const NewChat = () => {
  const [session, setSession] = useState('Nova conversa')
  const [newChatDrawerOpen, setNewChatDrawerOpen] = useState(false)

  const showDrawer = () => {
    setNewChatDrawerOpen(true)
  }

  const onClose = () => {
    setNewChatDrawerOpen(false)
  }
  return (
    <>
      <Button
        className="search-button"
        style={newChatButtonStyle}
        shape="circle"
        icon={<PlusOutlined />}
        typeof="primary"
        onClick={showDrawer}
      />
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={newChatDrawerOpen}
        getContainer={document.getElementById('sidebar') || document.body}
        className={styles.chat__drawer}
      >
        <Flex vertical gap={24} className={styles.chat__drawerContainer}>
          <Flex align="center" justify="space-between">
            <h2 className={styles.chat__drawerTitle}>{session}</h2>
            <Flex gap={16} align="center" justify="center">
              <Button
                icon={<UserAddOutlined />}
                className={styles.chat__drawerAction}
                onClick={() => setSession('Nova conversa')}
              />
              <Divider type="vertical" className={styles.chat__drawerDivider} />
              <Button
                icon={<UsergroupAddOutlined />}
                className={styles.chat__drawerAction}
                onClick={() => setSession('Novo grupo')}
              />
            </Flex>
          </Flex>
          {session === 'Nova conversa' && <FindUser onClose={onClose} />}
          {session === 'Novo grupo' && <GroupsList onClose={onClose} />}
        </Flex>
      </Drawer>
    </>
  )
}
```