const data = [
    {
        "city": "New York",
        "population": "1212M",
        "state": "New York"
    },
    {
        "city": "Boston",
        "population": "12312312",
        "state": "Boron"
    },
    {
        "city": "BoRon",
        "population": "11231",
        "state": "Hello world"
    }
]

function numberwithcommas(x){
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findmatches(wordToMatch, data) {
	return data.filter(place => {
		const regex = new RegExp(wordToMatch, "gi");
		return place.city.match(regex) || place.state.match(regex);
	})
}

function displayMatches() {
	const matchArray = findmatches(this.value, data);
	const html = matchArray.map(place => {
		const regex = new RegExp(this.value, 'gi');
		const cityname = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
		const statename = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
		return `
			<li>
				<span class="name">${cityname}, ${statename}</span>
				<span class="population">${numberwithcommas(place.population)}</span>
			</li>
		`;
	}).join("");

	suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches)
searchInput.addEventListener("keyup", displayMatches)


