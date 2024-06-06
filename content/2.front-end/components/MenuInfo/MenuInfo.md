# **Componente MenuInfo**
O componente MenuInfo é responsável por exibir as informações do usuário ou do grupo em um drawer lateral. Ele também gerencia a adição e remoção de membros de um grupo.
## **Descrição**
O MenuInfo exibe as informações do usuário ou do grupo em um drawer lateral. Ele contém dois subcomponentes: MenuPrivateUSer para exibir as informações do usuário e MenuInfoGroup para exibir as informações do grupo. Além disso, gerencia a adição e remoção de membros de um grupo utilizando os subcomponentes ModalAlert, AddMemberMutation e RemMemberMutation qeu são dois hooks utilizando o conceito de mutations do react-querie.

![Texto alternativo](../../../../imagens/menuinfoprivate.png)
## **Funcionalidades Principais**
- Exibição das informações do usuário ou do grupo em um drawer lateral.
- Gerenciamento da adição e remoção de membros de um grupo.
## **Subcomponentes**
- [`MenuPrivateUSer`](./MenuInfoPrivate/menuprivate.md): um componente para exibir informações sobre o perfil privado do usuário
- [`MenuInfoGroup`](./MenuInfoPrivate/menuprivate.md): um componente para exibir informações sobre o grupo de destinatários da conversa
- [`ModalAlert`](./Components/ModalAlert/ModalAlert.md):  um componente para exibir alertas modais de adição/remoção de membros
- [`AddMemberMutation`](./Components/ModalAlert/ModalAlert.md):  Mutação utilizada para adicionar membros ao grupo.
- [`RemMemberMutation`](./Components/ModalAlert/ModalAlert.md):  Mutação utilizada para remover membros do grupo.

## **Props Principais**
O componente MenuInfo utiliza os seguintes estados e hooks:

- `open`:  Indica se o drawer está aberto ou fechado.
- `onClose`:Função de retorno de chamada chamada quando o drawer é fechado.
    
## **Estrutura do Código**
```javascript
const MenuInfo = ({
  openModal,
  open,
  onClose,
  setprofileInfoMenuOpen,
}: MenuInfoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { recipientGroup, recipient } = useContext(ChatContext)
  const [members, setMembers] = useState<FriendsPostProps[]>([])
  const [tagModal, setTagModal] = useState<Tagmodal>()
  const addMemberMutation = AddMemberMutation()
  const remMemberMutation = RemMemberMutation()
  const openNotification = ({
    title,
    subtitle,
  }: {
    title: string
    subtitle: string
  }) => {
    notification.config({
      duration: 3,
    })
    notification.open({
      message: title,
      description: subtitle,
    })
  }

  useEffect(() => {
    if (addMemberMutation.isSuccess) {
      setIsModalOpen(!isModalOpen)
      openNotification({
        title: 'Adicionados',
        subtitle: 'Membros foram adicionados ao grupo',
      })
    }
    if (remMemberMutation.isSuccess) {
      setIsModalOpen(!isModalOpen)
      openNotification({
        title: 'Removidos',
        subtitle: 'Membros foram removidos do grupo',
      })
    }
  }, [addMemberMutation.isSuccess, remMemberMutation.isSuccess])

  return (
    <>
      <Drawer
        className="ant-drawer-body"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        getContainer={document.body}
        style={menuContainer}
      >
        {recipient && (
          <MenuPrivateUSer recipient={recipient} onClose={onClose} />
        )}
        {recipientGroup && (
          <MenuInfoGroup
            recipientGroup={recipientGroup}
            onClose={onClose}
            setOpenModal={setIsModalOpen}
            openModal={openModal}
            setTagModal={setTagModal}
            setprofileInfoMenuOpen={setprofileInfoMenuOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </Drawer>

      {tagModal?.title === 'Adicionar membros' ? (
        <ModalAlert
          tagModal={tagModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          members={members}
          setMembers={setMembers}
          subtitle={tagModal?.subtitle}
          title={tagModal?.title}
        >
          <button
            onClick={() =>
              addMemberMutation.mutate({
                groupId: recipientGroup?.id,
                members,
              })
            }
            className="addModalButton"
            style={AddModalButton}
          >
            Adicionar
          </button>
        </ModalAlert>
      ) : (
        <ModalAlert
          tagModal={tagModal}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          members={members}
          setMembers={setMembers}
          subtitle={tagModal?.subtitle}
          title={tagModal?.title}
        >
          <button
            onClick={() => {
              remMemberMutation.mutate({
                groupId: recipientGroup?.id,
                members,
              })
            }}
            className="addModalButton"
            style={AddModalButton}
          >
            Remover
          </button>
        </ModalAlert>
      )}
    </>
  )
}
export default MenuInfo
```
## **Exemplo de Uso**
```javascript
    <MenuInfo open={open} onClose={() => setOpen(false)} />

```
