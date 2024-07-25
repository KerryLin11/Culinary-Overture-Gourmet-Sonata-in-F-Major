document.addEventListener('DOMContentLoaded', function() {
    fetchRandomFood();
    hideReviewContainer(0);
});
const reviewContainer = document.querySelector('.textInputContainer')

document.getElementById('submit-review').addEventListener('click', submitReview);

document.getElementById('review-text').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault(); // Prevent default "Enter" key behavior
        submitReview();
    }
});

function showReviewContainer(duration = 500) {
    $(reviewContainer).fadeIn(duration);
}

function hideReviewContainer(duration = 500) {
    $(reviewContainer).fadeOut(duration);
}


// Initialize reviews array from local storage or empty array if not available
let reviews = JSON.parse(sessionStorage.getItem('reviews')) || [];

let numSubmissions = 0;

function submitReview() {

    const reviewText = document.getElementById('review-text').value;
    const cuisineName = document.getElementById('food-name').innerText;
    const foodImage = document.getElementById('food-image').src;

    //* at least 2 words || between 5-200 characters
    if (reviewText.split(/\s+/).length > 2 && reviewText.length > 5 && reviewText.length < 200) {
        const review = {
            cuisineName: cuisineName,
            foodImage: foodImage,
            reviewText: reviewText,
            timestamp: new Date().toLocaleString()
        };

        numSubmissions++;
        console.log('numSubmissions:', numSubmissions);
        saveReview(review); // Save the review to the array
        clearForm();
        fetchRandomFood(); // Fetch a new random food after submitting the review
    } else {
        displayRandomErrorMessage();
    }

    if (numSubmissions === 2) {
        clearSessionStorage()

        fadeToBlack(2000)
        setTimeout(() => {
            window.location.href = "index.html"
        }, 3000);
    }
}

function displayRandomErrorMessage() {
    const errorMessages = [
        "Hey! The review section is empty. Maybe you forgot...",
        "Umm Sir, I need reviewing, said the food you just ate",
        "ALERT! ALERT, THIS FOOD REVIEWER FORGOT TO WROTE A REVIEW. TREAD CAREFULLY AROUND THIS 200IQ SPECIMEN.",
        "You forgot to write a review. WHY ARE YOU DOING THIS TO ME??",
        "Knock knock. Who's there. A review. A review what. A review you donkey... FILL IN THE REVIEW",
        "I beg you, for your own safety, please write a review. I won't do it for you.",
        "Mission Commander, I think we've got a problem. We need a review.",
        "Looks like someone's keyboard is broken. How about using it to type a review?",
        "Did you just sneeze on your keyboard and submit that as a review?",
        "Review not found! Please try again with actual words this time.",
        "Did you accidentally sit on your keyboard and then backspace all the keys you sat on? It happens. Submit a review this time",
        "It's like you're speaking in riddles. A review, please?",
        "Whoops! Looks like your review got lost in the sauce",
        "Is that Morse code? Sorry, we only accept reviews thanks.",
        "Is this some kind of avant-garde art? Because I don't get it.",
        "A rock could write a review on par with this one.",
        "Sorry, but '... ... ...' isn't a review. Try using actual words.",
        "I'm starting to think you're allergic to writing reviews.",
        "Reviewing is an art that takes many treacherous years of experience. Did you know that?",
        "Sorry, we're not accepting hieroglyphics at this moment. Please try again with a written review",
        "This is the best review I've never read",
        "Is that review a metaphor for something? Because I don't get it.",
        "Is this a test? Because I think you just failed.",
        "You're a master of brevity, but not in a good way.",
        "I hope you're better at eating than you are at writing reviews.",
        "I'm sure there's a review in there somewhere..."
    ];
    const randomIndex = Math.floor(Math.random() * errorMessages.length);
    alert(errorMessages[randomIndex]);
}

function fetchRandomFood() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const meal = data.meals[0];
            document.getElementById('food-name').innerText = meal.strMeal;
            document.getElementById('food-description').innerText = meal.strCategory + ' - ' + meal.strArea;
            document.getElementById('food-image').src = meal.strMealThumb;
        })
        .catch(error => {
            console.error('error fetching food data:', error);
        });
}

function saveReview(review) {
    reviews.push(review); // Push the review object to the array
    sessionStorage.setItem('reviews', JSON.stringify(reviews)); // Update local storage with the updated reviews array
}

function clearForm() {
    document.getElementById('review-text').value = '';
}
