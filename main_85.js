menuListArray = [ "Marguerita","Calabresa","Pepperoni","4 queijos","Portuguêsa","Alho e óleo"];

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menuListArray.length; i++)
    {
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }

    document.getElementById("displayMenu").innerHTML = htmldata;
}

function add_suggestion(){
	var item = document.getElementById("addItem").value;
    menuListArray.push(item);
}

