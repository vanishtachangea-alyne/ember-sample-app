import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return [
      "Home Appliances",
      "Food and Drinks",
      "Clothes",
      "Shoes",
      "Electronics",
    ];
  },
});
