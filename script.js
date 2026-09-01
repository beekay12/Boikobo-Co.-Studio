document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".scroll-reveal").forEach(element => {
        observer.observe(element);
    });

    const serviceSelect = document.getElementById("service");
    const contactSection = document.getElementById("contact");

    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("click", () => {
            const selectedService = card.getAttribute("data-service");
            if (selectedService && serviceSelect) {
                serviceSelect.value = selectedService;
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const form = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");

    if (form && submitBtn) {
        form.addEventListener("submit", () => {
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending...";
        });
    }
});