## **Componente HeaderChat**
O componente HeaderChat é responsável por renderizar o cabeçalho do chat, exibindo informações sobre o contato ou grupo de conversa atual.
## **Propriedade**
O componente HeaderChat aceita as seguintes propriedades:

- `setOpenModal`: uma função para controlar a abertura e fechamento do modal de informações do perfil.
- `openModal`:  um booleano que indica se o modal de informações do perfil está aberto.
- `setOpenMainAside`: uma função para controlar a abertura e fechamento do painel lateral principal.
- `openMainAside`: um booleano que indica se o painel lateral principal está aberto.
## **Estado**
- `profileInfoMenuOpen`:  um booleano que indica se o menu de informações do perfil está aberto.

## **Componentes**
O componente HeaderChat renderiza os seguintes componentes:

- [`ProfileImage`](./Components/ImageProfile/imageProfile.md): um componente que exibe a imagem de perfil do contato ou grupo.
- [`ProfileName`](./Components/ProfileContact/ProfileContact.md): um componente que exibe o nome do contato ou grupo.
- `StatusContact`:  um componente que exibe o status de online/offline do contato.
- [`MenuInfo`](../MenuInfo/MenuInfo.md): um componente que exibe o menu de informações do perfil.
- [`GroupContact`](../Header/Components/GroupsContacts/GroupsContact.md): responsável por trazer nome dos integrantes incluídos no grupo.

O componente ImageProfile não define funções específicas.
# **Estados e Contextos Utilizados**
O componente HeaderChat utiliza o contexto ChatContext para acessar informações sobre o destinatário da conversa (recipient) e o grupo de destinatários (recipientGroup). Essas informações são essenciais para renderizar corretamente as informações do perfil ou do grupo no cabeçalho do chat.
```javascript

interface HeaderProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  setOpenMainAside: React.Dispatch<React.SetStateAction<boolean>>
  openMainAside: boolean
}

const HeaderChat = ({ setOpenModal, openModal, setOpenMainAside, openMainAside }: HeaderProps) => {
  const { recipient, recipientGroup } = useContext(ChatContext)
  const [profileInfoMenuOpen, setprofileInfoMenuOpen] = useState(false)
  const onCloseMenu = () => {
    setprofileInfoMenuOpen(!profileInfoMenuOpen)
  }
  return (
    <HeaderContainer>
      {
        !openMainAside && (
          <MenuOutlined 
            onClick={() => setOpenMainAside(!openMainAside)}
            style={{  
              color: 'white',
              fontSize: '1.5rem',
            }}
      />
        )
      }
      
      <Flex
        align="center"
        style={{
          gap: '20px',
        }}
      >
        {recipient ? (
          <>
            <Button
              shape="circle"
              style={{
                ...resetButtonStyles,
                height: '45px',
                width: '45px',
              }}
              onClick={() => setprofileInfoMenuOpen(true)}
            >
              <ProfileImage size={'45px'} image={recipient?.avatar || defaultAvatar} />
            </Button>
            <div
              onClick={() => setprofileInfoMenuOpen(true)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Flex vertical gap={4}>
                <ProfileName name={recipient?.nome ?? 'Sem nome'} />
                <StatusContact status="online" />
              </Flex>
            </div>
          </>
        ) : recipientGroup ? (
          <>
            <Button
              shape="circle"
              style={{
                ...resetButtonStyles,
                height: '45px',
                width: '45px',
              }}
              onClick={() => setprofileInfoMenuOpen(true)}
            >
              <ProfileImage size={'45px'} image={recipientGroup?.foto || defaultAvatar} />
            </Button>
            <div
              onClick={() => setprofileInfoMenuOpen(true)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Flex vertical gap={5}>
                <ProfileName name={recipientGroup?.nome || 'Sem nome'} />
                <ContactGroup />
              </Flex>
            </div>
          </>
        ) : null}
      </Flex>

      <MenuInfo
        openModal={openModal}
        setOpenModal={setOpenModal}
        open={profileInfoMenuOpen}
        onClose={onCloseMenu}
        setprofileInfoMenuOpen={setprofileInfoMenuOpen}
      />
    </HeaderContainer>
  )
}
export default HeaderChat


```