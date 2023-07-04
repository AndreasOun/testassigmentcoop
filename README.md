# Proovi töö Coop Panga jaoks

See testtöö on tehtud Coop Panga jaoks. Tegin automaatilised testid läbi Cypressi.

# Manuaalsed testid:


# Testiidee: Veebilehe laadimine

Prioriteet: Kõrge

Testikirjeldus: Kontrolli, kas veebileht laaditakse edukalt.

Tulemus: OK

Vigade kirjeldus: -


# Testiidee: Kalkulaatori elementide nähtavus

Prioriteet: Kõrge

Testikirjeldus: Kontrolli, kas kalkulaatori elemendid (summa, sissemakse, tagasimaksetabel, arvuta) on nähtavad ja kättesaadavad.

Tulemus: OK

Vigade kirjeldus: -

# Testiidee: Kalkulaatori sisu kontrollimine

Prioriteet: Kõrge

Testikirjeldus: Kontrolli, kas kalkulaatori elemendid sisaldavad õigeid väärtusi ja teavet.

Tulemus: OK

Vigade kirjeldus: -


# Testiidee: Kalkulaatori sisestamise ja tulemuste kontrollimine

Prioriteet: Kõrge

Testikirjeldus: Sisesta erinevad väärtused kalkulaatori väljadesse ja kontrolli, kas tulemused arvutatakse õigesti.

Tulemus: OK

Vigade kirjeldus: -


# Testiidee: Kalkulaatori väljade tühjendamine

Prioriteet: Kõrge

Testikirjeldus: Sisesta väärtused kalkulaatori väljadesse, seejärel tühjenda väljad ja kontrolli, kas väljad lähevad tühjaks.

Tulemus: OK

Vigade kirjeldus: -


# Testiidee: Sisestusväljade piirangud

Prioriteet: Kõrge

Testikirjeldus: Sisesta kalkulaatori väljadesse lubamatud väärtused (nt tekst, negatiivsed arvud) ja kontrolli, kas rakendus takistab selliste väärtuste sisestamist.

Tulemus: OK

Vigade kirjeldus: -


# Testiidee: Kalkulaatori reageerimine ekraani suuruse muutustele

Prioriteet: Keskmine

Testikirjeldus: Muuda veebilehe suurust (nt suurenda või vähenda akna suurust) ja kontrolli, kas kalkulaatori elemendid kohanevad ekraani suurusega.

Tulemus: NOK

Vigade kirjeldus: Dimensiiooni 280 x 653px (Galaxy Fold dimensioonid) peal kalkulaatori tekst on teise teksti all. [kalkulaatoril "Laenukalkulaatori" tekst (<a href="#loan-tab" role="tab" data-toggle="tab">Laenukalkulaator</a>) kattab ära "maksimaalse laenusumma kalkulaatori" teksti (<a href="#loan-tab--2" role="tab" data-toggle="tab">Maksimaalse laenusumma kalkulaator</a>)]


# Testiidee: Veebilehe laadimise aeg

Prioriteet: Kõrge

Testikirjeldus: Mõõda, kui kiiresti veebileht laaditakse ja kontrolli, kas laadimise aeg vastab nõuetele või on vastuvõetav.

Tulemus: OK

Vigade kirjeldus: -


# Testiidee: Kalkulaatori kuvamine erinevates brauserites

Prioriteet: Keskmine

Testikirjeldus: Ava rakendus erinevates veebibrauserites (nt Chrome, Firefox, Safari) ja kontrolli, kas kalkulaator kuvatakse korrektselt ning funktsionaalsus töötab ootuspäraselt igas brauseris.

Tulemus: OK

Vigade kirjeldus: -


# Testiidee: Routes testimine

Prioriteet: Kõrge

Testikirjeldus: Proovi erinevaid nuppe ja linke, mis muudavad veebilehe "routes".

Tulemus: OK

Vigade kirjeldus: -


# Automaatsed testid

Automaatsed testid leiate testassigmentcoop/cypress/e2e/testid.cy.js failist. Automaattestidega kontrollisin veebilehe laadimist, kalkulaatori elementide nähtavust ja kalkulaatori elementide sisu. Kõikide testide tulemus oli OK.

# Märkmed

Oli raskusi Cypressi seadistamisega, kuna varem pole kokku puutunud jQuery'ga. Manuaalsed testid läksid sujuvalt. Töö võttis aega 2 tundi ja 41 minutit.
