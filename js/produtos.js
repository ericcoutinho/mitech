
var produtos = [
    //slider topo da página - recomendado +- 6 produtos
    //este array vai construir o banner com base nos produtos cadastrados aqui
    {
        nome: 'Mi 8 Lite',   
        nome_completo: 'Smartphone Xiaomi Mi 8 Lite 64GB 4GB RAM Preto',     
        descricao: 'Uma só cor não é suficiente.<br>'+
                    'Traseira com acabamento gradiente espelhado.<br>'+
                    'Queríamos criar um telefone que mudasse de cor com a elegância de uma pintura impressionista.',
        link_secao: 'https://amzn.to/33hhfTI',
        titulo_secao: 'Smartphones',
        link_produto: 'https://amzn.to/2x1GJbx',
        titulo_produto: 'Compre agora',
        src_img: 'mi_8_lite.png',  
        preco: 'R$1.399,00',      
        local: 'slider,destaque'
    },

    {
        nome: 'Mi 9T',
        nome_completo: 'Smartphone Xiaomi Mi 9T, Glacier Blue, 6 GB RAM, 128 GB ROM, Versão Global',        
        descricao: 'Potência total<br>'+
                    'Câmera de selfie pop-up. Câmera tripla AI de 48 MP.<br>'+
                    'Equipado com o processador Qualcomm® Snapdragon™ 730.',        
        link_secao: 'https://amzn.to/33hhfTI',
        titulo_secao: 'Smartphones',
        link_produto: 'https://amzn.to/2Qg0UJI',
        titulo_produto: 'Compre agora',
        src_img: 'mi_9t.png', 
        preco:  'R$1.906,14',       
        local: 'slider,destaque'
    },
    
    {
        nome: 'Redmi Note 8 Pro',   
        nome_completo: 'Smartphone Xiaomi Redmi Note 8 Pro, 128GB ROM, Pearl White',        
        descricao: 'O 1º no Brasil<br>'+
                    'Câmera selfie de 20MP Modo Retrato IA. Câmera de 64MP quádrupla com grande-angular e macro4.<br>'+
                    'Processador Helio G90T feito para Games.',        
        link_secao: 'https://amzn.to/33hhfTI',
        titulo_secao: 'Smartphones',

        link_produto: 'https://amzn.to/3ajc3kO',
        titulo_produto: 'Compre agora',
        src_img: 'note_8_pro1.png',
        preco:  'R$1.679,90',        
        local: 'slider,destaque'
    },

    //seção mais vendidos - recomendado apenas 4 produtos
    //este array vai construir a seção com base nos produtos cadastrados aqui

    {   
        nome: 'Redmi AirDots',   
        nome_completo: 'Xiaomi Redmi AirDots Bluetooth 5.0',
        descricao: 'Ouça a sua música favorita sem ter que removê-lo do bolso e sem cabos que lhe incomodam.',
        link_secao: '',
        titulo_secao: '',
        link_produto: 'https://amzn.to/2walPH9',
        titulo_produto: '',
        src_img: 'airDots.png',
        preco:  'R$128,81',
        local: 'mais_vendidos'
    },

    {   
        nome: 'Mi band 3',   
        nome_completo: 'Relogio Inteligente Mi Band 3 + Película + Pulseira extra',
        descricao: 'Tela sensível a toques, 50 metros de resistência à água. WhatsApp, Facebook, chamadas recebidas, etc.,são todos exibidos diretamente na tela da pulseira.',
        link_secao: '',
        titulo_secao: '',
        link_produto: 'https://amzn.to/38OPyml',
        titulo_produto: '',
        src_img: 'mi_band_3.png',
        preco:  'R$148,00',
        local: 'mais_vendidos'
    },

    { 
        nome: 'Mi box TV',   
        nome_completo: 'Xiaomi Mi Box S 4k Ultra HD Android TV',
        descricao: 'Perfeito para quem gosta de muita tecnologia. Permite executar no aparelho diversos apps e jogos android diretamente em sua TV!',
        link_secao: '',
        titulo_secao: '',
        link_produto: 'https://amzn.to/2TSIvVJ',
        titulo_produto: '',
        src_img: 'box-s-android-4k-tv-box.png',
        preco: 'R$480,00',
        local: 'mais_vendidos'
    },

    {   
        nome: 'Amazfit Bip',   
        nome_completo: 'Relogio xiaomi Amazfit bip lite White',
        descricao: 'O Smartwatch Amazfit Bip pode lhe oferecer até 120 dias de autonomia em standy com uma única carga, ou mesmo 45 dias em uso.',
        link_secao: '',
        titulo_secao: '',
        link_produto: 'https://amzn.to/2TSIQrt',
        titulo_produto: '',
        src_img: 'amazfit_bipBranco.png',
        preco:  'R$279,90',
        local: 'mais_vendidos'
    },

    //seção em destaque
    //este array vai construir a seção com base nos produtos cadastrados aqui

    
];

let href = window.location.href.split('/').pop();
href = href.split('.').shift();
if (href == 'produto') {
    detalheProduto();
} else {
    carregaProduto();
}


    
function carregaProduto() {

    for (var produto in produtos) {

        let local = produtos[produto].local.split(',');
        
        if (local.includes('slider')) {
            topo_slider(produto);    
        }
        if (local.includes('mais_vendidos')) {
            mais_vendidos(produto);            
        }
        if (local.includes('destaque')) {
            destaque(produto);
        }
    
    }
}

function topo_slider(produto) {
    document.getElementById('slider_content').innerHTML +=
    
            '<!-- inicio produto --> \n' +       
                '<div>\n' +
                    '<div class="testimonial">\n'+
                        '<div class="slider-container row mb-4">\n' +
                            '<div class="info-produto col-md-7">\n' +
                                '<h1 style="margin-top: 30px;" id="nome_produto">' + 
                                    produtos[produto].nome +
                                '</h1>\n'+
                                '<p style="margin-top: 30px;" class="mb-5 lead">\n' +
                                    produtos[produto].descricao +
                                '</p>\n'+
                                '<div class="align-bottom">\n' +
                                    '<a target="_blank" href="'+ 
                                        produtos[produto].link_secao +
                                    '" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">' + 
                                        produtos[produto].titulo_secao +'</a>\n' +
                                    '<a href="produto.html?top_vendas=' + 
                                        produtos[produto].link_produto.split('/').pop() +
                                    '" class="btn btn-pumpkin py-3 px-5 rounded-0 d-block d-sm-inline-block">' + 
                                        produtos[produto].titulo_produto +
                                    '</a>\n' +
                                '</div>\n' +
                            '</div>\n' +
                            '<div class="img-produto col-md-5">\n' +
                                '<img src="images/' + 
                                    produtos[produto].src_img +
                                '"/>\n' +
                            '</div>\n' +
                        '</div>\n' +                 
                    '</div>\n' +
                '</div>\n' +
            '<!-- fim produto --></div>\n';
}

function mais_vendidos(produto) {
    
    let content = document.getElementById('mais_vendidos');
    content.insertAdjacentHTML('afterbegin',
        '<div class="col-lg-3 col-md-6 mb-5">' +
            '<div class="product-item">' +
                '<a href="produto.html?id='+ produtos[produto].link_produto.split('/').pop() +'"><figure>' +
                '<img src="images/'+ produtos[produto].src_img +'" alt="Image" class="img-fluid img_m">' +
                '</figure></a>'+
            '</div><span style="font-size: larger; font-weight: 500; ">' + produtos[produto].nome +
            '</span><br><div class="preco"><span style="color:#6f849a; font-size: small; font-weight:100">Por: </span>' +
            produtos[produto].preco +
            '</div>' +
            '<a href="produto.html?id='+ produtos[produto].link_produto.split('/').pop() +
            '"><div class="btn btn-pumpkin-comprar">compre agora</div></a>' +
        '</div>');
}

function destaque(produto) {
    let content = document.getElementById('destaque');
            content.insertAdjacentHTML('afterbegin',
                '<div class="col-lg-4 col-md-6 mb-5">' +
                    '<div class="product-item">' +
                        '<a href="produto.html?id='+ produtos[produto].link_produto.split('/').pop() +'"><figure>' +
                        '<img src="images/'+ produtos[produto].src_img +'" alt="Image" class="img-fluid img_g">' +
                        '</figure></a>'+
                    '</div><span style="font-size: larger; font-weight: 500; ">' + produtos[produto].nome +
                    '</span><br><div class="preco"><span style="color:#6f849a; font-size: small; font-weight:100">Por: </span>' + 
                        produtos[produto].preco +
                    '</div>' + 
                    '<a href="produto.html?id='+ produtos[produto].link_produto.split('/').pop() +
                    '"><div class="btn btn-pumpkin-comprar">compre agora</div></a>' +
                ' </div>');
}


function detalheProduto() {

    let idProduto = window.location.href.split('=').pop();

    for(var produto in produtos) {
        let id = produtos[produto].link_produto.split('/').pop();
        if ( id === idProduto) {

            document.getElementById('product_content').innerHTML +=
    
            '<!-- inicio produto --> \n' +       
                '<div>\n' +
                    '<div class="testimonial">\n'+
                        '<div class="row mb-4">\n'+
                        '<div class="img-produto col-md-5">\n' +
                            '<img src="images/' + 
                                produtos[produto].src_img +
                            '"/>\n' +
                        '</div>\n'  +
                            '<div class="info-produto col-md-7">\n' +
                                '<h1 class="detalhe_titulo" style="margin-top: 30px;" id="nome_produto">' + 
                                    produtos[produto].nome_completo +
                                '</h1> \n'+
                               ' <span class="fa fa-star checked"></span>' +
                                '<span class="fa fa-star checked"></span>' +
                                '<span class="fa fa-star checked"></span>' +
                                '<span class="fa fa-star checked"></span>' +
                                '<span class="fa fa-star checked"></span>' +
                                '<p class="mb-5 lead">\n' +
                                    produtos[produto].descricao +
                                '</p><br><br>'+
                                '<div class="align-bottom">\n' +
                                    '<a target="_blank" href="' + 
                                        produtos[produto].link_produto +
                                    '" style="font-size: xx-large;" class="btn preco py-3 px-8 rounded-0 d-block d-sm-inline-block">'+
                                        produtos[produto].preco +'</a>' +
                                    '<a target="_blank" href="' + 
                                        produtos[produto].link_produto +
                                    '" class="btn btn-pumpkin py-3 px-5 rounded-0 d-block d-sm-inline-block"> Compre agora' +
                                    '</a>\n' +
                                '</div>\n' +
                            '</div>\n' +
                        '</div>\n' +                 
                    '</div>\n' +
                '</div>\n' +
            '<!-- fim produto --></div>\n';
        }

        mais_vendidos(produto);
        
    }
    

    
}