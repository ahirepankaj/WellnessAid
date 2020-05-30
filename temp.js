let deferredPrompt1;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt1 = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});
