const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const colors = ['purple', 'pink', 'blue', 'green', 'yellow', 'orange', 'red'];

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');

days.forEach((day, index) => {
    const button = document.createElement('button');
        button.textContent = day;
        button.style.backgroundColor = colors[index]; 
        button.addEventListener('click', () => {
            const box = document.querySelector('.box');
            const distanceToTravel = 250 * (index + 1); 
            box.style.backgroundColor = colors[index]; 
            box.style.top = `${distanceToTravel}px`;
            setTimeout(() => {
                box.style.top = '50%';
            }, 1500); 
        });
        buttonContainer.appendChild(button);
    });

    document.body.appendChild(buttonContainer);
