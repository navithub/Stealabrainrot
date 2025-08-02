const button = document.getElementById('giftBtn');
const jumpscare = document.getElementById('jumpscare');
const sound = document.getElementById('scareSound');

button.addEventListener('click', () => {
  jumpscare.style.display = 'flex';
  sound.volume = 1.0; // 100% volume
  sound.play(); // now loops because of "loop" attribute
});
