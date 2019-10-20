const ladder = {
  step: 0,
  up() {
    this.step += 1.5;
    return this;
  },
  down() {
    this.step -= 1.5;
    return this;
  },
  showStep() {
    return this.step;
  }
};
module.exports = ladder;
