Vue.component( 'footer-component' , {
    data() { 
        return {
            contacts : [
                {
                    text : 'General del Canto 426, Providencia, Santiago' ,
                    file : '../../assets/icons/location.svg' ,
                    href : 'https://goo.gl/maps/rRLt9ozHKbo7vhFW7'

                },
                {
                    text : 'Información de servicios +56 23274 6200' ,
                    file : '../../assets/icons/cell.svg' ,
                    href : 'tel:+569 23274 6200'
                },
                {
                    text : 'Consultas de productos info@comseg.cl' ,
                    file : '../../assets/icons/message.svg' ,
                    href : 'mailto: info@comseg.cl?subject = Información comercial'
                }
            ]
             
        }
    },
    template: /*html*/ `
        <div class="footer-component pb-3">
            <div class="container myContainer " >
                <div class="row">
                    <div class="col-4 d-none  d-sm-block d-md-none d-lg-block d-xl-block">
                        <img src="../../assets/logos/Imagotipo vectorial_ COMSEG_page-0005.jpg" class="footer-component-logo" > 
                    </div>
                    <div class="col align-middle">
                        <div class="container h-100 ">
                            <div class="row h-100 align-items-center">
                                
                                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-white d-inline footer-component-space p-0" v-for="contact in contacts" >
                                    <div class="footer-component-contact-icon text-center">
                                       <img v-bind:src="contact.file" class="footer-component-icon mt-2">
                                    </div>    
                                    <a class="link"  :href="contact.href" > <span class="fontSizeSmall w-75 monserratLight"> {{ contact.text }}</span> </a> 
                                </div>

                              

                            </div>
                        </div> 
                    </div>
                </div>
            </div>    
        </div>
    `
})