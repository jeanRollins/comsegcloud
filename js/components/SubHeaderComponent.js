Vue.component('subheader-component',{
    props: {
        items : Array 
    } ,

    template: /*html*/ `
        <div class="container myContainer ">
            <div class="row fontSizeSmall monserratLight">

                <div class="col-9 mt-3">
                    <a 
                        v-for  = "( item , index ) in items"
                        class  = "linkSecondary" 
                        :href  = "item.url" 
                        :class = "( index == ( items.length -1 ) ) && 'monserratSemiBold' "
                    > 
                        {{ item.name }} &nbsp;  
                        <span v-if="( index != ( items.length -1 ) ) "> > &nbsp; </span>
                    </a> 
                   
                    
                </div>
                <div class="col mt-3 ">
                    <a 
                        :href="items[ ( items.length - 2 ) ].url" 
                        class="linkSecondary " > Volver  </a>
                </div>
            </div>
            <div class="row ">
                <div class="col">
                    <hr/>
                </div>
            </div>        
        </div>
    `
})