function randomGenerator() {

  var scaleArpeggio = [" Tonos enteros", " Jonico", " Locrio", " Eolico", " Octatonica semitono+tono", " Lidio Dominante", " Menor Melodica", " Locrio 9", " Alterada", " Pentatonica", " Lidio Aumentado", " Lidio", " Mixolidio", " Frigio", " Dorico", " Octaonica tono+semitono", " HM5", " Mixolidio b13", " Dorico b9", "+", "dim", "maj7", "m7(b5)", "dim7", "6", "m6", "m7", "-maj7", "7", "m", " ", "7sus"];
  var notes = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];

  var numberOfNotes = Math.floor(Math.random() * 10 + 1);


  scaleArpeggio = scaleArpeggio[Math.floor(Math.random() * scaleArpeggio.length)];

  notes = notes[Math.floor(Math.random() * notes.length)];

  document.getElementById("answer").innerHTML = "Toca " + numberOfNotes + "  notas de " + notes + scaleArpeggio;

}