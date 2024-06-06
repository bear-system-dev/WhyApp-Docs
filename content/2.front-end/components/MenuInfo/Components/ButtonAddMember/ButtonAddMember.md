## **Componente ButtonAddMember**
O componente ButtonAddMember é um botão utilizado para adicionar um novo membro a um grupo.

![Texto alternativo](../../../../../../imagens/ButtonAddMember.png)
## **Propriedade**
### **ButtonAddMemberProps**
- `tagButton`: Um nó de reação que representa o conteúdo do botão, como texto ou um ícone.
## **Funcionalidades Principais**

- O componente MenuInfoGroup utiliza o estado interno para controlar se o modal está aberto ou fechado.
- Utilização de um ícone para representar a ação de adição.
- Customização do conteúdo do botão através da prop tagButton.

## **Exemplo de Uso**
```javascript
   <ButtonAddMember tagButton="Adicionar Membro" onClick={() => console.log('Botão clicado')} />
```