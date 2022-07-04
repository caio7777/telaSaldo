

class conta {
    // setando a propriedade saldo pelo constructor.
    constructor(saldo) {

        this.saldo = saldo.toFixed(2);

    }

     

 
    // funçao que limpa o campo input após ser feito o envio do dado presente no mesmo!
    limpar() {
        document.getElementById("insert-deposito").value = "";
        document.getElementById("retirar").value = "";
    }

    // funçao que executa o deposito e atualiza o saldo.
    deposito() {

        let deposito = document.getElementById("insert-deposito").value;

            if (deposito == "") {
            deposito = 0;
   
        }
        let resultado = `${this.saldo} + ${deposito}`;
        this.saldo = eval(resultado).toFixed(2);
        this.limpar();
        document.getElementById("saldo-atual").value = this.saldo;


    }
    // funçao que executa o saque e atualiza o saldo.
    saque() {

        //bloco 1
        let saque = document.getElementById("retirar").value;
        if (saque == "") {
            saque = 0;
            console.log("bloco 0")
    
        }
        //bloco 2

        if (this.saldo <= 0 && saque > this.saldo ) {
           
                let res = document.getElementById("msg-inicial");
                res.style.display = "block"
                let resp = document.getElementById("msg-inicial-2");
                resp.style.display = "none";
                console.log("voce nao possui saldo!")
                this.limpar();
                console.log("bloco 1")
                console.log(this.saldo)
                console.log(saque)
             
        } else {

            let resultado = `${this.saldo} - ${saque}`;
            this.saldo = eval(resultado).toFixed(2);
            this.limpar();
            document.getElementById("saldo-atual").value = this.saldo;
            console.log("bloco 4")
            console.log(this.saldo)
        }
     
         

    }

    // funçao que exibe e inibe ("esconde") o saldo.
    getSaldo() {
        document.getElementById("saldo-atual").value = this.saldo;
         document.getElementById("btn-saldo").style.display = "none"
        console.log(document.getElementById("btn-saldo").style.display.valueOf())
        document.getElementById("btn-saldo-2").style.display = "initial"
    
    
    }

    esconder() {
        document.getElementById("saldo-atual").value = "";
        document.getElementById("btn-saldo").style.display = "initial"
        console.log(document.getElementById("btn-saldo").style.display.valueOf())
        document.getElementById("btn-saldo-2").style.display = "none"
    }
   

}

let conta_caio = new conta(1000.00);





