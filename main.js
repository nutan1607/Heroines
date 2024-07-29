let heroines = ['Kriti Sanon', 'Kiara Advani', 'Preeti Zintha', 'Janhavi Kapoor'];
refeshHeroineName();

function refeshHeroineName() {
    let htmlStringDynamic = '';
    htmlStringDynamic = '<table>';

    for(let i=0; i<heroines.length; i++) {
    console.log(heroines[i]);

    htmlStringDynamic = htmlStringDynamic + '<tr>' +  '<td>'+ heroines[i] +  '</td>' + '<td>'+ 
     `<button type="button" onclick="deleteHerione(` + i + `)" class="delete-button">Delete</button>` +  '</td>' + '</tr>' ;
    }

    htmlStringDynamic = htmlStringDynamic + '</table> ';

    document.getElementById("heroinesList").innerHTML = htmlStringDynamic;
}


function addHeroine() {
    let heroineName = document.getElementById("name").value;
    heroines.push(heroineName);
    refeshHeroineName();
    document.getElementById("name").value = "";
}

function deleteHerione(index) {
    heroines.splice(index, 1);
    refeshHeroineName();
}