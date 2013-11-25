/*global localStorage: false, console: false, $: false */
function setUpLocalStorage() {
    "use strict";
    localStorage.bibel200 = "spørsmål bibel 200";
    localStorage.bibel400 = "spørsmål bibel 400";
    localStorage.bibel600 = "spørsmål bibel 600";
    localStorage.bibel800 = "spørsmål bibel 800";
    localStorage.bibel1000 = "spørsmål bibel 1000";
    
    localStorage.sport200 = "spørsmål sport 200";
    localStorage.sport400 = "spørsmål sport 400";
    localStorage.sport600 = "spørsmål sport 600";
    localStorage.sport800 = "spørsmål sport 800";
    localStorage.sport1000 = "spørsmål sport 1000";
    
     localStorage.nfag200 = "spørsmål nfag 200";
    localStorage.nfag400 = "spørsmål nfag 400";
    localStorage.nfag600 = "spørsmål nfag 600";
    localStorage.nfag800 = "spørsmål nfag 800";
    localStorage.nfag1000 = "spørsmål nfag 1000";
    
    localStorage.historie200 = "spørsmål historie 200";
    localStorage.historie400 = "spørsmål historie 400";
    localStorage.historie600 = "spørsmål historie 600";
    localStorage.historie800 = "spørsmål historie 800";
    localStorage.historie1000 = "spørsmål historie 1000";
    
    localStorage.musikk200 = "spørsmål musikk 200";
    localStorage.musikk400 = "spørsmål musikk 400";
    localStorage.musikk600 = "spørsmål musikk 600";
    localStorage.musikk800 = "spørsmål musikk 800";
    localStorage.musikk1000 = "spørsmål musikk 1000";
}


$(document).on("click", "a", function (event) {
    "use strict";
    
    setUpLocalStorage();
    
    if($(this).attr("href") === "#qPage") {
        var idFromLink = $(this).attr("id");
    var question = localStorage.getItem(idFromLink);
    $(this).parent().html("");
    $("#question").html(question);    
    }
    
});
