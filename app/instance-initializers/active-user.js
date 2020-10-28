export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');
  appInstance.inject("controller", "user", "service:current-user");
}

export default {
  initialize,
};
