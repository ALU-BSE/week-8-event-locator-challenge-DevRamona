document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const city = document.getElementById('citySearch').value;
        const category = document.getElementById('categoryFilter').value;
        const date = document.getElementById('dateFilter').value;
        
        // Create query string for URL
        const queryParams = new URLSearchParams({
            city: city,
            category: category,
            date: date
        });
        
        // Redirect to events page with search parameters
        window.location.href = `events.html?${queryParams.toString()}`;
    });
});