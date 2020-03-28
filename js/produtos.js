
var produtos = [
    //slider topo da página - recomendado +- 6 produtos
    //este array vai construir o banner com base nos produtos cadastrados aqui
    {
        nome: 'Mi 8 Lite',
        
        descricao: 'Uma só cor não é suficiente.<br>'+
                    'Traseira com acabamento gradiente espelhado.<br>'+
                    'Queríamos criar um telefone que mudasse de cor com a elegância de uma pintura impressionista.',
        
        link_secao: 'https://amzn.to/33hhfTI',
        titulo_secao: 'Smartphones',

        link_produto: 'https://amzn.to/2x1GJbx',
        titulo_produto: 'Compre agora',

        src_img: 'mi_8_lite.png',
        
        local: 'slider'
    },

    {
        nome: 'Mi 9T',
        
        descricao: 'Potência total<br>'+
                    'Câmera de selfie pop-up. Câmera tripla AI de 48 MP.<br>'+
                    'Equipado com o processador Qualcomm® Snapdragon™ 730.',
        
        link_secao: 'https://amzn.to/33hhfTI',
        titulo_secao: 'Smartphones',

        link_produto: 'https://amzn.to/2Qg0UJI',
        titulo_produto: 'Compre agora',

        src_img: 'mi_9t.png',
        
        local: 'slider'
    },
    
    {
        nome: 'Redmi Note 8 Pro',
        
        descricao: 'O 1º no Brasil<br>'+
                    'Câmera selfie de 20MP Modo Retrato IA. Câmera de 64MP quádrupla com grande-angular e macro4.<br>'+
                    'Processador Helio G90T feito para Games.',
        
        link_secao: 'https://amzn.to/33hhfTI',
        titulo_secao: 'Smartphones',

        link_produto: 'https://amzn.to/3ajc3kO',
        titulo_produto: 'Compre agora',

        src_img: 'note_8_pro1.png',
        
        local: 'slider'
    },

    //seção mais vendidos - recomendado apenas 4 produtos
    //este array vai construir a seção com base nos produtos cadastrados aqui

    {   
        nome: 'Redmi AirDots',
        descricao: '',
        src_img: 'airDots.png',
        link_produto: 'https://amzn.to/2walPH9',
        preco:  'R$101,67',
        local: 'mais_vendidos'
    },

    {   
        nome: 'Mi band 3',
        descricao: '',
        src_img: 'mi_band_3.png',
        link_produto: 'https://amzn.to/38OPyml',
        preco:  'R$149,00',
        local: 'mais_vendidos'
    },

    {   
        nome: 'Mi box TV',
        descricao: '',
        src_img: 'box-s-android-4k-tv-box.png',
        link_produto: 'https://amzn.to/2TSIvVJ',
        preco:  'R$480,00',
        local: 'mais_vendidos'
    },

    {   
        nome: 'Amazfit Bip',
        descricao: '',
        src_img: 'amazfit_bipBranco.png',
        link_produto: 'https://amzn.to/2TSIQrt',
        preco:  'R$279,90',
        local: 'mais_vendidos'
    },

    //seção em destaque
    //este array vai construir a seção com base nos produtos cadastrados aqui
    {
               
        nome: 'Redmi AirDots',
        descricao: '',
        src_img: 'airDots.png',
        link_produto: 'https://amzn.to/2walPH9',
        preco: 'R$101,67',
        local: 'destaque'
    },

    { 
        nome: 'Mi band 3',
        descricao: '',
        src_img: 'mi_band_3.png',
        link_produto: 'https://amzn.to/39SZqgl',
        preco: 'R$149,00',
        local: 'destaque'
    },

    {  
        nome: 'Amazfit Bip',
        descricao: '',
        src_img: 'amazfit_bipBranco.png',
        link_produto: 'https://amzn.to/2TSIQrt',
        preco: 'R$279,90',
        local: 'destaque'
    },
    { 
        nome: 'Redmi AirDots',
        descricao: '',
        src_img: 'airDots.png',
        link_produto: 'https://amzn.to/2walPH9',
        preco: 'R$101,67',
        local: 'destaque'
    },

    { 
        nome: 'Mi band 3',
        descricao: '',
        src_img: 'mi_band_3.png',
        link_produto: 'https://amzn.to/39SZqgl',
        preco: 'R$149,00',
        local: 'destaque'
    },

    { 
        nome: 'Mi box TV',
        descricao: '',
        src_img: 'box-s-android-4k-tv-box.png',
        link_produto: 'https://amzn.to/2TSIvVJ',
        preco: 'R$480,00',
        local: 'destaque'
    },

    { 
        nome: 'Amazfit Bip',
        descricao: '',
        src_img: 'amazfit_bipBranco.png',
        link_produto: 'https://amzn.to/2TSIQrt',
        preco: 'R$279,90',
        local: 'destaque'
    }
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

        let local = produtos[produto].local;
        
        if (local == 'slider') {
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
                                    '<a href="'+ 
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
    
        } else if (local == 'mais_vendidos') {
            let content = document.getElementById('mais_vendidos');
            content.insertAdjacentHTML('afterbegin',
                '<div class="col-lg-3 col-md-6 mb-5">' +
                    '<div class="product-item">' +
                        '<a href="produto.html?id='+ produtos[produto].link_produto.split('/').pop() +'"><figure>' +
                        '<img src="images/'+ produtos[produto].src_img +'" alt="Image" class="img-fluid img_m">' +
                        '</figure></a>'+
                    '</div>' +
                    '<div class="preco"><span style="color:#6f849a; font-size: small; font-weight:100">Por: </span>' +
                    produtos[produto].preco +
                    '</div>' +
                    '<a href="produto.html?id='+ produtos[produto].link_produto.split('/').pop() +
                    '"><div class="btn btn-pumpkin-comprar">compre agora</div></a>' +
                '</div>');
            
        } else {
            let content = document.getElementById('destaque');
            content.insertAdjacentHTML('afterbegin',
                '<div class="col-lg-4 col-md-6 mb-5">' +
                    '<div class="product-item">' +
                        '<a href="produto.html?id='+ produtos[produto].link_produto.split('/').pop() +'"><figure>' +
                        '<img src="images/'+ produtos[produto].src_img +'" alt="Image" class="img-fluid img_g">' +
                        '</figure></a>'+
                    '</div>' +
                    '<div class="preco"><span style="color:#6f849a; font-size: small; font-weight:100">Por: </span>' + 
                        produtos[produto].preco +
                    '</div>' + 
                    '<a href="produto.html?id='+ produtos[produto].link_produto.split('/').pop() +
                    '"><div class="btn btn-pumpkin-comprar">compre agora</div></a>' +
                ' </div>');
        }
    
    }
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
                        '<div class="slider-container row mb-4">\n' +
                            '<div class="info-produto col-md-7">\n' +
                                '<h1 style="margin-top: 30px;" id="nome_produto">' + 
                                    produtos[produto].nome +
                                '</h1>\n'+
                                '<p style="margin-top: 30px;" class="mb-5 lead">\n' +
                                    produtos[produto].descricao +
                                '</p>\n'+
                                '<div class="align-bottom">\n' +
                                    '<a href="'+ 
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
        
    }
    
}