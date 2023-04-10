console.log("ITS BEEN LOADEDDDD!!")

function drawBarChart(id, label, value) {
  console.log('Hello from drawBarChart!')
  var ctx = document.getElementById(id).getContext('2d');
  var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: [label],
      datasets: [{
        data: [value],
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            beginAtZero: true,
            max: 100
          }
        }]
      }
    }
  });
  // Add animation effect
  chart.update({
    duration: 800,
    easing: 'easeOutBounce'
  });
}

// Get the navigation links and add a click event listener to each one
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        // Prevent the default link behavior
        event.preventDefault();
        // Get the href attribute of the clicked link
        const href = link.getAttribute('href');
        // Scroll smoothly to the target section
        console.log("scrolling!!")
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
});


// Add a click event listener to the "back to top" button
/*const backToTopButton = document.querySelector('#back-to-top');
backToTopButton.addEventListener('click', () => {
    // Scroll smoothly to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
*/
const pythonContainer = document.querySelector('#python-chart');

if (typeof drawBarChart === 'function') {
  drawBarChart('python-chart', 'Python', 90);
} else {
  console.log('drawBarChart function not defined.');
}
