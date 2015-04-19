# Server

## Stack

- nodeJs
- Express ist der Web Application Server in NodeJs. Express zeichnet sich durch Minimalität und sehr hohe Flexibilität aus. Der zuverlässige Betrieb und  die hohe Konfigurationsmöglichkeit wird von der Community gelobt.
- jade wird als serverseitige Template Engine verwendet. Die Template Engine generiert HTML nicht nur durch einfache HTML-Platzhalter wie andere Artgenossen. Vielmehr bietet es einer aufs nötigste reduzierter Syntax und gewährt so hohe Übersichtlichkeit.

# Client

## Stack
- backbone
- underscore
- Twitter Bootstrap ist das verwendete CSS-Framework. Es enthält auf HTML und CSS basierende Gestaltungsvorlagen für Typografie, Formulare, Buttons, Tabellen, Grid-System, Navigations- und andere Oberflächengestaltungselemente. Dadurch konnte rasch ein ansprechendes Design erstellt werden
- jQuery
- jQuery UI Dragable stellt die Basis Funktionalität um HTML-Elemente mit Drag&Drop zu verschieben. Im Gegensatz zu anderen Drag&Drop Framework kan JQuery UI Dragable einfach mittels Event Triggers können die Events Backbone zur Verarbeitung weitergegeben werden
- jQuery UI Extendable ermöglicht das einfache ein und ausklappen von Content. Dadurch konnte das ScrumBoard wesentlich übersichtlicher dargestellt werden

Um die Applikation auch produktiv einsetzen zu können müsste sie z.b. mit j.js kompiliert werden dadurch müsste der Browser nur noch ein File laden.


#Funktionalität
- Serverseitig wird für die Scrumverwaltung eine REST API zur Verfügung gestellt
- Task können erfasst werden
- Task können per Drag&Drop von einem in das andere Stadium verschoben werden, der neue Status wird automatisch gespeichert
- Task können bearbeitet werden
- Die geänderten Eingaben werden automatisch durch Events gespeichert (Kein drücken von Speicher Buttons nötig)
- Ein Task kann gelöscht werden
- Die Daten werden nicht persistent gespeichert

