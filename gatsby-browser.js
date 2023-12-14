// import { StoreProvider } from "./src/context/store-context";
// import { AuthProvider } from "./src/AuthProvider";

// If you're using StoreProvider
// export const wrapRootElement = ({ element }) => (
//   <StoreProvider>{element}</StoreProvider>
// );

// If you're using AuthProvider
// export const wrapRootElement = ({ element }) => (
//   <AuthProvider>{element}</AuthProvider>
// );

// export const onInitialClientRender = () => {
//   setTimeout(function() {
//     document.getElementById("___loader").style.display = "none"
//   }, 1000)
// }

// export const onRouteUpdate = ({ location }) => {
//   // Check if the current page is the archive page
//   if (location.pathname.startsWith('/archive')) {
//     // Implement your logic to persist state here
//     // For example, you can use localStorage or sessionStorage
//   }
// };

export const onServiceWorkerUpdateFound = () => {
    const showNotification = () => {
      if ('Notification' in window) {
        Notification.requestPermission().then(result => {
          if (result === 'granted') {
            navigator.serviceWorker.ready.then(registration => {
              registration.showNotification('Update', {
                body: 'New content is available!',
                icon: '/static/assets/logo.svg',
                vibrate: [200, 100, 200, 100, 200, 100, 400],
                tag: 'request',
                actions: [
                  { action: 'update', title: 'Update' },
                  { action: 'ignore', title: 'Ignore' }
                ]
              });
            });
          }
        });
      }
    };
  
    showNotification();
  };
  
  // Add a listener for notification click
  self.addEventListener('notificationclick', event => {
    const action = event.action;
    if (action === 'update') {
      // Handle update action (reload or navigate to the latest version)
      window.location.reload();
    } else {
      // Handle other actions or do nothing for 'ignore'
    }
  });
  