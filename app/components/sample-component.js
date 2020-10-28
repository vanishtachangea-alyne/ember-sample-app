import Component from "@ember/component";
import $ from "jquery";

export default Component.extend({
  // render() {
  //   console.log("dffdsfd");
  // },
  count: 0,
  didRender() {
    this._super(...arguments);
    this.incrementProperty("count");
    this.$("#count").html(`Rendered ${this.get("count")} times`);
  },
});
