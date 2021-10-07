const featuredProjects = document.getElementById("featured-projects-parent");
const otherProjects = document.getElementById("other-projects-parent");

const moveProjectUp = () => {
  let project = otherProjects.firstElementChild;
  otherProjects.removeChild(project);
  featuredProjects.appendChild(project);
};

const moveProjectDown = () => {
  let project = featuredProjects.lastElementChild;
  featuredProjects.removeChild(project);
  otherProjects.insertBefore(project, otherProjects.firstElementChild);
};

if (window.innerWidth >= 1024) {
    moveProjectUp()
    moveProjectUp()
}
