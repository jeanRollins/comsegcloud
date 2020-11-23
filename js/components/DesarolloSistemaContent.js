Vue.component( 'desarollo-sistema-content', {
    data(){
        return{
            items:[
                {
                    title : 'Tiendas Online' ,
                    file  : '/assets/images/shutterstock_1023035833.jpg' ,
                    url   : '#'
                },
                {
                    title : 'Integraciones' ,
                    file  : '/assets/images/shutterstock_100334786.jpg' ,
                    url   : '#'
                },
                {
                    title : 'Desarrollo Aplicaciones Web' ,
                    file  : '/assets/images/shutterstock_124651189.jpg' ,
                    url   : '#'
                },
                {
                    title : 'Desarrollo Aplicaciones de Escritorio' ,
                    file  : '/assets/images/shutterstock_126653195.jpg' ,
                    url   : '#'
                },
                {
                    title : 'Diseño de Sistemas y Procesos' ,
                    file  : '/assets/images/shutterstock_345456413.jpg' ,
                    url   : '#'
                }
            ]
        }
    },
    template: /*html*/ `
        <div class="container  textGray desarrollo-sistema-content">
            <div class="row monserratSemiBold my-5">
                <div class="col  "> 
                    <h4 class="desarrollo-sistema-title"> En Comseg nos enfocamos en encontrar la solución que mejor se adapta a los requerimientos de cada cliente.</h4>
                </div>
            </div>        
            <div class="row monserratLight my-5">
                <div class="col "> 
                    <p class="desarrollo-sistema-description"> Estas soluciones pueden pasar por desarrollo de tiendas online, modelamiento, diseños y desarrollo de sistemas a medida, 
                        integración de aplicaciones, integración con servicios de terceros (Mercado Libre, Transbank, Chilexpress, etc).  
                    </p>
                </div>
            </div>

            <div class="row justify-content-center" v-for="item in items">
                <div class="col"> 
                    <div class="desarrollo-sistema-containt w-100 textGray">
                     
                            
                            <div class="desarrollo-sistema-containt-item-sm h-100"> 
                                <img class="desarrollo-sistema-content-icon h-100" src="/assets/icons/btn-black-left.svg" />
                            </div>

                            <div class="desarrollo-sistema-containt-item-md h-100"> 
                                <p class="monserratSemiBold h-100"> {{ item.title }} </p>
                            </div>

                            <div class="desarrollo-sistema-containt-item h-100"> 
                                <img :src="item.file" class="img-fluid" />
                            </div>

                        </div>
                        <div class="row"> 
                            <div class="col"> 
                                <hr/>
                            </div>
                        </div>
                      
                </div>
            </div>
            
        </div>
    `
})