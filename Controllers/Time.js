let d = document
const getId = id => d.getElementById(id);
const HOURSTEXT = getId("hours");
const DATETEXT = getId("daysMonths");
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const timer = () => {
    setInterval(()=>{
        const DATENOW = new Date()
        
        let conversionM = null;
        let conversionH = null;
    
        DATENOW.getMinutes().toString().length !== 2 
        ? conversionM = "0" + DATENOW.getMinutes()
        : conversionM = DATENOW.getMinutes();
    
        DATENOW.getHours().toString().length !== 2 
        ? conversionH = "0" + DATENOW.getHours()
        : conversionH = DATENOW.getHours();
    
        HOURSTEXT.textContent = conversionH + ":" + conversionM;
        DATETEXT.textContent = DAYS[DATENOW.getDay()] + ", " + DATENOW.getMonth() + " " + MONTHS[DATENOW.getMonth()];
    }, 1000);
}

export default timer