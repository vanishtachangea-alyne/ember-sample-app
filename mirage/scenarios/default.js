export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  //Request Server to create 10 categories when the application initialises
  server.createList("category", 10);
}
