Vue.component( 'footer-component' , {
    data() { 
        return {
            contacts : [
                {
                    text : `  <div class="d-inline-block footer-component-text-contact"> General del Canto 426, </div> <span class=" " > Providencia, Santiago</span> ` ,
                    file : '../../assets/icons/location.svg' ,
                    href : 'https://goo.gl/maps/rRLt9ozHKbo7vhFW7'

                },
                {
                    text : '<div class="d-inline-block footer-component-text-contact"> Información de servicios </div> <span class="monserratBlack"> +56 23274 6200 </span> ' ,
                    file : '../../assets/icons/cell.svg' ,
                    href : 'tel:+569 23274 6200'
                },
                {
                    text : '<div class="d-inline-block footer-component-text-contact"> Consultas de productos </div> <span class="monserratBlack"> info@comseg.cl </span>' ,
                    file : '../../assets/icons/message.svg' ,
                    href : 'mailto: info@comseg.cl?subject = Información comercial'
                }
            ]
             
        }
    },
    template: /*html*/ `
        <div class="footer-component h-100">
            <div class="container myContainer " >
                <div class="row pb-5">
                    <div class="col-4 d-none  d-sm-block d-md-none d-lg-block d-xl-block">
                        <img src="../../assets/logos/Imagotipo vectorial_ COMSEG_page-0005.jpg" class="footer-component-logo" > 
                    </div>
                    <div class="col align-middle">
                        <div class="container h-100 ">
                            <div class="row h-100 align-items-center">
                                
                                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-white d-inline footer-component-space p-0" v-for="contact in contacts" >
                                    
                                    <div class="container">
                                        <div class="row align-items-center justify-content-center">
                                            <div class="col-2 pt-2">
                                                <div class="footer-component-contact-icon text-center">
                                                    <img v-bind:src="contact.file" class="footer-component-icon mt-2">
                                                </div>    
                                            </div>    
                                            <div class="col">
                                                <a class="link w-100"  :href="contact.href" > <p class="footer-component-contact-text w-100 monserratLight m-0" v-html="contact.text"> </p> </a>
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
    `
})