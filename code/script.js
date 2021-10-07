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

const moveProjectsForScreenSize = () => {
    if (window.innerWidth >= 1024) {
        while (featuredProjects.childElementCount < 4) {
            moveProjectUp();
        }
    } else {
        while (featuredProjects.childElementCount > 2) {
            moveProjectDown();
        }
    }
};

moveProjectsForScreenSize()
window.onresize = moveProjectsForScreenSize
