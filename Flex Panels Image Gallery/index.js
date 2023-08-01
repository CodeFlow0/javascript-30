document.addEventListener('DOMContentLoaded', () => {
  const panels = document.querySelectorAll('.panel');
  let currentOpenPanel = null;

  function toggleOpen() {
    if (currentOpenPanel && currentOpenPanel !== this) {
      currentOpenPanel.classList.remove('open');
    }
    this.classList.toggle('open');
    currentOpenPanel = this;
  }

  function toggleActive(e) {
    if (e.propertyName.includes('flex'))
      this.classList.toggle('open-active');
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
});