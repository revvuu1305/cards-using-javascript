let user = [
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184377.png",
        id: 1,
        name: "Leanne Graham",
        branch: "Mech Engineering",
        college: "GITAM University",
        graduation: 2021,
        button: "Know more details",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184428.png",
        id: 2,
        name: "Ervin Howell",
        branch: "CSE",
        college: "Andhra University",
        graduation: 2016,
        button: "Know more details",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184381.png",
        id: 3,
        name: "Clementine Bauch",
        branch: "Aerospace",
        college: "KLU",
        graduation: 2017,
        button: "Know more details",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184455.png",
        id: 4,
        name: "Patricia Lebsack",
        branch: "ECE",
        college: "SRM",
        graduation: 2019,
        button: "Know more details",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184406.png",
        id: 5,
        name: "Chelsey Dietrich",
        branch: "CSE",
        college: "NIT kottagudam",
        graduation: 2018,
        button: "Know more details",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184454.png",
        id: 6,
        name: "Mrs. Dennis Schulist",
        branch: "Mech Enginnering",
        college: "Amrita University",
        graduation: 2021,
        button: "Know more details",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184435.png",
        id: 7,
        name: "Kurtis Weissnat",
        branch: "CSE",
        college: "KLU",
        graduation: 2018,
        button: "Know more details",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184377.png",
        id: 8,
        name: "Nicholas Runolfsdottir V",
        branch: "EEE",
        graduation: 2017,
        college: "Sastra University",
        button: "Know more details",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184449.png",
        id: 9,
        name: "Glenna Reichert",
        branch: "Biotech",
        college: "NIT warangal",
        graduation: 2020,
        button: "Know more details",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/128/1184/1184455.png",
        id: 10,
        name: "Clementina DuBuque",
        branch: "CSE",
        college: "NIT Trichy",
        graduation: 2016,
        button: "Know more details",
    },
];

let body = document.querySelector('.row');
let cardbody = '';
for (let i=0;i < user.length;i++)
{
    cardbody += `<div class='col-md-3 card'>
    <div class='card-body'>
    <img src="${user[i].image}">
    <p>  Name : ${user[i].name}   </p>
    <p> Branch : ${user[i].branch}   </p>
    <p> College : ${user[i].college}   </p>
    <p> Graduation year : ${user[i].graduation}   </p>
    <button>${user[i].button}</button>
    </div>
    </div>`
}

body.innerHTML = cardbody;