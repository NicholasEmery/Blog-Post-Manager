describe('Testes automatizados com Cypress', () => {
 
  it('Inserção: Preencher o formulário de inserção com dados válidos, enviar os dados e verificar o retorno esperado na API.', () => {
      //---Cenário 1---//


    //Visita o site.
    cy.visit('http://localhost:4200/post/index');
    //Pausa de 3 segundos
    cy.wait(3000);
    //Abre o formulário.
    cy.get('.text-center > .btn').click();
    //Insere o titulo
    cy.get('#title').type('Muay Thai The Art of Eight Limbs');
    //Insere o conteúdo
    cy.get('#body').type('Muay Thai, also known as "The Art of Eight Limbs," is a martial art originating from Thailand. Its main characteristic is the combined use of fists, elbows, knees, and shins, totaling eight points of contact that simulate the natural weapons of the human body.');
    //Envia o formulário
    cy.get('#enviar').click();
     
  })


  it('Edição:Selecionar um post existente e navegar até a tela de edição, alterar os campos e salvar.', () => {
      //---Cenário 2---//


    //Pausa de 5 segundos
    cy.wait(5000);
    //Visita o site
    cy.visit('http://localhost:4200/post/index');
    //verifica o titulo do post "qui est esse"
    cy.get(':nth-child(2) > .card > .card-body > .card-subtitle').should('contain', 'qui est esse');
    //clica em editar
    cy.get(':nth-child(2) > .card > .card-footer > #edit').click();
    //Apaga e reescreve o título
    cy.get('#title').clear().type('Systems Analysis and Development');
    //Apaga e reescreve o Texto
    cy.get('#body').clear().type('Analysis and Systems Development is an area of information technology that involves the study, planning, and creation of computational solutions to meet the needs of an organization or user.');
    //Atualiza o post
    cy.get('#edit').click();
  })


})




