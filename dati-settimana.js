/* =====================================================================
   PROGRAMMA DELLA SETTIMANA  (file da aggiornare ogni lunedì)
   Una riga per allenamento/partita. La Home mostra solo la settimana corrente;
   le partite del calendario si aggiungono da sole, quindi qui vanno solo gli allenamenti
   (e, se vuoi indicare un avversario diverso, la riga della partita con match:true).
   Formato riga: { date:'AAAA-MM-GG', start:'21:00', end:'22:30', place:'Palestra ...' }
   ===================================================================== */
window.AICS = window.AICS || {};
window.AICS.WEEK_SCHEDULE = [
  { date:'2026-09-28', start:'21:00', end:'22:30', place:'Palestra Romiti' },
  { date:'2026-09-29', start:'21:00', end:'22:30', place:'Palestra Romiti' },
  { date:'2026-10-01', start:'21:00', end:'23:00', place:'Palestra Buscherini' },
  { date:'2026-10-02', start:'21:15', end:'',      place:'Palestra Ozzano', extra:'AICS vs CMO Ozzano', match:true },

  /* Settimana 5-11 ottobre */
  { date:'2026-10-06', start:'21:00', end:'22:30', place:'Palestra Romiti' },
  { date:'2026-10-07', start:'21:00', end:'23:00', place:'Palestra Orceoli' },
  { date:'2026-10-09', start:'20:00', end:'22:00', place:'Palestra Romiti' },
  { date:'2026-10-10', start:'18:45', end:'',      place:'Palestra Villa Romiti', extra:'AICS vs BK Giardini Margherita', match:true },

  /* Settimana 12-18 ottobre */
  { date:'2026-10-12', start:'20:00', end:'22:00', place:'Palestra Romiti' },
  { date:'2026-10-13', start:'21:00', end:'22:30', place:'Palestra Orceoli' },
  { date:'2026-10-16', start:'21:00', end:'22:30', place:'Palestra Viroli' },
  { date:'2026-10-18', start:'19:00', end:'',      place:'PalaCus \u2013 Campo A', extra:'AICS vs Audace Bombers BO', match:true },

  /* Settimana 19-25 ottobre */
  { date:'2026-10-20', start:'20:45', end:'22:30', place:'Palestra Romiti' },
  { date:'2026-10-22', start:'18:00', end:'20:00', place:'Palestra Romiti' },
  { date:'2026-10-23', start:'20:00', end:'22:00', place:'Palestra Romiti' },
  { date:'2026-10-24', start:'18:45', end:'',      place:'Palestra Villa Romiti', extra:'AICS vs Guelfo Basket', match:true }
];

/* =====================================================================
   PASTE (chi porta le pizze dopo l'allenamento)
   Una riga per data: 'AAAA-MM-GG': 'Nome'. Compare sotto la riga dell'allenamento di quel giorno.
   Esempio:  '2026-10-06': 'Gorini',
   ===================================================================== */
window.AICS.PASTE = {
  '2026-10-06': 'Gasperini',
  '2026-10-13': 'M. Ravaioli',
  '2026-10-20': 'Pinza',
  '2026-10-27': 'Lazzarini',
  '2026-11-03': 'M. Ravaioli',
  '2026-11-17': 'Grilli',
  '2026-11-24': 'Bellesia',
  '2026-12-01': 'Pinza',
  '2026-12-08': 'S. Ravaioli',
  '2026-12-15': 'M. Ravaioli',
  '2026-12-22': 'Mistral'
};

/* =====================================================================
   MACCHINE IN TRASFERTA (1 giocatore + 1 facoltativo che vanno in auto, oltre a pulmino e dirigente)
   Una riga per ogni trasferta: 'AAAA-MM-GG': ['Titolare', 'Facoltativo'].
   Compare sotto la partita, in Home. Escluse Malaguti, Agatensi, Bergantini, Bellesia e Gassama.
   Turni a rotazione tra i 9 giocatori disponibili, senza coppie ripetute e senza lo stesso giocatore in due trasferte di fila.
   ===================================================================== */
window.AICS.MACCHINE = {
  '2026-10-02': ['Gasperini', 'Lombini'],
  '2026-10-18': ['M. Ravaioli', 'Mistral'],
  '2026-11-07': ['Naldini', 'S. Ravaioli'],
  '2026-11-13': ['Pinza', 'Zammarchi'],
  '2026-11-28': ['Gorini', 'S. Ravaioli'],
  '2027-01-09': ['Lombini', 'M. Ravaioli'],
  '2027-01-29': ['Mistral', 'Naldini'],
  '2027-02-12': ['S. Ravaioli', 'Pinza'],
  '2027-02-19': ['Zammarchi', 'Gorini'],
  '2027-03-03': ['Pinza', 'Naldini'],
  '2027-03-12': ['Lombini', 'S. Ravaioli'],
  '2027-04-03': ['Gorini', 'Mistral'],
  '2027-04-11': ['Lombini', 'Zammarchi'],
  '2027-04-16': ['M. Ravaioli', 'Pinza'],
  '2027-05-01': ['Naldini', 'Gorini']
};

/* =====================================================================
   RITROVO PER LE TRASFERTE
   Ci si trova sempre all'Hotel San Giorgio e l'obiettivo è essere in palestra
   'prima' minuti prima dell'inizio della partita. L'orario di ritrovo = inizio partita \u2212 prima \u2212 minuti di viaggio
   (arrotondato ai 5 minuti inferiori). I minuti di viaggio sono stime in pulmino dall'hotel alla palestra
   (con un po' di margine): modifica la cifra della palestra se serve.
   ===================================================================== */
window.AICS.RITROVO = {
  luogo: 'Hotel San Giorgio',
  prima: 60,
  minuti: {
    'cesena': 25, 'bertinoro': 25, 'faenza': 30, 'cesenatico': 40,
    'imola': 40, 'castelsanpietro': 50, 'santagata': 50, 'castelguelfo': 55,
    'ozzano': 60, 'budrio': 70, 'bologna-palacus': 70, 'bologna-moratello': 70,
    'casalecchio': 80, 'baricella': 80, 'montesanpietro': 90
  }
};
