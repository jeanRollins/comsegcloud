Vue.component( 'desarollo-sistema-content', {
    data(){
        return{
            items:[
                {
                    title : 'Tiendas Online' ,
                    file  : '/assets/images/shutterstock_1023035833.jpg' ,
                    url   : '#' ,
                    class : ``
                },
                {
                    title : 'Integraciones' ,
                    file  : '/assets/images/shutterstock_100334786.jpg' ,
                    url   : '#' ,
                    class : ``
                },
                {
                    title : 'Desarrollo Aplicaciones Web' ,
                    file  : '/assets/images/shutterstock_124651189.jpg' ,
                    url   : '#',
                    class : `desarrollo-sistema-aling-text-item`
                },
                {
                    title : 'Desarrollo Aplicaciones de Escritorio' ,
                    file  : '/assets/images/shutterstock_126653195.jpg' ,
                    url   : '#' ,
                    class : `desarrollo-sistema-aling-text-item`
                },
                {
                    title : 'Diseño de Sistemas y Procesos' ,
                    file  : '/assets/images/shutterstock_345456413.jpg' ,
                    url   : '#' ,
                    class : `desarrollo-sistema-aling-text-item`
                }
            ]
        }
    },
    template: /*html*/ `
        <div class="container  desarrollo-sistema-content">
            <div class="row monserratSemiBold ">
                <div class="col  "> 
                    <h5 class="desarrollo-sistema-title"> 
                        En Comseg nos enfocamos en encontrar la solución <br/> que mejor se adapta a los requerimientos de cada cliente.
                    </h5>
                </div>
            </div>        
            <div class="row monserratLight my-4">
                <div class="col "> 
                    <p class="desarrollo-sistema-description "> Estas soluciones pueden pasar por desarrollo de tiendas online, modelamiento, diseños y desarrollo de sistemas a medida, 
                        integración de aplicaciones, integración con servicios de terceros (Mercado Libre, Transbank, Chilexpress, etc).  
                    </p>
                </div>
            </div>

            <div class="row justify-content-center" v-for="( item, index ) in items">
                <div class="col"> 
                    <div class="desarrollo-sistema-containt w-100">
                     
                            
                            <div class="desarrollo-sistema-containt-item-sm h-100"> 
                                <img class="desarrollo-sistema-content-icon h-100" src="/assets/icons/btn-black-left.svg" />
                            </div>

                            <div :class=" item.class " class="desarrollo-sistema-containt-item-md h-100 pl-2"> 
                                <p class="monserratSemiBold h-100 " > {{ item.title }} </p>
                            </div>

                            <div class="desarrollo-sistema-containt-item "> 
                                <img :src="item.file" class="w-100 h-100" />
                            </div>

                        </div>
                        <div class="row" v-if=" index != ( items.length - 1 ) "> 
                            <div class="col"> 
                                <hr/>
                            </div>
                        </div>
                      
                </div>
            </div>
            
        </div>
    `
})