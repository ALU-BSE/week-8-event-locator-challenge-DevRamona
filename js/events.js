document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const category = this.textContent.trim();
            filterEvents(category);
        });
    });
});

function filterEvents(category) {
    const events = document.querySelectorAll('.event-card');
    
    events.forEach(event => {
        const eventCategory = event.querySelector('.event-tag').textContent;
        if (category === 'ALL' || category === eventCategory) {
            event.style.display = 'block';
            event.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
            event.style.display = 'none';
        }
    });
}