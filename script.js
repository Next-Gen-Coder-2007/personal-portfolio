const glow = document.getElementById("glow");
document.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
});


const photo = document.querySelector('.photo');
const topImage = document.querySelector('.image-top');

photo.addEventListener('mousemove', function (e) {
    const rect = photo.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    topImage.style.clipPath = `circle(50px at ${x}px ${y}px)`;
});

photo.addEventListener('mouseleave', function () {
    topImage.style.clipPath = 'circle(0 at 50% 50%)';
});

const modaldata1 = { img: "./assets/project-1.png", title: "Face Attendance Management System", description: "Developed a smart student attendance system that leverages face recognition technology to automate and authenticate the attendance-taking process. Built using Flask for the backend, with face_recognition library for image processing and identity verification.", time: "", github: "https://github.com/Next-Gen-Coder-2007/Attendance-System-using-face_recognition", deployed_link: "https://attendance-system-using-facerecognition-production.up.railway.app/", skills: ["HTML", "CSS", "JS", "FLASK", "OpenCV", "Face_Recognition_Models", "Jinja2 Templating", "SQLALCHEMY"] }
const modaldata2 = { img: "./assets/project-2.png", title: "Automated Billing Management System", description: "The Automated Billing Management System is a web-based application designed to streamline and automate the entire billing process for businesses. Built using Flask as the backend framework, this system efficiently handles customer data, product/service entries, invoice generation, and payment tracking. The frontend uses HTML, CSS, and JavaScript for a responsive, user-friendly interface, while Jinja2 templating ensures dynamic rendering of data directly into HTML pages. SQLAlchemy is used as the ORM for managing the database in a scalable and secure manner.", time: "", github: "https://github.com/Next-Gen-Coder-2007/Billing-System-2", deployed_link: "https://billing-system-2-0kqm.onrender.com/", skills: ["HTML", "CSS", "JS", "FLASK", "Jinja2 Templating", "SQLALCHEMY"] }
const modaldata3 = { img: "./assets/project-3.png", title: "Online Voting System using Flask", description: "The Online Voting System is a secure and user-friendly web application designed to digitize and automate the election process. Built with Flask as the backend framework and SQLAlchemy for database operations, this system allows users (voters) to log in, view available elections/candidates, and cast their vote online. Admins can manage users, candidates, and view election results in real-time. HTML, CSS, JavaScript, and Jinja2 templating are used for creating a responsive, dynamic front-end interface.", time: "", github: "https://github.com/Next-Gen-Coder-2007/Voting-System", deployed_link: "https://voting-system-1-3kbi.onrender.com/", skills: ["HTML", "CSS", "JS", "FLASK", "Jinja2 Templating", "SQLALCHEMY"] }
const modaldata4 = { img: "./assets/project-4.png", title: "Restaurent Website using HTML, CSS and JS", description: "minimalist restaurant website created using only HTML and CSS. The project showcases a clean and responsive design suitable for a small restaurant, featuring sections like the menu, about us, and contact information.", time: "", github: "https://github.com/Next-Gen-Coder-2007/Simple-Restaurent-Website", deployed_link: "https://simple-restaurent-website-s15k.onrender.com/", skills: ["HTML", "CSS", "JS"] }
const modaldata5 = { img: "./assets/project-5.png", title: "Prime Video Clone using HTML, CSS and JS", description: "The Prime Video Clone is a front-end web application designed to replicate the look and feel of Amazon Prime Video. It features a modern and responsive user interface that allows users to explore a collection of movies and series, along with authentication pages like Login and Signup (UI only – no backend). This project showcases your frontend skills in layout design, form validation, and responsive UI development.", time: "", github: "https://github.com/Next-Gen-Coder-2007/Prime-Video-Clone-using-html-css", deployed_link: "", skills: ["HTML", "CSS", "JS"] }
const modalOverlay = document.getElementById('modalOverlay');
const modal = modalOverlay.querySelector('.modal');
const modalOverlayCamera = document.getElementById('modalOverlayCamera');
const modalCamera = modalOverlayCamera.querySelector('.modalCamera');
let isAnimating = false;

function openModal(data) {
    if (isAnimating) return;

    isAnimating = true;
    modalOverlay.classList.add('active');
    modal.classList.add('enhanced-in');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        modal.classList.remove('enhanced-in');
        isAnimating = false;
    }, 500);

    document.querySelector(".project-image").attributes.src.value = data.img;
    document.querySelector(".project-title").textContent = data.title;
    document.querySelector(".description").textContent = data.description;
    document.querySelector(".web-link").attributes.href.value = data.deployed_link;
    document.querySelector(".github-link").attributes.href.value = data.github;
    skills_list = document.querySelector(".skills-list");
    for (i = 0; i < data.skills.length; i++) {
        li = document.createElement("li");
        li.innerHTML = data.skills[i];
        skills_list.appendChild(li);
    }

}


function openCameraModal() {
    if (isAnimating) return;

    isAnimating = true;
    modalOverlayCamera.classList.add('active');
    modalCamera.classList.add('enhanced-in');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        modalCamera.classList.remove('enhanced-in');
        isAnimating = false;
    }, 500);
}

function closeModal(event) {
    if (event && event.target !== modalOverlay && event.target.closest('.close-btn') === null) {
        return;
    }

    if (isAnimating) return;

    isAnimating = true;
    modal.classList.add('enhanced-out');
    document.querySelector(".skills-list").innerHTML = ""
    setTimeout(() => {
        modalOverlay.classList.remove('active');
        modal.classList.remove('enhanced-out');
        document.body.style.overflow = '';
        isAnimating = false;
    }, 300);
}
function closeCameraModal(event) {
    if (event && event.target !== modalOverlayCamera && event.target.closest('.close-btn') === null) {
        return;
    }

    if (isAnimating) return;

    isAnimating = true;
    modalCamera.classList.add('enhanced-out');
    setTimeout(() => {
        modalOverlayCamera.classList.remove('active');
        modalCamera.classList.remove('enhanced-out');
        document.body.style.overflow = '';
        isAnimating = false;
    }, 300);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
    if (event.key === 'Escape' && modalOverlayCamera.classList.contains('active')) {
        closeCameraModal();
    }
});

modalOverlay.addEventListener('wheel', function (event) {
    event.preventDefault();
});

modalOverlayCamera.addEventListener('wheel', function (event) {
    event.preventDefault();
});

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const toggleButton = document.getElementById('toggleCamera');
const deviceSelect = document.getElementById('deviceSelect');

let stream = null;
let cameraOn = false;
let model = null;

const fingers = {
    thumb: [0, 1, 2, 3, 4],
    indexFinger: [0, 5, 6, 7, 8],
    middleFinger: [0, 9, 10, 11, 12],
    ringFinger: [0, 13, 14, 15, 16],
    pinky: [0, 17, 18, 19, 20]
};

async function getVideoDevices() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');

        deviceSelect.innerHTML = '';
        videoDevices.forEach((device, i) => {
            const option = document.createElement('option');
            option.value = device.deviceId;
            option.text = device.label || `Camera ${i + 1}`;
            deviceSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error accessing video devices:', error);
    }
}

async function setupCamera(deviceId = null) {
    try {
        const constraints = {
            video: deviceId ? { deviceId: { exact: deviceId } } : { facingMode: 'user' }
        };
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        video.srcObject = stream;
        return new Promise(resolve => {
            video.onloadedmetadata = () => resolve(video);
        });
    } catch (error) {
        console.error('Error setting up camera:', error);
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
}

function drawLine(ctx, points) {
    ctx.beginPath();
    for (let i = 0; i < points.length - 1; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[i + 1];
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
    }
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();
}

async function detectHands() {
    if (cameraOn && model) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const predictions = await model.estimateHands(video);
        predictions.forEach(prediction => {
            const landmarks = prediction.landmarks;
            for (let finger in fingers) {
                const points = fingers[finger].map(i => landmarks[i]);
                drawLine(ctx, points);
            }
            landmarks.forEach(([x, y]) => {
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = 'lime';
                ctx.fill();
            });
        });
    }
    requestAnimationFrame(detectHands);
}

toggleButton.addEventListener('click', async () => {
    if (cameraOn) {
        stopCamera();
        cameraOn = false;
        toggleButton.textContent = 'Start';
        toggleButton.classList.add('off');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else {
        const selectedDeviceId = deviceSelect.value;
        await setupCamera(selectedDeviceId);
        video.play();
        cameraOn = true;
        toggleButton.textContent = 'Stop';
        toggleButton.classList.remove('off');
    }
});

async function main() {
    try {
        await tf.setBackend('webgl');
        await getVideoDevices();
        model = await handpose.load();
        detectHands();
    } catch (error) {
        console.error('Error in main function:', error);
    }
}

main();

const tabButtons = document.querySelectorAll('.tab-button');
const codeBlocks = document.querySelectorAll('.code-block');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        codeBlocks.forEach(block => block.classList.add('hidden'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.remove('hidden');
    });
});