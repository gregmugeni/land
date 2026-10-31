/* =========================================================
   PLOT 3A — KITORO, ENTEBBE
   Lightweight website interactions
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    // Automatically update the copyright year.
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    /*
    ========================================================
    SCROLL REVEAL ANIMATIONS
    ========================================================

    Elements gently animate into view as visitors scroll.

    IntersectionObserver is used instead of scroll events
    to keep the page lightweight and performant.
    */

    if ("IntersectionObserver" in window) {

        const animatedElements = document.querySelectorAll(
            ".feature-strip article, .gallery figure, .faq-list details"
        );

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        // Stop observing once the animation runs.
                        currentObserver.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        animatedElements.forEach((element) => {

            element.classList.add("reveal-ready");

            observer.observe(element);

        });

    }

});