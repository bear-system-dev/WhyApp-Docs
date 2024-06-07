**Componente ProfileMenu**

O componente `ProfileMenu` é um componente que permite ao usuário editar e gerenciar seu perfil.

# **Funcionalidades Principais**

* Edição de avatar: permite ao usuário uploadar uma imagem de avatar
* Edição de nome de usuário: permite ao usuário editar seu nome de usuário
* Edição de descrição: permite ao usuário editar sua descrição
* Salvar alterações: permite ao usuário salvar suas alterações

# **Estado**

O componente `ProfileMenu` tem os seguintes estados:

* `userName`: o nome do usuário
* `userDescription`: a descrição do usuário
* `isEditingUserName`: indica se o nome do usuário está sendo editado
* `isEditingUserDescription`: indica se a descrição do usuário está sendo editada

# **Contexto**

O componente `ProfileMenu` não utiliza nenhum contexto.

# **Estrutura do Código**
```javascript
import React, { useState, useEffect, useRef } from 'react'
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { apiFunction } from '@/api/api'
import { User } from '@/model/UserModel'
import { EditOutlined, SaveOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Flex, Input, TextArea } from 'antd'

const ProfileMenu = () => {
  // código do componente aqui
}

export default ProfileMenu
```
# **Exemplo de uso**

O componente `ProfileMenu` é usado em um aplicativo para fornecer opções de edição de perfil ao usuário.
```javascript
<ProfileMenu />
```