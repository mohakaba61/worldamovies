
// document.addEventListener('DOMContentLoaded', () =>  {
// const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=1e23e1cbe808fc398defed60deb63779';

// // Modify the fetchMovies function to include error handling
// async function fetchMovies() {
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();

//         // Call the function to display movie data
//         displayMovies(data.results);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         displayErrorMessage('Failed to fetch movie data. Please try again later.');
//     }
// }

// /// Add a function to display an error message on the page
// function displayErrorMessage(message) {
//     const mainElement = document.querySelector('main');
//     mainElement.innerHTML = `<div class="error-message">${message}</div>`;
//   }
  
//   // Function to fetch movie trailers from the API
//   async function fetchTrailers(movieId) {
//     try {
//       const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=1e23e1cbe808fc398defed60deb63779&include_video_language=en`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       return data.results;
//     } catch (error) {
//       console.error('Error fetching trailers:', error);
//       return [];
//     }
//   }
  
//   // Function to display movie data and trailers
//   async function displayMovies(movies) {
//     const mainElement = document.querySelector('main');
  
//     // Create an HTML string to hold the movie data
//     let movieHTML = '';
  
//     // Loop through the movies and add each movie to the HTML string
//     for (const movie of movies) {
//       const trailers = await fetchTrailers(movie.id);
  
//       // Get the first trailer key (if available)
//       const trailerKey = trailers.length > 0 ? trailers[0].key : '';
  
//       let scoreClass = '';
//     if (movie.vote_average <= 7) {
//       scoreClass = 'low-score';
//     } else if (movie.vote_average >= 7.5) {
//       scoreClass = 'high-score';
//     }

//     // Add the movie information and YouTube video in the HTML string
//     movieHTML += `
//       <div class="movie-container">
//         <div class="movie-info">
//           <h2>${movie.title} <span class="movie-score ${scoreClass}">(${movie.vote_average})</span></h2>
//           <p>${movie.overview}</p>
//         </div>
//         <div class="movie-content">
//           <div class="movie-image">
//             <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" width="250">
//           </div>
//           <div class="movie-trailer">
//             <iframe src="https://www.youtube.com/embed/${trailerKey}" width="300" height="200" frameborder="0" allowfullscreen></iframe>
//           </div>
//         </div>
//       </div>
//     `;
//   }
  
//     // Set the HTML content of the mainElement to the movieHTML
//     mainElement.innerHTML = movieHTML;
//   }
  
//   // Call the fetchMovies function to initiate the API request
//   fetchMovies();
  



// // Function to handle the form submission

//   function checkEmail() {
//     const emailInput = document.getElementById('emailInput').value;
//     console.log(emailInput);
    
//     if (emailInput.trim() === '') {
//       alert('Please enter a valid email.');
//       return;
//     }
  
//     // Make an API request to check if the email exists or create a new entry
//     fetch(`http://localhost:3000/api/check-email?email=${encodeURIComponent(emailInput)}`)
//       .then(response => response.json())
//       .then(data => {
//         const responseText = document.getElementById('responseText');
//         responseText.textContent = data.text; // Set the watchlist text to the response text
  
//         // Disable the email input and show/hide the saveButtonContainer based on data.exists
//         const saveButtonContainer = document.getElementById('saveButtonContainer');
//         const emailInputField = document.getElementById('emailInput');
//         if (!data.exists) {
//           emailInputField.disabled = true;
//           saveButtonContainer.style.display = 'block'; // Show the container when the email is not found
//         } else {
//           emailInputField.disabled = false;
//           saveButtonContainer.style.display = 'none'; // Hide the container when the email is found
//         }
//       })
//       .catch(error => {
//         console.error('Error checking email:', error);
//         alert('An error occurred while checking the email. Please try again.');
//       });
//   }
  
//   const submitButton = document.getElementById('submitButton');
//   submitButton.addEventListener('click', checkEmail);
// });

