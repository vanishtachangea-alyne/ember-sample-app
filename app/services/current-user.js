import Service from "@ember/service";

export default Service.extend({
  name: null,
  setUser(name) {
    this.set("name", name);
  },
});
