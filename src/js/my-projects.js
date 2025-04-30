document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project-item.proj-hidden');
  const loadMoreBtn = document.querySelector('.load-more-btn');

  let index = 0;
  const step = 3;

  loadMoreBtn.addEventListener('click', loadProjects);
  function loadProjects() {
    const slice = Array.from(projects).slice(index, index + step);
    slice.forEach(el => el.classList.remove('proj-hidden'));
    index += step;

    if (index >= projects.length) {
      loadMoreBtn.style.display = 'none';
    }
  }
});
