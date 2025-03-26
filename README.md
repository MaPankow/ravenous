# Ravenous - Frontend-App mit React

Dieses Projekt gehört zu einem Skill Path auf codecademy. Ziel ist es, eine Frontend-App mit React zu bauen und dabei die Kenntnisse anzuwenden, die in Lektionen und kleineren Projekten vermittelt werden.

Ravenous ist eine App, die Restaurants empfiehlt. 

## Tech-Stack
HTML, CSS, JavaScript und React als Tech-Stack.

## Projekt anlegen und Entwicklungsserver starten

Node habe ich bereits installiert. Also lege ich ein neues Projekt mittels npx create-react-app an. 

## Vorgehensweise im Projekt
Zuerst erstelle ich die React-Component Business, die ein Objekt mit Daten eines Restaurants erhält. Für den Moment hardcode ich die Values, um Platzhalterdaten zu haben.

Dann erstelle ich die Component BusinessList, die eine Liste der Objekte wiedergeben soll. Im Moment gibt es nur das eine Business-Objekt, deshalb wird es mehrmals wiederholt.

Die Daten sollen später aus der Yelp-API geholt werden.

Ich erstelle die Component für die Search Bar, also SearchBar. Sie bekommt mehrere Input-Felder, mit denen ich später die Art des Restaurants, die Stadt und optional die Restaurants mit der höchsten Bewertung, passend zur Eingabe oder mit den meisten Bewertungen filtern kann.
