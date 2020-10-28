import Controller from "@ember/controller";
import $ from "jquery";

export default Controller.extend({
  firstName: "John",
  lastName: "Doe",
  count: 0,
  actions: {
    setUser() {
      this.get("user").setUser(this.get("newUser"));
    },
    changeName() {
      this.incrementProperty("count");
      $("#change-count").html(`Invoked ${this.get("count")} times`);
      this.set("firstName", this.get("newFirstName"));

      this.set("lastName", this.get("newLastName"));
    },
  },
});
