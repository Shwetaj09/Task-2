
var name_list = [];
var email_list = [];
var language_list = [];
var mobile_list = [];

var n = 1;
var x = 0;

function add_new_row(){

        var AddRown = document.getElementById('show');
        var NewRow = AddRown.insertRow(n);

        name_list[x]=document.getElementById("name").value;
        email_list[x]=document.getElementById("email").value;
        language_list[x]=document.getElementById("language").value;
        mobile_list[x]=document.getElementById("mobile").value;

        var cell_1 = NewRow.insertCell(0);
        var cell_2 = NewRow.insertCell(1);
        var cell_3 = NewRow.insertCell(2);
        var cell_4 = NewRow.insertCell(3);

        cell_1.innerHTML = name_list[x];
        cell_2.innerHTML = email_list[x];
        cell_3.innerHTML = language_list[x];
        cell_4.innerHTML = mobile_list[x];

        n = n+1;
        x = x+1;
}


function clear_all_fields(){
    var get_value = document.getElementById("name");
    if(get_value.value != "")
    {
        get_value.value = "";
    }

    var get_value = document.getElementById("email");
    if(get_value.value != "")
    {
        get_value.value = "";
    }

    var get_value = document.getElementById("language");
    if(get_value.value != "")
    {
        get_value.value = "";
    }

    var get_value = document.getElementById("mobile");
    if(get_value.value != "")
    {
        get_value.value = "";
    }

}


