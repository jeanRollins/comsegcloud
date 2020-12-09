Vue.component('header-component', {

    data (){
        return {
            submenus : [
                {
                    text         : 'Comseg CyberProtect' ,
                    file         : '/assets/icons/icon_gray_mobile.svg',
                    fileHover    : '/assets/icons/icon_mobile.svg',
                    itemToScroll : 'itemAcronis' ,
                    ref          : 'itemAcronisCyberProtect' ,
                    href : '/cyberprotect.html' ,
                    ruteChild: ['/cyberprotect.html']
                },
                {
                    text : 'Desarrollo de sistemas' ,
                    file : '/assets/icons/icon_gray_cart.svg',
                    fileHover : '/assets/icons/icon_cart.svg',
                    itemToScroll : 'itemAcronis' ,
                    ref          : 'itemAcronisDesarrolloSistemas',
                    href : '/desarrollo_sistema.html' ,
                    ruteChild: ['/desarrollo_sistema.html']
                },
                {
                    text : 'Seguridad Electrónica' ,
                    file : '/assets/icons/icon_gray_camera.svg' ,
                    fileHover : '/assets/icons/icon_camera.svg' ,
                    itemToScroll : 'itemAcronis' , 
                    ref          : 'itemAcronisSeguridadElectronica' ,
                    href : '/seguridad.html' ,
                    ruteChild: [
                        '/seguridad.html' ,
                        '/seguridad_alarmas.html' ,
                        '/seguridad_control_acceso.html' ,
                        '/seguridad_camaras.html' ,
                        '/seguridad_contador.html' 
                    ]
                },
                {
                    text : 'Soporte TI' ,
                    file : '/assets/icons/icon_gray_arreglar.svg' ,
                    fileHover : '/assets/icons/icon_arreglar.svg' ,
                    itemToScroll : 'itemAcronis' ,
                    ref          : 'itemAcronisSoporteTi' ,
                    href : '/soporte.html' ,
                    ruteChild: ['/soporte.html']
                },
                {
                    text : 'Redes' ,
                    file : '/assets/icons/icon_gray_router.svg',
                    fileHover : '/assets/icons/icon_router.svg',
                    itemToScroll : 'itemAcronis' ,
                    ref          : 'itemAcronisRedes' ,
                    href : '/redes.html' ,
                    ruteChild: [
                        '/redes.html' ,
                        '/redes_cableadas.html' ,
                        '/redes_sdwan.html' 
                    ]
                },
                {
                    text : 'Arriendo de equipos' ,
                    file : '/assets/icons/icon_gray_pc.svg' ,
                    fileHover : '/assets/icons/icon_pc.svg' ,
                    itemToScroll : 'itemAcronis' ,
                    ref          : 'itemAcronisArriendoEquipos' ,
                    href : '/arriendo_equipos.html' ,
                    ruteChild : [
                        '/arriendo_equipos.html' ,
                        '/arriendo_notebooks.html' 
                    ]
                }
            ] ,
            pathNameCurrent : ''
        }
    },
    mounted(){
        this.setIconPageCurrent()
    },
    methods : {
        setIconPageCurrent : function(){
            this.pathNameCurrent = location.pathname ;
            this.submenus.forEach( row => {
                if( row.ruteChild.includes( this.pathNameCurrent ) ) {

                    let itemMenu  = document.querySelector( '#' + row.ref ) ;
                    let submenuText  = document.querySelector( '#text' + row.ref ) ;

                    itemMenu.src = row.fileHover ;
                    submenuText.classList.add('textPrimaryLight') ;
                    submenuText.classList.remove('text-white') ;
                    submenuText.disabled = true ;
                }  
            })
        } ,
        scrollElement : function ( idElement , e ) {
            
            e.preventDefault() ;
            let   element = document.getElementById( idElement );
     
            const headerOffset = 45;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;
            
            scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });   
        },
        hoverSubmenu  : function( fileHover , ref , urlCurrent , textId ) {
            if( this.pathNameCurrent == urlCurrent ) return ;
            let submenu = document.querySelector( '#' + ref ) ;
            let submenuText = document.querySelector( '#' + textId ) ;
            submenuText.classList.add('textPrimaryLight') ;
            submenuText.classList.remove('text-white') ;

            submenu.src = fileHover ;
        },
        leaveSubmenu  : function( file , ref , urlCurrent  , textId) {
            if( this.pathNameCurrent == urlCurrent ) return ;
            let submenu = document.querySelector( '#' + ref ) ;
            let submenuText = document.querySelector( '#' + textId ) ;
            submenuText.classList.remove('textPrimaryLight') ;
            submenuText.classList.add('text-white') ;
            submenu.src = file ;
        }
    },
    template : /*html*/ `
            <div class=" w-100">
                

                <nav class="header-component w-100">

                    <div class="container myContainer monserratLight" >
                        <div class="row verticalAlignEndMedium" > 
                            <div class=" col-6  "> 
                                <a href="/" class="link">
                                    <img class="header-component-logo" src="../../assets/logos/Imagotipo vectorial_ COMSEG_page-0001.jpg"  > 
                                </a>
                            </div> 
                            <div class="col-xs-3  mt-3 d-block d-xs-block d-sm-block d-md-block d-lg-none d-xl-none">   
                                <a href="tel:+569 23274 6200" class="link fontSizeSmall monserratLight header-component-phone"> +569 23274 6200 </a>
                            </div> 
                            <div class="col ml-1 d-block d-xs-block d-sm-block d-md-block d-lg-none d-xl-none mt-3 text-md-center">   
                                <menu-component>  </menu-component>
                            </div> 
                            <div class="col alignItemsEnd mb-3 d-none  d-sm-block d-md-none d-lg-block d-xl-block">
                                <div class="container h-100" >
                                    <div class="row h-100 align-items-end"> 
                                        
                                        <div class="col-7  ">   
                                            <div class="container " >
                                                <div class="row "> 
                                                    <div class="col"> <a href="/" class = "link"> Inicio    </a> </div>             
                                                    <div class="col"> <a href="/" class = "link"> Nosotros  </a> </div> 
                                                    <div class="col"> <a href="/" class = "link"> Servicios </a> </div> 
                                                    <div class="col"> <a href="/contacto.html" class = "link"> Contacto  </a> </div>
                                                </div>
                                            </div>
                                        </div> 

                                        <div class="col text-white"> 
                                           <span class=""> Llámanos al </span>   <a href="tel:+569 23274 6200" class="link monserratSemiBold"> +569 23274 6200 </a>
                                        </div> 

                                    </div>
                                    
                                </div>
                            </div>

                        </div>

                    </div>
                
                </nav>
                <div class="header-component-subheader">
                    <div class="container myContainerMD">
                        <div class="row" >
                            <div class="col pt-3 " v-for="submenu in submenus">
                                <a class="text-decoration-none header-component-subheader-link" 
                                    v-on:mouseover="hoverSubmenu( submenu.fileHover , submenu.ref , submenu.href , 'text'+ submenu.ref )"
                                    v-on:mouseleave="leaveSubmenu( submenu.file , submenu.ref , submenu.href , 'text'+ submenu.ref )"
                                    v-on:click=" " 
                                    :href="submenu.href">  
                                    <img 
                                        class="header-component-subheader-icon-image" 
                                        :src="submenu.file" 
                                        :id="submenu.ref"
                                        >
                                    <div :id="'text'+ submenu.ref" class="d-none text-white  d-sm-block d-md-none d-lg-inline-block d-xl-inline-block monserratLight" > {{  submenu.text  }} </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div> `
})