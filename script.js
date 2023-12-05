const hourhand = document. querySelector('.hand.hours');
const minuteshand = document. querySelector('.hand.minutes');
const secondshand = document. querySelector('.hand.seconds');

const setrotation = (element, rotationpercentage) => {
    element.style.setproperty('--rotation', rotationpercentage * 360);
};


const setclock = () => {
    const currentDate = new Date();

    const secondspercentage = currentDate.getseconds() / 60;
    const minutespercentage = currentDate.getminutes() / 60;
    const hourspercentage = currentDate.gethours() / 12;


    setrotation(secondshand, secondspercentage);
    setrotation(minuteshand, secondspercentage);
    setrotation(hourhand, secondspercentage);
};
