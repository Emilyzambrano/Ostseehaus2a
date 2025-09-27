<script>
  // Öffnet das Overlay-Menü
  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('menu-overlay').classList.add('open');
  });

  // Schließt das Overlay-Menü
  document.getElementById('menu-close').addEventListener('click', function () {
    document.getElementById('menu-overlay').classList.remove('open');
  });
</script>
