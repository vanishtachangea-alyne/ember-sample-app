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
    createPromise() {
      let promise = Ember.RSVP.Promise.resolve(
        Ember.$.getJSON("https://jsonplaceholder.typicode.com/posts/1")
      );
      promise
        .then(
          (value) => {
            Ember.$("#output").html(`Response ${value.title}`);
          },
          (reason) => {
            Ember.$("#output").html(`Response ${reason.status}`);
          }
        )
        .finally(() => {
          Ember.$("#finally").html(`Finally I was resolved`);
        });
    },
  },
});
