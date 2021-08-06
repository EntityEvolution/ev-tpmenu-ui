// Close with 'Escape' key
document.onkeyup = function(event) {
  if (event.key == 'Escape') {
      $.post('https://ev-tpmenu-ui/close');
  }
};