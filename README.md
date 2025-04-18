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

### 1. Adressen klickbar machen und mit Referenz zu Google Maps hinterlegen 
Man soll die Adresse anklicken können und es soll sich ein weiteres Fenster mit Google Maps öffnen, in dem die Adresse angezeigt wird. Zuerst habe ich herausgefunden, dass das Ganze ohne Anbindung einer weiteren API funktioniert. Es soll wie eine normale Suche bei Google Maps funktionieren.

Zunächst überlegte ich, eine eigene Komponente zu erstellen, doch es macht sich besser, in das JSX von Business.js direkt den Link zu Google Maps einzufügen.

#### Query erstellen
Die Konstante encodedAddress soll die spezifische Adresse an die URL von Google Maps anhängen. encodedURIComponent sorgt dafür, dass die Sonderzeichen und Lücken richtig codiert werden. In die Klammern setze display_address, das alle Adressdaten in einem Array enthält. Beim Testen mit console.log merke ich, dass das Array aufgelöst und in die URL codiert wird.
Ich erstelle außerdem die Konstante mapsUrl, die den Query-String für Google Maps enthält, an den ich encodedAddress anfüge.

#### Link in JSX einfügen
Die beiden <p>-Tags, die Adressdaten enthalten, setze ich in ein <a href>-Tag, das auf {mapsUrl} verweist und noch zwei weitere Attribute hat:
- target="_blank" öffnet ein neues Fenster
- rel="noopener noreferrer" verhindert, dass das neue Fenster Zugriff auf das Ursprungsfenster hat.

### 2. Bilder zur Webseite des Restaurants verlinken
Zunächst habe ich die Bilder in Business.js wieder in ein <a href>-Tag gepackt und die url genommen, die die API ausspielt. Dann habe ich mit Attributen im JSX dafür gesorgt, dass ein neuer Tab aufgeht.
Beim Testen wurde mir klar, dass der Link zum Eintrag in der Yelp-Api führt. Darüber wäre dann die Website erreichbar. In der Aufgabe steht nicht direkt drin, dass es die Yelp-Seite sein kann, allerdings haben nicht alle Restaurants eine eigene Website, also belasse ich es jetzt dabei.
#### Komponente WebsiteLink
Zunächst rechnete ich damit, dass das Ganze komplizierter wird. Der Code in Business.js nicht zu überfrachtet wird, habe ich eine weitere Komponente eingebaut und mit Business.js verknüpft. Aber gut, das ist ein Schritt, den man auch mal üben kann.

### 3. Eine neue Anfrage an die Yelp-API soll automatisch gestratet werden, sobald man einen anderen Auswahlfillter anklickt
In SearchBar.js sind die Auswahlfilter als Radio Buttons festgelegt. 

#### If-Else für SearchBar.js
Bei verschiedenen Versuchen, die Aufgabe zu lösen, fiel mir auf, dass der Browser eine Fehlermeldung zeigt, wenn Felder leer gelassen wurden. Hierfür implementierte ich ein Conditional statement, das einen alert rausgibt und Funktion verlässt, d. h. die Suchanfrage abbricht.
#### Erweiterung der handleRadio-Funktion
... um ein Conditional Statement, das eine erneute Anfrage nur dann auslöst, wenn die beiden anderen Felder ausgefüllt sind und businesses da sind (das Array länger als 0 ist), sprich: wenn bereits Ergebnisse angezeigt werden. 

### 4. Eine neue Sortieroption hinzufügen
In der Übung wird vorgeschlagen, in der Nähe eines bestimmten Ortes zu suchen. Dafür würde ich ein weiteres Suchfeld für Postleitzahlen einsetzen.

In SearchBar.js habe ich die Funktion so geändert, dass die Radio Buttons und Search Term verpflichtend sind und man zwischen Place und ZIP code entscheiden kann (eins von beiden muss gewählt werden).
Mit dem Ausdruck const searchLocation = zip_code || location; wird der ZIP code bevorzugt, das heißt, entweder soll der ZIP Code als Parameter genutzt werden, wenn es keinen gibt, soll auf location zurückgegriffen werden.
Dadurch sucht die API bevorzugt nach der Postleitzahl, d. h., wenn man New York City eingibt, aber eine Berliner Postleitzahl, werden Ergebnisse aus Berlin angezeigt.

Die Ergebnisse werden weiterhin nach den Radio Buttons gefiltert, sodass nicht unbedingt das nächste Restaurant oben steht, sondern z. B. das nächste mit der höchsten Bewertung, wenn das ausgesucht wurde.

### 5. Der Enterknopf soll eine Suche auslösen, ohne dass man Search drücken muss
Hierfür brauchte ich nur einen neuen Event Handler, der die Funktion, die bei onSubmit ausgeführt wird, ausführt, wenn der event key (in meinem Fall e.key) "Enter" ist. Dazu kommt ein Event Listener namens onKeyDown, der die Funktion auslöst.

### 6. Autovervollständigung in der Location-Zeile
Hierfür wurde mir eine Google-Maps-ähnliche API vorgeschlagen, aber der API-Key wäre nur erhältlich, wenn ich ein Bezahlkonto anlege. Das war mir zu unheimlich, also nutzte ich nominatim. Für den Endpoint, der Autovervollständigung ermöglicht, war gar kein API-Key zu erstellen.
Im Ordner utils ist die Datei nominatim.js, in der sich die Logik für den Zugriff auf den Endpoint befindet.
Der Rest wird wieder in der SearchBar.js geregelt. Hierfür habe ich die location-Funktion angepasst und ein Dropdown-Menü im JSX ergänzt, in dem die 5 Suchergebnisse angezeigt werden, sobald eine Veränderung in der Inpu-Zeile stattfindet.
Eine weitere Funktion behandelt den Klick auf eine der Optionen im Dropdown-Menü und trägt diese ein. Von dort aus geht es wie gehabt weiter mit den weitern Feldern und dem Submit-Button. 