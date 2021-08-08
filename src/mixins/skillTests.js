export default {
  methods: {
    rolld100() {
      return Math.round(Math.random() * 100);
    },
    spellSuccessful(target = 40) {
      let roll = this.rolld100();
      console.log(target, roll);
      return roll > target;
    },
  },
};
