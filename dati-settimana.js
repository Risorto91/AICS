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
  { date:'2026-10-02', start:'21:15', end:'',      place:'Palestra Ozzano', extra:'AICS vs CMO Ozzano', match:true }
];
