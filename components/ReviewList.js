app.component('review-list',{
    template:
    /*html*/
    `<div class="review-container" style="overflow:hidden;">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review,index) in reviews" :key="index">
                <b>{{review.name}}</b> gave {{review.rating}}star rating and recommended: {{review.question}}
                <br>
                "{{review.review}}"
                
            </li>
        </ul>

    </div>
    ` ,
    props:{
        reviews:{type:Array,required:true}
    },


})