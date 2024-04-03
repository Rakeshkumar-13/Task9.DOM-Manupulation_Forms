document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var foodArray = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(function(checkbox) {
      return checkbox.value;
    });
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
  
    // Append values to table
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${firstName}</td><td>${lastName}</td><td>${address}</td><td>${pincode}</td><td>${gender}</td><td>${foodArray.join(', ')}</td><td>${state}</td><td>${country}</td>`;
  
    // Clear form fields
    document.getElementById('myForm').reset();
  });
  