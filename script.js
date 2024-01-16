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
        amount: 1,
        isuscompany: true,
    }
];

function generateTable() {
    // with code to create the table teh list of companies
    let tablebodyelement = document.getElementById('table-body')

    for (let i = 0; i < companies.length; i++) {
        const company = companies[i];
        let trelement = document.createElement('tr');
        let companyTicker = document.createElement('td');
        companyTicker.innerText = company.ticker;
        let companyprice = document.createElement('td');
        companyprice.innerText = company.price;
        let isuscompany = document.createElement('td');
        isuscompany.innerText = company.isuscompany;
        let btntd = document.createElement('td');
        let btn = document.createElement('button');
        btntd.append(btn);

        trelement.append(companyTicker);
        trelement.append(companyprice);
        trelement.append(isuscompany);
        trelement.append(btntd);
        
        tablebodyelement.append(trelement);
        
    }

    //let HTMLTEXT = '';
    //for (let i = 0; i < companies.length; i++) {
    //    let company = companies[i];
//
  //      HTMLTEXT += `<tr>
    //    <td>${company.ticker}</td>
      //  <td>${company.price}</td>
        //<td>${company.isuscompany ? 'yes' : 'no'}</td>
//        <td>${company.amount}</td>
  //      <td>${company.price * company.amount}</td>
    //    <td>
      //      <button onclick="buystock(${i})">buy more</button>
//        </td>
  //  </tr>`}

 //   document.getElementById('table-body').innerHTML = HTMLTEXT;
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
    company.name = fd.get('name');
    company.price = fd.get('price');
    company.isuscompany = fd.get('isuscompany' == 'on');
    company.ticker = fd.get('ticker');
    companies.push(company);
    generateTable();
    formElement.reset();
}
