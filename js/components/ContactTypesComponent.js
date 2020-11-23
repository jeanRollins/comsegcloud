Vue.component( 'contact-types-component', {
    data(){
        return {
            contacts : [
                {
                    title : 'Visítanos' ,
                    file  : '../../assets/icons/map.svg' ,
                    description : 'General del canto 426, Providencia Santiago, Chile 7500632' 
                },
                {
                    title : 'Escribenos' ,
                    file  : '../../assets/icons/mail.svg' ,
                    description : "Para más informacion info@comseg.cl" 
                },
                {
                    title : 'Llámanos' ,
                    file  : '../../assets/icons/cellphone.svg' ,
                    description : "Lunes a viernes 09:00 a 18:00 hrs. +562 32746200" 
                }
            ]
        }
    },
    template : /*html*/ `
        <div class=" acronis-component-contact mt-4">
            <div class="container ">
                <div class="row text-center " >

                    <div class="col my-5 textGray"  >
                        <h4 class="monserratSemiBold"> Estamos aquí para ayudarte </h4>
                    </div>
                
                </div>

                <div class="row h-100 monserratSemiBold" >

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 " v-for="contact in contacts" >
                        <div  class=" card w-100 noBorder centerItems acronis-component-background textGray " >

                            <div class="borderCircle ">
                                <img  v-bind:src="contact.file" class="acronis-component-image-circle" alt="...">
                            </div>
                            
                            <div class="card-body text-center">
                                <h5 class="card-title textPrimary font-weight-bold">{{ contact.title }}</h5>
                                <p class="fontSizeMedium"> {{ contact.description  }} </p>
                            </div>
                        

                        </div>      
                    </div>
                
                </div>
            </div>
        </div>
    `
})