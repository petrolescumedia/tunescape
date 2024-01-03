// Array of fun facts
const funFacts = [
    "România are cea mai frumoasă cascadă din lume, Bigar Cascade Falls.",
    "Rețeaua de transport în comun din București este a patra cea mai mare din Europa.",
    "România este al nouălea cel mai mare producător de vin din lume.",
    "România a fost o sursă de inspirație pentru două romane foarte cunoscute: Castelul din Carpați de Jules Verne și Dracula de Bram Stoker.",
    "Francesco Illy, fondatorul Illycaffè, s-a născut în Timișoara, România, în 1892.",
    "Timișoara a devenit primul oraș din Europa cu iluminat stradal electric în 1889.",
    "Motorul cu reacție modern a fost inventat de inventatorul născut în București, Henri Coanda, în 1910.",
    "Orașul Brașov este acasă pentru cea mai mare biserică gotică dintre Viena, Austria și Istanbul, Turcia.",
    "Castelul Peleș a fost primul castel european complet iluminat de curent electric.",
    "Al doilea cel mai mare ghețar subteran din Europa, ghețarul Scarisoara, se află sub Munții Bihor din România.",
    "Contele vampir Dracula, creat de Bram Stoker, a fost inspirat de prințul român Vlad Țepeș.",
    "Filmul Cold Mountain a fost filmat în România.",
    "Cercetătorul care a descoperit insulina a fost Nicolae Paulescu, un român.",
    "Castelul Peleș din România a fost primul castel complet electrificat din Europa.",
    "Mănăstirea Voroneț, cunoscută și sub numele de Capela Sixtină a Estului, are fresce cu o nuanță intensă de albastru, cunoscută și sub numele de albastru Voroneț.",
    "Muzeul Astra din Sibiu este cel mai mare muzeu în aer liber din România și al doilea cel mai mare muzeu de acest gen din Europa.",
    "România nu numai că are resurse bogate de aur, dar găzduiește și singurul muzeu dedicat aurului din Europa.",
    "România s-a alăturat NATO în 2004 și Uniunii Europene în 2007.",
    "Palatul Parlamentului din București este cea mai mare clădire civilă cu funcție administrativă din lume și a doua cea mai mare clădire din lume după Pentagon din SUA.",
    "Timișoara a fost primul oraș european care a introdus tramvaiele trase de cai (1869).",
    "București a fost primul oraș din lume iluminat cu lămpi cu petrol (1895).",
    "România găzduiește cea mai mare populație de urși bruni din Europa.",
    "Munții Carpați sunt acasă pentru una dintre cele mai mari păduri virgine din Europa.",
    "Delta Dunării este a doua cea mai mare deltă fluvială din Europa și cea mai bine conservată de pe continent.",
    "Strada Sforii din orașul Brașov este considerată cea mai îngustă stradă din Europa.",
  ];
  
  // Function to display a random fun fact
  function displayRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const funFactDisplay = document.getElementById("funFactDisplay");
    funFactDisplay.textContent = funFacts[randomIndex];
  }
  
  // Display a random fun fact when the page loads
  displayRandomFunFact();
  