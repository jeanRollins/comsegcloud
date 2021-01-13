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
                    class : '' ,
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
                    class : '' ,
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
                    class : 'arriendo-equipos-components-mbottom' ,
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
        <div class="container monserratRegular myContainerMD textGray">
            <div class="row arriendo-equipos-components-padding">
                <div class="col ">
                    <h1 class="d-none d-md-block d-lg-block d-xl-block textPrimary monserratSemiBold my-5"> Equipos </h1>
                    
                    <a 
                        class="d-block  d-md-none d-lg-none d-xl-none  arriendo-notebook-component-btn-collapse text-white text-decoration-none"
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

            <div class="row arriendo-equipos-components-padding">
                
                <div id="collapseExample" class="mb-5 collapse col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 show">
                    
                    <ul >
                        <li v-for="item in items" class="my-3"> {{ item }} </li>
                    </ul>

                </div>

                <div class="arriendo-equipos-components-mtop col-xs-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 offset-md-1 offset-lg-1 ">
                    <h4 class=" "> Notebook </h4>
                    <p class=" "> Características de equipos en arriendo </p>
                    
                    <div v-for="notebook in notebooks" 
                         class="my-5" 
                         :class="notebook.class" 
                    >
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