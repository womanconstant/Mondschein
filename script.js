document.querySelectorAll('.faq-question').forEach(function(button) {
  button.addEventListener('click', function() {
    this.parentElement.classList.toggle('active');
  });
});
