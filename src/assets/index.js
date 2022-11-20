const query = `
query getUsers($searchText: String)
{ 
  users(search: $searchText) {
    id
    fullName
    birthdayDate
    car {
      id
      name
      color
      numbers
      services {
        id
        name
      }
    }
  }
}
`;

function applySearch() {
  const input = document.getElementById('searchInput');
  loadTable(input?.value);
}

async function loadTable(searchText) {
  const response = await fetch('http://localhost:3000/graphql', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      query,
      variables: {
        searchText,
      },
    }),
  });
  const data = await response.json();
  console.log(data);
  const users = data.data.users;
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';
  for (const user of users) {
    const tr = document.createElement('tr');
    const tdUser = document.createElement('td');
    const tdBd = document.createElement('td');
    const tdCar = document.createElement('td');
    const tdCarNumber = document.createElement('td');
    const tdCarColor = document.createElement('td');
    const tdServices = document.createElement('td');
    tdUser.innerHTML = user.fullName;
    tdBd.innerHTML = user.birthdayDate;
    tdCar.innerHTML = user.car.name;
    tdCarNumber.innerHTML = user.car.numbers;
    tdCarColor.innerHTML = user.car.color;
    tdServices.innerHTML = user.car.services.map((s) => s.name).join(', ');
    [tdUser, tdBd, tdCar, tdCarNumber, tdCarColor, tdServices].forEach((td) =>
      tr.appendChild(td),
    );
    tbody.appendChild(tr);
  }
}
