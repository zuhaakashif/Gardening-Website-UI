// Firebase configuration
const firebaseConfig = {
    // Your Firebase config details here
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Check if user is logged in
auth.onAuthStateChanged(user => {
    if (user) {
        // User is signed in
        const username = user.displayName; // Get username of logged-in user
        if (username) {
            // Load posts
            loadPosts();

            // Handle post submission
            const postForm = document.getElementById('post-form');
            postForm.addEventListener('submit', e => {
                e.preventDefault();
                const postContent = postForm['post-content'].value.trim();
                if (postContent !== '') {
                    // Add post to database
                    db.collection('posts').add({
                        username: username,
                        content: postContent,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
                    .then(() => {
                        // Clear post form
                        postForm.reset();
                        // Reload posts
                        loadPosts();
                    })
                    .catch(error => {
                        console.error('Error adding document: ', error);
                    });
                }
            });

            // Logout button
            const logoutBtn = document.getElementById('logout-btn');
            logoutBtn.addEventListener('click', () => {
                auth.signOut();
            });
        }
    } else {
        // User is signed out
        // Redirect to login page or handle as needed
        console.log('User is signed out');
    }
});

// Function to load posts
function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Clear existing posts
    // Fetch posts from database and display
    db.collection('posts')
        .orderBy('timestamp', 'desc')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const post = doc.data();
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <strong>${post.username}</strong>
                    <p>${post.content}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error getting documents: ', error);
        });
}
