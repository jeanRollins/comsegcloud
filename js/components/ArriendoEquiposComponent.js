Vue.component( 'arriendo-equipos-component', {
    data(){
        return {
            sales : [
                {
                    title : 'Equipos' ,
                    file  : '/assets/images/notebook.png' ,
                    position : 2 ,
                    margin : '' ,
                    items : [
                        {
                            url   : '/arriendo_notebooks.html' ,
                            name  : 'Notebook'
                        },
                        {
                            url   : '' ,
                            name  : 'Impresoras Laser'
                        },
                        {
                            url   : '' ,
                            name  : 'Computadores de escritorio'
                        },
                        {
                            url   : '' ,
                            name  : 'Impresoras Zebra'
                        },
                        {
                            url   : '' ,
                            name  : 'Monitores'
                        },
                        {
                            url   : '' ,
                            name  : 'Lectores de código de barra'
                        }
                    ]   ,
                    class : 'img-fluid'
                },
                {
                    title : /*html*/`<div class="arriendo-equipos-component-title-width1">Redes </div> Eventos` ,
                    file  : '/assets/images/router.png' ,
                    position : 1 , 
                    margin : 'arriendo-equipos-components-margin-top ' ,
                    items : [
                        {
                            url   : '' ,
                            name  : 'Cableados de red para eventos'
                        },
                        {
                            url   : '' ,
                            name  : 'Router de alta gama Wifi, repetidores'
                        }
                    ]  ,
                    class : 'arriendo-equipos-components-image-width'
                },
                {
                    title : /*html*/ `<div class="arriendo-equipos-component-title-width2 ">Servidores </div> Eventos`  ,
                    file  : '/assets/images/proyector.png' ,
                    position : 2 , 
                    class : 'arriendo-equipos-components-image-width' ,
                    margin : ' arriendo-equipos-components-margin-top2' ,
                    items : [
                        {
                            url   : '' ,
                            name  : 'Servidores'
                        },
                        {
                            url   : '' ,
                            name  : 'Hosting temporal'
                        },
                        {
                            url   : '' ,
                            name  : 'Virtualizaciones de servidores'
                        },
                        {
                            url   : '' ,
                            name  : 'Proyectores'
                        },
                        {
                            url   : '' ,
                            name  : 'Televisiones'
                        },
                        {
                            url   : '' ,
                            name  : 'Amplificaciones medias para oficinas'
                        },
                    ]   
                }
            ]
        }
    },
    template : /*html*/ `
        <div  class="container monserratLight" >
            
            <div  class="row textGray " >
                <div  class="col arriendo-equipos-components-padding monserratSemiBold" >
                    <h1 class="text-sm-left text-lg-center arriendo-equipos-components-title" >
                        Arriendo de equipos computacionales a corto y largo plazo, con soporte técnico e 
                        instalación en terreno.
                    </h1>
                </div>
            </div>

            <div  class="row textGray mb-5" >
                <div  class="col arriendo-equipos-components-padding " >
                    <p class=" monserratBlack text-sm-left text-lg-center fontSizeRegular" >
                        Equipos de acuerdo a sus necesidades y requerimientos, para presentaciones, 
                        capacitaciones o trabajo permanente en oficinas o en las casas de sus colaboradores:
                    </p>
                </div>
            </div>

            <div  class="row  align-items-center" :class="sale.margin" v-for="sale in sales">
                <div  
                    class="col-sm-12 col-md-6  col-lg-6 col-xl-6 orderSm1"
                    :class =" ( sale.position == 1 ) ? '  orderLg1 ' : ' orderLg2 ' "
                >
                    <img  
                        :class = "sale.class"
                        :src   = "sale.file"
                    />                    
                </div>

                <div  
                    class  = " col-sm-12 col-md-6  col-lg-6 col-xl-6 pl-sm-0 pl-md-2 pl-lg-5 orderSm2 " 
                    :class = " ( sale.position == 1 ) ? 'orderLg2 ' : ' orderLg1 ' "                
                    >
                    <div class="w-100 justify-content-center" >
                        <h2 class="textPrimary monserratSemiBold  arriendo-equipos-components-title-item ml-sm-3 mt-4" v-html="sale.title" >  </h2>
                        <ul class="w-100 mt-4 arriendo-equipos-list textGray  fontSizeMedium" >
                            <li v-for="item in sale.items " class="mt-1" >
                                <span v-if="item.url == ''" class="monserratRegular"> {{ item.name }}</span>
                                <a v-else :href="item.url" class="linkSecondary monserratBold  text-decoration" > <u> {{ item.name }} </u> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
}); 