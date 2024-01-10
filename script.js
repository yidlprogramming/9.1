let companies = [
    {
        ticker: "GOOGL",
        price: 93.51,
        amount: 5,
    },
    {
        ticker: "AMZN",
        price: 96.24,
        amount: 1,
    }
];

function generateTable() {
    // with code to create the table teh list of companies
    let HTMLTEXT = '';
    for (let i = 0; i < companies.length; i++) {
        let company = companies[i];

        HTMLTEXT += `<tr>
        <td>${company.ticker}</td>
        <td>${company.price}</td>
        <td>${company.amount}</td>
        <td>${company.price * company.amount}</td>
        <td>
            <button onclick="buystock(${i})">buy more</button>
        </td>
    </tr>`}

    document.getElementById('table-body').innerHTML = HTMLTEXT;
}
generateTable();

function buystock(index) {
    // handle the button click
    let amount = Number(
        prompt(
            `how many ${companies[index].ticker} stocks would yo like to buy?`
        )
    );
    if (isNaN(amount)) {
        alert('invalid amount. please enter a valid amount')
    } else {
        companies[index].amount += amount;

        generateTable()
    }

}
