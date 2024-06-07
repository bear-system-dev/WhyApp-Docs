### api 
Pasta que contém os métodos e arquivos com funções voltadas para realizar as requisições que consomem a API do WhyApp.

- **delete**: arquivos que fazem requisições `DELETE`
  ::callout
  #summary
  removeFriends.ts

  #content
  **Remove um amigo do usuário logado, dado o id do usuário e o id do amigo a ser removido passados como parâmetros na chamada da função**. Passa os mesmos como parâmetros da requisição na rota `/user/amigos` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e retorna a resposta da requisição se bem sucedida.
  ::

- **get**: arquivos que fazem requisições `GET` para a API.
	::callout
	#summary
	getGroupMessage.ts

	#content
	**Obtém as mensagens dentro de um grupo, dado o id passado como parâmetro na chamada da função**. Passa ele como parâmetro da requisição e retorna os dados da resposta da requisição se bem sucedida.
	::

	::callout
	#summary
	getMyProfileInfo.ts
		
	#content
	**Obtém os dados do usuário logado**. Passa o id do usuário armazenado em um cookie como parâmetro da requisição para a API na rota `/user` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}` e retorna uma promise do tipo `User` vindo da resposta da requisição se bem sucedida.
	::
		
	::callout
	#summary
	getUser.ts
		
	#content
	**Obtém um array do tipo `User`**. Faz a requisição para a API na rota `/user` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e então retorna uma promise do tipo `User` vindos da resposta da requisição se bem sucedida.
	::
		
	::callout
	#summary
	getUserGroups.ts
		
	#content
	**Obtém os usuários de um grupo**. Passa de parâmetro da requisição na rota `/groups/user-groups` o id do usuário logado e como parte do header HTTP `Authentication: Bearer ${token}`, e retorna uma Array do tipo `GroupResponse`.
	::
		
- **delete**: arquivos que fazem requisições `DELETE` para a API.
	::callout{type="warning"}
	#summary
	removeFriend.ts
	
	#content
	**Remove um usuário adicionado como amigo do usuário logado dado o id do usuário e o id do amigo a ser removido passados como parâmetros na chamada da função**. Passa os mesmo como corpo da requisição na rota `/user/amigos` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e retorna a resposta da requisição se bem sucedida.
	::

- **post**: arquivos que fazem requisições `POST` para a API.
	::callout
	#summary
	addFriend.ts
	
	#content
	**Adiciona um usuário aos amigos do usuário logado dado o id desse e o id do usuário a ser adicionado de amigo passados como parâmetros na chamada da função**. Passa os mesmo como corpo da requisição na rota `/user/amigos` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e retorna a resposta da requisição se bem sucedida.
	::
		
	::callout
	#summary
	createGroup.ts
	
	#content
	**Cria passando, opcionalmente, o nome, descrição e foto do grupo como parâmetro na chamada da função**. Passa os mesmo como corpo da requisição na rota `/groups` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e obrigatoriamente um parâmetro `proprietarioId`.** proprietarioId recebe o id do usuário logado que deseja criar o grupo. Ao final, retorna os dados da requisição se bem sucedida.
	::
	
	::callout
	#summary
	newFriendGroup.ts
	
	#content
	**Adiciona novos membros a um grupo passando de parâmetros da função o id do grupo e um Array do tipo `FriendsPostProps`**. Passa o id do grupo e o array para o corpo da requisição na rota `/groups/add-members` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e então retorna a resposta da requisição se bem sucedida.
	::
	
	::callout
	#summary
	removeMembersGroup.ts
	
	#content
	**Remove membros ao grupo passando de parâmetros o id do grupo e um Array do tipo `FriendsPostProps`**. Passa o id do grupo como parâmetro e o array para o body da requisição na rota `/groups/remove-members` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e então retorna a resposta da requisição se bem sucedida.
	::
	
	::callout
	#summary
	sendNewGroupMessage.ts
	
	#content
	**Envia uma mensagem em um grupo passando de parâmetros da função um objeto com o id do grupo e a mensagem a ser enviada**. Passa o id do grupo, id do usuário e a mensagem como body da requisição na rota `/group-message` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e então retorna a resposta da requisição se bem sucedida.
	::
	
	::callout
	#summary
	updateMyPassword.ts:
	
	#content
	**Atualiza a senha do usuário dado um objeto com a nova senha do usuário como parâmetro na chamada da função**. Passa a senha no corpo da requisição na rota `/user/update` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e o id do usuário logado como parâmetro da requisição e então retorna uma promise do tipo `User` vindo da resposta da requisição se bem sucedida.
	::

	::callout
	#summary
	updateMyProfileInfo.ts
	
	#content
	**Atualiza os dados do usuário logado dado um objeto com os dados opcionais: avatar, nome e descrição**. Passa os mesmos no body da requisição na rota `/user/update` passando o token do usuário logado como parte do header HTTP `Authentication: Bearer ${token}`, e o id do usuário logado como parâmetro da requisição, e então retorna uma promise do tipo `User` vindo da resposta da requisição se bem sucedida.
	::

	- `api.ts`: arquivo que importa todos os arquivos dentro das pastas irmãs e os exporta.