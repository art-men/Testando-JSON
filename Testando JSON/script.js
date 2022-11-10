const bd = `{
    "alunos": [
    {
    "nome": "Stoney",
    "rgm": 299,
    "avaliacaoParcial": 2,
    "exercicio": 1,
    "avaliacaoRegimental": 2,
    "img": "./imgs/stoney.jpg"
    },
    {
    "nome": "Maicon",
    "rgm": 321,
    "avaliacaoParcial": 3,
    "exercicio": 1,
    "avaliacaoRegimental": 2,
    "img": "./imgs/maiconkuster.png"
    },
    {
    "nome": "Fabio",
    "rgm": 123,
    "avaliacaoParcial": 4,
    "exercicio": 1,
    "avaliacaoRegimental": 2,
    "img": "./imgs/giga.png"
    },
    {
    "nome": "Cleiton",
    "rgm": 988,
    "avaliacaoParcial": 1,
    "exercicio": 3,
    "avaliacaoRegimental": 5,
    "img": "./imgs/cleitin.jpg"
    },
    {
    "nome": "Vampeta",
    "rgm": 765,
    "avaliacaoParcial": 3,
    "exercicio": 2,
    "avaliacaoRegimental": 1,
    "img": "./imgs/vampeta.jpg"
    },
    {
    "nome": "Tadala",
    "rgm": 432,
    "avaliacaoParcial": 0,
    "exercicio": 1,
    "avaliacaoRegimental": 2,
    "img": "./imgs/tadala.jpg"
    },
    {
    "nome": "Jéssica",
    "rgm": 234,
    "avaliacaoParcial": 3,
    "exercicio": 0,
    "avaliacaoRegimental": 4,
    "img": "./imgs/jessica.jpeg"
    },
    {
    "nome": "Caroline",
    "rgm": 345,
    "avaliacaoParcial": 0,
    "exercicio": 0,
    "avaliacaoRegimental": 0,
    "img": "./imgs/caroline.jpg"
    },
    {
    "nome": "Jonas",
    "rgm": 456,
    "avaliacaoParcial": 1,
    "exercicio": 3,
    "avaliacaoRegimental": 3,
    "img": "./imgs/jonas.jpg"
    },
    {
    "nome": "Ruyter",
    "rgm": 567,
    "avaliacaoParcial": 2,
    "exercicio": 1,
    "avaliacaoRegimental": 2,
    "img": "./imgs/ruyter.jpg"
    },
    {
        "nome": "Kleber",
        "rgm": 678,
        "avaliacaoParcial": 2,
        "exercicio": 1,
        "avaliacaoRegimental": 2,
        "img": "./imgs/kleber.jpg"
        },
        {
        "nome": "Joana",
        "rgm": 789,
        "avaliacaoParcial": 3,
        "exercicio": 0,
        "avaliacaoRegimental": 0,
        "img": "./imgs/joana.jpg"
        },
        {
        "nome": "Ana",
        "rgm": 890,
        "avaliacaoParcial": 2,
        "exercicio": 1,
        "avaliacaoRegimental": 1,
        "img": "./imgs/ana.jpg"
        },
        {
        "nome": "Neymar",
        "rgm": 132,
        "avaliacaoParcial": 1,
        "exercicio": 1,
        "avaliacaoRegimental": 4,
        "img": "./imgs/neymar.jpg"
        },
        {
        "nome": "Juliana",
        "rgm": 243,
        "avaliacaoParcial": 2,
        "exercicio": 2,
        "avaliacaoRegimental": 4,
        "img": "./imgs/cabelo.jpg"
        },
        {
        "nome": "Dorival Jr",
        "rgm": 354,
        "avaliacaoParcial": 1,
        "exercicio": 3,
        "avaliacaoRegimental": 3,
        "img": "./imgs/dorival.jpg"
        },
        {
        "nome": "Marcos",
        "rgm": 465,
        "avaliacaoParcial": 3,
        "exercicio": 3,
        "avaliacaoRegimental": 3,
        "img": "./imgs/marcos.jpg"
        },
        {
        "nome": "Ronaldinho",
        "rgm": 576,
        "avaliacaoParcial": 0,
        "exercicio": 1,
        "avaliacaoRegimental": 3,
        "img": "./imgs/ronaldinho.jpg"
        },
        {
        "nome": "Messi",
        "rgm": 687,
        "avaliacaoParcial": 2,
        "exercicio": 1,
        "avaliacaoRegimental": 3,
        "img": "./imgs/messi.jpg"
        },
        {
        "nome": "Tite",
        "rgm": 798,
        "avaliacaoParcial": 3,
        "exercicio": 3,
        "avaliacaoRegimental": 2,
        "img": "./imgs/tite.jpg"
        },
        {
            "nome": "Cristiano",
            "rgm": 809,
            "avaliacaoParcial": 0,
            "exercicio": 3,
            "avaliacaoRegimental": 2,
            "img": "./imgs/cr7.jpg"
            },
            {
            "nome": "Ronaldo",
            "rgm": 142,
            "avaliacaoParcial": 3,
            "exercicio": 3,
            "avaliacaoRegimental": 4,
            "img": "./imgs/ronaldo.jpg"
            },
            {
            "nome": "Kevin",
            "rgm": 253,
            "avaliacaoParcial": 2,
            "exercicio": 0,
            "avaliacaoRegimental": 3,
            "img": "./imgs/kevin.jpg"
            },
            {
            "nome": "Deolane",
            "rgm": 364,
            "avaliacaoParcial": 0,
            "exercicio": 1,
            "avaliacaoRegimental": 2,
            "img": "./imgs/deolane.jpg"
            },
            {
            "nome": "Pedro",
            "rgm": 475,
            "avaliacaoParcial": 2,
            "exercicio": 1,
            "avaliacaoRegimental": 4,
            "img": "./imgs/brinquedo.jpg"
            }
    ]
    }`

    function exibirAlunos(){
        const objs = JSON.parse(bd)

        let resultado = document.getElementById("resultado")

        objs.alunos.forEach(element => {
            console.log(element)

            let media = parseFloat(element.avaliacaoRegimental+element.avaliacaoParcial+element.exercicio)
            
            let status=""
            if(media >= 6){
                status = "Aprovado"
            } else if(media>=2 && media< 6){
                status = "Avaliação Final"
            } else{
                status = "Reprovado"
            }
            
            resultado.innerHTML += `
            <div class="container">
            <img src="${element.img}">
            <p class="negrito">Nome: ${element.nome}</p>
            <p class="negrito">RGM: ${element.rgm}</p>
            <p class="negrito">Av. Parcial: ${element.avaliacaoParcial}</p>
            <p class="negrito">Exercícios: ${element.exercicio}</p>
            <p class="negrito">Av. Regimental: ${element.avaliacaoRegimental}</p>
            <p class="negrito">Média: ${media}</p>
            <p class="negrito">Status: ${status}</p>
            </div>
            `
        });
    }
    