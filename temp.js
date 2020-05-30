let deferredPrompt1;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt1 = e;
  // Update UI notify the user they can install the PWA

  
  deferredPrompt1.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt1.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt1 = null;
      });
});
