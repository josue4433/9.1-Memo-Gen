document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const memesContainer = document.getElementById("memes-container");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const imageURL = event.target.imageURL.value;
        const topText = event.target.topText.value;
        const bottomText = event.target.bottomText.value;

        // Create the meme div
        const memeDiv = document.createElement("div");
        memeDiv.classList.add("meme");

        // Create the meme image
        const memeImage = document.createElement("img");
        memeImage.src = imageURL;
        memeDiv.appendChild(memeImage);

        // Create the top text
        const topTextElement = document.createElement("p");
        topTextElement.innerText = topText;
        memeDiv.appendChild(topTextElement);

        // Create the bottom text
        const bottomTextElement = document.createElement("p");
        bottomTextElement.innerText = bottomText;
        bottomTextElement.style.bottom = "10px";
        memeDiv.appendChild(bottomTextElement);

      
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function () {
            memesContainer.removeChild(memeDiv);
        });
        memeDiv.appendChild(deleteButton);

        // Append the meme div to the memes container
        memesContainer.appendChild(memeDiv);

        // Clear the form inputs
        form.reset();
    });
});
