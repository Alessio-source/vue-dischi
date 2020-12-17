var app = new Vue({
  el: "#root",
  data: {
    cards: []
  },
  mounted() {
    axios
     .get('https://flynn.boolean.careers/exercises/api/array/music')
     .then((arr) => {
       arr.data.response.forEach((element) => (this.cards.push(element)))
     });
  }
})
