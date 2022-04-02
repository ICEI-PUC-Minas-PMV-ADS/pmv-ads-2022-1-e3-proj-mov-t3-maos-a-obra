# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>


<ol>
 
 
  Os requisitos para realização dos testes de software são:
   
   ● Aplicativo publicado na Play Store.
 
   ● Conectividade de Internet.

 Os testes funcionais a serem realizados no aplicativo são descritos a seguir.
 
## CASOS DE TESTES SUCESSO: 
<ol>

  | CASO DE TESTE| CT-01 – CADASTRO DE CONTA DO AGENTE EMPREGADOR|
  |--------------|------------------------|
  |REQUISITOS ASSOCIADOS	|RF-001|
  |                                                   |
  |OBJETIVO DO TESTE	| Verificar se o cadastro foi realizado com sucesso e se o redirecionamento ocorreu de forma correta.|
  |      |	1) Acessar o app|
  |PASSOS| 2) Clicar no botão do botão cadastro|
  |      | 3) Visualizar a pagina de login para entrar no app|
  |                                                          |
  |CRITÉRIO DE ÊXITO| ●	O app deve apresentar na página principal o botão Cadastro e após efetivação da conta redirecionar para tela de Login.|

 
|CASO DE TESTE |CT-02 – LOGIN , ALTERAÇÃO E EXCLUSÃO DE CONTA DO AGENTE EMPREGADOR|
|--------------|-------------------------------------|
|REQUISITOS ASSOCIADOS	|RF-002 – RF-003 – RF-004| 
|OBJETIVO DO TESTE|	Verificar se os botões estão posicionados de forma correta e se está ocorrendo o login,alteração e exclusão da conta de forma efetiva.|
|      	|1)	Acessar o app|
|       |2)	Clicar no botão de Login|
|       |3)	Fazer o Login|
|       |4)	Clicar em Meu Perfil|
|Passos |5)	Clicar em Alterar Conta|
|       |6)	Digitar os dados a serem alterados|
|       |7)	Clicar em concluir|
|       |8)	Clicar no botão Excluir Conta|
|       |9)	Clicar em Concluir|
|       |10)	Sair da Conta|
|                 	| ●	Após realização do login o app deve apresentar um menu central com todas as opções para buscar um profissional|
|CRITÉRIO DE ÊXITO	| ●	Após realização do login o app deve apresentar a opção meu perfil com o botão Alterar Conta e redirecionando para tela de alterar os dados. |
|                 	| ●	Após realização do login o site deve apresentar a opção meu perfil com o botão Excluir Conta e redirecionando para tela de excluir os dados. |
 
|CASO DE TESTE |	CT-03 – VISUALIZAÇÃO DOS GRAFICOS DO EMPREGADOR|
|-------------|------------------------------------------------| 
|REQUISITOS ASSOCIADOS|RF-005 |                    
|OBJETIVO DO TESTE    |Verificar se os botões e graficos estão posicionados de forma correta e se as suas funcionalidades estão sendo exibidas|
|	                    |1)	Logar no app|
|Passos               |2)	Clicar no botão relatorios|
|                     |3)	Validar se os graficos estão sendo exibidos|
|CRITÉRIO DE ÊXITO|		●	Após realizar login e clicar no botão relatorios no app, deve validar se esta exibindo na tela o grafico de profissionais.|


|CASO DE TESTE |	CT-04 – CADASTRO DO AGENTE FORNECEDOR|
|-------------|------------------------------------------------| 
|REQUISITOS ASSOCIADOS|RF-001|
|OBJETIVO DO TESTE|	Verificar se os botões estão posicionados de forma correta e se está ocorrendo o login,alteração e exclusão da conta de forma efetiva.|
|      	|1)	Acessar o app|
|       |2)	Clicar no botão de Login|
|       |3)	Fazer o Login|
|       |4)	Clicar em Meu Perfil|
|Passos |5)	Clicar em Alterar Conta|
|       |6)	Digitar os dados a serem alterados|
|       |7)	Clicar em concluir|
|       |8)	Clicar no botão Excluir Cota|
|       |9)	Clicar em Concluir|
|       |10)	Sair da Conta|
|CRITÉRIO DE ÊXITO	| ●	Após realização do login o app deve apresentar um menu central com todas as opções de CRUD para sua conta|
|||
 
|CASO DE TESTE |CT-05 – LOGIN , ALTERAÇÃO E EXCLUSÃO DE CONTA DO FORNECEDOR|
|--------------|-------------------------------------|
|REQUISITOS ASSOCIADOS	|RF-002 – RF-003 – RF-004 - RF-005| 
|OBJETIVO DO TESTE|	Verificar se os botões estão posicionados de forma correta e se está ocorrendo o login,alteração e exclusão da conta de forma efetiva.|
|      	|1)	Acessar o app|
|       |2)	Clicar no botão de Login|
|       |3)	Fazer o Login|
|       |4)	Clicar em Meu Perfil|
|Passos |5)	Clicar em Alterar Conta|
|       |6)	Digitar os dados a serem alterados|
|       |7)	Clicar em concluir|
|       |8)	Clicar no botão Excluir Conta|
|       |9)	Clicar em Concluir|
|       |10)	Sair da Conta|
|                 	| ●	Após realização do login o app deve apresentar um menu central com todas as opções para buscar um profissional|
|CRITÉRIO DE ÊXITO	| ●	Após realização do login o app deve apresentar a opção meu perfil com o botão Alterar Conta e redirecionando para tela de alterar os dados. |
|                 	| ●	Após realização do login o site deve apresentar a opção meu perfil com o botão Excluir Conta e redirecionando para tela de excluir os dados. |


|CASO DE TESTE |	CT-06 – CADASTRO DO SERVIÇO E DADOS AGENTE FORNECEDOR|
|-------------|------------------------------------------------| 
|REQUISITOS ASSOCIADOS|RF-001|
|OBJETIVO DO TESTE|	Verificar se os botões estão posicionados de forma correta e se está ocorrendo o cadastro do serviço e dos dados de forma efetiva.|
|      	|1)	Acessar o app|
|       |2)	Clicar no botão de Login|
|       |3)	Fazer o Login|
|       |4)	Clicar em Meu Serviço|
|Passos |5)	Cadastrar o tipo da prestação de serviço|
|       |6)	Clicar em salvar|
|       |7)	Cadastrar os dados|
|       |8)	Clicar no botão concluir|
|CRITÉRIO DE ÊXITO	| ●	Após realização do cadastro de serviço e dados o app deve redirecionar para tela principal|
|||

|CASO DE TESTE |	CT-07 – VISUALIZAÇÃO DE FEEDBACK DO AGENTE FORNECEDOR|
|-------------|------------------------------------------------| 
|REQUISITOS ASSOCIADOS|RF-001|
|OBJETIVO DO TESTE|	Verificar se os botões estão posicionados de forma correta e se o feedback dos empregadores esta sendo exibido|
|      	|1)	Acessar o app|
|       |2)	Clicar no botão de Login|
|Passos |3)	Fazer o Login|
|       |4)	Visualizar na tela principal o feedback|
|CRITÉRIO DE ÊXITO	| ●	Após realização do cadastro de serviço e dotos o app deve redirecionar para tela principal|
|||
 
 </ol>

 
## CASOS DE TESTE INSUCESSO: CT-01 (RF-001,RF-002)
<ol>
 
 |CASO DE TESTE |	CT-01 – CADASTRO E LOGIN INCORRETOS| 
 |-------------|-----------------------|
 |REQUISITOS ASSOCIADOS	|RF-001-RF-002|
 |OBJETIVO DO TESTE|Verificar se todos os redirecionamento e validação do formulário de cadastro e login estão com validação.|
 |                 |1) Acessar o app|
 |Passos           |2) Clicar no botão de cadastro|
 |                 |3) Digitar vários caracteres especiais|
 |                 |4) Clicar em cadastrar|
 |                  	| ●	Clicar no botão cadastro e digitar caracteres especiais e validar se ocorre o redirecionamento para tela cadastro|
 |Critérios de Êxito	| ●	Clicar no botão login e digitar caracteres especiais e validar se ocorre o redirecionamento para tela cadastro|
 


  </ol>
 </ol>

