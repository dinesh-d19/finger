const cards = document.querySelectorAll('.card');
let currentCardIndex = 0;

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    card.style.display = 'none';
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    cards[currentCardIndex].style.display = 'block';
  });

  let startX, startY, distX, distY;

  card.addEventListener('touchstart', handleTouchStart, false);
  card.addEventListener('touchmove', handleTouchMove, false);

  function handleTouchStart(e) {
    const touchObj = e.changedTouches[0];
    startX = touchObj.clientX;
    startY = touchObj.clientY;
  }

  function handleTouchMove(e) {
    if (!startX || !startY) return;
    const touchObj = e.changedTouches[0];
    distX = touchObj.clientX - startX;
    distY = touchObj.clientY - startY;

    if (Math.abs(distX) > Math.abs(distY)) {
      if (distX > 0) {
        // Handle right swipe
        console.log('Right swipe!');
      } else {
        // Handle left swipe
        console.log('Left swipe!');
      }
    }

    // Reset start coordinates to avoid continuous swipe detection
    startX = null;
    startY = null;
  }
});
