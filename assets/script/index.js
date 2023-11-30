import { User, Subscriber } from './classes.js';

// Dummy data for Subscriber
const subscriberData = {
    id: 1,
    name: 'John Doe',
    userName: 'john_doe',
    email: 'john@example.com',
    pages: ['Page 1', 'Page 2'],
    groups: ['Group 1', 'Group 2'],
    canMonetize: true
};

// Create a new Subscriber
const subscriber = new Subscriber(subscriberData);

// Display user account info in modal
document.getElementById('modal').innerHTML = subscriber.getInfo();

// Function to create and display a post
function post() {
    // Get user input from the form
    const textContent = document.querySelector('#postForm textarea').value;
    const imageFile = document.querySelector('#imageUpload').files[0];

    // Create a post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    // Construct post HTML structure based on user input
    postElement.innerHTML = `
        <div class="post-header">
            <img src="${subscriber.getProfilePic()}" alt="Profile Pic">
            <div>
                <p>${subscriber.getFullName()}</p>
                <p>${new Date().toLocaleDateString()}</p>
            </div>
        </div>
        <p>${textContent}</p>
    `;

    // If an image is selected, read and display it
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageElement = document.createElement('img');
            imageElement.src = e.target.result;
            imageElement.alt = 'Post Image';
            postElement.appendChild(imageElement);
        };
        reader.readAsDataURL(imageFile);
    }

    // Append the post to the posts section
    document.getElementById('postsSection').appendChild(postElement);

    // Clear the form after posting
    document.getElementById('postForm').reset();
}

