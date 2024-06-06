## **Componente MenuInfoGroup**
O componente MenuInfoGroup é utilizado para exibir informações detalhadas sobre um grupo específico em um menu lateral. Ele apresenta a imagem do grupo, nome, número de membros, descrição, lista de membros, e opções para silenciar notificações, adicionar e remover membros do grupo, e excluir o grupo.

![Texto alternativo](../../../../../imagens/menuinfogroup.png)
## **Propriedade**
O componente MenuInfoGroup aceita as seguintes propriedades:

- `recipientGroup`:  um objeto que representa o grupo cujas informações serão exibidas. Deve seguir a estrutura do modelo RecipientGroup.
- `onClose`:  uma função que é chamada quando o menu deve ser fechado.
- `setOpenModal`: ma função para abrir um modal.
- `openModal`:  uma função para fechar o drawer
- `setTagModal`:   uma função para definir o título e a subtitulo do modal.
- `setprofileInfoMenuOpen`:  uma função para abrir ou fechar o menu de informações do grupo.
- `setIsModalOpen`:   uma função para definir se o modal está aberto ou fechado

## **Estado**
O componente MenuInfoGroup utiliza o estado interno para controlar se o modal está aberto ou fechado.

# **Componentes Renderizados**
- `ProfileImage`: componente que exibe a imagem do grupo.
- `NameProfile`: componente que exibe o nome do grupo.
- `SilenceNotifications`: componente que permite silenciar as notificações do grupo.
- `ButtonAddMember`:  componente que exibe um botão para adicionar membros ao grupo.
- `ButtonRemoveMember`:  componente que exibe um botão para remover membros do grupo.
- `ButtonDeleteGroup`: componente que exibe um botão para excluir o grupo.
- `DescriptionUsers`:  componente que exibe a descrição do grupo.
- `Contact`:  componente que representa um membro do grupo.

## **Estrutura do Código**
```javascript

export const MenuInfoGroup = ({
  onClose,
  recipientGroup,
  setOpenModal,
  setTagModal,
  setprofileInfoMenuOpen,
  setIsModalOpen,
}: MenuInfoGroupProps) => {
  const { users } = useGetAllUsersList()
  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleremClick = () => {
    setTagModal({
      title: 'Remover membros',
      subtitle: 'Remova membros do grupos',
    })
    setOpenModal(true)
    setprofileInfoMenuOpen(false)
    showModal()
  }

  const handleAddClick = () => {
    setTagModal({
      title: 'Adicionar membros',
      subtitle: 'Adicione novos membros no grupo para interagir',
    })
    setOpenModal(true)
    setprofileInfoMenuOpen(false)
    showModal()
  }

  return (
    <Flex vertical style={containerMenuStyle}>
      <CloseCircleOutlined
        onClick={onClose}
        style={{
          color: 'white',
          position: 'fixed',
          top: '10px',
          left: '10px',
          fontSize: '1.5rem',
        }}
      />
      <Flex vertical style={imageProfileStyle}>
        <ProfileImage
          image={recipientGroup.foto || defaultAvatar}
          key={recipientGroup.id}
          size="180px"
        />
        <Flex align="center" vertical>
          <NameProfile>{recipientGroup.nome}</NameProfile>
          <div style={stutusProfileStyle}>
            <UserOutlined style={{ color: 'white' }} />
            <p style={{ color: 'white' }}>
              Membros: {recipientGroup.usuarios?.length}
            </p>
          </div>
        </Flex>
      </Flex>
      <Flex vertical justify="center" align="center" style={{ gap: '30px' }}>
        <DescriptionUsers description={recipientGroup?.descricao} />
        <Flex
          vertical
          style={{
            width: '100%',
            padding: '0 10px',
          }}
        >
          <div
            style={{
              width: '90%',
              textAlign: 'start',
            }}
          >
            <p style={labelStyle}>Membros</p>
          </div>
          {groupUsers?.map(
            (member) =>
              member && (
                <Contact
                  key={member.id}
                  image={member.avatar}
                  name={member.nome}
                  role=""
                  status={true}
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex
        vertical
        align="center"
        justify="center"
        style={{
          height: 'fit-content',
          alignItems: 'center',
          gap: '8px',
          width: '100%',
          padding: '0 18px',
        }}
      >
        <SilenceNotifications />
        <ButtonAddMember
          onClick={handleAddClick}
          tagButton="Adicionar membros"
        />
        <ButtonRemoveMember
          onClick={handleremClick}
          tagButton="Remover membros"
        />
        <ButtonDeleteGroup />
      </Flex>
    </Flex>
  )
}

```

## **Exemplo de uso**
```javascript
   <MenuInfoGroup
        recipientGroup={recipientGroup}
        onClose={onClose}
        setOpenModal={setIsModalOpen}
        openModal={openModal}
        setTagModal={setTagModal}
        setprofileInfoMenuOpen={setprofileInfoMenuOpen}
        setIsModalOpen={setIsModalOpen}
    />
```