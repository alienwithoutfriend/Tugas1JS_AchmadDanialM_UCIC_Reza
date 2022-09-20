class Gempa {
    constructor(lokasi, skala) {
      this.lokasi = lokasi;
      this.skala = skala;
    }
  
    dampak() {
      if (this.skala <= 2) {
        this.dampakGempa = "tidak terasa";
      } else if (this.skala > 2 && this.skala <= 4) {
        this.dampakGempa = "bangunan retak-retak";
      } else if (this.skala > 4 && this.skala <= 6) {
        this.dampakGempa = "bangunan roboh";
      } else if (this.skala > 6) {
        this.dampakGempa = "bangunan roboh dan berpotensi tsunami";
      } else {
        this.dampakGempa = "";
      }
      return this.dampakGempa;
    }
  
    infoGempa(no) {
      return `
          <tr>
            <td>${no}</td>
            <td>${this.lokasi}</td>
            <td>${this.skala}</td>
            <td>${this.dampak()}</td>
          </tr>
        `;
    }
  }
  
  g1 = new Gempa("Ambon", 5.2);
  g2 = new Gempa("Bandung", 6.3);
  g3 = new Gempa("Cilacap", 2);
  g4 = new Gempa("Denpasar", 6.5);
  g5 = new Gempa("Flores", 4.5);
  g6 = new Gempa("Garut", 6);
  g7 = new Gempa("Jakarta", 4);
  g8 = new Gempa("Lampung", 3.5);
  g9 = new Gempa("Maluku", 1.5);
  g10 = new Gempa("Jayapura", 5);
  let dataGempa = [
    g1.infoGempa(1),
    g2.infoGempa(2),
    g3.infoGempa(3),
    g4.infoGempa(4),
    g5.infoGempa(5),
    g6.infoGempa(6),
    g7.infoGempa(7),
    g8.infoGempa(8),
    g9.infoGempa(9),
    g10.infoGempa(10),
  ];
  document.getElementById("tableBody").innerHTML = dataGempa.join("");