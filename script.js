function TrainingPage() {
    let h3 = document.querySelectorAll(".training-years h3");
    let content = document.querySelectorAll(".t-year-content");

    // Show the first content on page load
    h3[0].classList.add("border");
    h3[0].style.color = `#a80dad`;
    content[0].style.display = "initial";

    h3.forEach((element, idx) => {
        element.addEventListener("click", () => {
            // Hide all contents
            h3.forEach((e) => {
                e.classList.remove("border");
                e.style.color = `#000`;
            });
            content.forEach((c) => {
                c.style.display = "none";
            });
            // Display the clicked year's content
            element.classList.add("border");
            element.style.color = `#a80dad`;
            content[idx].style.display = "initial";
        });
    });
};
TrainingPage();

function HomePage() {
    const container = document.querySelector('.testimonial-container');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    next.addEventListener('click', () => {
        container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    });

    prev.addEventListener('click', () => {
        container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    });
};
HomePage();
