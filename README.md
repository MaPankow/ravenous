# Ravenous - Frontend-App mit React

Dieses Projekt gehört zu einem Skill Path auf codecademy. Ziel ist es, eine Frontend-App mit React zu bauen und dabei die Kenntnisse anzuwenden, die in Lektionen und kleineren Projekten vermittelt werden.

Ravenous ist eine App, die Restaurants empfiehlt. Dabei greift sie auf die Yelp-API zu und gibt Suchparameter weiter, die auf dem UI eingegeben werden. Anhand dieser werden passende Restaurants aufgelistet.

## Tech-Stack
HTML, CSS, JavaScript und React als Tech-Stack.

## Projekt anlegen und Entwicklungsserver starten

Node habe ich bereits installiert. Also lege ich ein neues Projekt mittels npx create-react-app an. 

## API-Key, .env und .gitignore
Um mit der API kommunizieren zu können, muss man sich bei Yelp anmelden und einen persönlichen API-Key erhalten. Dieser API-Key wird in der .env-Datei gespeichert, um sicherzustellen, dass er nicht versehentlich öffentlich gemacht wird, und in der Datei API.js abgerufen, um Anfragen an die Yelp-API zu senden. Die .env-Datei wird in der .gitignore-Datei aufgelistet und dadurch von git ignoriert und nicht bei GitHub angezeigt.

## Funktionsweise
In der Komponente App.js werden SearchBar.js und BusinessList.js wiedergegeben. Außerdem importiert sie (ein derzeit zugegeben sehr einfach gehaltenes) Styling aus App.css

### Komponente SearchBar.js
Was auf der Startseite zunächst zu sehen ist, wird durch die  Komponente SearchBar.js gerendert. Diese empfängt props (Daten oder Funktionen) von App.js und wird von App.js importiert. 
SearchBar.js stellt das Suchformular bereit und sendet die Benutzereingaben über eine Funktion zurück an App.js.

### utils/API.js
API.js ist das Modul, das mit der Yelp-API kommuniziert. Es sendet eine Suchanfrage mit den Parametern, die in der Search Bar eingegeben wurden und holt die entsprechenden Ergebnisse. Diese nimmt SearchBar.js entgegen.

### Komponente Business.js
Business.js nimmt props von App.js entgegen und die Logik legt fest, welche der abgeholten Daten von je einem Business angezeigt werden.

### Komponente BusinessList.js
Diese Komponente importiert Business.js und zeigt alle abgeholten Businesses nach dem in Business.js vorgegebenen Schema an.

### Styling mit CSS
Die Komponenten befinden sich jeweils in Ordnern, mit einer gleichnamigen CSS-Datei, die für die jeweilige Komponente das Styling festlegt. Zum Beispiel definiert Business.css das Layout für das Business-Bild und die Adressdaten, während BusinessList.css das Styling für die gesamte Liste von Businesses bestimmt und die Layouts für unterschiedliche Bildschirmgrößen berücksichtigt.

## CORS-Problematik
Es kann passieren, dass du den Entwicklungsserver startest und eine Fehlermeldung im Browser bekommst, nachdem du die Suchparameter eingibst. Dies kann ein Problem mit CORS (Cross-Origin Resource Sharing) sein. CORS verhindert, dass deine Anwendung Daten von einer anderen Domain anfordert. Um diese Einschränkung während der Entwicklung zu umgehen, kannst du einen CORS-Proxy verwenden, wie er in den folgenden Schritten beschrieben wird.
1. https://cors-anywhere.herokuapp.com/corsdemo aufrufen,
2. "Request temporary access to the demo server" anklicken
3. Entwicklungsserver stoppen und erneut starten (eventuell reicht es auch, das Browserfenster neu zu laden)
Die Erlaubnis ist temporär; sollte sie abgelaufen sein, wiederhole einfach die Schritte.

## Weitere Funktionen
Die Grundfunktion der App steht nun, in dem Projekt des Skill Paths werden weitere optionale Aufgaben gestellt. Diese möchte ich natürlich auch bearbeiten.

### Adressen klickbar machen und mit Referenz zu Google Maps hinterlegen 
Man soll die Adresse anklicken können und es soll sich ein weiteres Fenster mit Google Maps öffnen, in dem die Adresse angezeigt wird. Zuerst habe ich herausgefunden, dass das Ganze ohne Anbindung einer weiteren API funktioniert. Es soll wie eine normale Suche bei Google Maps funktionieren.

Zunächst überlegte ich, eine eigene Komponente zu erstellen, doch es macht sich besser, in das JSX von Business.js direkt den Link zu Google Maps einzufügen.

#### Query erstellen
Die Konstante encodedAddress soll die spezifische Adresse an die URL von Google Maps anhängen. encodedURIComponent sorgt dafür, dass die Sonderzeichen und Lücken richtig codiert werden. In die Klammern setze display_address, das alle Adressdaten in einem Array enthält. Beim Testen mit console.log merke ich, dass das Array aufgelöst und in die URL codiert wird.
Ich erstelle außerdem die Konstante mapsUrl, die den Query-String für Google Maps enthält, an den ich encodedAddress anfüge.

#### Link in JSX einfügen
Die beiden <p>-Tags, die Adressdaten enthalten, setze ich in ein <a href>-Tag, das auf {mapsUrl} verweist und noch zwei weitere Attribute hat:
- target="_blank" öffnet ein neues Fenster
- rel="noopener noreferrer" verhindert, dass das neue Fenster Zugriff auf das Ursprungsfenster hat.