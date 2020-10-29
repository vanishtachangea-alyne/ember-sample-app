import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    return this.get("store")
      .findAll("category")
      .then(
        (categories) => {
          return categories;
        },
        (reason) => {
          return [{ name: "Error" }];
          //alert(reason);
        }
      );

    // return [
    //   "Home Appliances",
    //   "Food and Drinks",
    //   "Clothes",
    //   "Shoes",
    //   "Electronics",
    // ];
  },
  actions: {
    error(err) {
      alert(err);
    },
  },
});
