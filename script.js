let companies = [
    {
        name: 'google',
        ticker: "GOOGL",
        price: 93.51,
        amount: 5,
        isuscompany: true,
    },
    {
        name: 'amazon',
        ticker: "AMZN",
        price: 96.24,
        amount: 0,
        isuscompany: true,
    }
];

window.onload = function() {
    generateTable();
    witeMarketstatus();
    witeDate()
};

function generateTable() {
    // with code to create the table teh list of companies
    let tablebodyelement = document.getElementById('table-body')
    tablebodyelement.innerHTML = null;

    for (let i = 0; i < companies.length; i++) {
        const company = companies[i];
        let trelement = document.createElement('tr');

        createandappend(trelement, company.name);
        createandappend(trelement, company.ticker);
        createandappend(trelement, company.price);
        createandappend(trelement, company.isuscompany ? 'yes' : 'no');
        createandappend(trelement, company.amount);
        createandappend(trelement, company.value)

        let btntd = document.createElement('td');
        let btn = document.createElement('button');
        btntd.append(btn);

        btn.innerText = company.amount ? 'Buy More' : 'Buy';

        btn.addEventListener('click', function () {
            buystock(i)
        });

        trelement.append(btntd);

        let btntdre = document.createElement('td');
        let btnre = document.createElement('button');
        btntdre.append(btnre);

        btnre.innerText = 'remove stock'

        trelement.append(btntdre)

        btnre.addEventListener('click', function(){
            removestocke(i)
        })

        tablebodyelement.append(trelement);

    }
}





function createandappend(trelement, innerText) {
    let tdElement = document.createElement('td');
    tdElement.innerText = innerText;
    trelement.append(tdElement);
}



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
        companies[index].value = companies[index].amount * companies[index].price

        generateTable()
    }

}



function showcompanyform() {
    document.getElementById('addcompanyform').style.display = 'block';
}

function submitform() {
    let formElement = document.getElementById('addcompanyform');
    let fd = new FormData(formElement);
    let company = {};
    company.amount = Number(0)
    company.name = fd.get('name');
    company.price = fd.get('price');
    company.isuscompany = fd.get('isuscompany');
    company.ticker = fd.get('ticker');
    company.value = 0
    companies.push(company);
    generateTable();
    formElement.reset();
}

function removestocke(index) {
    companies.splice(index, 1)
    generateTable()
}


function witeMarketstatus(){
    let Marketstatus = isMarketOpen() ? 'Market are new open.' : 'Market are closed';
    document.getElementById('Market-status').innerHTML = Marketstatus;
}

function isMarketOpen(){
    let now = new Date;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours += minutes / 60;
    return hours >= 9.5 && hours <= 16;
}

function witeDate(){
    let now = new Date().toLocaleString();
    document.getElementById('Date').innerHTML = now;
}

setInterval(witeDate, 1000)