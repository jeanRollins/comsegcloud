Vue.component( 'arriendo-notebook-component' , {  
    data(){
        return{
            items : [
                'Notebook' ,
                'Impresoras laser' ,
                'Computadores de escritorio' ,
                'Impresoras zebra' ,
                'Monitores' ,
                'Lectores de código de barra' 
            ],
            notebooks : [
                {
                    title : '' ,
                    file : '/assets/images/notebook_gama_baja.png' ,
                    descriptions:[
                        'Intel® Core™ i3' ,
                        '4 GB RAM' ,
                        '128 GB SSD' ,
                        'Windows 10' 
                    ]
                },
                {
                    title : '' ,
                    file : '/assets/images/notebook_gama_media.png' ,
                    descriptions:[
                        'Intel® Core™ i5' ,
                        '8 GB RAM' ,
                        '256 GB SSD' ,
                        'Windows 10 Pro' 
                    ]
                },
                {
                    title : '' ,
                    file : '/assets/images/notebook_gama_alta.png' ,
                    descriptions:[
                        'Intel® Core™ i7' ,
                        '16 GB RAM' ,
                        '1 TB SSD' ,
                        'Intel HD Graphics' ,
                        'Windows 10 Pro' 
                    ]
                }
            ] ,

            img : '/assets/icons/flecha-izquierda.svg' 
        }
    },
    methods : {
        changeImage : function(){
            const arrowDown = '/assets/icons/flecha-hacia-abajo-para-navegar.svg' ;
            const arrowLeft = '/assets/icons/flecha-izquierda.svg' ;

            const attrCurrent = this.$refs.arrow.getAttribute('src')
            this.img = ( attrCurrent == arrowDown ) ? arrowLeft : arrowDown ;

        }
    },
    template : /*html*/ `
        <div class="container monserratLight">
            <div class="row">
                <div class="col ">
                    <h1 class="d-none d-md-block d-lg-block d-xl-block textPrimary monserratSemiBold my-5"> Equipos </h1>
                    
                    <a 
                        class="d-block d-lg-none d-xl-none  arriendo-notebook-component-btn-collapse text-white text-decoration-none"
                        data-toggle="collapse" 
                        href="#collapseExample" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="collapseExample"    
                        v-on:click="changeImage()"
                    > 
                        
                        Equipos  
                        <img class="img-fluid" ref="arrow" :src="img">    
                    </a>
                </div>
            
            </div>

            <div class="row">
                
                <div id="collapseExample" class="collapse col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 show">
                    
                    <ul >
                        <li v-for="item in items" > {{ item }} </li>
                    </ul>

                </div>

                <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 monserratBlack">
                    <h4 class="textGray "> Notebook </h4>
                    <p class="textGray "> Características de equipos en arriendo </p>
                    
                    <div v-for="notebook in notebooks" class="my-5" >
                        <img :src="notebook.file" class="img-fluid" />
                        <ul class="list-unstyled mt-4">
                            <li v-for="description in notebook.descriptions"> {{ description }} </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    `
}) ;