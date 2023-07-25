// Function to toggle visibility of content
function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// Function to hide content
function hideContent(id) {
    var content = document.getElementById(id);
    content.style.display = "none";
}

// Attach click event listeners to each image
document.getElementById("content1").style.display = "none";
document.getElementById("content2").style.display = "none";
document.getElementById("content3").style.display = "none";
document.getElementById("content4").style.display = "none";
document.getElementById("content5").style.display = "none";

document
    .querySelector('[alt="Image 1"]')
    .addEventListener("click", function () {
        toggleContent("content1");
    });
document
    .querySelector('[alt="Image 2"]')
    .addEventListener("click", function () {
        toggleContent("content2");
    });
document
    .querySelector('[alt="Image 3"]')
    .addEventListener("click", function () {
        toggleContent("content3");
    });
document
    .querySelector('[alt="Image 4"]')
    .addEventListener("click", function () {
        toggleContent("content4");
    });
document
    .querySelector('[alt="Image 5"]')
    .addEventListener("click", function () {
        toggleContent("content5");
    });