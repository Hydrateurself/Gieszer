document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.wrapper');
  
    // Anzahl der zu klonenden Elemente
    const cloneCount = 8;
  
    // Originalinhalt klonen
    for (let i = 0; i < cloneCount; i++) {
      const items = document.querySelectorAll('.item');
      items.forEach(item => {
        const clone = item.cloneNode(true);
        container.appendChild(clone);
      });
    }
  });