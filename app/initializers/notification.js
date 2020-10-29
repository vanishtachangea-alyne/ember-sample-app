import EmberObject from "@ember/object";

export function initialize(application) {
  let message = EmberObject.extend({
    init() {
      Notification.requestPermission().then((result) => {
        //console.log(result);
        window.alert(result);
      });
    },
    send(text) {
      new Notification(text);
    },
  });
  //Define a factory name notification:message
  application.register("notification:message", message);
  //inject factory into the controller
  application.inject("controller", "notification", "notification:message");
}

export default {
  initialize,
};
