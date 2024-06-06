## **Componente ButtonRemoveContact**
O componente ButtonRemoveContact é um botão utilizado para remover um contato da lista de amigos em um contexto de chat.

![Texto alternativo](../../../../../../imagens/ButtonRemoveContact.png)
## **Propriedade**
### **ButtonRemoveProps**
- `onClose`: Uma função de retorno de chamada que é executada após a remoção do contato, geralmente utilizada para fechar o componente pai ou realizar outras operações.


## **Funcionalidades Principais**
O componente MenuInfoGroup utiliza o estado interno para controlar se o modal está aberto ou fechado.
- Remoção de um contato da lista de amigos.
- Utilização de um ícone para representar a ação de remoção.
- Atualização do estado do destinatário no contexto após a remoção.
- Chamada de uma função de retorno de chamada após a conclusão da operação.
## **Exemplo de Uso**
```javascript
    <ButtonRemove onClose={handleClose} />
```