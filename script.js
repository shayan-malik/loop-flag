function city()
{
    let cities = ["Karachi", "Islamabad", "Peshawar", "Lahore", "Quetta"];
    let insertCity = document.getElementById("insertCity").value;
    let cityMatch = "";

    for (i=0; i < cities.length; i++)
    {
        if(insertCity.toLowerCase() == cities[i].toLowerCase())
        {
            cityMatch = "yes"
        }
    }

    if(cityMatch == "yes")
    {
        alert("City Matched...");
    }
    else{
        alert("City Did Not Match!")
    }
    
}
