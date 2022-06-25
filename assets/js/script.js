function createCalc() { //Factory Function, retorna um obj
  return {
    display: document.querySelector('.display'),
    
    start() { // Método
      this.buttonClicks();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13){
          this.doMath();
        }
      });
    },

    clearDisplay() {
      this.display.value = '';
    },

    delOneEl() {
      this.display.value = this.display.value.slice(0, -1);
    },

    doMath() {
      let math = this.display.value;
      
      try {
        math = eval(math);

        if(!math) {
          alert('Conta inválida');
          return;
        }

        this.display.value = math;
      } catch (e) {
        alert('Conta inválida');
        return;
      }
    },

    buttonClicks() {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          this.btnToDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.delOneEl();
        }

        if(el.classList.contains('btn-eq')) {
          this.doMath();
        }

      });
    },

    btnToDisplay(value) {
      this.display.value += value;
    }, 

    
  };
}

const calculator = createCalc();
calculator.start();