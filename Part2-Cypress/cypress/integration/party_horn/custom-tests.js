describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  // First Test
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  // Second Test
  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  // Third Test
  it('Volume of <audio> element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  // Fourth Test
  it('Image and sound sources change when you select the party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  // Fifth Test (Case1)
  it('The volume image changes when increasing volumes. Case1: changing from Icon 0 to Icon 1', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image' ).then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });

    cy.get('#volume-number').clear().type('1');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  })

  // Fifth Test (Case2)
  it('The volume image changes when increasing volumes. Case2: changing from Icon 1 to Icon 2', () => {
    cy.get('#volume-number').clear().type('33');
    cy.get('#volume-image' ).then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });

    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  })

  // Fifth Test (Case3)
  it('The volume image changes when increasing volumes. Case3: changing from Icon 2 to Icon 3', () => {
    cy.get('#volume-number').clear().type('66');
    cy.get('#volume-image' ).then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });

    cy.get('#volume-number').clear().type('67');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  })

  // Sixth Test
  it('the honk button is disabled when the textbox input is a empty or a non-number', () => {  
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });

    cy.get('#volume-number').clear().type('non-number');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.prop('disabled', true);
    });
  });

  // Seventh Test (Case1)
  it('an error is shown when you type a number less than Min volume (0)', () => {
    cy.get('#volume-number').clear().type('-1');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.match(':invalid');
    });
  });
  
  // Seventh Test (Case2)
  it('an error is shown when you type a number greater than Max volume (100)', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.match(':invalid');
    });
  });
});

