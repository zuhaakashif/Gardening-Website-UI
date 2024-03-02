
document.addEventListener('DOMContentLoaded', function () {
    const eventsList = document.getElementById('events-list');
  
    // Sample event data (replace with actual data from your backend)
    const eventData = [
        { id: 1, title: 'Gardening Workshop', date: 'March 10, 2024', description: 'Learn basic gardening techniques and tips.' },
        { id: 2, title: 'Community Garden Cleanup', date: 'March 15, 2024', description: 'Volunteer to help clean up our community garden.' },
        { id: 3, title: 'Seed Swap Event', date: 'March 22, 2024', description: 'Exchange seeds with other gardening enthusiasts.' }
        // Add more event data as needed
    ];
  
    // Render events
    eventData.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <p class="date">${event.date}</p>
            <p>${event.description}</p>
            <button class="register-btn" data-event-id="${event.id}">Register</button>
        `;
        eventsList.appendChild(eventElement);
    });
  
    // Add event listener for registration button clicks
    eventsList.addEventListener('click', function (event) {
        if (event.target.classList.contains('register-btn')) {
            const eventId = parseInt(event.target.getAttribute('data-event-id'));
            // Implement your registration logic here (e.g., open registration form)
            alert(`You have successfully registered for event with ID ${eventId}`);
        }
    });
    
  });
  
  
  