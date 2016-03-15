export default function instanceInitialize(application) {
  let router = application.lookup('router:main');
  let segment = application.lookup('service:segment');
  let ApplicationRoute = application.lookup('route:application');

  if (ApplicationRoute && typeof ApplicationRoute.identifyUser === 'function') {
    ApplicationRoute.identifyUser();
  }

  router.on('didTransition', function() {
    segment.trackPageView();
  });
}
