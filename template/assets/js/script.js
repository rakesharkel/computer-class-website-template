//course management

const coursesData = {
    1: {
        title: "Computer Basics",
        description: "Learn how to operate a computer, MS Office, and more.",
        content: ["MS Word", "MS Excel", "MS PowerPoint", "Internet Basics"],
        duration: "Duration: 1 Month"
    },
    2: {
        title: "Advanced Excel",
        description: "Master Excel formulas, functions, pivot tables and more.",
        content: ["Formulas", "Functions", "Charts", "Pivot Tables"],
        duration: "Duration: 1.5 Months"
    },
    3: {
        title: "Web Development",
        description: "Design and develop modern websites from scratch.",
        content: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        duration: "Duration: 3 Months"
    },
    4: {
        title: "Digital Marketing",
        description: "Become an expert in online advertising and marketing.",
        content: ["SEO", "Social Media", "Email Marketing", "Google Ads"],
        duration: "Duration: 2 Months"
    }
};

function loadCourseDetails(courseId) {
    const course = coursesData[courseId];
    if (!course) return;

    document.getElementById('title').textContent = course.title;
    document.getElementById('description').textContent = course.description;
    document.getElementById('duration').textContent = course.duration;

    const contentList = document.getElementById('content');
    contentList.innerHTML = "";
    course.content.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        contentList.appendChild(li);
    });

    document.getElementById('coursePopup').style.display = "block";
}

function closePopup() {
    document.getElementById('coursePopup').style.display = "none";
}

const counters = document.querySelectorAll('.counter');
const speed = 150;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});



// gallery management
const albums = {
    album1: {
        title: "Summer Memories",
        images: [
            "assets/images/insta 1.jpg",
            "assets/images/insta 4.jpg",
            "assets/images/insta 6.jpg"
        ]
    },
    album2: {
        title: "Winter Wonders",
        images: [
            "assets/images/insta 2.jpg",
            "assets/images/insta 5.jpg"
        ]
    },
    album3: {
        title: "Nature Shots",
        images: [
            "assets/images/insta 3.jpg",
            "assets/images/insta 1.jpg",
            "assets/images/insta 5.jpg"
        ]
    }
};

const viewButtons = document.querySelectorAll(".view-btn");
const photoGallery = document.getElementById("photo-gallery");
const albumTitle = document.getElementById("album-title");
const albumImagesContainer = document.getElementById("album-images");
const closeBtn = document.getElementById("close-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let currentAlbumImages = [];

viewButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const albumKey = btn.closest(".gallery-card").getAttribute("data-album");
        const album = albums[albumKey];
        if (album) {
            currentAlbumImages = album.images;
            currentIndex = 0;
            albumTitle.textContent = album.title;
            renderImage(currentIndex);
            photoGallery.style.display = "block";
        }
    });
});

closeBtn.addEventListener("click", () => {
    photoGallery.style.display = "none";
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + currentAlbumImages.length) % currentAlbumImages.length;
    renderImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentAlbumImages.length;
    renderImage(currentIndex);
});

function renderImage(index) {
    albumImagesContainer.innerHTML = `
        <img src="${currentAlbumImages[index]}" alt="Album Image" class="album-img" style="display:block;">
      `;
}