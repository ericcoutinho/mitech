//slider topo da página - recomendado +- 6 produtos
//este array vai construir o banner com base nos produtos cadastrados aqui
var slider_topo = [
    {
        nome: 'Mi 8 Lite',
        
        descricao: 'Uma só cor não é suficiente.<br>'+
                    'Traseira com acabamento gradiente espelhado.<br>'+
                    'Queríamos criar um telefone que mudasse de cor com a elegância de uma pintura impressionista.',
        
        link_secao: 'https://amzn.to/33hhfTI',
        titulo_secao: 'Smartphone',

        link_produto: 'https://amzn.to/2x1GJbx',
        titulo_produto: 'Compre agora',

        src_img: 'mi_8_lite.png'
    },

    {
        nome: 'Mi 9T',
        
        descricao: 'Potência total<br>'+
                    'Câmera de selfie pop-up. Câmera tripla AI de 48 MP.<br>'+
                    'Equipado com o processador Qualcomm® Snapdragon™ 730.',
        
        link_secao: 'https://amzn.to/33hhfTI',
        titulo_secao: 'Smartphone',

        link_produto: 'https://amzn.to/2Qg0UJI',
        titulo_produto: 'Compre agora',

        src_img: 'mi_9t.png'
    }
];

//seção mais vendidos - recomendado apenas 4 produtos
//este array vai construir a seção com base nos produtos cadastrados aqui
var mais_vendidos = [
    {   //  Produto 01
        nome: 'Redmi AirDots',
        src_img: 'airDots.png',
        link: 'https://amzn.to/2walPH9',
        preco:  'R$105,00'
    },

    {   //  Produto 02
        nome: 'Mi band 3',
        src_img: 'mi_band_3.png',
        link: 'https://amzn.to/38OPyml',
        preco:  'R$119,00'
    },

    {   //  Produto 03
        nome: 'Mi box TV',
        src_img: 'box-s-android-4k-tv-box.png',
        link: 'https://amzn.to/2TSIvVJ',
        preco:  'R$358,00'
    },

    {   //  Produto 04
        nome: 'Amazfit Bip',
        src_img: 'amazfit_bipBranco.png',
        link: 'https://amzn.to/2TSIQrt',
        preco:  'R$255,00'
    }
];

//seção em destaque
//este array vai construir a seção com base nos produtos cadastrados aqui
var destaque = [
    {   //  Produto 01
        nome: 'Redmi AirDots',
        src_img: 'airDots.png',
        link: 'https://amzn.to/2walPH9'
    },

    {   //  Produto 02
        nome: 'Mi band 3',
        src_img: 'mi_band_3.png',
        link: 'https://amzn.to/39SZqgl'
    },

    {   //  Produto 03
        nome: 'Mi box TV',
        src_img: 'box-s-android-4k-tv-box.png',
        link: 'https://amzn.to/2TSIvVJ'
    },

    {   //  Produto 04
        nome: 'Amazfit Bip',
        src_img: 'amazfit_bipBranco.png',
        link: 'https://amzn.to/2TSIQrt'
    },
    {   //  Produto 05
        nome: 'Redmi AirDots',
        src_img: 'airDots.png',
        link: 'https://amzn.to/2walPH9'
    },

    {   //  Produto 06
        nome: 'Mi band 3',
        src_img: 'mi_band_3.png',
        link: 'https://amzn.to/39SZqgl'
    },

    {   //  Produto 07
        nome: 'Mi box TV',
        src_img: 'box-s-android-4k-tv-box.png',
        link: 'https://amzn.to/2TSIvVJ'
    },

    {   //  Produto 08
        nome: 'Amazfit Bip',
        src_img: 'amazfit_bipBranco.png',
        link: 'https://amzn.to/2TSIQrt'
    }
];

for (var produto in slider_topo) {
document.getElementById('slider_content').innerHTML +=

'<!-- inicio produto --> \n'+       
              '<div>\n'+
                '<div class="testimonial">\n'+
                  '<div class="row mb-4">\n'+
                    '<div class="col-md-7">\n'+
                      '<h1 style="margin-top: 30px;" id="nome_produto">'+ 
                      slider_topo[produto].nome 
                      +'</h1>\n'+
                      '<p style="margin-top: 30px;" class="mb-5 lead">\n'+
                      slider_topo[produto].descricao
                      +'</p>\n'+
                      '<div class="align-bottom">\n'+
                        '<a href="'+ 
                        slider_topo[produto].link_secao 
                        +'" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">'+ 
                        slider_topo[produto].titulo_secao +'</a>\n'
                        +'<a href="'+ 
                        slider_topo[produto].link_produto 
                        +'" target="_blank" class="btn btn-pumpkin py-3 px-5 rounded-0 d-block d-sm-inline-block">'+ 
                        slider_topo[produto].titulo_produto 
                        +'</a>\n'+
                      '</div>\n'+
                   '</div>\n'+
                    '<div class="col-md-5">\n'+
                      '<img src="images/'+ 
                      slider_topo[produto].src_img 
                      +'"/>\n'+
                    '</div>\n'+
                  '</div>\n'+                 
                '</div>\n'+
              '</div>\n'+
              '<!-- fim produto --></div>\n';

}

for(var produto in mais_vendidos) {
    var content = document.getElementById('mais_vendidos');
content.insertAdjacentHTML('afterbegin',
    '<div class="col-lg-3 col-md-6 mb-5">'+
        '<div class="product-item">'+
            '<a target="_blank" href="'+ mais_vendidos[produto].link +'"><figure>'+
            '<img src="images/'+ mais_vendidos[produto].src_img +'" alt="Image" class="img-fluid img_m">'+
            '</figure></a>'+
            '</div><div class="preco"><span style="color:#6f849a; font-size: small; font-weight:100">Por: </span>'+ mais_vendidos[produto].preco +'</div> </div>');
}

for(var produto in destaque) {
    var content = document.getElementById('destaque');
content.insertAdjacentHTML('afterbegin',
    '<div class="col-lg-4 col-md-6 mb-5">'+
        '<div class="product-item">'+
            '<a target="_blank" href="'+ destaque[produto].link +'"><figure>'+
            '<img src="images/'+ destaque[produto].src_img +'" alt="Image" class="img-fluid img_g">'+
            '</figure></a>'+
        '</div>'+
    ' </div>');
}