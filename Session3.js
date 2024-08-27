async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomPost = posts[randomIndex];
    document.getElementById('randomposts').textContent = randomPost.body;
}
    fetchPosts();
    setInterval(fetchPosts, 60000);