const drop = document.getElementById('drop')
const team = document.getElementById('team')

team.addEventListener('click', () => {
    drop.classList.toggle('show')
    team.classList.toggle('underline')
    
    
})
