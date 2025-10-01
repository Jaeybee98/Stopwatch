 const display = document.getElementById('display');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');
        const lapBtn = document.getElementById('lapBtn');
        const lapsList = document.getElementById('lapsList');

        let startTime = 0;
        let elapsedTime = 0;
        let timerInterval;
        let isRunning = false;
        let lapCounter = 0;

        // Function to format the time (HH:MM:SS.MMM)
        function formatTime(time) {
            // Calculate components
            const totalMilliseconds = time;
            const ms = String(totalMilliseconds % 1000).padStart(3, '0');
            const totalSeconds = Math.floor(totalMilliseconds / 1000);
            const s = String(totalSeconds % 60).padStart(2, '0');
            const totalMinutes = Math.floor(totalSeconds / 60);
            const m = String(totalMinutes % 60).padStart(2, '0');
            const h = String(Math.floor(totalMinutes / 60)).padStart(2, '0');

            return `${h}:${m}:${s}.${ms}`;
        }

        // Function to update the display
        function printTime() {
            elapsedTime = Date.now() - startTime;
            display.textContent = formatTime(elapsedTime);
        }

        // Start Timer Logic
        function startTimer() {
            if (!isRunning) {
                // Set the start time relative to the paused time
                startTime = Date.now() - elapsedTime;

                // Update the time every 10 milliseconds (for millisecond accuracy)
                timerInterval = setInterval(printTime, 10);
                isRunning = true;

                // Optional: Update button visual state
                startBtn.disabled = true;
                stopBtn.disabled = false;
                lapBtn.disabled = false;
            }
        }

        // Stop Timer Logic
        function stopTimer() {
            if (isRunning) {
                clearInterval(timerInterval);
                isRunning = false;

                // Optional: Update button visual state
                startBtn.disabled = false;
                stopBtn.disabled = true;
            }
        }

        // Reset Timer Logic
        function resetTimer() {
            stopTimer(); // Ensure the timer is stopped
            startTime = 0;
            elapsedTime = 0;
            lapCounter = 0;
            display.textContent = "00:00:00.000"; // Reset display
            lapsList.innerHTML = ""; // Clear lap list

            // Optional: Reset button visual state
            startBtn.disabled = false;
            stopBtn.disabled = false;
            lapBtn.disabled = true;
        }

        // Lap Functionality
        function recordLap() {
            if (isRunning) {
                lapCounter++;
                const lapTime = formatTime(elapsedTime);

                const listItem = document.createElement('li');
                listItem.innerHTML = `<span>Lap ${lapCounter}:</span> <span>${lapTime}</span>`;

                // Add the new lap time to the beginning of the list
                lapsList.prepend(listItem);
            }
        }

        // Event Listeners
        startBtn.addEventListener('click', startTimer);
        stopBtn.addEventListener('click', stopTimer);
        resetBtn.addEventListener('click', resetTimer);
        lapBtn.addEventListener('click', recordLap);

        // Initial state setup
        resetTimer();