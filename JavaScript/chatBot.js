

    // ==========================
    // CHATBOT OPEN / CLOSE ANIMATION
    // ==========================

    document.getElementById("chatbotButton").addEventListener("click", function (event) {
        let chatbot = document.getElementById("chatbot");
        chatbot.style.display = "flex";

        // Smooth Animation
        setTimeout(() => {
            chatbot.classList.add("show");
        }, 10);

        event.stopPropagation();
    });

    document.getElementById("closeChat").addEventListener("click", function () {
        let chatbot = document.getElementById("chatbot");

        chatbot.classList.remove("show");

        // Wait for animation to finish
        setTimeout(() => {
            chatbot.style.display = "none";
        }, 300);
    });

    // Close when clicking outside
    document.addEventListener("click", function (event) {
        let chatbot = document.getElementById("chatbot");
        let chatbotButton = document.getElementById("chatbotButton");

        if (!chatbot.contains(event.target) && event.target !== chatbotButton) {
            chatbot.classList.remove("show");
            setTimeout(() => {
                chatbot.style.display = "none";
            }, 300);
        }
    });


    // ==========================
    // CHAT MESSAGE HANDLING
    // ==========================

    document.getElementById("sendMessage").addEventListener("click", function () {
        sendMessage();
    });

    document.getElementById("userInput").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        let userInput = document.getElementById("userInput").value;
        if (userInput.trim() === "") return;

        let chatBody = document.getElementById("chatBody");

        // User message
        let userMessage = document.createElement("p");
        userMessage.className = "user-message";
        userMessage.innerText = userInput;
        chatBody.appendChild(userMessage);

        // Bot Response
        let botResponse = getBotResponse(userInput.toLowerCase());

        if (botResponse.includes("resume download")) {
            let botMsg = document.createElement("p");
            botMsg.className = "bot-message";
            botMsg.innerHTML = `<i class="fa-solid fa-file"></i> You can download my resume below.`;
            chatBody.appendChild(botMsg);

            let resumeButton = document.createElement("button");
            resumeButton.className = "resume-button";
            resumeButton.innerText = "Download Resume";
            resumeButton.onclick = function () {
                window.location.href = "../CV/resume.pdf"; // change link here
            };
            chatBody.appendChild(resumeButton);
        } else {
            let botMessage = document.createElement("p");
            botMessage.className = "bot-message";
            botMessage.innerHTML = botResponse;
            chatBody.appendChild(botMessage);
        }

        document.getElementById("userInput").value = "";
        chatBody.scrollTop = chatBody.scrollHeight;

        saveChatHistory();
    }


    // ==========================
    // BOT RESPONSES WITH ICONS
    // ==========================

    function getBotResponse(input) {
        if (input.includes("hello") || input.includes("hi")) {
            return `<i class="fa-solid fa-handshake"></i> Hello! How can I assist you today?`;
        }

        else if (input.includes("project")) {
            return `<i class="fa-solid fa-diagram-project"></i> You can check my projects in the portfolio section. Need details?`;
        }

        else if (input.includes("resume") || input.includes("cv")) {
            return "resume download";
        }

        else if (input.includes("contact")) {
            return `<i class="fa-solid fa-envelope"></i> Contact me at <b>officialsumitkumar31@gmail.com</b>`;
        }

        else if (input.includes("skills")) {
            return `<i class="fa-solid fa-code"></i> I have skills in C++, Python, HTML, CSS, JavaScript, MongoDB, PHP & more!`;
        }

        else if (input.includes("dark mode")) {
            document.body.classList.toggle("dark-mode");
            return `<i class="fa-solid fa-moon"></i> Dark mode toggled!`;
        }

        else {
            return `<i class="fa-solid fa-lightbulb"></i> I'm still learning! Try asking about projects, resume, or skills.`;
        }
    }


    // ==========================
    // SAVE + LOAD CHAT HISTORY
    // ==========================

    function saveChatHistory() {
        let chatBody = document.getElementById("chatBody").innerHTML;
        sessionStorage.setItem("chatHistory", chatBody);
    }

    function loadChatHistory() {
        let history = sessionStorage.getItem("chatHistory");
        if (history) {
            document.getElementById("chatBody").innerHTML = history;
        }
    }

    window.onload = loadChatHistory;

