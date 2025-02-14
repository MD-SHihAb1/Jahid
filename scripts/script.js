// Function to handle logo upload
document.getElementById("logoUpload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("logoImage").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Function to handle hero picture upload
  document.getElementById("heroPictureUpload").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("heroPictureImage").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Function to display gigs
  function displayGigs(gigs) {
    const gigList = document.getElementById("gigList");
    gigList.innerHTML = gigs
      .map(
        (gig) => `
        <div class="gig-item">
          <img src="${gig.photo}" alt="${gig.title}">
          <h3>${gig.title}</h3>
          <p>${gig.description}</p>
          <p><strong>${gig.price}</strong></p>
        </div>
      `
      )
      .join("");
  }
  
  // Array to store gigs
  let gigs = [];
  
  // Function to add a new gig
  function addGig(title, description, price, photo) {
    const newGig = { title, description, price, photo };
    gigs.push(newGig);
    displayGigs(gigs);
  }
  
  // Add event listener to the "Add Gig" button
  document.getElementById("addGigButton").addEventListener("click", () => {
    const gigTitle = document.getElementById("gigTitle").value;
    const gigDescription = document.getElementById("gigDescription").value;
    const gigPrice = document.getElementById("gigPrice").value;
    const gigPhoto = document.getElementById("gigPhoto").files[0];
  
    if (gigTitle && gigDescription && gigPrice && gigPhoto) {
      const reader = new FileReader();
      reader.onload = function (e) {
        addGig(gigTitle, gigDescription, gigPrice, e.target.result);
        // Clear input fields
        document.getElementById("gigTitle").value = "";
        document.getElementById("gigDescription").value = "";
        document.getElementById("gigPrice").value = "";
        document.getElementById("gigPhoto").value = "";
      };
      reader.readAsDataURL(gigPhoto);
    } else {
      alert("Please fill in all fields and upload a photo!");
    }
  });
  
  // Display gigs on page load
  displayGigs(gigs);