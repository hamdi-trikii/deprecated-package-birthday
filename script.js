document.getElementById("partyBtn").addEventListener("click", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});








document.addEventListener('DOMContentLoaded', () => {
  const partyBtn = document.getElementById('partyBtn');
  const birthdaySound = document.getElementById('birthdaySound');
  const unmuteButton = document.getElementById('unmuteButton');

  // --- Handle Unmute Button ---
  if (unmuteButton && birthdaySound) {
    unmuteButton.addEventListener('click', () => {
      if (birthdaySound.muted) {
        birthdaySound.muted = false; // Unmute the sound
        unmuteButton.textContent = '🔇'; // Change icon to muted
        // Optionally, hide the button after unmuting if you only want it for initial unmute
        // unmuteButton.style.display = 'none';
      } else {
        birthdaySound.muted = true; // Mute the sound
        unmuteButton.textContent = '🔊'; // Change icon to unmuted
      }
    });

    // Initial check for sound state (in case it was unmuted by other means)
    if (!birthdaySound.muted) {
      unmuteButton.textContent = '🔇';
    }
  }

  // --- Handle Party Button (existing functionality) ---
  if (partyBtn) {
    partyBtn.addEventListener('click', () => {
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // If the sound is still muted when party button is clicked, unmute it
      if (birthdaySound && birthdaySound.muted) {
        birthdaySound.muted = false;
        if (unmuteButton) {
          unmuteButton.textContent = '🔇'; // Update icon
        }
      }
      // Ensure sound is playing (in case it was paused or not started for some reason)
      if (birthdaySound && birthdaySound.paused) {
        birthdaySound.play().catch(e => console.error("Failed to play sound on party click:", e));
      }
    });
  }
});
