
// The Modal Popup



// Global Variables

let body_tag = document.body;
console.log(body_tag); 
let play_buttons = document.querySelectorAll('.play_btn');
let new_div = document.createElement('div');
let new_anchor_tag = document.createElement('a');
let new_header_tag = document.createElement('h3');
let new_button = document.createElement('button');
let new_image_tag = document.createElement('img');

for (let index = 0; index < play_buttons.length; index++) {
    play_buttons[index].addEventListener('click', function () {
        console.log(play_buttons[index]);
    });
}

//Navigation Panel (Burger menu transition)

// let navSlide = () => {
//     let burger = document.querySelector('.burger_menu');
//     let nav = document.querySelector('.navbar_list');
//     let all_nav_links = document.querySelectorAll('.navbar_list li');

//     burger.addEventListener('click', () => {

//         //Navigation Toggler

//         nav.classList.toggle('nav-active');

//         //Navigation Links Animation

//         all_nav_links.forEach((link, index) => {
//             console.log(index);
//             if (link.style.animation) {
//                 link.style.animation = ''
//             } else {
//                 link.style.animation = `fade_nav_links 0.5s ease forwards ${index / 7}s`
//             }
//         });

//         //Burger Menu Animation

//         burger.classList.toggle('toggle');
//     });


// }
// navSlide();

//Music Player


let burger_container = document.getElementById('burger_container');
let music_list = document.getElementById('music_list');
let songs = document.getElementsByClassName('song');
let source_links = [
                    "audio/Wasted Time.mp3",
                    "audio/Nasty-C-All-In-ft-TI-(JustNaija.com).mp3", 
                    "audio/Nissi-Tornado-(JustNaija.com).mp3",
                    "audio/533.mp3",
                    "audio/A Thousand Bad Times.mp3",
                    "audio/Wasted Time.mp3",
                    "audio/Nasty-C-All-In-ft-TI-(JustNaija.com).mp3", 
                    "audio/Nissi-Tornado-(JustNaija.com).mp3",
                    "audio/533.mp3",
                    "audio/A Thousand Bad Times.mp3",
                    "audio/Wasted Time.mp3",
                    "audio/Nasty-C-All-In-ft-TI-(JustNaija.com).mp3", 
                    "audio/Nissi-Tornado-(JustNaija.com).mp3",
                    "audio/533.mp3",
                    "audio/A Thousand Bad Times.mp3",
                ];

for (let index = 0; index < songs.length; index++) {
    songs[index].addEventListener('click', function () {
    console.log(songs[index]);
    let player = document.getElementById('player');
    player.getAttributeNode('src').value = source_links[index];
    console.log(player);

    });
}



$(document).ready(function () {
    $()
})





//Game Area (Word Scramble Game)

let displayed_word = document.querySelector('.displayed_scramble');
let answer = document.querySelector('.solution_input');
let start_btn = document.querySelector('.start_btn');
let prev_btn = document.querySelector('.prev_btn');
let next_btn = document.querySelector('.next_btn');
let submit_btn = document.querySelector('.submit_btn');
let dyk_paragraph = document.querySelector('.dyk_paragraph')

let play = false;

let new_words = '';
let random_words = '';
let total_scrambled_words = [
    [
        { word: 'ronaldo', description: "", chosen_answer: "",}, 
        { word: 'messi', description: "", chosen_answer: "",}, 
        { word: 'offside', description: "", chosen_answer: "",}, 
        { word: 'stadia', description: "", chosen_answer: "",}, 
        { word: 'scoresheet', description: "", chosen_answer: "",}, 
        { word: 'dribble', description: "", chosen_answer: "",}, 
        { word: 'swimming', description: "", chosen_answer: "",}, 
        { word: 'winning', description: "", chosen_answer: "",}, 
        { word: 'losing', description: "", chosen_answer: "",}, 
        { word: 'playmaker', description: "", chosen_answer: "",},
        { word: "athletics", description: "", chosen_answer: "",}, 
        { word: "competition", description: "", chosen_answer: "",}, 
        { word: "game", description: "", chosen_answer: "",}, 
        { word: "racing", description: "", chosen_answer: "",}, 
        { word: "gymnastics", description: "", chosen_answer: "",}, 
        { word: "sportsman", description: "", chosen_answer: "",}, 
        { word: "soccer", description: "", chosen_answer: "",}, 
        { word: "rugby", description: "", chosen_answer: "",}, 
        { word: "association", description: "", chosen_answer: "",},
        { word: "football", description: "", chosen_answer: "",}, 
        { word: "downfield", description: "", chosen_answer: "",}, 
        { word: "cycling", description: "", chosen_answer: "",}, 
        { word: "tennis", description: "", chosen_answer: "",}, 
        { word: "polo", description: "", chosen_answer: "",}, 
        { word: "team", description: "", chosen_answer: "",}, 
        { word: "hockey", description: "", chosen_answer: "",}, 
        { word: "skating", description: "", chosen_answer: "",}, 
        { word: "professional", description: "", chosen_answer: "",}, 
        { word: "sport", description: "", chosen_answer: "",},
        { word: "athletic", description: "", chosen_answer: "",}, 
        { word: "run", description: "", chosen_answer: "",}, 
        { word: "call", description: "", chosen_answer: "",}, 
        { word: "referee", description: "", chosen_answer: "",}, 
        { word: "kill", description: "", chosen_answer: "",}, 
        { word: "spar", description: "", chosen_answer: "",}, 
        { word: "judo", description: "", chosen_answer: "",}, 
        { word: "ineligible", description: "", chosen_answer: "",}, 
        { word: "wipeout", description: "", chosen_answer: "",}, 
        { word: "schuss", description: "", chosen_answer: "",}, 
        { word: "luge", description: "", chosen_answer: "",},
        { word: "karate", description: "", chosen_answer: "",}, 
        { word: "archery", description: "", chosen_answer: "",}, 
        { word: "upfield", description: "", chosen_answer: "",}, 
        { word: "contact", description: "", chosen_answer: "",}, 
        { word: "funambulism", description: "", chosen_answer: "",}, 
        { word: "toboggan", description: "", chosen_answer: "",}, 
        { word: "baseball", description: "", chosen_answer: "",}, 
        { word: "basketball", description: "", chosen_answer: "",}, 
        { word: "personal", description: "", chosen_answer: "",},
        { word: "foul", description: "", chosen_answer: "",}, 
        { word: 'bobsled', description: "", chosen_answer: "",}, 
        { word: 'outdoor', description: "", chosen_answer: "",}, 
        { word: 'skiing', description: "", chosen_answer: "",}, 
        { word: 'riding', description: "", chosen_answer: "",}, 
        { word: 'skateboard', description: "", chosen_answer: "",}, 
        { word: 'speed', description: "", chosen_answer: "",}, 
        { word: 'skate', description: "", chosen_answer: "",}, 
        { word: 'jackknife', description: "", chosen_answer: "",}, 
        { word: 'ski', description: "", chosen_answer: "",}, 
        { word: 'games', description: "", chosen_answer: "",},
        { word: 'sportswoman', description: "", chosen_answer: "",}, 
        { word: 'rollerblade', description: "", chosen_answer: "",}, 
        { word: 'rowing', description: "", chosen_answer: "",}, 
        { word: 'fun', description: "", chosen_answer: "",}, 
        { word: 'regulation', description: "", chosen_answer: "",}, 
        { word: 'time', description: "", chosen_answer: "",}, 
        { word: 'play', description: "", chosen_answer: "",}, 
        { word: 'physical', description: "", chosen_answer: "",}, 
        { word: 'activity', description: "", chosen_answer: "",}, 
        { word: 'disport', description: "", chosen_answer: "",},
        { word: 'lark', description: "", chosen_answer: "",}, 
        { word: 'blood', description: "", chosen_answer: "",}, 
        { word: 'boast', description: "", chosen_answer: "",}, 
        { word: 'mutation', description: "", chosen_answer: "",}, 
        { word: 'frolic', description: "", chosen_answer: "",}, 
        { word: 'skylark', description: "", chosen_answer: "",}, 
        { word: 'romp', description: "", chosen_answer: "",}, 
        { word: 'gambol', description: "", chosen_answer: "",}, 
        { word: 'mutant', description: "", chosen_answer: "",}, 
        { word: 'feature', description: "", chosen_answer: "",}, 
        { word: 'frisk', description: "", chosen_answer: "",},
        { word: 'coach', description: "", chosen_answer: "",}, 
        { word: 'rugby', description: "", chosen_answer: "",}, 
        { word: 'cavort', description: "", chosen_answer: "",}, 
        { word: 'rollick', description: "", chosen_answer: "",}, 
        { word: 'volleyball', description: "", chosen_answer: "",}, 
        { word: 'water', description: "", chosen_answer: "",}, 
        { word: 'sudden', description: "", chosen_answer: "",}, 
        { word: 'death', description: "", chosen_answer: "",}, 
        { word: 'injury', description: "", chosen_answer: "",}, 
        { word: 'injure', description: "", chosen_answer: "",}, 
        { word: 'position', description: "", chosen_answer: "",},
        { word: 'basketball', description: "", chosen_answer: "",}, 
        { word: 'sportive', description: "", chosen_answer: "",}, 
        { word: 'television', description: "", chosen_answer: "",}, 
        { word: 'sportsmanship', description: "", chosen_answer: "",}, 
        { word: 'multisport', description: "", chosen_answer: "",}, 
        { word: 'champion', description: "", chosen_answer: "",}, 
        { word: 'chess', description: "", chosen_answer: "",}, 
        { word: 'badminton', description: "", chosen_answer: "",}, 
        { word: 'jog', description: "", chosen_answer: "",},
        { word: 'sportaccord', description: "", chosen_answer: "",}, 
        { word: 'diversion', description: "", chosen_answer: "",}, 
        { word: 'olympic', description: "", chosen_answer: "",}, 
        { word: 'council', description: "", chosen_answer: "",}, 
        { word: 'umpire', description: "", chosen_answer: "",}, 
        { word: 'europe', description: "", chosen_answer: "",}, 
        { word: 'leisure', description: "", chosen_answer: "",}, 
        { word: 'recreational', description: "", chosen_answer: "",}, 
        { word: 'challenge', description: "", chosen_answer: "",},
        { word: 'athlete', description: "", chosen_answer: "",}, 
        { word: 'athletes', description: "", chosen_answer: "",}, 
        { word: 'coaches', description: "", chosen_answer: "",}, 
        { word: 'playing', description: "", chosen_answer: "",}, 
        { word: 'variation', description: "", chosen_answer: "",}, 
        { word: 'summercater', description: "", chosen_answer: "",}, 
        { word: 'entertainment', description: "", chosen_answer: "",}, 
        { word: 'tournament', description: "", chosen_answer: "",},
        { word: 'season', description: "", chosen_answer: "",}, 
        { word: 'playoffs', description: "", chosen_answer: "",}, 
        { word: 'athleticism', description: "", chosen_answer: "",}, 
        { word: 'dexterity', description: "", chosen_answer: "",}, 
        { word: 'sleigh', description: "", chosen_answer: "",}, 
        { word: 'ref', description: "", chosen_answer: "",}, 
        { word: 'sled', description: "", chosen_answer: "",}, 
        { word: 'ironman', description: "", chosen_answer: "",}, 
        { word: 'manager', description: "", chosen_answer: "",}, 
        { word: 'handler', description: "", chosen_answer: "",},
        { word: 'defense', description: "", chosen_answer: "",}, 
        { word: 'defence', description: "", chosen_answer: "",}, 
        { word: 'trial', description: "", chosen_answer: "",}, 
        { word: 'series', description: "", chosen_answer: "",}, 
        { word: 'humour', description: "", chosen_answer: "",}, 
        { word: 'side', description: "", chosen_answer: "",}, 
        { word: 'english', description: "", chosen_answer: "",}, 
        { word: 'tuck', description: "", chosen_answer: "",},
    ], [
        { language: 'ronaldo', description: "", chosen_answer: "",}, 
        { language: 'messi', description: "", chosen_answer: "",}, 
        { language: 'offside', description: "", chosen_answer: "",}, 
        { language: 'stadia', description: "", chosen_answer: "",}, 
        { language: 'scoresheet', description: "", chosen_answer: "",}, 
        { language: 'dribble', description: "", chosen_answer: "",}, 
        { language: 'swimming', description: "", chosen_answer: "",}, 
        { language: 'winning', description: "", chosen_answer: "",}, 
        { language: 'losing', description: "", chosen_answer: "",}, 
        { language: 'playmaker', description: "", chosen_answer: "",},
        { language: "athletics", description: "", chosen_answer: "",}, 
        { language: "competition", description: "", chosen_answer: "",}, 
        { language: "game", description: "", chosen_answer: "",}, 
        { language: "racing", description: "", chosen_answer: "",}, 
        { language: "gymnastics", description: "", chosen_answer: "",}, 
        { language: "sportsman", description: "", chosen_answer: "",}, 
        { language: "soccer", description: "", chosen_answer: "",}, 
        { language: "rugby", description: "", chosen_answer: "",}, 
        { language: "association", description: "", chosen_answer: "",},
        { language: "football", description: "", chosen_answer: "",}, 
        { language: "downfield", description: "", chosen_answer: "",}, 
        { language: "cycling", description: "", chosen_answer: "",}, 
        { language: "tennis", description: "", chosen_answer: "",}, 
        { language: "polo", description: "", chosen_answer: "",}, 
        { language: "team", description: "", chosen_answer: "",}, 
        { language: "hockey", description: "", chosen_answer: "",}, 
        { language: "skating", description: "", chosen_answer: "",}, 
        { language: "professional", description: "", chosen_answer: "",}, 
        { language: "sport", description: "", chosen_answer: "",},
        { language: "athletic", description: "", chosen_answer: "",}, 
        { language: "run", description: "", chosen_answer: "",}, 
        { language: "call", description: "", chosen_answer: "",}, 
        { language: "referee", description: "", chosen_answer: "",}, 
        { language: "kill", description: "", chosen_answer: "",}, 
        { language: "spar", description: "", chosen_answer: "",}, 
        { language: "judo", description: "", chosen_answer: "",}, 
        { language: "ineligible", description: "", chosen_answer: "",}, 
        { language: "wipeout", description: "", chosen_answer: "",}, 
        { language: "schuss", description: "", chosen_answer: "",}, 
        { language: "luge", description: "", chosen_answer: "",},
        { language: "athletic", description: "", chosen_answer: "",}, 
        { language: "archery", description: "", chosen_answer: "",}, 
        { language: "upfield", description: "", chosen_answer: "",}, 
        { language: "contact", description: "", chosen_answer: "",}, 
        { language: "funambulism", description: "", chosen_answer: "",}, 
        { language: "toboggan", description: "", chosen_answer: "",}, 
        { language: "baseball", description: "", chosen_answer: "",}, 
        { language: "basketball", description: "", chosen_answer: "",}, 
        { language: "personal", description: "", chosen_answer: "",},
        { language: "foul", description: "", chosen_answer: "",}, 
        { language: 'bobsled', description: "", chosen_answer: "",}, 
        { language: 'outdoor', description: "", chosen_answer: "",}, 
        { language: 'skiing', description: "", chosen_answer: "",}, 
        { language: 'riding', description: "", chosen_answer: "",}, 
        { language: 'skateboard', description: "", chosen_answer: "",}, 
        { language: 'speed', description: "", chosen_answer: "",}, 
        { language: 'skate', description: "", chosen_answer: "",}, 
        { language: 'jackknife', description: "", chosen_answer: "",}, 
        { language: 'ski', description: "", chosen_answer: "",}, 
        { language: 'games', description: "", chosen_answer: "",},
        { language: 'sportswoman', description: "", chosen_answer: "",}, 
        { language: 'rollerblade', description: "", chosen_answer: "",}, 
        { language: 'rowing', description: "", chosen_answer: "",}, 
        { language: 'fun', description: "", chosen_answer: "",}, 
        { language: 'regulation', description: "", chosen_answer: "",}, 
        { language: 'time', description: "", chosen_answer: "",}, 
        { language: 'play', description: "", chosen_answer: "",}, 
        { language: 'physical', description: "", chosen_answer: "",}, 
        { language: 'activity', description: "", chosen_answer: "",}, 
        { language: 'disport', description: "", chosen_answer: "",},
        { language: 'lark', description: "", chosen_answer: "",}, 
        { language: 'blood', description: "", chosen_answer: "",}, 
        { language: 'boast', description: "", chosen_answer: "",}, 
        { language: 'mutation', description: "", chosen_answer: "",}, 
        { language: 'frolic', description: "", chosen_answer: "",}, 
        { language: 'skylark', description: "", chosen_answer: "",}, 
        { language: 'romp', description: "", chosen_answer: "",}, 
        { language: 'gambol', description: "", chosen_answer: "",}, 
        { language: 'mutant', description: "", chosen_answer: "",}, 
        { language: 'feature', description: "", chosen_answer: "",}, 
        { language: 'frisk', description: "", chosen_answer: "",},
        { language: 'coach', description: "", chosen_answer: "",}, 
        { language: 'rugby', description: "", chosen_answer: "",}, 
        { language: 'cavort', description: "", chosen_answer: "",}, 
        { language: 'rollick', description: "", chosen_answer: "",}, 
        { language: 'volleyball', description: "", chosen_answer: "",}, 
        { language: 'water', description: "", chosen_answer: "",}, 
        { language: 'sudden', description: "", chosen_answer: "",}, 
        { language: 'death', description: "", chosen_answer: "",}, 
        { language: 'injury', description: "", chosen_answer: "",}, 
        { language: 'injure', description: "", chosen_answer: "",}, 
        { language: 'position', description: "", chosen_answer: "",},
        { language: 'basketball', description: "", chosen_answer: "",}, 
        { language: 'sportive', description: "", chosen_answer: "",}, 
        { language: 'television', description: "", chosen_answer: "",}, 
        { language: 'sportsmanship', description: "", chosen_answer: "",}, 
        { language: 'multisport', description: "", chosen_answer: "",}, 
        { language: 'champion', description: "", chosen_answer: "",}, 
        { language: 'chess', description: "", chosen_answer: "",}, 
        { language: 'badminton', description: "", chosen_answer: "",}, 
        { language: 'jog', description: "", chosen_answer: "",},
        { language: 'sportaccord', description: "", chosen_answer: "",}, 
        { language: 'diversion', description: "", chosen_answer: "",}, 
        { language: 'olympic', description: "", chosen_answer: "",}, 
        { language: 'council', description: "", chosen_answer: "",}, 
        { language: 'umpire', description: "", chosen_answer: "",}, 
        { language: 'europe', description: "", chosen_answer: "",}, 
        { language: 'leisure', description: "", chosen_answer: "",}, 
        { language: 'recreational', description: "", chosen_answer: "",}, 
        { language: 'challenge', description: "", chosen_answer: "",},
        { language: 'athlete', description: "", chosen_answer: "",}, 
        { language: 'athletes', description: "", chosen_answer: "",}, 
        { language: 'coaches', description: "", chosen_answer: "",}, 
        { language: 'playing', description: "", chosen_answer: "",}, 
        { language: 'variation', description: "", chosen_answer: "",}, 
        { language: 'summercater', description: "", chosen_answer: "",}, 
        { language: 'entertainment', description: "", chosen_answer: "",}, 
        { language: 'tournament', description: "", chosen_answer: "",},
        { language: 'season', description: "", chosen_answer: "",}, 
        { language: 'playoffs', description: "", chosen_answer: "",}, 
        { language: 'athleticism', description: "", chosen_answer: "",}, 
        { language: 'dexterity', description: "", chosen_answer: "",}, 
        { language: 'sleigh', description: "", chosen_answer: "",}, 
        { language: 'ref', description: "", chosen_answer: "",}, 
        { language: 'sled', description: "", chosen_answer: "",}, 
        { language: 'ironman', description: "", chosen_answer: "",}, 
        { language: 'manager', description: "", chosen_answer: "",}, 
        { language: 'handler', description: "", chosen_answer: "",},
        { language: 'defense', description: "", chosen_answer: "",}, 
        { language: 'defence', description: "", chosen_answer: "",}, 
        { language: 'trial', description: "", chosen_answer: "",}, 
        { language: 'series', description: "", chosen_answer: "",}, 
        { language: 'humour', description: "", chosen_answer: "",}, 
        { language: 'side', description: "", chosen_answer: "",}, 
        { language: 'english', description: "", chosen_answer: "",}, 
        { language: 'tuck', description: "", chosen_answer: "",},
    ], [
        { country: 'Afghanistan', capital: "Kabul", description: "", chosen_answer: "", }, 
        { country: 'Albania', capital: "Tirana", description: "", chosen_answer: "", }, 
        { country: 'Algeria', capital: "Algiers", description: "", chosen_answer: "", }, 
        { country: 'Andorra', capital: "Andorra la Vella", description: "", chosen_answer: "", }, 
        { country: 'Angola', capital: "Luanda", description: "", chosen_answer: "", }, 
        { country: 'Antigua and Barbuda', capital: "Saint John's", description: "", chosen_answer: "", }, 
        { country: "Argentina", capital: "Buenos Aires", description: "", chosen_answer: "", }, 
        { country: 'Armenia', capital: "Yerevan", description: "", chosen_answer: "", }, 
        { country: 'Australia', capital: "Canberra", description: "", chosen_answer: "", }, 
        { country: 'Austria', capital: "Vienna", description: "", chosen_answer: "",},
        { country: "Azerbaijan", capital: "Baku", description: "", chosen_answer: "", }, 
        { country: "Bahamas", capital: "Nassau", description: "", chosen_answer: "", }, 
        { country: "Bahrain", capital: "Manama", description: "", chosen_answer: "", }, 
        { country: "Bangladesh", capital: "Dhaka", description: "", chosen_answer: "", }, 
        { country: "Barbados", capital: "Bridgetown", description: "", chosen_answer: "", }, 
        { country: "Belarus", capital: "Minsk", description: "", chosen_answer: "", }, 
        { country: "Belgium", capital: "Brussels", description: "", chosen_answer: "", }, 
        { country: "Belize", capital: "Belmopan", description: "", chosen_answer: "", }, 
        { country: "Benin", capital: "Porto - Novo", description: "", chosen_answer: "",},
        { country: "Bhutan", capital: "Thimphu", description: "", chosen_answer: "", }, 
        { country: "Bolivia	Sucre(de jure)", capital: "La Paz(seat of government)", description: "", chosen_answer: "", }, 
        { country: "Bosnia and Herzegovina", capital: "Sarajevo", description: "", chosen_answer: "", }, 
        { country: "Botswana", capital: "Gaborone", description: "", chosen_answer: "", }, 
        { country: "Brazil", capital: "Brasilia", description: "", chosen_answer: "", }, 
        { country: "Brunei", capital: "Bandar Seri Begawan", description: "", chosen_answer: "", }, 
        { country: "Bulgaria", capital: "Sofia", description: "", chosen_answer: "", }, 
        { country: "Burkina Faso", capital: "Ouagadougou", description: "", chosen_answer: "", }, 
        { country: "Burundi", capital: "Gitega", description: "", chosen_answer: "", }, 
        { country: "Cabo Verde", capital: "Praia", description: "", chosen_answer: "",},
        { country: "Cambodia", capital: "Phnom Penh", description: "", chosen_answer: "", }, 
        { country: "Cameroon", capital: "Yaounde", description: "", chosen_answer: "", }, 
        { country: "Canada", capital: "Ottawa", description: "", chosen_answer: "", }, 
        { country: "Central African Republic", capital: "Bangui", description: "", chosen_answer: "", }, 
        { country: "Chad", capital: "N'Djamena", description: "", chosen_answer: "", }, 
        { country: "Chile", capital: "Santiago", description: "", chosen_answer: "", }, 
        { country: "Colombia", capital: "Bogotá", description: "", chosen_answer: "", }, 
        { country: "Comoros", capital: "Moroni", description: "", chosen_answer: "", }, 
        { country: "Congo", capital: " Democratic Republic of the Kinshasa", description: "", chosen_answer: "", }, 
        { country: "Congo", capital: "Republic of the Brazzaville", description: "", chosen_answer: "", }, 
        { country: "Costa Rica", capital: "San Jose", description: "", chosen_answer: "",},
        { country: "Cote d'Ivoire", capital: "Yamoussoukro", description: "", chosen_answer: "", }, 
        { country: "Croatia", capital: "Zagreb", description: "", chosen_answer: "", }, 
        { country: "Cuba", capital: "Havana", description: "", chosen_answer: "", }, 
        { country: "Cyprus", capital: "Nicosia", description: "", chosen_answer: "", }, 
        { country: "Czechia", capital: "Prague", description: "", chosen_answer: "", }, 
        { country: "Denmark", capital: "Copenhagen", description: "", chosen_answer: "", }, 
        { country: "Djibouti", capital: "Djibouti(city)", description: "", chosen_answer: "", }, 
        { country: "Dominica", capital: "Roseau", description: "", chosen_answer: "",}, 
        { country: "Ecuador", capital: "Quito", description: "", chosen_answer: "",},
        { country: 'Egypt', capital: "Cairo", description: "", chosen_answer: "",},
        { country: 'El Salvador', capital: "San Salvador", description: "", chosen_answer: "",},
        { country: 'Equatorial Guinea', capital: "Malabo(de jure),", description: "Oyala(seat of government)", chosen_answer: "",},
        { country: "Eritrea", capital: "Asmara", description: "", chosen_answer: "",},
        { country: 'Estonia', capital: "Tallinn", description: "", chosen_answer: "",},
        { country: 'Eswatini', capital: "Mbabane(administrative)", description: "(formerly Swaziland) Lobamba(legislative, royal)", chosen_answer: "",},
        { country: 'Ethiopia', capital: "Addis Ababa", description: "", chosen_answer: "",},
        { country: "Fiji", capital: "Suva", description: "", chosen_answer: "", },
        { country: "Finland", capital: "Helsinki", description: "", chosen_answer: "",},
        { country: 'France', capital: "Paris", description: "", chosen_answer: "",},
        { country: 'Gabon', capital: "Libreville", description: "", chosen_answer: "",},
        { country: 'Gambia', capital: "Banjul", description: "", chosen_answer: "",},
        { country: 'Georgia', capital: "Tbilisi", description: "", chosen_answer: "",},
        { country: 'Germany', capital: "Berlin", description: "", chosen_answer: "",},
        { country: 'Ghana', capital: "Accra", description: "", chosen_answer: "",},
        { country: 'Greece', capital: "Athens", description: "", chosen_answer: "",},
        { country: "Grenada", capital: "Saint George's", description: "", chosen_answer: "",},
        { country: 'Guatemala', capital: "Guatemala City", description: "", chosen_answer: "",},
        { country: 'Guinea', capital: "Conakry", description: "", chosen_answer: "",},
        { country: 'Guinea - Bissau', capital: "Bissau", description: "", chosen_answer: "",},
        { country: 'Guyana', capital: "Georgetown", description: "", chosen_answer: "",},
        { country: 'Haiti', capital: "Port - au - Prince", description: "", chosen_answer: "",},
        { country: 'Honduras', capital: "Tegucigalpa", description: "", chosen_answer: "",},
        { country: 'Hungary', capital: "Budapest", description: "", chosen_answer: "",},
        { country: 'Iceland', capital: "Reykjavik", description: "", chosen_answer: "",},
        { country: 'India', capital: "New Delhi", description: "", chosen_answer: "",},
        { country: 'Indonesia', capital: "Jakarta", description: "", chosen_answer: "",},
        { country: 'Iran', capital: "Tehran", description: "", chosen_answer: "",},
        { country: 'Iraq', capital: "Baghdad", description: "", chosen_answer: "",},
        { country: 'Ireland', capital: "Dublin", description: "", chosen_answer: "",},
        { country: 'Israel', capital: "Jerusalem", description: "", chosen_answer: "",},
        { country: 'Italy', capital: "Rome", description: "", chosen_answer: "",},
        { country: 'Jamaica', capital: "Kingston", description: "", chosen_answer: "",},
        { country: 'Japan', capital: "Tokyo", description: "", chosen_answer: "",},
        { country: 'Jordan', capital: "Amman", description: "", chosen_answer: "",},
        { country: 'Kazakhstan', capital: "Nur - Sultan", description: "", chosen_answer: "",},
        { country: 'Kenya', capital: "Nairobi", description: "", chosen_answer: "",},
        { country: 'Kiribati', capital: "Tarawa", description: "", chosen_answer: "",},
        { country: 'Kosovo', capital: "Pristina", description: "", chosen_answer: "",},
        { country: 'Kuwait', capital: "Kuwait City", description: "", chosen_answer: "",},
        { country: 'Kyrgyzstan', capital: "Bishkek", description: "", chosen_answer: "",},
        { country: 'Laos', capital: "Vientiane", description: "", chosen_answer: "",},
        { country: 'Latvia', capital: "Riga", description: "", chosen_answer: "",},
        { country: 'Lebanon', capital: "Beirut", description: "", chosen_answer: "",},
        { country: 'Lesotho', capital: "Maseru", description: "", chosen_answer: "",},
        { country: 'Libya', capital: "Tripoli", description: "", chosen_answer: "",},
        { country: 'Liechtenstein', capital: "Vaduz", description: "", chosen_answer: "",},
        { country: 'Lithuania', capital: "Vilnius", description: "", chosen_answer: "",},
        { country: 'Luxembourg', capital: "Luxembourg(city)", description: "", chosen_answer: "",},
        { country: 'Madagascar', capital: "Antananarivo", description: "", chosen_answer: "",},
        { country: 'Malawi', capital: "Lilongwe", description: "", chosen_answer: "",},
        { country: 'Malaysia', capital: "Kuala Lumpur", description: "", chosen_answer: "",},
        { country: 'Maldives', capital: "Male", description: "", chosen_answer: "",},
        { country: 'Mali', capital: "Bamako", description: "", chosen_answer: "",},
        { country: 'Malta', capital: "Valletta", description: "", chosen_answer: "",},
        { country: 'Marshall Island', capital: "Majuro", description: "", chosen_answer: "",},
        { country: 'Mauritania', capital: "Nouakchott", description: "", chosen_answer: "",},
        { country: 'Mauritius', capital: "Port Louis", description: "", chosen_answer: "",},
        { country: 'Mexico', capital: "Mexico City", description: "", chosen_answer: "",},
        { country: 'Micronesia', capital: "Palikir", description: "", chosen_answer: "",},
        { country: 'Moldova', capital: "Chisinau", description: "", chosen_answer: "",},
        { country: 'Monaco', capital: "Monaco", description: "", chosen_answer: "",},
        { country: 'Mongolia', capital: "Ulaanbaatar", description: "", chosen_answer: "",},
        { country: 'Montenegro', capital: "Podgorica", description: "", chosen_answer: "",},
        { country: 'Morocco', capital: "Rabat", description: "", chosen_answer: "",},
        { country: 'Mozambique', capital: "Maputo", description: "", chosen_answer: "",},
        { country: 'Myanmar', capital: "Naypyidaw", description: "(formerly Burma) Naypyidaw", chosen_answer: "",},
        { country: 'Namibia', capital: "Windhoek", description: "", chosen_answer: "",},
        { country: 'tournament', capital: "", description: "", chosen_answer: "",},
        { country: 'Nauru', capital: "Yaren District(de facto)", description: "", chosen_answer: "",},
        { country: 'Nepal', capital: "Kathmandu", description: "", chosen_answer: "",},
        { country: 'Netherlands', capital: "Amsterdam", description: "", chosen_answer: "",},
        { country: 'New Zealand', capital: "Wellington", description: "", chosen_answer: "",},
        { country: 'Nicaragua', capital: "Managua", description: "", chosen_answer: "",},
        { country: 'Niger', capital: "Niamey", description: "", chosen_answer: "",},
        { country: 'Nigeria', capital: "Abuja", description: "", chosen_answer: "",},
        { country: 'North Korea', capital: "Pyongyang", description: "", chosen_answer: "",},
        { country: 'North Macedonia', capital: "Skopje", description: "(formerly Macedonia)	Skopje", chosen_answer: "",},
        { country: 'Norway', capital: "Oslo", description: "", chosen_answer: "",},
        { country: 'Oman', capital: "Muscat", description: "", chosen_answer: "",},
        { country: 'Pakistan', capital: "Islamabad", description: "", chosen_answer: "",},
        { country: 'Palau', capital: "Ngerulmud", description: "", chosen_answer: "",},
        { country: 'Palestine', capital: "Jerusalem(East)", description: "", chosen_answer: "",},
        { country: 'Panama', capital: "Panama City", description: "", chosen_answer: "",},
        { country: 'Papua New Guinea', capital: "Port Moresby", description: "", chosen_answer: "",},
        { country: 'Paraguay', capital: "Asunción", description: "", chosen_answer: "",},
        { country: 'Peru', capital: "Lima", description: "", chosen_answer: "",},
        { country: 'Philippines', capital: "Manila", description: "", chosen_answer: "",},
        { country: 'Poland', capital: "Warsaw", description: "", chosen_answer: "",},
        { country: 'Portugal', capital: "Lisbon", description: "", chosen_answer: "",},
        { country: 'Qatar', capital: "Doha", description: "", chosen_answer: "",},
        { country: 'Romania', capital: "Bucharest", description: "", chosen_answer: "",},
        { country: 'Russia', capital: "Moscow", description: "", chosen_answer: "",},
        { country: 'Rwanda', capital: "Kigali", description: "", chosen_answer: "",},
        { country: 'Saint Kitts and Nevis', capital: "Basseterre", description: "", chosen_answer: "",},
        { country: 'Saint Lucia', capital: "Castries", description: "", chosen_answer: "",},
        { country: 'Saint Vincent and the Grenadines', capital: "Kingstown", description: "", chosen_answer: "",},
        { country: 'Samoa', capital: "Apia", description: "", chosen_answer: "",},
        { country: 'San Marino', capital: "San Marino", description: "", chosen_answer: "",},
        { country: 'Sao Tome and Principe', capital: "São Tomé", description: "", chosen_answer: "",},
        { country: 'Saudi Arabia', capital: "Riyadh", description: "", chosen_answer: "",},
        { country: 'Senegal', capital: "Dakar", description: "", chosen_answer: "",},
        { country: 'Serbia', capital: "Belgrade", description: "", chosen_answer: "",},
        { country: 'Seychelles', capital: "Victoria", description: "", chosen_answer: "",},
        { country: 'Sierra Leone', capital: "Freetown", description: "", chosen_answer: "",},
        { country: 'Singapore', capital: "Singapore", description: "", chosen_answer: "",},
        { country: 'Slovakia', capital: "Bratislava", description: "", chosen_answer: "",},
        { country: 'Slovenia', capital: "Ljubljana", description: "", chosen_answer: "",},
        { country: 'Solomon Islands', capital: "Honiara", description: "", chosen_answer: "",},
        { country: 'Somalia', capital: "Mogadishu", description: "", chosen_answer: "",},
        {country: 'South Africa', capital: "Pretoria", description: "Pretoria(administrative), Cape Town(legislative), Bloemfontein(judicial)", chosen_answer: "",},
        { country: 'South Korea', capital: "Seoul", description: "", chosen_answer: "",},
        { country: 'South Sudan', capital: "Juba", description: "", chosen_answer: "",},
        { country: 'Spain', capital: "Madrid", description: "", chosen_answer: "",},
        { country: 'Sri Lanka', capital: "Sri Jayawardenepura Kotte", description: "", chosen_answer: "",},
        { country: 'Sudan', capital: "Khartoum", description: "", chosen_answer: "",},
        { country: 'Suriname', capital: "Paramaribo", description: "", chosen_answer: "",},
        { country: 'Sweden', capital: "Stockholm", description: "", chosen_answer: "",},
        { country: 'Switzerland', capital: "Bern", description: "", chosen_answer: "",},
        { country: 'Syria', capital: "Damascus", description: "", chosen_answer: "",},
        { country: 'Taiwan', capital: "Taipei", description: "", chosen_answer: "",},
        { country: 'Tajikistan', capital: "Dushanbe", description: "", chosen_answer: "",},
        { country: 'Tanzania', capital: "Dodoma", description: "", chosen_answer: "",},
        { country: 'Thailand', capital: "Bangkok", description: "", chosen_answer: "",},
        { country: 'Timor - Leste', capital: "Dili", description: "", chosen_answer: "",},
        { country: 'Togo', capital: "Lomé", description: "", chosen_answer: "",},
        { country: 'Tonga', capital: "Nukuʻalofa", description: "", chosen_answer: "",},
        { country: 'Trinidad and Tobago', capital: "Port of Spain", description: "", chosen_answer: "",},
        { country: 'Tunisia', capital: "Tunis", description: "", chosen_answer: "",},
        { country: 'Turkey', capital: "Ankara", description: "", chosen_answer: "",},
        { country: 'Turkmenistan', capital: "Ashgabat", description: "", chosen_answer: "",},
        { country: 'Tuvalu', capital: "Funafuti", description: "", chosen_answer: "",},
        { country: 'Uganda', capital: "Kampala", description: "", chosen_answer: "",},
        { country: 'Ukraine', capital: "Kyiv(also known as Kiev)", description: "", chosen_answer: "",},
        { country: 'United Arab Emirates', capital: "Abu Dhabi", description: "", chosen_answer: "",},
        { country: 'United Kingdom', capital: "London", description: "", chosen_answer: "",},
        { country: 'United States of America', capital: "Washington, D.C.", description: "", chosen_answer: "",},
        { country: 'Uruguay', capital: "Montevideo", description: "", chosen_answer: "",},
        { country: 'Uzbekistan', capital: "Tashkent", description: "", chosen_answer: "",},
        { country: 'Vanuatu', capital: "Port Vila", description: "", chosen_answer: "",},
        { country: 'Vatican City(Holy See)', capital: "Vatican City", description: "", chosen_answer: "",},
        { country: 'Venezuela', capital: "Caracas", description: "", chosen_answer: "",},
        { country: 'Vietnam', capital: "Hanoi", description: "", chosen_answer: "",},
        { country: 'Yemen', capital: "Sana'a'", description: "", chosen_answer: "",},
        { country: 'Zambia', capital: "Lusaka", description: "", chosen_answer: "",},
        { country: 'Zimbabwe', capital: "Harare", description: "", chosen_answer: "",},
    ]
]
let sport_words = total_scrambled_words[0];
let programming_language_words = total_scrambled_words[1];
let countries = total_scrambled_words[2];



var check_answer;
var index = 0;

new_sport_words_algo = () => {
    let random_index = Math.floor(Math.random() * sport_words.length);
    let random_word = sport_words[random_index].word;
    return random_word;
}

let scramble_letters = (params) => {
    for (let i = params.length-1; i >= 0;  i--) {
        let temp = params[i];
        console.log(temp);
        let j = Math.floor(Math.random() * i + 1);
        console.log(i)
        console.log(j);;
        params[i] = params[j];
        params[j] = temp; 
    }
    return params;
}
start_btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        start_btn.innerHTML = "Dare to guess";
        answer.classList.toggle('solution_input');
        new_words = new_sport_words_algo();
        console.log(new_words);
        random_sport_letters = scramble_letters(new_words.split('')).join(' ');
        console.log(random_sport_letters);
        disp_scramble();
        answer.value = ''
    }else {
        play = false;
        start_btn.innerHTML = "Start";
        displayed_word.innerHTML = '';
        answer.classList.toggle('solution_input');
        let answer_check = answer.value;
        answer_check = answer_check.toLowerCase();
        console.log(answer_check);
        if (answer_check === "") {
            return
        } else if (answer_check === new_words) {
            displayed_word.innerHTML = `<b>${answer_check}</b> is correct.🤗`
        }else {
            displayed_word.innerHTML = `Sadly <b>${answer_check}</b> is incorrect. Try again.😪`
        }
        answer.value = ''
        //You made some mistakes! I can't relate but I guess you're only human afterall.
    }
});

function disp_scramble() {
    displayed_word.innerHTML = `<br>
                                <h4>Take a guess:</h4>
                                <div class="scrambled_area"><b>${index + 1}. </b><i>${random_sport_letters}</i></div>
                                <br>`;
                        }


next_btn.addEventListener('click', function () {
    new_words = new_sport_words_algo();
    console.log(new_words);
    random_sport_letters = scramble_letters(new_words.split('')).join(' ');
    console.log(random_sport_letters);
    next();
});
next_btn.addEventListener('click', function () {
    new_words = new_sport_words_algo();
    console.log(new_words);
    random_sport_letters = scramble_letters(new_words.split('')).join(' ');
    console.log(random_sport_letters);
    previous();
});
function next() {
    index++;
    disp_scramble();
}

function previous() {
    index--;
    disp_scramble();
}


