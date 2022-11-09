const pessoas = [
    {name: "Fabiana Araújo", age: 33 },
    {name: "Gabriel Gomes", age: 25 },
    {name: "Fernando Henrique", age: 17 },
    {name: "Ana Luiza", age: 2 },
    {name: "Geralda do Nascimento", age: 93 },
    {name: "Miguel Souza", age: 70 },
    {name: "Antonio Miguel", age: 69 },
];

$("#submit").click(function() {
    retornaNome("Gabriel Gomes");
    retornaVetorNomes();
    insertID();
    primeiraHabilitacao();
    mediaIdades();
});

// atv3
function retornaNome(nome){
    const pessoa = pessoas.filter(n => n.name === nome);
    console.log(pessoa);
    return pessoa;  
}

// atv4
function retornaVetorNomes(){
    var pessoa = pessoas.map(n => n.name.split(" ")[0]);
    console.log(pessoa);
    return pessoa;
}

// atv5
function insertID(){
    const pessoa = pessoas.map(n =>{
        return   "id: "+(pessoas.indexOf(n)+1)+", name: "+ n.name+", age:"+ n.age
    });
        console.log(pessoa)
}

// atv6
function primeiraHabilitacao(){
    var pessoa = pessoas.filter(n => n.age >= 18)
    console.log(pessoa);
    return pessoa;
}

// atv7
function mediaIdades(){
    const media = pessoas.reduce((acc, p) => acc + p.age, 0);   
    console.log(media/pessoas.length);
    return media;
}

