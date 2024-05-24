document.addEventListener('DOMContentLoaded', function() {
    const ingredientsSection = document.querySelector('.ingredients');
    const instructionsSection = document.querySelector('.instructions');

    ingredientsSection.addEventListener('click', function() {
        this.classList.toggle('hidden');
    });

    instructionsSection.addEventListener('click', function() {
        this.classList.toggle('hidden');
    });
});
