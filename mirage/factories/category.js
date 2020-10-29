import { Factory } from "ember-cli-mirage";
import faker from "faker";

export default Factory.extend({
  name() {
    return faker.commerce.productName();
  },
  image() {
    return faker.image.image(100, 100);
  },
  description() {
    return faker.lorem.sentence();
  },
});
