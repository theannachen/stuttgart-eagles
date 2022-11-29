const scrolldetect = new IntersectionObserver((entry) => {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("shown");
        }
    });
})

const hidden_elements = document.querySelectorAll("hidden");
hidden_elements.forEach((change) => observer.observe(change));