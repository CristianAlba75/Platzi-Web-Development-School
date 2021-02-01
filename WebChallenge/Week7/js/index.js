 /* Light mode */
const light_body ='hsl(0, 0%, 100%)';
const light_cards= 'hsl(227, 47%, 96%)';
const light_theme = 'hsl(225, 100%, 98%)';
const light_number= 'hsl(230, 17%, 14%)';

 /* Dark mode */
const dark_body = 'hsl(230, 17%, 14%)';
const dark_cards= 'hsl(228, 28%, 20%)';
const dark_text= 'hsl(228, 12%, 44%)';
const dark_number= 'hsl(0, 0%, 100%)';

const checkbox = document.getElementById('theme')
checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        $("body").css("background-color", dark_body);
        $(".card, .card-overview").css("background-color", dark_cards);
        $(".dark__text").css("color", dark_number);
    } else {
        $("body").css("background-color", light_body);
        $(".card, .card-overview").css("background-color", light_cards);
        $(".dark__text").css("color", light_number);
    }
})