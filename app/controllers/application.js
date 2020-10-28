import Controller from "@ember/controller";
import $ from "jquery";
import { inject as service } from "@ember/service";

export default Controller.extend({
  currentUser: service(),
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
    notify() {
      let message = this.get("message");
      this.get("notification").send(message);
    },
  },
});
