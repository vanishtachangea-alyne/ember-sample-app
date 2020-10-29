import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.get("store").findAll("category");
    // return [
    //   "Home Appliances",
    //   "Food and Drinks",
    //   "Clothes",
    //   "Shoes",
    //   "Electronics",
    // ];
  },
});
