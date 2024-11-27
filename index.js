class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome //so repete o que foi mandado
        this.idade = idade //so repete o que foi mandado
        this.tipo = tipo //so repete o que foi mandado
        
    }
    ataque(tipo){
        let ataque
        if (tipo === "mago"){
            ataque = "magia"
        }
        else if (tipo === "guerreiro"){
            ataque = "espada"
        }
        else if (tipo === "monge"){
            ataque = "artes marciais"
        }
        else if(tipo === "ninja"){
            ataque = "shuriken"
        }
        return ataque
    }

    escrever(){
        console.log(`o  ${this.tipo} atacou usando ${this.ataque(this.tipo)}`)
    }
}

let acao = new heroi("Super Joelho", 20, "mago")

acao.escrever()
