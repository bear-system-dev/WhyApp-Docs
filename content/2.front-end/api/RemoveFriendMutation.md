**Arquivo:** `removeFriend.ts`

**Função:** `removeFriend`

**Parâmetros:**

- **`userId`**: `string` - **ID do usuário logado**
- **`friendId`**: `string` - **ID do amigo a ser removido**

**Descrição:** **Remove um amigo do usuário logado.**

**Requisição:** **`DELETE`** para a API na rota **`/user/amigos`**

**Corpo da Requisição:**

- **`params`**: objeto com os parâmetros **`userId`** e **`friendId`**
- **`headers`**: objeto com o **token de autenticação do usuário logado** no header **`Authorization`**

**Retorno:** A resposta da requisição se bem sucedida.

**Erros:** Captura e loga qualquer erro que ocorra durante a requisição.

**Importações:**

- **`api`** (axios) from `@/lib/api`
- **`Cookies`** from `js-cookie`