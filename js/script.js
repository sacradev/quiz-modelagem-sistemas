const app = {
    questions: [
        // QUESTÕES 01-18 (BASE ORIGINAL)
        {id:1,subject:"Requisito Funcional",question:"Em uma plataforma de extração de petróleo, o sistema deve interromper automaticamente o fluxo de extração caso a pressão nos dutos ultrapasse o limite de segurança de 3000 psi. Essa especificação é classificada como:",options:["Um Requisito Não Funcional de Usabilidade.","Uma Regra de Negócio apenas.","Um Requisito Não Funcional de Disponibilidade.","Um Requisito Funcional."],correct:3,explanation:"A capacidade de interromper fluxo é um Requisito Funcional. O limite de 3000 psi é a Regra de Negócio que define quando isso deve acontecer."},
        {id:2,subject:"Requisito Não Funcional",question:"Um sistema de monitoramento ambiental submarino deve ser capaz de operar continuamente por 5 anos sem manutenção física, apresentando uma taxa de falha inferior a 0,01%. Esta definição refere-se a:",options:["Um Requisito Funcional de Monitoramento.","Uma Restrição de Design.","Um Caso de Uso de Manutenção.","Um Requisito Não Funcional de Confiabilidade (Reliability)."],correct:3,explanation:"RNF de Confiabilidade define taxa de falha esperada (0,01%) e ciclo de vida sem intervenção (5 anos)."},
        {id:3,subject:"Requisito Funcional",question:"No software de uma sonda de perfuração, o requisito que estabelece que 'O sistema deve permitir que o engenheiro de petróleo visualize o gráfico de densidade de lama em tempo real' é:",options:["Um Requisito Não Funcional de Desempenho.","Uma Regra de Negócio Jurídica.","Uma Generalização de Ator.","Um Requisito Funcional."],correct:3,explanation:"RF descreve capacidade de visualizar dados. A métrica 'tempo real' é RNF de Desempenho."},
        {id:4,subject:"Requisito Não Funcional",question:"Em um cenário de conflito militar, o sistema de radar deve identificar e classificar alvos em menos de 0,5 segundos após a detecção do sinal. Este é um exemplo de:",options:["Um Requisito Funcional de Identificação.","Um Requisito de Segurança (Safety).","Um Caso de Uso 'Classificar Alvo'.","Um Requisito Não Funcional de Desempenho."],correct:3,explanation:"RNF de Desempenho: tempo máximo (0,5s) para executar funcionalidade crítica."},
        {id:5,subject:"Requisito Não Funcional",question:"Para garantir a integridade em operações militares, 'O sistema de comunicações táticas deve utilizar criptografia de nível AES-256 para todas as transmissões de rádio'. Esta afirmação é:",options:["Um Requisito Funcional.","Um Requisito de Portabilidade.","Uma Extensão de Caso de Uso.","Um Requisito Não Funcional de Segurança (Security)."],correct:3,explanation:"RNF de Segurança especifica mecanismo criptográfico (AES-256) obrigatório."},
        {id:6,subject:"Requisito Funcional",question:"Em um sistema de comando e controle, o requisito 'O Comandante deve ser capaz de autorizar o disparo de mísseis apenas após a dupla autenticação biométrica' descreve:",options:["Apenas um Requisito Não Funcional de Usabilidade.","Um Relacionamento de Inclusão (Include).","Um Requisito de Manutenibilidade.","Um Requisito Funcional com restrição de segurança."],correct:3,explanation:"RF (autorizar disparo) com Regra de Negócio de Segurança (dupla autenticação obrigatória)."},
        {id:7,subject:"Regra de Negócio",question:"A norma regulamentadora estabelece que 'Nenhum funcionário pode embarcar na plataforma sem o certificado de curso de salvatagem (CBSP) em dia'. Ao modelar o sistema de controle de acesso, o analista define que o software deve bloquear o check-in caso a data de validade do certificado seja anterior à data atual. O bloqueio feito pelo software é:",options:["Uma Regra de Negócio.","Um Requisito Funcional.","Um Requisito Não Funcional de Segurança.","Um Ator Secundário."],correct:0,explanation:"Regra de Negócio: restrição legal/normativa que o software enforça como validação de RF."},
        {id:8,subject:"Requisito Não Funcional",question:"'O sistema de controle da cabeça do poço deve ser capaz de processar dados de sensores mesmo sob condições de interferência eletromagnética extrema, mantendo a integridade dos pacotes de dados.' Este é um RNF de:",options:["Usabilidade.","Portabilidade.","Manutenibilidade.","Confiabilidade/Robustez."],correct:3,explanation:"RNF de Robustez: continuar funcionando sob condições adversas mantendo integridade."},
        {id:9,subject:"Diagrama de Casos de Uso",question:"No diagrama de casos de uso de um sistema de geofísica, o caso de uso 'Gerar Mapa 3D do Solo' sempre exige que o sistema execute antes o 'Processar Dados Sísmicos Brutos'. Qual o relacionamento correto?",options:["Extensão (Extend) de Gerar Mapa para Processar Dados.","Inclusão (Include) de Gerar Mapa para Processar Dados.","Generalização de Gerar Mapa para Processar Dados.","Associação Simples."],correct:1,explanation:"Include: funcionalidade obrigatória que deve ser executada antes/durante. Processar é pré-requisito de Gerar."},
        {id:10,subject:"Requisito Não Funcional",question:"'O sistema de coordenação de artilharia deve estar disponível 99,999% do tempo (High Availability), garantindo que não haja interrupção durante o combate.' Isso caracteriza um:",options:["Requisito Funcional de Disparo.","Um Requisito Não Funcional de Disponibilidade.","Uma Regra de Negócio de Combate.","Um Requisito de Interface."],correct:1,explanation:"RNF de Disponibilidade: 99,999% (Five Nines) = máximo 26 segundos de indisponibilidade/ano."},
        {id:11,subject:"Diagrama de Casos de Uso",question:"Em um sistema de simulação de voo para treinamento, o 'Simulador de Clima Externo' (um software de terceiros que envia dados de vento e chuva) seria modelado no Diagrama de Casos de Uso como:",options:["Um Caso de Uso.","Um Ator Primário.","Um Ator Secundário (Sistema Externo).","Um Relacionamento de Extensão."],correct:2,explanation:"Sistemas externos são Atores Secundários. Não são casos de uso internos do sistema alvo."},
        {id:12,subject:"Requisito Não Funcional",question:"'O software de criptografia de mensagens táticas deve ser capaz de rodar tanto em sistemas operacionais Android (tablets de campo) quanto em Windows (central de comando)'. Este é um RNF de:",options:["Eficiência.","Segurança.","Requisito Funcional.","Portabilidade."],correct:3,explanation:"RNF de Portabilidade: independência de sistema operacional específico."},
        {id:13,subject:"Diagrama de Casos de Uso",question:"Qual elemento do Diagrama de Casos de Uso representa uma unidade de funcionalidade coerente realizada pelo sistema?",options:["A Linha de Associação.","O Ator.","O Retângulo (Fronteira do Sistema).","A Elipse (Caso de Uso)."],correct:3,explanation:"Elipse = Caso de Uso. Representa funcionalidade específica que o sistema oferece."},
        {id:14,subject:"Diagrama de Casos de Uso",question:"O relacionamento de Extensão (Extend) é utilizado quando:",options:["Uma funcionalidade é obrigatória.","Um ator precisa se comunicar com outro ator.","Queremos criar uma cópia de uma classe.","Uma funcionalidade é opcional ou ocorre apenas em condições específicas."],correct:3,explanation:"Extend: funcionalidade opcional que ocorre sob certas condições. Diferente de Include (obrigatório)."},
        {id:15,subject:"Requisito Não Funcional",question:"'O sistema de radar deve permitir que um operador treinado identifique a trajetória de um projétil com no máximo 3 cliques no console.' Este é um RNF de:",options:["Desempenho.","Confiabilidade.","Usabilidade.","Segurança."],correct:2,explanation:"RNF de Usabilidade: facilidade de uso (apenas 3 cliques) e ergonomia para operador."},
        {id:16,subject:"Diagrama de Classes",question:"No Diagrama de Classes, como chamamos as características de um objeto (como calibre de uma arma ou profundidade de um poço)?",options:["Métodos.","Operações.","Associações.","Atributos."],correct:3,explanation:"Atributos = dados/propriedades que descrevem estado de um objeto."},
        {id:17,subject:"Diagrama de Casos de Uso",question:"Se temos um ator 'Militar' e dele derivam os atores 'Soldado' e 'Sargento', que herdam suas permissões básicas, usamos:",options:["Inclusão.","Extensão.","Associação.","Generalização."],correct:3,explanation:"Generalização (herança de Ator): pai (Militar) define comportamento comum, filhos (Soldado/Sargento) especializam."},
        {id:18,subject:"Requisito Não Funcional",question:"'O código fonte do sistema de sonar deve ser documentado seguindo o padrão ISO/IEC para facilitar futuras atualizações por outras equipes.' Este é um RNF de:",options:["Interoperabilidade.","Funcionalidade.","Disponibilidade.","Manutenibilidade."],correct:3,explanation:"RNF de Manutenibilidade: documentação padronizada facilita compreensão e modificação futura."},

        // QUESTÕES 19-80 (COMPLEMENTARES)
        {id:19,subject:"Requisito Funcional",question:"'O sistema deve enviar a localização GPS do soldado a cada 10 segundos para a base.' e 'A transmissão dos dados não deve consumir mais que 5% da bateria do rádio em 24h.' São, respectivamente:",options:["Regra de Negócio e RF.","RNF de Desempenho e RF.","RF e RNF de Eficiência (Recursos).","RNF de Segurança e RNF de Usabilidade."],correct:2,explanation:"Primeira: RF (enviar GPS). Segunda: RNF de Eficiência (limitação de consumo de bateria)."},
        {id:20,subject:"Requisito Não Funcional",question:"Qual técnica é frequentemente utilizada para elicitar requisitos em ambientes de alto risco (ex: sala de controle de usina nuclear), onde observar os usuários trabalhando é crucial?",options:["Questionários online de múltipla escolha.","Prototipagem de Baixa Fidelidade.","Análise de Código Fonte.","Etnografia / Observação In Loco."],correct:3,explanation:"Etnografia: observar usuários em seu ambiente natural para compreender necessidades reais e contexto."},
        {id:21,subject:"Diagrama de Casos de Uso",question:"O que representa um 'Ponto de Extensão' (Extension Point) durante o relacionamento <<extend>>?",options:["No Ator que inicia a extensão.","Em nenhum, Extension Point é exclusivo do <<include>>.","No Caso de Uso Estendido (o caso de uso Base).","No Caso de Uso que estende (o caso opcional)."],correct:2,explanation:"Extension Point é declarado no caso BASE para indicar onde a extensão pode ocorrer."},
        {id:22,subject:"Diagrama de Casos de Uso",question:"Um diagrama de casos de uso com 50 elipses no mesmo desenho é considerado uma boa prática de modelagem?",options:["Sim, quanto mais detalhes no mesmo diagrama, melhor a compreensão.","Sim, pois a UML obriga que todo o sistema caiba em uma única folha.","Não, pois o limite máximo da UML é de 10 casos de uso.","Não. O diagrama ficará poluído e ilegível. Deve-se agrupar em pacotes ou dividir em diagramas menores por módulo."],correct:3,explanation:"Legibilidade: máximo 15-20 CU por diagrama. Usar Pacotes para organizar por domínio."},
        {id:23,subject:"Diagrama de Casos de Uso",question:"O Caso de Uso 'Imprimir Comprovante' é chamado opcionalmente ao final de 'Realizar Saque'. A direção da seta de <<extend>> é:",options:["De 'Realizar Saque' para 'Imprimir Comprovante'.","De 'Realizar Saque' para o Ator.","Bidirecional.","De 'Imprimir Comprovante' para 'Realizar Saque'."],correct:3,explanation:"Extend: seta sai do caso opcional (Imprimir) e aponta para caso base (Realizar Saque)."},
        {id:24,subject:"Diagrama de Casos de Uso",question:"Um 'Ator de Tempo' (Time Actor) é usado frequentemente em diagramas de caso de uso para:",options:["Representar usuários muito rápidos.","Medir o desempenho do sistema.","Ocultar atrasos de rede.","Acionar casos de uso que ocorrem periodicamente ou agendados (ex: 'Gerar Backup à Meia-noite')."],correct:3,explanation:"Time Actor: representa eventos periódicos ou baseados em tempo que disparam casos de uso."},
        {id:25,subject:"Diagrama de Casos de Uso",question:"Qual o papel do 'Cenário' (ou Especificação de Caso de Uso)?",options:["É a cor de fundo escolhida para o diagrama.","É o código SQL gerado automaticamente.","É a etapa onde o hardware é montado.","É a documentação textual passo a passo (fluxo principal, alternativos e de exceção) de uma elipse do diagrama."],correct:3,explanation:"Especificação textual descreve detalhadamente como o caso de uso é executado."},
        {id:26,subject:"Diagrama de Casos de Uso",question:"No fluxo de um Caso de Uso de 'Login', o fato do usuário errar a senha e o sistema exibir 'Senha Incorreta' faz parte do:",options:["Fluxo Principal (Caminho Feliz).","Pré-condição.","Pós-condição.","Fluxo Alternativo ou de Exceção."],correct:3,explanation:"Fluxo de Exceção: cenários onde o caso de uso não atinge sucesso (erro, cancelamento, etc)."},
        {id:27,subject:"Diagrama de Classes",question:"O que representa um Método (ou Operação) em uma Classe?",options:["O estado atual da classe.","O relacionamento com o banco de dados.","O ator que acessa a classe.","O comportamento, ações ou funções que a classe pode realizar."],correct:3,explanation:"Método: bloco de código que implementa um comportamento específico da classe."},
        {id:28,subject:"Diagrama de Classes",question:"O símbolo de menos (-) antes do nome de um atributo em um diagrama de classes UML significa que a visibilidade deste atributo é:",options:["Pública (Public).","Protegida (Protected).","Estática (Static).","Privada (Private)."],correct:3,explanation:"- (minus) = private. Acessível apenas dentro da própria classe."},
        {id:29,subject:"Diagrama de Classes",question:"Qual símbolo de visibilidade permite que um atributo seja acessado apenas pela própria classe e por suas subclasses (herança)?",options:["+ (Mais)","- (Menos)","~ (Til)","# (Cerquilha/Sustenido)"],correct:3,explanation:"# (hash) = protected. Acessível por classe e subclasses."},
        {id:30,subject:"Diagrama de Classes",question:"Qual a diferença entre Agregação e Composição?",options:["Na agregação a parte depende inteiramente do todo (losango preenchido); na composição são independentes.","Ambas usam o losango vazio, mas a composição é exclusiva para banco de dados.","Agregação é o relacionamento de herança, Composição é multiplicidade.","Na composição (losango preenchido), se o 'Todo' for destruído, a 'Parte' também é destruída. Na agregação (losango vazio), a 'Parte' pode existir sem o 'Todo'."],correct:3,explanation:"Composição: dependência de ciclo de vida. Agregação: independência parcial."},
        {id:31,subject:"Diagrama de Classes",question:"Ao modelar um sistema automotivo, a relação entre 'Carro' e 'Motor' é mais bem modelada por:",options:["Uma Generalização, pois Motor herda de Carro.","Uma Dependência simples.","Atores.","Uma Composição, pois um motor isolado não faz sentido no domínio do sistema."],correct:3,explanation:"Composição: Motor sem Carro não tem significado. Ciclo de vida acoplado."},
        {id:32,subject:"Diagrama de Classes",question:"E a relação entre 'Equipe de Programadores' e 'Programador'?",options:["Composição (losango preenchido).","Herança.","Inclusão.","Agregação (losango vazio), pois o programador continua existindo mesmo que a equipe seja desfeita."],correct:3,explanation:"Agregação: Programador existe independente da Equipe. Pode mudar de equipe."},
        {id:33,subject:"Diagrama de Classes",question:"No relacionamento entre 'Pedido' e 'Item de Pedido', se a multiplicidade do lado de Item for 1..*, isso significa:",options:["Um pedido pode ter zero ou muitos itens.","Um pedido só pode ter no máximo 1 item.","Apenas um pedido pode existir no banco.","Um pedido deve ter pelo menos um item, não havendo limite máximo."],correct:3,explanation:"1..* (um a muitos): mínimo 1, máximo ilimitado."},
        {id:34,subject:"Diagrama de Classes",question:"A multiplicidade 0..1 indica:",options:["Exatamente um.","Infinito.","Erro de sintaxe UML.","Opcional: pode não existir (zero) ou existir no máximo um."],correct:3,explanation:"0..1: zero ou um. Indica relacionamento opcional com cardinalidade máxima 1."},
        {id:35,subject:"Diagrama de Classes",question:"Na herança (Generalização) do Diagrama de Classes, a classe 'Aeronave' é pai das classes 'Helicóptero' e 'Avião'. Como a seta é desenhada?",options:["Linha contínua com uma seta aberta apontando de Aeronave para os filhos.","Linha tracejada apontando para os filhos.","Um losango preenchido em Aeronave.","Linha contínua com um triângulo vazio apontando dos filhos (Helicóptero/Avião) para a classe pai (Aeronave)."],correct:3,explanation:"Herança: seta (triângulo vazio) aponta do filho para o pai. Sentido: especialização para generalização."},
        {id:36,subject:"Diagrama de Classes",question:"Uma Classe Abstrata (normalmente escrita em itálico na UML) caracteriza-se por:",options:["Não possuir atributos.","Não poder ser instanciada diretamente em objetos, servindo apenas de base para outras classes herdarem.","Ter visibilidade global obrigatória.","Ser usada apenas em Casos de Uso."],correct:1,explanation:"Classe abstrata: não pode ser instanciada. Apenas subclasses concretas podem ter objetos."},
        {id:37,subject:"Diagrama de Classes",question:"Em Orientação a Objetos, o princípio de manter os atributos privados e fornecer métodos públicos (getters/setters) para acessá-los é chamado de:",options:["Polimorfismo.","Encapsulamento.","Herança Múltipla.","Sobrecarga."],correct:1,explanation:"Encapsulamento: esconder detalhes internos, expor apenas interface necessária."},
        {id:38,subject:"Diagrama de Classes",question:"Qual o diagrama UML estrutural que mostra os objetos e seus relacionamentos estáticos do sistema?",options:["Diagrama de Sequência.","Diagrama de Casos de Uso.","Diagrama de Atividades.","Diagrama de Classes."],correct:3,explanation:"Diagrama de Classes: representa estrutura estática das classes e seus relacionamentos."},
        {id:39,subject:"Diagrama de Classes",question:"'Polimorfismo' num Diagrama de Classes reflete-se quando:",options:["Uma classe possui muitos atributos.","O losango da composição é preto.","Uma classe herda de si mesma.","Subclasses diferentes (como Gato e Cachorro) implementam de formas distintas um mesmo método herdado da superclasse (como emitirSom())."],correct:3,explanation:"Polimorfismo: mesma interface, múltiplas implementações (uma por subclasse)."},
        {id:40,subject:"Diagrama de Classes",question:"O que é uma Classe de Associação?",options:["Uma classe usada para conectar atores.","Apenas um comentário no diagrama.","Uma classe que nasce de um relacionamento (associação) entre duas outras classes, guardando atributos dessa própria relação (ex: a data em que um Aluno se matriculou em um Curso).","Uma classe abstrata sem atributos."],correct:2,explanation:"Classe de Associação: dados que pertencem à relação, não às classes individuais."},
        {id:41,subject:"Diagrama de Classes",question:"Em uma relação muitos-para-muitos (* para *) entre 'Médico' e 'Paciente', qual estratégia de modelagem frequentemente surge para guardar o detalhe da 'Consulta'?",options:["Usar Herança entre eles.","Colocar todos os atributos do médico no paciente.","Usar Agregação.","Criar uma Classe de Associação (Consulta)."],correct:3,explanation:"M:N com dados da relação = Classe de Associação. Exemplo: Consulta(data, diagnóstico, etc)."},
        {id:42,subject:"Diagrama de Classes",question:"No modelo conceitual, a diferença entre Objeto e Classe é:",options:["Objeto é a planta baixa, Classe é a casa construída.","Não há diferença, são sinônimos perfeitos na UML.","Objetos só existem em banco de dados relacional.","Classe é a estrutura ou molde (abstrato), Objeto é a instância materializada na memória."],correct:3,explanation:"Classe: template/blueprint. Objeto: instância específica de uma classe."},
        {id:43,subject:"Diagrama de Classes",question:"Uma 'Interface' na modelagem de classes UML:",options:["Define apenas as telas do sistema web.","Contém obrigatoriamente métodos privados.","É um sinônimo de Agregação.","É um contrato que define um conjunto de métodos que uma classe deve implementar, sem fornecer o código fonte deles (representada com <<interface>>)."],correct:3,explanation:"Interface: especifica o 'quê' (assinatura) sem o 'como' (implementação)."},
        {id:44,subject:"Diagrama de Classes",question:"A relação de 'Realização' de uma Interface por uma Classe é representada na UML por:",options:["Linha contínua e losango.","Seta tracejada com triângulo vazio (semelhante à herança, mas tracejada).","Linha contínua com seta aberta.","Elipse tracejada."],correct:1,explanation:"Realização (tracejado): classe concorda em implementar todos os métodos da interface."},
        {id:45,subject:"Diagrama de Classes",question:"Dois métodos na mesma classe com o mesmo nome, mas recebendo parâmetros diferentes (ex: calcularDano(int basico) e calcularDano(int basico, float multiplicador)). Trata-se de:",options:["Encapsulamento restrito.","Sobrecarga de método (Overload).","Herança de parâmetros.","Sobrescrita (Override)."],correct:1,explanation:"Sobrecarga: mesmo método, diferentes assinaturas (parâmetros)."},
        {id:46,subject:"Requisito Funcional",question:"Um sistema de cadastro de usuários deve impedir que o campo 'E-mail' seja deixado em branco e deve validar o formato (ex: user@domain.com) antes de salvar. Trata-se de:",options:["Uma Regra de Negócio de usuários.","Um Diagrama de Atividades.","Validação de campos obrigatórios e formato.","Um Diagrama de Classes."],correct:2,explanation:"RF de Validação: garante integridade básica dos dados inseridos."},
        {id:47,subject:"Requisito Funcional",question:"Um sistema de compras online deve validar que a quantidade de um item em estoque nunca seja negativa durante um pedido. Se o cliente tentar comprar mais do que disponível, o sistema bloqueia a transação. É um RF de:",options:["Uma Regra de Negócio de Legislação Trabalhista.","Requisito de Segurança criptográfica.","RNF de Disponibilidade.","Validação de Integridade Referencial e Negócio."],correct:3,explanation:"RF que enforça Regra de Negócio: estoque nunca negativo."},
        {id:48,subject:"Requisito Funcional",question:"Um sistema de pagamento deve rejeitar qualquer transação onde o CPF do cliente não corresponda ao CPF registrado na conta. Trata-se de:",options:["Apenas Regra de Negócio de Segurança.","Apenas uma validação técnica (RF).","RNF de Conformidade regulatória.","Validação de Integridade de dados + Regra de Negócio de Segurança."],correct:3,explanation:"Envolve validação (RF) que enforça RN de conformidade financeira."},
        {id:49,subject:"Requisito Funcional",question:"Um sistema de reservas de hotel deve impedir que a data de checkout seja anterior à data de check-in. Quando o usuário tenta, um alerta aparece. Qual RF se aplica?",options:["Requisito de Interface gráfica.","Requisito Funcional de Atualização de dados.","RNF de Desempenho.","Validação de Lógica de Datas (Constraints)."],correct:3,explanation:"Validar relacionamentos entre datas é RF de Validação de Constraints."},
        {id:50,subject:"Requisito Funcional",question:"Um sistema de admissão em universidade deve validar que o arquivo de histórico escolar enviado seja um PDF ou imagem (JPG/PNG) e não ultrapasse 5MB. Trata-se de:",options:["Uma Regra de Negócio da universidade.","RNF de Portabilidade.","RNF de Conformidade LGPD.","Validação de tipo e tamanho de arquivo."],correct:3,explanation:"RF de Validação que garante compatibilidade e segurança de uploads."},
        {id:51,subject:"Requisito Funcional",question:"Um sistema de folha de pagamento deve validar que a soma de horas trabalhadas por dia não ultrapasse 12 horas (limite legal). Se exceder, bloqueia a entrada. Qual RF?",options:["Uma Regra de Negócio de Legislação Trabalhista.","RNF de Conformidade.","Validação de limite legal com bloqueio.","Todas as anteriores"],correct:3,explanation:"RF de validação baseada em RN regulatória com impacto em RNF de Compliance."},
        {id:52,subject:"Requisito Funcional",question:"Um sistema de gerenciamento de medicamentos deve impedir que um medicamento seja prescrito se sua data de validade for anterior à data atual. Trata-se de:",options:["Apenas um RNF de Confiabilidade.","Validação de Datas (Expiração).","RNF de Segurança (Safety) médica.","Validação de Datas + Requisito de Segurança (Safety)."],correct:3,explanation:"RF de validação crítica para RNF de Safety (proteção do paciente)."},
        {id:53,subject:"Requisito Funcional",question:"Um sistema bancário deve validar que um número de cartão de crédito siga o algoritmo de Luhn antes de processar a transação. Qual RF?",options:["Criptografia AES-256.","RNF de Disponibilidade.","Validação de formato e integridade de dados financeiros.","Diagrama de Classes."],correct:2,explanation:"Validação com algoritmo específico = RF que previne erros e fraudes."},
        {id:54,subject:"Requisito Não Funcional",question:"Um sistema de busca de e-commerce deve retornar resultados de uma consulta em menos de 2 segundos, mesmo com 10 milhões de produtos no catálogo. Qual RNF?",options:["Confiabilidade de dados.","Disponibilidade do servidor.","Portabilidade de plataforma.","Desempenho / Responsividade"],correct:3,explanation:"RNF de Desempenho: limite de tempo de resposta (latência)."},
        {id:55,subject:"Requisito Não Funcional",question:"Um sistema de processamento de imagens deve processar e armazenar 1.000 imagens por segundo sem degradação de qualidade ou atraso. Trata-se de RNF de:",options:["Segurança de armazenamento.","Usabilidade da interface.","Manutenibilidade do código.","Throughput (vazão de processamento)."],correct:3,explanation:"Throughput: quantas operações o sistema realiza por unidade de tempo."},
        {id:56,subject:"Requisito Não Funcional",question:"Um jogo online multiplayer deve garantir latência máxima de 50ms entre o cliente e servidor para que o gameplay seja responsivo. Qual RNF?",options:["Desempenho geral.","Ambas A e B","Latência / Tempo de Resposta","Apenas Diagrama de Sequência."],correct:2,explanation:"Latência: aspecto específico de Desempenho crítico em aplicações interativas."},
        {id:57,subject:"Requisito Não Funcional",question:"Um banco de dados de saúde com 100 TB de prontuários deve retornar uma busca por paciente em menos de 500ms, mesmo com 50 milhões de registros. Qual RNF?",options:["Confiabilidade de resultado.","RNF de Escalabilidade.","Desempenho com grande volume de dados (Big Data).","Ambas B e C"],correct:3,explanation:"Combina Desempenho + Escalabilidade de dados."},
        {id:58,subject:"Requisito Não Funcional",question:"Um servidor web deve ser capaz de servir 10.000 requisições simultâneas mantendo tempo de resposta abaixo de 1 segundo. Qual RNF?",options:["Disponibilidade 99.9%.","Segurança de acesso.","Usabilidade do cliente.","Desempenho sob carga concorrente."],correct:3,explanation:"RNF de Desempenho sob múltiplas requisições simultâneas."},
        {id:59,subject:"Requisito Não Funcional",question:"Um sistema de BI deve atualizar seus painéis (dashboards) com dados frescos a cada 5 minutos para que análises sejam em tempo real aproximado. Trata-se de RNF de:",options:["Precisão de dados.","Acessibilidade visual.","Manutenibilidade de queries.","Desempenho / Atualização (Refresh Rate)."],correct:3,explanation:"RNF de Desempenho: frequência mínima de atualização."},
        {id:60,subject:"Requisito Não Funcional",question:"Um aplicativo de navegação (GPS) deve calcular a rota ideal em menos de 3 segundos e atualizar a posição em tempo real (a cada 1 segundo). Qual RNF?",options:["Confiabilidade do GPS.","Desempenho de cálculo + Latência de atualização.","Ambas A e B","Apenas Portabilidade mobile."],correct:2,explanation:"Combina Desempenho (cálculo) + Latência (atualização real-time)."},
        {id:61,subject:"Requisito Não Funcional",question:"Um sistema de streaming de vídeo deve iniciar reprodução em menos de 5 segundos (bufferização inicial), mesmo com conexão 4G. Qual RNF?",options:["Escalabilidade de usuários.","Compressão de vídeo.","RNF de Usabilidade.","Desempenho / Startup Time"],correct:3,explanation:"RNF de Desempenho: tempo máximo até início da reprodução."},
        {id:62,subject:"Requisito Não Funcional",question:"Um sistema de automação industrial deve funcionar continuamente com taxa de falha máxima de 1 erro a cada 100.000 operações. Qual RNF?",options:["Disponibilidade 24/7.","Segurança criptográfica.","Usabilidade da interface.","Confiabilidade (Reliability) / Taxa de Falha"],correct:3,explanation:"RNF de Confiabilidade: taxa de falha aceitável. Frequentemente MTBF."},
        {id:63,subject:"Requisito Não Funcional",question:"Um sistema de monitoramento ambiental submarino deve operar por 5 anos contínuos sem manutenção física, com confiabilidade mínima de 99.99%. Trata-se de RNF de:",options:["Disponibilidade de acesso.","Portabilidade subaquática.","Regra de Negócio ambiental.","Confiabilidade a longo prazo."],correct:3,explanation:"RNF de Confiabilidade no contexto de ciclo de vida longo."},
        {id:64,subject:"Requisito Não Funcional",question:"Um sistema de controle de tráfego aéreo (ATCS) deve detectar e alertar sobre potencial colisão com confiabilidade de 99.999% (Five Nines). Qual RNF?",options:["RNF de Disponibilidade.","RNF de Desempenho.","Ambas A e B","Confiabilidade crítica de segurança."],correct:3,explanation:"RNF de Confiabilidade extrema em contexto de Safety (segurança de vida)."},
        {id:65,subject:"Requisito Não Funcional",question:"Um sistema de backup de dados críticos deve recuperar 100% dos dados em caso de falha, sem corrupção ou perda. Qual RNF?",options:["Disponibilidade de backups.","Confiabilidade com Integridade de dados.","Ambas A e B","Apenas RNF de Armazenamento."],correct:2,explanation:"Envolve Confiabilidade (taxa de falha baixa) + Recuperação sem perda."},
        {id:66,subject:"Requisito Não Funcional",question:"Um sistema de pacemaker cardíaco implantado deve funcionar com confiabilidade mínima de 99.9999% (Six Nines) durante toda vida útil do dispositivo. Trata-se de RNF de:",options:["RNF de Durabilidade.","Confiabilidade crítica para saúde (Safety).","Ambas A e B","Apenas RNF de Portabilidade."],correct:2,explanation:"Combina Confiabilidade extrema + Durabilidade em contexto médico crítico."},
        {id:67,subject:"Requisito Não Funcional",question:"Um sistema deve ser robusto o suficiente para continuar funcionando mesmo quando recebe dados malformados ou injetados de SQL, sem travar ou expor vulnerabilidades. Qual RNF?",options:["Robustez / Tolerância a erros e ataques.","Segurança defensiva.","Ambas A e B","Apenas Validação de entrada."],correct:2,explanation:"Combina Confiabilidade (robustez) + Segurança (defesa)."},
        {id:68,subject:"Requisito Não Funcional",question:"Um sistema de comunicações militares deve utilizar criptografia AES-256 em todas as transmissões de rádio para impedir intercepção. Qual RNF?",options:["Requisito Funcional de Comunicação.","Confiabilidade de sinal.","Segurança (Security) / Criptografia","Portabilidade de dispositivo."],correct:2,explanation:"RNF de Segurança: especifica mecanismo criptográfico (AES-256)."},
        {id:69,subject:"Requisito Não Funcional",question:"Um banco suíço define que 'O log de transações financeiras não pode ser alterado ou excluído por nenhum usuário, incluindo administradores', usando hash criptográfico. Trata-se de RNF de:",options:["Confiabilidade de operação.","Segurança (Integridade e Auditoria).","Ambas A e B","Apenas Regra de Negócio."],correct:2,explanation:"Combina Segurança (Integridade com hash) + Confiabilidade (Auditoria)."},
        {id:70,subject:"Requisito Não Funcional",question:"Um sistema de health records deve implementar autenticação multi-fator (MFA) com 2FA (SMS+Fingerprint) para acesso de médicos. Qual RNF?",options:["Usabilidade de acesso.","Segurança (Autenticação Multi-fator).","Ambas A e B","Apenas RNF de Disponibilidade."],correct:2,explanation:"RNF de Segurança (autenticação forte) + Usabilidade (MFA não muito intrusiva)."},
        {id:71,subject:"Requisito Não Funcional",question:"Um aplicativo bancário deve ofuscar a senha digitada na tela (mostrar asteriscos) e nunca armazená-la em memória após logout. Qual RNF?",options:["Usabilidade de interface.","Segurança (Proteção de credenciais).","Ambas A e B","Apenas RNF de Desempenho."],correct:2,explanation:"Combina Segurança (proteção) + Usabilidade (feedback visual)."},
        {id:72,subject:"Regra de Negócio",question:"Em um sistema de concessão de crédito, a política estabelece que 'Nenhum crédito pode ser aprovado se o score do cliente for inferior a 500 pontos'. Ao modelar o sistema, essa restrição deve ser tratada como:",options:["Um Requisito Não Funcional de Segurança.","Uma Regra de Negócio que o software deve enforçar.","Um atributo privado de uma Classe.","Um Requisito Funcional de Validação no software."],correct:1,explanation:"Regra de Negócio: política organizacional que o software enforça como lógica funcional."},
        {id:73,subject:"Regra de Negócio",question:"Uma loja define a seguinte política de vendas: 'Compras acima de R$1.000 recebem 10% de desconto; acima de R$5.000 recebem 20% de desconto; acima de R$10.000 recebem 25% de desconto'. Implementar essa escala de descontos no sistema reflete:",options:["Uma Classe de Desconto no Diagrama de Classes.","Apenas um Requisito Funcional isolado de cálculo.","Uma Regra de Negócio de Precificação e Promoção.","Um Requisito Não Funcional de Desempenho."],correct:2,explanation:"Regra de Negócio: como empresa precifica/promove produtos. Software implementará em cálculo de preço."},
        {id:74,subject:"Requisito Não Funcional",question:"Uma interface de painel do piloto automático deve possuir esquema de cores otimizado para visão noturna (Night Vision Goggles), com contraste mínimo 4.5:1. Qual RNF?",options:["Portabilidade de equipamento.","RNF de Desempenho.","Usabilidade / Ergonomia Visual","Regra de Negócio da aviação."],correct:2,explanation:"RNF de Usabilidade adaptada a contexto específico de uso."},
        {id:75,subject:"Requisito Não Funcional",question:"Um sistema hospitalar deve permitir que uma enfermeira com luvas cirúrgicas interaja com a tela sensível ao toque, sem risco de erros acidentais. Qual RNF?",options:["Confiabilidade do sensor.","Usabilidade / Ergonomia para contexto médico.","Ambas A e B","Apenas RNF de Segurança."],correct:2,explanation:"RNF de Usabilidade + RNF de Confiabilidade (sem falsos toques)."},
        {id:76,subject:"Requisito Não Funcional",question:"Um aplicativo deve ter curva de aprendizado máxima de 10 minutos para um usuário novo sem treinamento executar uma tarefa padrão. Qual RNF?",options:["Acessibilidade visual.","RNF de Desempenho.","Usabilidade / Facilidade de aprendizado","Apenas Regra de Negócio."],correct:2,explanation:"RNF de Usabilidade: mede intuitibilidade e facilidade de aprendizado."},
        {id:77,subject:"Requisito Não Funcional",question:"Um portal web deve estar em conformidade com WCAG 2.1 nível AA, incluindo: contraste de cores, texto alternativo em imagens, e navegação por teclado. Qual RNF?",options:["Conformidade regulatória (ADA/AODA).","Usabilidade / Acessibilidade para usuários com deficiência.","Ambas A e B","Apenas RNF de Segurança."],correct:2,explanation:"RNF de Usabilidade (Acessibilidade) + RNF de Conformidade legal."},
        {id:78,subject:"Requisito Não Funcional",question:"Um sistema de banco de dados executivo deve exibir relatórios com vocabulário do negócio (termos de domínio), não jargão técnico, para facilitar compreensão por executivos. Qual RNF?",options:["RNF de Manutenibilidade.","RNF de Desempenho.","Usabilidade / Linguagem apropriada ao usuário","Apenas Caso de Uso."],correct:2,explanation:"RNF de Usabilidade que adapta terminologia ao perfil do usuário."},
        {id:79,subject:"Requisito Não Funcional",question:"Um app de redes sociais deve responder aos gestos do usuário (swipe, pinch-zoom, double-tap) em menos de 100ms para sentir natural e responsivo. Qual RNF?",options:["Apenas Desempenho geral.","Apenas Portabilidade mobile.","Usabilidade / Responsividade táctil + RNF de Desempenho","Regra de Negócio do app."],correct:2,explanation:"Combina Usabilidade (sensação de responsividade) + Desempenho (latência)."},
        {id:80,subject:"Requisito Não Funcional",question:"Um software de criptografia de mensagens táticas deve rodar tanto em Android (tablets de campo) quanto em Windows (central de comando), com mesma funcionalidade. Qual RNF?",options:["Confiabilidade de criptografia.","Portabilidade / Multi-plataforma","Ambas A e B","Apenas RNF de Segurança."],correct:2,explanation:"RNF de Portabilidade (múltiplas plataformas) + Segurança (criptografia)."}
    ],

        stats: { total: 0, correct: 0, streak: 0, wrong: [], answered: new Set() },
    current: null,
    selected: null,
    optionMap: [],
    correctDisplayIndex: null,
    currentPool: [],      // 🆕 NOVA VARIÁVEL
    poolIndex: 0,         // 🆕 NOVA VARIÁVEL

    init() {
        this.loadStats();
        this.updateDisplay();
    },
    
    loadStats() {
        const saved = localStorage.getItem('quizModelagemStats');
        if (saved) {
            const data = JSON.parse(saved);
            this.stats = { ...this.stats, ...data, answered: new Set(data.answered || []), wrong: data.wrong || [] };
        }
    },
    
    saveStats() {
        localStorage.setItem('quizModelagemStats', JSON.stringify({ ...this.stats, answered: Array.from(this.stats.answered) }));
    },
    
    updateDisplay() {
        document.getElementById('statTotal').textContent = this.stats.total;
        document.getElementById('statCorrect').textContent = this.stats.correct;
        const rate = this.stats.total > 0 ? Math.round((this.stats.correct/this.stats.total)*100) : 0;
        document.getElementById('statRate').textContent = rate + '%';
        document.getElementById('statStreak').textContent = this.stats.streak;
        const progress = (this.stats.answered.size / this.questions.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('progressText').textContent = `${this.stats.answered.size} de ${this.questions.length} questões únicas`;
    },
    
    startQuiz() {
        document.getElementById('homeScreen').style.display = 'none';
        document.getElementById('questionArea').classList.add('active');
        this.initializePool(); // 🆕 INICIALIZAR POOL
        this.loadQuestion();
    },
    
    // 🆕 NOVO MÉTODO: Inicializa a pool de questões com embaralhamento
    initializePool() {
        const mode = document.getElementById('modeSelect').value;
        const subject = document.getElementById('subjectSelect').value;
        
        let pool = this.questions.filter(q => subject === 'all' || q.subject === subject);
        
        if (mode === 'new') {
            pool = pool.filter(q => !this.stats.answered.has(q.id));
            if (pool.length === 0) pool = this.questions; // Se todas respondidas, use todas
        } else if (mode === 'review') {
            pool = pool.filter(q => this.stats.wrong.includes(q.id));
            if (pool.length === 0) { 
                alert('Nenhuma questão errada para revisar!'); 
                this.goBack(); 
                return; 
            }
        }
        
        // 🆕 EMBARALHAR A POOL COM FISHER-YATES
        this.currentPool = this.shuffleArray([...pool]);
        this.poolIndex = 0;
    },
    
    // 🆕 NOVO MÉTODO: Fisher-Yates Shuffle
    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },
    
    loadQuestion() {
        // 🆕 VERIFICAR SE POOL ACABOU
        if (this.poolIndex >= this.currentPool.length) {
            alert(`✓ Você respondeu todas as questões dessa seleção!\n\nDeseja começar um novo ciclo?`);
            this.initializePool();
            if (this.currentPool.length === 0) {
                this.goBack();
                return;
            }
        }
        
        // 🆕 PEGAR A PRÓXIMA QUESTÃO DA POOL (NÃO ALEATÓRIA)
        this.current = this.currentPool[this.poolIndex];
        this.poolIndex++;
        
        this.selected = null;
        this.displayQuestion();
    },
    
    displayQuestion() {
        document.getElementById('questionNumber').textContent = `Questão ${this.current.id} de ${this.questions.length} (${this.poolIndex} de ${this.currentPool.length} nesta sessão)`;
        document.getElementById('questionSubject').textContent = this.current.subject;
        document.getElementById('questionText').textContent = this.current.question;
        
        const container = document.getElementById('optionsContainer');
        container.innerHTML = '';
        
        // 🎲 FISHER-YATES SHUFFLE (para as opções)
        const optionIndices = [0, 1, 2, 3];
        for (let i = optionIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionIndices[i], optionIndices[j]] = [optionIndices[j], optionIndices[i]];
        }
        
        // Armazenar mapa para validação
        this.optionMap = optionIndices;
        this.correctDisplayIndex = optionIndices.indexOf(this.current.correct);
        
        // Exibir opções embaralhadas
        optionIndices.forEach((originalIndex, displayIndex) => {
            const opt = this.current.options[originalIndex];
            const div = document.createElement('div');
            div.className = 'option';
            div.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + displayIndex)}</span>${opt}`;
            div.onclick = () => this.selectOption(displayIndex, div);
            container.appendChild(div);
        });
        
        document.getElementById('feedback').classList.remove('show');
        document.getElementById('btnConfirm').classList.remove('hidden');
        document.getElementById('btnNext').classList.add('hidden');
    },
    
    selectOption(index, element) {
        document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');
        this.selected = index;
    },
    
    confirmAnswer() {
        if (this.selected === null) { alert('Por favor, selecione uma resposta!'); return; }
        this.stats.total++;
        this.stats.answered.add(this.current.id);
        
        const isCorrect = this.selected === this.correctDisplayIndex;
        
        const feedback = document.getElementById('feedback');
        const options = document.querySelectorAll('.option');
        options.forEach(el => el.classList.add('disabled'));
        
        if (isCorrect) {
            this.stats.correct++;
            this.stats.streak++;
            this.stats.wrong = this.stats.wrong.filter(id => id !== this.current.id);
            options[this.selected].classList.add('correct');
            feedback.className = 'feedback show correct';
            document.getElementById('feedbackTitle').textContent = '✓ Resposta Correta!';
        } else {
            this.stats.streak = 0;
            if (!this.stats.wrong.includes(this.current.id)) this.stats.wrong.push(this.current.id);
            options[this.selected].classList.add('incorrect');
            options[this.correctDisplayIndex].classList.add('correct');
            feedback.className = 'feedback show incorrect';
            document.getElementById('feedbackTitle').textContent = `✗ Resposta Incorreta! Correta: ${String.fromCharCode(65 + this.correctDisplayIndex)}`;
        }
        
        document.getElementById('feedbackText').textContent = this.current.explanation;
        this.saveStats();
        this.updateDisplay();
        document.getElementById('btnConfirm').classList.add('hidden');
        document.getElementById('btnNext').classList.remove('hidden');
    },
    
    nextQuestion() { this.loadQuestion(); },
    
    goBack() {
        document.getElementById('questionArea').classList.remove('active');
        document.getElementById('homeScreen').style.display = 'block';
        this.currentPool = []; // 🆕 LIMPAR POOL AO VOLTAR
        this.poolIndex = 0;
        this.updateDisplay();
    },
    
    showStats() {
        const content = document.getElementById('statsContent');
        const rate = this.stats.total > 0 ? Math.round((this.stats.correct/this.stats.total)*100) : 0;
        
        const subjectsStats = {};
        this.questions.forEach(q => {
            if (!subjectsStats[q.subject]) subjectsStats[q.subject] = { total: 0, correct: 0 };
            if (this.stats.answered.has(q.id)) {
                subjectsStats[q.subject].total++;
                if (!this.stats.wrong.includes(q.id)) subjectsStats[q.subject].correct++;
            }
        });
        
        let subjectHtml = '<div class="subject-stats"><strong>Por Tema:</strong>';
        Object.keys(subjectsStats).forEach(subject => {
            const s = subjectsStats[subject];
            if (s.total > 0) {
                const subRate = Math.round((s.correct / s.total) * 100);
                subjectHtml += `<div class="subject-item"><span class="subject-label">${subject}</span><span class="subject-value">${s.correct}/${s.total} (${subRate}%)</span></div>`;
            }
        });
        subjectHtml += '</div>';
        
        content.innerHTML = `
            <div class="modal-stat"><span class="modal-stat-label">Total Respondidas</span><span class="modal-stat-value">${this.stats.total}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Acertos</span><span class="modal-stat-value">${this.stats.correct}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Erros</span><span class="modal-stat-value">${this.stats.total - this.stats.correct}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Taxa de Acerto</span><span class="modal-stat-value">${rate}%</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Sequência Atual</span><span class="modal-stat-value">${this.stats.streak}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Questões Únicas Respondidas</span><span class="modal-stat-value">${this.stats.answered.size}/${this.questions.length}</span></div>
            <div class="modal-stat"><span class="modal-stat-label">Questões para Revisar</span><span class="modal-stat-value">${this.stats.wrong.length}</span></div>
            ${subjectHtml}
        `;
        document.getElementById('statsModal').classList.add('show');
    },
    
    closeStats() { document.getElementById('statsModal').classList.remove('show'); },
    
    resetConfirm() {
        if (confirm('Tem certeza que deseja resetar TODO o seu progresso? Esta ação não pode ser desfeita!')) {
            this.stats = { total: 0, correct: 0, streak: 0, wrong: [], answered: new Set() };
            this.saveStats();
            this.updateDisplay();
            alert('✓ Progresso resetado com sucesso!');
        }
    }
};

app.init();