document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.querySelector('.projects-list');
  const loadMoreBtn = document.querySelector('.load-more-btn');

  const newProjects = [
    {
      img: '../img/projects/power-1x-desk.jpg',
      tech: 'React, JavaScript, Node.js, Git',
      title: 'power pulse webservice',
      link: 'https://github.com/aleks-zhiv/CodeNova.git'
    },
    {
      img: '../img/projects/mimino-1x-desk.jpg',
      tech: 'React, JavaScript, Node.js, Git',
      title: 'mimino website',
      link: 'https://github.com/aleks-zhiv/CodeNova.git'
    },
    {
      img: '../img/projects/vyshyvanka-1x-desk.jpg',
      tech: 'React, JavaScript, Node.js, Git',
      title: 'vyshyvanka vibes Landing Page',
      link: 'https://github.com/aleks-zhiv/CodeNova.git'
    },
    {
      img: '../img/projects/chego-1x-desk.jpg',
      tech: 'React, JavaScript, Node.js, Git',
      title: 'chego jewelry website',
      link: 'https://github.com/aleks-zhiv/CodeNova.git'
    },
    {
      img: '../img/projects/energy-1x-desk.jpg',
      tech: 'React, JavaScript, Node.js, Git',
      title: 'energy flow webservice',
      link: 'https://github.com/aleks-zhiv/CodeNova.git'
    },
    {
      img: '../img/projects/fruitbox-1x-desk.jpg',
      tech: 'React, JavaScript, Node.js, Git',
      title: 'fruitbox online store',
      link: 'https://github.com/aleks-zhiv/CodeNova.git'
    },
    {
      img: '../img/projects/starlight-1x-desk.jpg',
      tech: 'React, JavaScript, Node.js, Git',
      title: 'starlight studio landing page',
      link: 'https://github.com/aleks-zhiv/CodeNova.git'
    }
  ];

  let projectIndex = 0;

  loadMoreBtn.addEventListener('click', () => {
    const projectsToLoad = newProjects.slice(projectIndex, projectIndex + 3);

    projectsToLoad.forEach(project => {
      const li = document.createElement('li');
      li.classList.add('project-item');

      li.innerHTML = `
        <picture class="project-picture">
          <img src="${project.img}" alt="${project.title}" class="project-image">
        </picture>

        <div class="project-info">
          <p class="project-tech">${project.tech}</p>
          <div class="project-header">
            <h3 class="title">${project.title}</h3>
            <div class="visit-button-wrapper">
              <a href="${project.link}" target="_blank" class="visit-button">
                Visit
                <img src="../img/projects/icon.svg" alt="Arrow" class="visit-icon" width="24" height="24">
              </a>
            </div>
          </div>
        </div>
      `;

      projectsContainer.appendChild(li);
    });

    projectIndex += 3;

    if (projectIndex >= newProjects.length) {
      loadMoreBtn.style.display = 'none';
    }
  });
});
