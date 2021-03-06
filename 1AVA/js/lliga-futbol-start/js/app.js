const containerFilas = document.querySelector('#containerFilas');
const filterOrderName = document.querySelector('#filterOrderName');
const filterOrderPoints = document.querySelector('#filterOrderPoints');
let teamsJSON=[];

// JSON team color according league type
const colorTeam = {
    "championsLeague" : "#09a751",
    "europaLeague":"#ffc72b",
    "conferenceLeague":"#d3d3d3",
    "descenso":"#ee4036"
};
// Pure function, calculate the point obtained by a match 
const calculatePoints = (pg, pe)=>{
    return (pg*3)+pe;
}

window.onload = async()=>{
    // Load data
    await getTeams();
    calculateTeamsTotalPoints();
    sortTeamsByPoints();
    populateTeams(teamsJSON);


};

// TODO 1: Get JSON teams
const getTeams = async()=>{

    const response = await fetch('data/teams.json');
    const data = await response.json();
    teamsJSON = data.teams;


};

// TODO 2: Create rows of teams table
const populateTeams = (teams)=>{
    containerFilas.innerHTML="";
    

    teams.forEach((team) => {

        team.matchPoints.pt=calculatePoints(team.matchPoints.pg,team.matchPoints.pe)

      containerFilas.innerHTML+=
        `
            <tr>
            <td class="${getClassTeam(team.position)}" id="index">${team.position}</td>
            <td><img src="./img/${team.img}" alt=""></td>
            <td class="team">${team.name}</td>
            <td>${team.matchPoints.pt}</td>
            <td>${team.matchPoints.pj}</td>
            <td>${team.matchPoints.pg}</td>
            <td>${team.matchPoints.pe}</td>
            <td>${team.matchPoints.pp}</td>
            <td>${team.matchPoints.gf}</td>
            <td>${team.matchPoints.gc}</td>
        </tr>
            `
            position = index;
            console.log(position)
    });
 
        
};

const calculateTeamsTotalPoints = () =>{
    teamsJSON.forEach(team => {
        team.matchPoints.pt=calculatePoints(team.matchPoints.pg,team.matchPoints.pe)
    });
}

const sortTeamsByPoints = () =>{
    teamsJSON = teamsJSON.sort((a, b) =>{
        let pointsA = a.matchPoints.pt;
        let pointsB = b.matchPoints.pt;
        if(pointsA > pointsB) return -1;
        else if(pointsA < pointsB) return 1;
        else return 0;
    });

    teamsJSON.forEach((team, index) => {
            team.position = (index+1);
            console.log(team.position)
    });
};



// TODO 3:Develop functions to order teams depending on total puntuation  

// Axiliar funtion:  
const getColorTeam = (position) => {
    if (position>=4) return colorTeam.championsLeague;
    if (position===5 || position===6) return colorTeam.europaLeague;
    if (position>=18) return colorTeam.descenso;

    // By default
    return colorTeam.conferenceLeague;
};

// Axiliar funtion: Return the CSS class according to the team position
const getClassTeam = (position) => {
    if (position<=4) return "type-cham-leag";
    if (position===5 || position===6) return "type-europa-leag";
    if (position>=18) return "type-descenso";
    // By default
    return "num";

};