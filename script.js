document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var course = document.getElementById('course').value;
    
    // Create and display the result HTML
    var resultHTML = '<h3>Enrollment Information:</h3>' +
      '<p><strong>First Name:</strong> ' + firstName + '</p>' +
      '<p><strong>Last Name:</strong> ' + lastName + '</p>' +
      '<p><strong>Email:</strong> ' + email + '</p>' +
      '<p><strong>Course:</strong> ' + course + '</p>';
      
    document.getElementById('displayContainer').innerHTML = resultHTML;
   document.getElementById('displayContainer').style.display = 'block'; // Show the display container
    
    
    // Clear the form
    document.getElementById('enrollmentForm').reset();
  });