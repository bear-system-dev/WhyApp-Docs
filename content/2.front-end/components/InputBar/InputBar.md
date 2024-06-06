# **Componente InputBar**

O componente `InputBar` é uma parte crucial da aplicação de chat, permitindo que os usuários insiram e enviem mensagens. Este componente é responsável por renderizar o campo de entrada, o seletor de emojis e o botão de anexar arquivo e o botão de enviar.

## **Propriedades**

O componente `InputBar` aceita as seguintes propriedades:

- `setShowUpload`: uma função para alternar o modal de upload de arquivo
- `showUpload`: um booleano que indica se o modal de upload de arquivo está aberto
- `sendFiles`: uma função para enviar arquivos para o servidor

## **Estado**

O componente `InputBar` usa as seguintes variáveis de estado:

- `inputValue`: o valor atual do campo de entrada
- `showEmojis`: um booleano que indica se o seletor de emojis está aberto
- `closeIconFile`: um booleano que indica se o ícone de fechar para arquivos anexados está visível

## **Funções**

O componente `InputBar` usa as seguintes funções:

- `handleSendMessage`: envia o valor de entrada e os arquivos anexados para o servidor
- `handleInputOnChange`: atualiza a variável de estado `inputValue` quando o campo de entrada muda
- `handleOpenEmojiDrawer`: alterna o seletor de emojis
- `handleEmoji`: insere um emoji no campo de entrada quando clicado
- `handleOnKeyDown`: trata o evento de pressionar a tecla Enter para enviar a mensagem

## **Componentes**

O componente `InputBar` renderiza os seguintes componentes:

- `EmojiLibrary`: um componente que renderiza o seletor de emojis
- `Button`: um componente que renderiza os botões de emoji, anexar arquivo e enviar
- `Input`: um componente que renderiza o campo de entrada
- `Space`: um componente que renderiza o container para o campo de entrada e botões

## **Contextos e hooks utilizados**
O componente `InputBar` usa os seguintes contextos e hooks customizados:
- `ChatContext`: contexto para buscar e setar o `recipient` e para buscar e setar o `fileList`
- `SendNewGroupMessage`: hook customizado para chamar a requisição `mutation` para envio de mensagens em grupo

## **Funções**
O componente `InputBar` usa as seguintes funções:
- `handleSendMessage`: Esta função é chamada quando o usuário pressiona a tecla Enter ou clica no botão de enviar. Verifica se o valor de entrada não está vazio e se há arquivos para serem enviados. Se ambas as condições forem verdadeiras, envia a mensagem e os arquivos para o servidor utilizando as funções `socket` e sendFiles. Além disso, redefine o valor de entrada e a lista de arquivos para vazio após o envio.
- `handleInputOnChange`: Esta função é chamada quando o usuário digita algo no campo de entrada. Atualiza a variável de estado inputValue com o novo valor e define a variável de estado closeIconFile como false se o valor de entrada não estiver vazio. Se o valor de entrada estiver vazio, define closeIconFile como true.
- `handleOpenEmojiDrawer`: Esta função alterna a janela de seleção de emojis. Quando chamada, redefine a variável de estado showEmojis para o oposto do seu valor atual.
- `handleEmoji`: Esta função é chamada quando o usuário seleciona um emoji da janela de seleção de emojis. Acrescenta o emoji selecionado ao valor de entrada.
- `handleOnKeyDown`: Esta função é chamada quando o usuário pressiona uma tecla no campo de entrada. Se o usuário pressionar a tecla Enter, chama a função handleSendMessage para enviar a mensagem e os arquivos. Além disso, alterna a variável de estado closeIconFile.

## **Estilos**

O componente `InputBar` usa os seguintes estilos:

- `input-bar__background`: estiliza o contêiner para o campo de entrada e botões
- `emoji-button`: estiliza o botão de emoji
- `attach-button`: estiliza o botão de anexar arquivo
- `send-button`: estiliza o botão de enviar
- `input-bar`: estiliza o campo de entrada

## **Manutenção**

Para manter este componente, siga os seguintes passos:

- Atualize a função `handleSendMessage` para lidar com alterações na API do servidor
- Atualize o componente `EmojiLibrary` para adicionar ou remover emojis
- Atualize os estilos para corresponder às alterações no design da aplicação