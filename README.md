# meteo-FAMM
OGGETTI:
1 - Previsione

temp
nome previsione
umidita
%pioggia
uv
data
fascia oraria
provincia

2 - Allerte

3 - Lettura meteo attuale

Metodi 1- Previsione:

POST    - Inserimento dati
PUT     - Modifica revisione
GET     - Previsione(giornaliera)
DELETE  - Previsione
GET     - Previsione nei prossimi x giorni
GET     - Singola previsione per fascia oraria

Metodi 2- Allerta:
POST    - Inserimento dati
GET     - Allerta(dati)
PUT     - Modifica allerta(dati)
DLETE   - Cancella allerta

Metodi 3- Lettura meteo attuale:
POST    - Inserimento dati
PUT     - Modifica
GET     - Previsione attuale
DELETE  - Previsione attuale
GET     - Situazione teorica