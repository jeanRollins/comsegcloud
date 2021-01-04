Vue.component('contact-component',{
    data(){
        return {

        }
    },
    template: /*html*/ `
        <div>
            <div class="container monserratLight ">
                <div class="row contact-component-title  contact-component-padding" >
                    <div class="col p-0">
                        <h1 class="textPrimary monserratSemiBold "> Contacto </h1>
                    </div>    
                </div>
                        
            </div>

            <div class="container monserratLight marginBottom">
                <div class="row contact-component-padding ">
                    <div class="col mt-2 d-none d-xs-block d-sm-block  ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.674119557675!2d-70.6188894843022!3d-33.43173948077943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf640ebbc5e1%3A0xe6792eda132fed99!2sComercial%20Comseg%20Y%20Cia%20Ltda!5e0!3m2!1ses-419!2scl!4v1605713650026!5m2!1ses-419!2scl" class="w-75" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        <div class="w-100">
                            <h5 class="textPrimary  mt-4  fontSizeMedium monserratSemiBold"> Dirección </h5>
                            <p class=" fontSizeMedium monserratRegular"> General del Canto 426, Providencia <br/> Santiago, Chile. </p>
                        </div>
                        <div class="w-100">
                            <h5 class="textPrimary monserratSemiBold mt-4 fontSizeMedium"> Teléfono </h5>
                            <p class=" fontSizeMedium monserratRegular"> +56 23274 6200 </p>
                        </div> 
                        <div class="w-100">
                            <h5 class="textPrimary monserratSemiBold mt-4 fontSizeMedium"> Email </h5>
                            <p class="fontSizeMedium monserratRegular"> info@comseg.cl </p>
                        </div> 
                    </div> 
                    <div class="col fontSizeMedium">
                        <div class="form-group">
                            <label for="name" class="monserratBlack">Nombre Completo *</label>
                            <input type="text" class="form-control inputBackgound fontSizeMedium" ref="name" v-model="name" id="name" placeholder="Carlos Luis...">
                        </div>
                        <div class="form-group">
                            <label for="email" class="monserratBlack">Correo  Electrónico * </label>
                            <input type="text" class="form-control inputBackgound fontSizeMedium" ref="email" v-model="email" id="email" placeholder="carlos@ejemplo.com">
                        </div>
                        <div class="form-group ">
                            <label for="asunto" class="monserratBlack">Asunto *</label>
                            <input type="text" class="form-control inputBackgound fontSizeMedium" ref="asunto" v-model="asunto" id="asunto" placeholder="Comercial...">
                        </div>
                        <div class="form-group">
                            <label for="mensaje" class="monserratBlack">Mensaje * </label>
                            <textarea class="form-control inputBackgound fontSizeMedium" ref="mensaje" v-model="mensaje" id="mensaje" rows="3"></textarea>   
                        </div>
                        <button class="btn btn-primary btnBlack monserratBlack mt-2 mb-3" > enviar </button>
                        <small class="textPrimary ml-3 monserratBlack contact-component-field mt-4 mb-3 float-right"> *Campo obligatorio </small>
                    </div>    
                </div>
                        
            </div>
        </div>
    `
})