const button = document.querySelector('.submit-btn');
let rate = ''

const ratings = document.querySelector('.rating-options');

for (const rating of ratings.children) {
    rating.addEventListener('click', (e) => {
        rating.style.backgroundColor = 'grey'
        rate = rating.textContent
    })
}


button.addEventListener('click', () => {
    const appreciation = document.querySelector('.appreciate');
    const innerRate = document.querySelector('.rate');

    innerRate.textContent = `You selected ${rate} out of 5`
    appreciation.style.display = 'flex'
})