Vue.component( 'seguridad-camaras-component' , {
    data(){
        return{
            items:[
                {
                    number : 1 ,
                    text : `Cuántos puntos de entrada tiene la propiedad o negocio a proteger.`
                },
                {
                    number : 2 ,
                    text : `Qué condiciones afectan al lugar (condiciones atmosféricas, nivel de luz, riesgo vandalismo, etc.)`
                },
                {
                    number : 3 ,
                    text : `Cuál es el tamaño del lugar y cómo está dispuesto (puntos ciegos, distancia máxima a grabar, etc.)`
                }
            ]
        }
    },
    template : /*html*/ `
        <div class="container monserratLight">
            <div class="row titlePadding mt-4">
                <div class="col">
                    <h2 class="textPrimary monserratSemiBold text-xl-center text-lg-center text-md-center seguridad-camaras-component-title"> Cámaras de seguridad </h2>
                </div>
            </div>
            <div class="row titlePadding  mt-4 ">
                <div class="col">
                    <p class="textGray  text-xl-center text-lg-center text-md-center"> 
                        En la actualidad existe una gran variedad de cámaras de seguridad, que varían según su función, localización
                        o conexión. Entre ellas podemos encontrar:
                    </p>
                </div>
            </div>
            <div class="row titlePadding  mt-4  textGray ">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                    <li class=" seguridad-camaras-component-item-list text-lg-center text-xl-center">  Cámaras Análogas</li>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">        
                    <li class=" ">  Cámaras IP, Cableadas o Wifi</li>

                </div>
        
                
            </div>

            <div class="row mt-5 p-2 ">
                <div class="col titlePadding">
                    <img src="/assets/images/seguridad/camara_seguridad.png" class="w-100 h-100" >

                </div>
            </div>

            <div class="row monserratLight titlePadding seguridad-camaras-component-margin ">
                
                <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6">
                    <h2  class="textPrimary monserratSemiBold seguridad-camaras-component-title-item text-md-right text-lg-right ">
                    
                        A la hora de <br class="d-none d-sm-block d-md-none "/>
                        escoger el mejor  <br class="d-none d-sm-block d-md-none "/>
                        sistema de <br class="d-none d-sm-block d-md-none "/>
                        cámaras se debe <br class="d-none d-sm-block d-md-none "/>
                        considerar <br class="d-none d-sm-block d-md-none "/>
                         
                    </h2>
                    
                </div>

                <div class="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 fontSizeMedium">
                    <div 
                        class  ="w-100 seguridad-camaras-component-item "
                        :class =" (index != 0 ) && 'my-3' " 
                        v-for=" (item, index) in items ">
                        <table >
                            <tr>
                                <td>
                                    <h1 
                                        class="textPrimary monserratSemiBold mr-3 seguridad-camaras-component-item-number"
                                        :class =" (index == 0 ) ? 'mr-4 ' : 'mr-3' " 
                                    > {{ item.number }}. </h1>
                                </td>
                                <td>
                                    {{ item.text }} 
                                </td>
                            </tr>

                        </table>
                                                
                    </div>   
                </div>

            </div>

        </div>
    `
});