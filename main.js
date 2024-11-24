document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold for when the animation triggers
    );

    elements.forEach(element => {
      observer.observe(element);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const arrow = button.querySelector('.arrow');

            // Toggle content visibility
            content.classList.toggle('active');

            // Rotate arrow
            arrow.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
});

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
  });
});
