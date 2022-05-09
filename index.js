const Produtos = [

    {
        imagem: 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s20-fe-128gb-cloud-navy-4g-6gb-ram-tela-65-cam-tripla-selfie-32mp/magazineluiza/155629800/0007bbdc665749ec107d860c3a4b8b2f.jpg',
        name: 'Galaxy S20',
        descrição: 'Produto de Alta qualidade',
        empresa: 'Samsung',
        preço: 1.502,
    },

    {
        imagem: 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s20-fe-128gb-cloud-mint-4g-6gb-ram-tela-65-cam-tripla-32mp/magazineluiza/155630300/9b16a2484360ea49f513f32f4fe38094.jpg',
        name: 'Galaxy S20 FE ',
        descrição: 'Produto de Alta qualidade',
        empresa: 'Samsung',
        preço: 1.797,
    },

    {
        imagem:'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-a52-128gb-branco-4g-6gb-ram-tela-65-cam-quadrupla-selfie-32mp/magazineluiza/155624500/c9856f87662ba75f4f93042d90055436.jpg',
        name: 'Galaxy A52',
        descrição: 'Produto de Alta qualidade',
        empresa: 'Samsung',
        preço: 1.799,
    },

    {
        imagem:'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-s21-128gb-cinza-5g-8gb-ram-tela-62-cam-tripla-selfie-10mp/magazineluiza/155618700/d927cfbef9459defbb4b92cfd92697b6.jpg',
        name: 'Galaxy S21',
        descrição: 'Produto de Alta qualidade',
        empresa: 'Samsung',
        preço: 2.699,
    },

];



Produtos.map(produto => {
    produtos.innerHTML += `
        <div class="box_item">
            <img src="${produto.imagem}">
            <h1 class='name'>${produto.name}</h1>
            <p class='desc'>${produto.descrição}</p>
            <p class='empresa'>${produto.empresa}</p>
            <span clas='price'>R$ ${produto.preço}</span>
            <button>Comprar</button>
        </div>
    `
})