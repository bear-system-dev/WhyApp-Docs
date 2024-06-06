## **Componente ButtonRemoveMember**
O componente ButtonRemoveMember é um botão utilizado para remover um membro de um grupo.

![Texto alternativo](../../../../../../imagens/buttoRemoveMember.png)
## **Propriedade**
### **ButtonRemMemberProps**
- `tagButton`:O texto exibido dentro do botão.
## **Funcionalidades Principais**

- O componente MenuInfoGroup utiliza o estado interno para controlar se o modal está aberto ou fechado.
- Utilização de um ícone para representar a ação de adição.
- Customização do conteúdo do botão através da prop tagButton.

## **Exemplo de Uso**
```javascript
   <ButtonAddMember tagButton="Adicionar Membro" onClick={() => console.log('Botão clicado')} />
```