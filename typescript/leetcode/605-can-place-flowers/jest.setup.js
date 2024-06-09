const { SystemReporter } = require("../../tools/SystemReporter");

beforeAll(() => {
  this.systemStats = new SystemReporter();
});

afterAll(() => {
  this.systemStats.end();
  this.systemStats.report();
});