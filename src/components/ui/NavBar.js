export default function activateNavigation() {
  const sections = document.querySelectorAll(".section");
  const navContainer = document.createElement("nav");
  const navSection = document.createElement("section");
  navSection.classList.add("nav-section");

  const containerButton = document.createElement("div");
  const contactButton = document.createElement("div");
  const lineSpacer = document.createElement("div");
  const navItems = Array.from(sections).map((section) => {
    return `
                    <div class="nav-item" data-for-section="${section.id}">
                        <a href="#${section.id}" class="nav-link"></a>
                        <span class="nav-label">${section.dataset.label}</span>
                    </div>
                `;
  });
  containerButton.classList.add("container-button");
  contactButton.classList.add("contact-button");
  lineSpacer.classList.add("line-spacer");
  containerButton.appendChild(contactButton);
  containerButton.appendChild(lineSpacer);
  navContainer.classList.add("nav");

  navContainer.innerHTML = navItems.join("");

  const observer = new IntersectionObserver(
    (entries) => {
      document.querySelectorAll(".nav-link").forEach((navLink) => {
        navLink.classList.remove("nav-link-selected");
      });

      const visibleSection = entries.find((entry) => entry.isIntersecting);
      if (visibleSection) {
        document
          .querySelector(
            `.nav-item[data-for-section="${visibleSection.target.id}"] .nav-link`
          )
          .classList.add("nav-link-selected");
      }
    },
    { threshold: 0.65 }
  );

  sections.forEach((section) => observer.observe(section));
  navSection.appendChild(containerButton);
  navSection.appendChild(navContainer);
  document.body.appendChild(navSection);
}
