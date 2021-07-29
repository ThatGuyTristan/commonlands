export default {
  methods: {
    rolld100(){
      return Math.round(Math.random() * 100);
    },
    spellSuccessful(resistance){
      let roll = this.rolld100()
      console.log(resistance, roll)
      return roll > resistance;
    },
  },

}