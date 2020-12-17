var app = new Vue({
  el: "#root",
  data: {
    cards: [],
    genres: [],
    select: ""
  },
  mounted() {
    axios
     .get('https://flynn.boolean.careers/exercises/api/array/music')
     .then((arr) => {
       arr.data.response.forEach((element) => (this.cards.push(element)))
     });

    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((arr) => {
        arr.data.response.forEach((element) => {
          var notPush = false;
          this.genres.forEach((genre, index) => {
            if (element.genre == genre) {
              notPush = true;
            }
          });

          if(notPush == false) {
            this.genres.push(element.genre);
          }
        })
      });
  },
  methods: {
  
  }
})
