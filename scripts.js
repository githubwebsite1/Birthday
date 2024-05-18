document.addEventListener('DOMContentLoaded', function() {
    // Get all sections
	var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}
    const sections = document.querySelectorAll('main section');
	
	const bgMusic = document.getElementById('bgMusic');
    const playPopup = document.getElementById('playPopup');
    const playButton = document.getElementById('playButton');
	


    // Show the play popup when the page loads
    playPopup.style.display = 'block';

    playButton.addEventListener('click', function() {
        bgMusic.play();
        playPopup.style.display = 'none'; // Hide the play popup after clicking
		// Trigger click event on the background music button
       document.querySelector('nav ul li:nth-child(5) a').click();
    });

    // Hide all sections except the first one
    for (let i = 1; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }

    // Add click event listener to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href').substring(1);
            // Hide all sections
            sections.forEach(section => {
                section.classList.add('hidden');
            });
            // Show the target section
            const targetSection = document.getElementById(targetSectionId);
            targetSection.classList.remove('hidden');
        });
    });
	const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
    button.style.left = `${Math.ceil(Math.random() * 35)}%`;
    button.style.top = `${Math.ceil(Math.random() * 35)}%`;
});
const forgiveButton = document.getElementById('forgiveButton');
    forgiveButton.addEventListener('click', function() {
        alert("I forgive you!");
		});
});

function loadPage(pageUrl) {
            var iframe = document.createElement('iframe');
            iframe.src = pageUrl;
            iframe.style.width = '100%';
            iframe.style.height = '700px';
            document.getElementById('pageContainer').innerHTML = '';
            document.getElementById('pageContainer').appendChild(iframe);
        }
		
