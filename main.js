//1.UKOL 
/* Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. */

let food = document.querySelector(".food");


const justFood = (people) => {
	return `Catering od Just Food pro ${people} lidí bude stát ${Math.round(
		people * 200
	)} Kč`
};

const yourMama = (people) => {
    return `Catering od Your Mama pro ${people} lidí bude stát ${Math.round(
		people * 400
	)} Kč`
};

const flavourHaven = (people) => {
    return `Catering od Your Mama pro ${people} lidí bude stát ${Math.round(
		people * 800
	)} Kč`
};

const createEvent = (event, people, catering) => {
    return `Událost bude ${event} a vybírá si: ${catering(people)}`
};

food.innerHTML += createEvent(
    "Svatba Danči",
    200,
    yourMama
);

//2.UKOL
/*JavaScriptový program, který zařídí, že když uživatel zmáčkne na stránce libovolnou klávesu, na kostce se zobrazí číslo o jedna vyšší. Po šestce zobrazte opět jedničku.*/

let number = 1
const dice = document.querySelector('.dice')
const turnDice = () => {
	number = number + 1
	if (number === 7) {
		number = 1
	}
	dice.src = `img/side${number}.svg`
};

document.addEventListener('keydown', turnDice);

//3.UKOL
/*Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.
Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.*/

let button = document.querySelectorAll(".button");
let stopButton = document.querySelector(".button1");

const process = () => {
    let userInput = Number(prompt("What time should timer ring? "));
    let seconds = userInput * 1000;
    console.log(seconds);
    
    const alarmRing = () => {
        let alarm = document.querySelector(".alarm");
        alarm.classList.add("alarm--ring");
    }

    let audio = document.querySelector("audio");

    const startAudio = () => {
        audio.play();
    }


    let stAudio = setTimeout(startAudio, seconds); 
};

button[0].addEventListener('click', process);



