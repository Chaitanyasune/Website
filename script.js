document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const terms = document.getElementById('terms').checked;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('terms', terms);

    fetch('YOUR_GETFORM_ENDPOINT', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
        $('#contactModal').modal('hide');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

$(document).ready(function() {
    // Adding click event listener to each content item
    $('.content-item').on('click', function() {
        // Remove 'active' class from all content items
        $('.content-item').removeClass('active');
        // Add 'active' class to the clicked content item
        $(this).addClass('active');

        // Get the image path from the data-image attribute of the clicked content item
        var imagePath = $(this).data('image');
        console.log("Image Path:", imagePath); // Debugging line

        // Change the src attribute of the image element to the new image path
        $('#projectImage').attr('src', imagePath);
    });
});

