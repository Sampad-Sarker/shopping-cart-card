app.component('review-form',{
    template:
    /*html*/ 
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">

    <label for="review">Review:</label>      
    <textarea id="review" v-model="review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <label for="question">Would you recommend this product?</label>
    <select id="question" v-model="question">
      <option>Yes,of course</option>
      <option>May be</option>
      <option>Yes,but..</option>
      <option>I'm thinking...</option>
      <option>Not at all</option>
    </select>

    

   

    <input class="button" type="submit" value="Submit">  

  </form>`,

  data() {
      return {
          name:'',
          review:'',
          rating:null,
          question:''
      }
  },

  methods: {
    onSubmit(){
        if(this.name===''|| this.review === ''|| this.rating === null){
            alert("please submit review properly")
            return;
        }
        let productReview = {
            name:this.name,
            review:this.review,
            rating:this.rating,
            question:this.question
        }

        this.$emit('review-submitted',productReview)

        this.name ='',
        this.review ='',
        this.rating = null,
        this.question =''

    }
  },

    
})