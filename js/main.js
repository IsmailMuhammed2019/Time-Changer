// DOM Elements

const time = document.querySelector('#time'),
    greeting = document.querySelector('#greeting'),
    name = document.querySelector('#name'),
    focus = document.querySelector('#focus');

    // Show Time

    function showTime(){
        let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

        // Set AM or PM
        const amPm = hour >= 12 ? 'PM' : 'AM';

        // 12hr Format
        hour = hour % 12 || 12;

        //Output Time
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

        setTimeout(showTime, 1000);
    }

    //Add Zero
    function addZero(n){
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    // Set Background and Greeting
    function setBgGreet(){
        let today = new Date(),
        hour = today.getHours();

        if(hour < 12){
            //Morning
            document.body.style.backgroundImage = "URL('../img/morning.jpg')";
            greeting.textContent = 'Good Morning';
        }else if (hour < 18){
            // Afternoon
            document.body.style.backgroundImage = "URL('../img/afternoon.jpg')";
            greeting.textContent = 'Good Afternoon';
        }else {
            //Evening
            document.body.style.backgroundImage = "URL('../img/night.jpg')";
            greeting.textContent = 'Good Evening';
        }
    }

    //Run

    showTime();