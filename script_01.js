"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Tobias!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen() {
    // what happens in VEGAS ...
    let firstName = "Nico";
    console.log("Hallo " + firstName +"!");
}

// console.log(firstName);  // Fehler --> SCOPE!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

 // Argumente sind Daten für Parameter 
//  ausgabeNamen2("Sohrab"); // call + Argument(e)
//  ausgabeNamen2("Nico");
//  ausgabeNamen2("Yasmeen");

//  Funktion mit Parameter(n)
function ausgabeNamen2(firstName) {
    console.log("Hallo " + firstName +"!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamenParams("Max","Mütze");
// ausgabeNamenParams(prompt("Vorname?"),prompt("Name?"));

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!"); 
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Max","Mütze");

function ausgabeNamenParams2(firstName, familyName) {

    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    
    // 2. Funktionalität: string output
    console.log(outputStr); 
}

/***** Funktionen 03b *****/
// 03b Funktionalitäten --> Funktionen| return

// 1. Funktionalität: string composing

output(getString("Max", "Mütze"));
output(getString(prompt("Vorname?"), prompt("Nachname")));

function getString(firstName, familyName) {
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!";
    return outputStr;  // Daten werden an den Ort des calls geschickt!
    console.log("Hi"); // return bricht die Fkt ab!
}


// 2. Funktionalität: string output
// output("Hi");
// output(2);
// output(true);
function output(outputData) {
    console.log(outputData);
}
