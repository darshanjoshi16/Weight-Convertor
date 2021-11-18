document.getElementById("output").style.visibility = "hidden";
        document.getElementById("KGInput").addEventListener("input", function(e) {
        document.getElementById("output").style.visibility = "visible";
        let kg = e.target.value;

        if(kg < 0)
        {
          document.getElementById("output").style.visibility = "hidden";
        }
        
        document.getElementById("gramsOutput").innerHTML = kg * 1000 ;
        document.getElementById("lbsOutput").innerHTML = kg * 2.205 ;
        document.getElementById("ozOutput").innerHTML = kg * 35.274 ;
});