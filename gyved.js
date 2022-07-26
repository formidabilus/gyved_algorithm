const makeUser = function () {
  return {
    behaviour: "",
    jump: function () {
      this.behaviour += "jumping, ";
      return this;
    },
    speak: function () {
      this.behaviour += "speaking, ";
      return this;
    },
    run: function () {
      this.behaviour += "running, ";
      return this;
    },
    swim: function () {
      this.behaviour += "swimming, ";
      return this;
    },
    sleep: function () {
      this.behaviour += "sleeping, ";
      return this;
    },
    exec: function () {
      return this.behaviour.slice(0, -2);
    },
  };
};

const user = makeUser();
console.log(
  user.sleep().swim().speak().jump().swim().sleep().run().run().exec()
);
