// Close with 'Escape' key
doc.onkeyup = function(e) {
  if (e.key == 'Escape') {
    fetchNUI('close', 'cb')
  }
};