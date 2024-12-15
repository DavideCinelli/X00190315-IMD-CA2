// Davide Cinelli X00190315

//load in htmls
const sections = ['navbar', 'hero', 'projects', 'work', 'workinterests','interests', 'contact'];
sections.forEach(section => {
    fetch(`htmls/${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;
        });
});



//tsparticles background
tsParticles.load("particle-background",{
    background: {color: "#000"},
    particles: {
        move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            out_mode: "out"
        },
        number: {
            value: 50,
            density: {enable: true}
        },
        size: {
            value: .5,
            random: true
        }
    }
});




//card dropdown feature
document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('yearSelect');
    const yearOneModules = document.getElementById('yearOneModules');
    const yearTwoModules = document.getElementById('yearTwoModules');
    const yearThreeModules = document.getElementById('yearThreeModules');
    
    yearOneModules.style.display = 'block';
    yearTwoModules.style.display = 'none';
    yearThreeModules.style.display = 'none';

    yearSelect.addEventListener('change', function() {
        const selectedYear = yearSelect.value;

        yearOneModules.style.display = 'none';
        yearTwoModules.style.display = 'none';
        yearThreeModules.style.display = 'none';

        if (selectedYear == '1') {yearOneModules.style.display = 'block';} 
        else if (selectedYear == '2') {yearTwoModules.style.display = 'block';} 
        else if (selectedYear == '3') {yearThreeModules.style.display = 'block';}
    });
});

