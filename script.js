
    // Function to initialize Google Map
    function initMap() {
        // Replace 'YOUR_API_KEY' with your actual API key
        const apiKey = 'YOUR_API_KEY';

        // Create a new map centered at a specific location
        const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA
            zoom: 12,
        });

        // Optionally, you can add markers, shapes, etc. to the map
        const marker = new google.maps.Marker({
            position: { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA
            map: map,
            title: 'San Francisco'
        });
    }