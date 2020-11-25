

Vue.component('home-component', {
    data(){
      return {
        show : false ,
        slideItems : [
          [
            {  
              file        : '/assets/images/slide/shutterstock_767544493.jpg' ,
              title       : 'Comseg CybertProtect' ,
              description : 'Seguridad, Protección y Gestión'
            },
            {  
              file        : '/assets/images/slide/shutterstock_367136834.jpg' ,
              title       : 'Desarrollo de Sistemas' ,
              description : 'E-commerce y más'
            },
            {  
              file        : '/assets/images/slide/shutterstock_1393698617.jpg' ,
              title       : 'Seguridad y protección' ,
              description : 'Inteligencia y negocio'
            },  
          ],
          [
            {  
              file        : '/assets/images/slide/shutterstock_1236017206.jpg' ,
              title       : 'Comseg CybertProtect' ,
              description : 'Seguridad, Protección y Gestión'
            },
            {  
              file        : '/assets/images/slide/shutterstock_1278039331.jpg' ,
              title       : 'Seguridad y protección' ,
              description : 'E-commerce y más'
            },
            {  
              file        : '/assets/images/slide/shutterstock_1393698617.jpg' ,
              title       : 'Desarrollo de Sistemas' ,
              description : 'Seguridad, Protección y Gestión'
            } 
          ]
        ] ,
        textTransition :
        `Entregamos  <span class="monserratBlack"> soluciones sencillas</span>,  confiables,  oportunas,  <span class="monserratBlack">fáciles de administrar </span>  y  acordes  a  las  necesidades  de  cada  cliente.`,
        arrayText : [] ,
        arrayTextLength : 0 ,
        i : 0 
      }
    },
    beforeMount() {
    },
    mounted() {
      this.setItems() ;
      this.showMessage() ;
    },
    methods:{
      transTextToArray : function( text ){
        const array = text.split("  ");
        return array ;
      },
      addPacity : function( ){
        let texts = document.querySelectorAll('.fadeEffect') ;
        
        texts[this.i].classList.add('fadeEffectOpacity') ;
        this.i++ ;
      },
      showMessage : function( ){
        const timeForStartIteration = 2000 ;

        const timeForIterativeForElement = 100 ;

        setTimeout( () => {
          setInterval( () => this.i < this.arrayTextLength && this.addPacity( )  , timeForIterativeForElement ) 

        } , timeForStartIteration ) ;

      },
      setItems : function (  ){
        const arrayText =  this.transTextToArray( this.textTransition ) ;
        this.arrayTextLength = arrayText.length ;
        let textContent = `` ;
        arrayText.forEach( row => textContent += `<span class="fadeEffect"> ${row} </span>` ) ;
        this.$refs.textContent.innerHTML = textContent ;
      },
      hoverSubmenu  : function( fileHover , ref  ) {
        let submenu = document.querySelector( '#' + ref ) ;
        submenu.src = fileHover ;
      },
      leaveSubmenu  : function( file , ref  ) {
          let submenu = document.querySelector( '#' + ref ) ;
          submenu.src = file ;
      }
    },
    template : /*html*/ `
      <div>
        <section class="pt-5 pb-5">
          <div class="container home-component-container">
            <div class="row">
              <div class="col-6">
                  <h2 class="m-3 monserratSemiBold">Simplifícate </h2>
              </div>
              <div class="col-6 text-right">
                <a 
                  class=" mb-3 mr-1"  
                  href="#carouselExampleIndicators2" 
                  role="button" 
                  data-slide="prev"
                  v-on:mouseover="hoverSubmenu( '/assets/icons/btn-left.svg' , 'btnSlideLeft'  )"
                  v-on:mouseleave="leaveSubmenu( '/assets/icons/btn-left-active.svg' , 'btnSlideLeft' )"
                >
                  <img class="home-component-icon-slide" id="btnSlideLeft"  src="/assets/icons/btn-left-active.svg">
                </a>
                <a 
                  class="mb-3 " 
                  href="#carouselExampleIndicators2" 
                  role="button" 
                  data-slide="next"
                  v-on:mouseover="hoverSubmenu(  '/assets/icons/btn-right.svg' , 'btnSlideRight' )"
                  v-on:mouseleave="leaveSubmenu(  '/assets/icons/btn-right-active.svg' , 'btnSlideRight' )"  
                >
                  <img  
                    class="home-component-icon-slide" 
                    src="/assets/icons/btn-right-active.svg"
                    id="btnSlideRight"  
                  >
                </a>
              </div>
              <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
    
                    <div class="carousel-inner" >

                      <div 
                        class=" carousel-item " 
                        v-for="( items, index ) in slideItems" 
                        :class=" (index == 0) && 'active' "
                      >
                        <div class="row">
                          <div class="col-lg-4  mb-3" v-for="item in items">
                            <div class="card noBorder p-3">
                              <img 
                                class = " img-fluid "
                                :src  = "  item.file "  
                              >
                              <div class="card-body">
                                <h4 class="card-title monserratSemiBold">{{ item.title }}</h4>
                                <p class="card-text monserratLight"> {{ item.description }} </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
        <div class="bgDark">
          <div class="container">
            <div class="row">
              <div class="col home-component-text-description text-white text-center monserratLight px-4 ">
                <p class="" ref="textContent" > 
                    
                </p>
             
              </div>
            </div>
          </div>
        </div>

        <div class="container home-component-text-pcs">
          <div class="row">
            <div class="col my-4">
              <h1  class="textPrimary monserratSemiBold ">
                <span class="lyricsWithBorder"> Creamos</span>  
                 relaciones a largo plazo 
              </h1>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col monserratBlack h5 textGray home-component-text-principal">
              <p>
                Desde 1989 estamos orientados a entregar soluciones sencillas, confiables, oportunas, fáciles de administrar 
                y acordes a las necesidades de cada cliente, sin perder de vista la relación precio-calidad.
                Creamos relaciones de largo plazo con nuestros clientes y proveedores. Ofrecemos productos y servicios que simplifican
                el trabajo a nuestros clientes.
              </p> 
            </div>
          </div>
          <div class="row my-4 ">
            <div class="col ">
              <img src="/assets/images/home_pcs.png" class="img-fluid"/> 
            </div>
          </div>
          <div class="row my-4 monserratBlack textGray home-component-text-secondary">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6  col-xl-6 mt-3">
              <p class="home-component-border-text-secondary" >
                Creamos relaciones de largo plazo con nuestros clientes y proveedores. 
               </p>  
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6  col-xl-6 mt-3">
              
              <p class="home-component-border-text-secondary ">
                Ofrecemos productos y servicios que le simplifican el trabajo a nuestros clientes.. 
              </p>
            </div>
          </div>
        </div>
        
      </div>
    `
})