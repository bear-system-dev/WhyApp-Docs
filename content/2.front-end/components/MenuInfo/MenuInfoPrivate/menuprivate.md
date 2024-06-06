## **Componente MenuPrivateUser**
O componente MenuPrivateUser é utilizado para exibir informações detalhadas sobre um usuário específico em um menu lateral. Ele apresenta a imagem de perfil, nome, status, descrição e opções de notificação e remoção do usuário.

![Texto alternativo](../../../../../imagens/menuinfoprivate.png)

## **Descrição**
O MenuPrivateUSer exibe as informações do usuário em uma conversa privada. Ele inclui o avatar do usuário, nome, status online/offline, descrição e opções para silenciar notificações e remover o contato.
## **Funcionalidades Principais**
- Exibição das informações do usuário em uma conversa privada.
- Opções para silenciar notificações e remover o contato.

## **Props Principais**
- `recipient`:  As informações do usuário, incluindo nome, avatar e descrição.
- `onClose`: Função de retorno de chamada chamada quando o menu é fechado.

- # **Componentes Renderizados**
- `ProfileImage`: componente que exibe a imagem de perfil do usuário.
- `ProfileName`: : componente que exibe o nome do usuário.
- `DescriptionUsers`: componente que permite silenciar as notificações do usuário.
- `SilenceNotifications`:  componente que exibe um botão para remover o usuário.
- [`ButtonRemove`](../Components/ButtonRemoveContact/ButtonRemoveContact.md):  componente que exibe um botão para remover o usuário.
- `Icon`: componente para ícones diversos (neste caso, um ícone de fechar).
- `UserOutlined`:  ícone que representa o status do usuário.
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
    const recipient: Recipient = { nome: "John Doe", avatar: "avatar.jpg", descricao: "Lorem ipsum dolor sit amet" }

    <MenuPrivateUSer recipient={recipient} onClose={() => console.log('Fechado')} />
```