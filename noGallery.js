window.addEventListener('DOMContentLoaded', function() {
  var check = document.getElementById('check');
  var gallery = document.querySelector('.gallery');

  check.addEventListener('change', function() {
    if (this.checked) {
      gallery.style.display = 'none';
    } else {
      gallery.style.display = 'block';
    }
  });
});
