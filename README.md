# Ravenous - Frontend-App mit React

Dieses Projekt gehört zu einem Skill Path auf codecademy. Ziel ist es, eine Frontend-App mit React zu bauen und dabei die Kenntnisse anzuwenden, die in Lektionen und kleineren Projekten vermittelt werden.

Ravenous ist eine App, die Restaurants empfiehlt. Dabei greift sie auf die Yelp-API zu und gibt Suchparameter weiter, die auf dem UI eingegeben werden. Anhand dieser werden passende Restaurants aufgeslistet.

## Tech-Stack
HTML, CSS, JavaScript und React als Tech-Stack.

## Projekt anlegen und Entwicklungsserver starten

Node habe ich bereits installiert. Also lege ich ein neues Projekt mittels npx create-react-app an. 

## API-Key, .env und .gitignore
Um mit der API kommunizieren zu können, muss man sich bei Yelp anmelden und einen persönlichen API-Key besorgen. Dieser darf nicht öffentlich preisgegeben werden. Ich speichere ihn deswegen in einer .env-Datei und rufe ihn in API.js aus der Datei auf. Die .env-Datei wird in der .gitignore-Datei aufgelistet und dadurch von git ignoriert und nicht bei GitHub angezeigt.

## Funktionsweise
In der Komponente App.js werden SearchBar.js und BusinessList.js wiedergegeben. Außerdem importiert sie (ein derzeit zugegeben sehr einfach gehaltenes) Styling aus App.css

### Komponente SearchBar.js
Was auf der Startseite zu sehen ist, stammt aus der Komponente SearchBar.js. Sie empfängt props von App.js und die Funktion wird von App.js importiert. 
SearchBar.js enthält die Logik für das Suchformular. Sie stellt das Formular und nimmt die eingetragenen Daten der User entgegen. Diese gibt sie an das Modul API.js weiter.

### utils/API.js
API.js ist das Modul, das mit der Yelp-API kommuniziert. Es sendet eine Suchanfrage mit den Parametern, die in der Search Bar eingegeben wurden und holt die entsprechenden Ergebnisse. Diese nimmt SearchBar.js entgegen.

### Komponente Business.js
Business.js nimmmt props von App.js entgegen und die Logik legt fest, welche der abgeholten Daten von je einem Business angezeigt werden.

### Komponente BusinessList.js
Diese Komponente importiert Business.js und zeigt alle abgeholten Businesses nach dem vorgegebenen Shema an

### Styling mit CSS
Die Komponenten befinden sich jeweils in Ordnern, mit einer gleichnamigen CSS-Datei, die für die einzelnen Komponenten das Styling festlegt. So legt Business.css fest, wie das Bild und die Adressdaten eines Businesses im Container angezeigt werden und BusinessList.js legt fest, wie die einzelnen Businesses angeordnet werden, wie das Verhalten auf kleineren Bildschirmen ist etc.

### CORS-Problematik
Es kann passieren, dass man den Entwicklungsserver satrtet und eine Fehlermeldung im Browser bekommt, nachdem man die Suchparameter eingibt. Das Problem kann folgendermaßen umgangen werden:
1. https://cors-anywhere.herokuapp.com/corsdemo aufrufen,
2. "Request temporary access to the demo server" anklicken
3. Entwicklungsserver stoppen und erneut starten
Die Erlaubnis ist temporär, sollte sie abgelaufen sein, einfach die Schritte wiederholen.


