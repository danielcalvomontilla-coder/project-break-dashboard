
const background = document.getElementById("body");


const changeBackground = () => {
     const images = [
         "./css/img/bt1.png",
        "./css/img/bt2.png",
         "./css/img/bt3.png",
         "./css/img/bt4.png",
         "./css/img/bt5.png",
        "./css/img/bt6.png",
         "./css/img/bt7.png",
         "./css/img/bt8.png",
        "./css/img/bt9.png",
         "./css/img/bt10.png"        
     ];     
     
     let randomImage = images[Math.floor(Math.random() * images.length)];
    background.style.backgroundImage = `url(${randomImage})`;
    
  setInterval(() => {
        randomImage = images[Math.floor(Math.random() * images.length)];
        background.style.backgroundImage = `url(${randomImage})`;
    }, 15000);
};

changeBackground();

