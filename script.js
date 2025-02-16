/* script.js */
document.addEventListener("DOMContentLoaded", function () {
    const posts = [
        { title: "My First Blog Post", date: "2025-02-16", link: "post1.html", image: "assets/post1.jpg" },
        { title: "How I Built This Website", date: "2025-02-17", link: "post2.html", image: "assets/post2.jpg" }
    ];
    const container = document.getElementById("posts-container");
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("bg-white", "shadow-md", "rounded-lg", "p-4", "m-4", "w-full", "md:w-1/3");
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="w-full h-48 object-cover rounded-t-lg">
            <div class="p-4">
                <h3 class="text-xl font-bold text-blue-900"><a href="${post.link}">${post.title}</a></h3>
                <p class="text-gray-500">${post.date}</p>
            </div>
        `;
        container.appendChild(postElement);
    });
});
