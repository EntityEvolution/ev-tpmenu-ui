window.addEventListener('message', e => {
  if (e.data.action = 'show') {
    main.style.display = 'flex';
  }
})

// Close with 'Escape' key
doc.onkeyup = function(e) {
  if (e.key == 'Escape') {
    main.style.display = 'none';
    fetchNUI('close', 'cb');
  }
};