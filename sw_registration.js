//Service Worker registration

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then((reg) => {
    console.log("Registration worked!");
  }).catch((error) => {
    console.log("Registration failed with " + error);
  });
}