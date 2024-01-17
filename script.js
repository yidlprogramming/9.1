let companies = [
    {
        ticker: "GOOGL",
        price: 93.51,
        amount: 5,
        isuscompany: true,
    },
    {
        ticker: "AMZN",
        price: 96.24,
        amount: 0,
        isuscompany: true,
    }
];

function generateTable() {
    // with code to create the table teh list of companies
    let tablebodyelement = document.getElementById('table-body')
    tablebodyelement.innerHTML = null;

    for (let i = 0; i < companies.length; i++) {
        const company = companies[i];
        let trelement = document.createElement('tr');
        
        createandappend(trelement, company.ticker);
        createandappend(trelement, company.price);
        createandappend(trelement, company.isuscompany ? 'yes' : 'no');
        createandappend(trelement, company.amount);

        let btntd = document.createElement('td');
        let btn = document.createElement('button');
        btntd.append(btn);

        btn.innerText = company.amount ? 'Buy More' : 'Buy';

        btn.addEventListener('click', function(){
            buystock(i)
        });

        trelement.append(btntd);

        tablebodyelement.append(trelement);

    }
}

function createandappend(trelement, innerText) {
    let tdElement = document.createElement('td');
    tdElement.innerText = innerText;
    trelement.append(tdElement);
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
    companies.push(company);
    generateTable();
    formElement.reset();
}
