$(function () {
    $('.wrap > a:first-child').click(function () {
        $('h3').text("De smart shoe");
        $('#tekst > p').text("Een smart shoe is iets dat nog niet voor direct zal zijn. De meeste grootte merken werken wel aan een paar concepten maar leveren niets concreet voor de markt. De functionaliteit van een smart shoe is variërend. Je kan bijvoorbeeld een schoen hebben die je precies verteld hoeveel stappen je gezet hebt maar je kan ook een schoen hebben die zichzelf gaat binden.");
    });

    $('.wrap > a:nth-child(2)').click(function () {
        $('h3').text("De smart lens");
        $('#tekst > p').text("De smart lens is een lens die je in je oog moet plaatsen en die ja dan visueel hulp gaat bieden. Zo zijn er al enkele ideeën om je bijvoorbeeld informatie te geven over de winkels bij jou in de buurt terwijl je rond kijkt. Maar ook is er weer een medisch idee van zo is er het idee dat als je iemand aan het reanimeren  bent je via deze lens informatie  krijgt over hoe je bezig bent.");
    });

    $('.wrap > a:nth-child(3)').click(function () {
        $('h3').text("De smart ring");
        $('#tekst > p').text("De smart ring is een ring die alle dagen kan dragen. Sommige ringen zijn gemaakt om te meten hoeveel je zweet maar sommige ringen zijn gemaakt om weer te geven of ge gebeld word of als je een sms'je krijgt. De ring is iets kleins en compact dat maakt hem gemakkelijk te hanteren. Maar dit is ook zijn nadeel doordat hij zo klein is kan je er niet veel op zien.");
    });

    $('.wrap > a:nth-child(4)').click(function () {
        $('h3').text("De smartwatch");
        $('#tekst > p').text("Een smartwatch is een horloge die zowel met als zonder gsm gebruikt kan worden. Als je bijvoorbeeld wild sporten kan je hem zonder gsm gebruiken en geeft hij jou nuttige informatie over je gezondheid. Maar als je bijvoorbeeld een dagelijkse uitstap gaat maken kan je hem verbinden met je telefoon. Dankzij deze connectie geeft de horloge je de kans om te bellen en je berichten weer te geven zonder dat je je telefoon daar voor nodig hebt.");
    });

    $('.wrap > a:last-child').click(function () {
        $('h3').text("Info");
        $('#tekst > p').text("Door op een foto te klikken krijg je meer informatie over het voorwerp dat op de foto staat. Veel kijk plezier!");
    });
})