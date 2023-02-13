// Armando los Objetos
// Se engloba en una class constructor las figuritas que se van a vender

class seleccion {
    constructor(seleccionPais, seleccionPrecio, seleccionId, seleccionImagen){
        this.seleccionPais = seleccionPais;
        this.seleccionPrecio = seleccionPrecio;
        this.seleccionId = seleccionId;
        this.seleccionImagen = seleccionImagen;
    }
}

class jugador {
    constructor(nombreJugador, apellidoJugador, pais, posicion, precio, id, imagen){
        this.nombreJugador = nombreJugador;
        this.apellidoJugador = apellidoJugador;
        this.pais = pais;
        this.posicion = posicion;
        this.precio = precio;
        this.id = id;
        this.imagen = imagen;
    }
}

// Argentina
const seleccionArg = new seleccion ("Argentina", 200, "s1", "")
const jugador1 = new jugador ("Emiliano", "Martinez", "Argentina", "Arquero", 200,  1, "jugador_img_Ej.jpg");
const jugador2 = new jugador ("Franco", "Armani", "Argentina", "Arquero", 50, 2, "");
const jugador3 = new jugador ("Marcos", "Acuña", "Argentina", "Defensor", 100, 3, "");
const jugador4 = new jugador ("Nahuel", "Molina", "Argentina", "Defensor", 50, 4, "");
const jugador5 = new jugador ("Nicolás", "Otamendi", "Argentina", "Defensor", 100, 5, "");
const jugador6 = new jugador ("Germán", "Pezzella", "Argentina", "Defensor", 100, 6, "");
const jugador7 = new jugador ("Cristian", "Romero", "Argentina", "Defensor", 100, 7, "");
const jugador8 = new jugador ("Rodrigo", "De Paul", "Argentina", "Mediocampista", 100, 8, "");
const jugador9 = new jugador ("Ángel", "Di María", "Argentina", "Mediocampista", 300, 9, "")
const jugador10 = new jugador ("Giovani", "Lo Celso", "Argentina", "Mediocampista", 100, 10, "");
const jugador11 = new jugador ("Leandro", "Paredes", "Argentina", "Mediocampista", 50, 11, "");
const jugador12 = new jugador ("Guido", "Rodríguez","Argentina", "Mediocampista", 50, 12, "");
const jugador13 = new jugador ("Julián", "Álvarez ","Argentina", "Delantero", 150, 13, "");
const jugador14 = new jugador ("Joaquín", "Correa","Argentina", "Delantero", 50, 14, "");
const jugador15 = new jugador ("Alejandro", "Gómez","Argentina", "Delantero", 50, 15, "");
const jugador16 = new jugador ("Nicolás", "González", "Argentina", "Delantero", 50, 16,"");
const jugador17 = new jugador ("Lautaro", "Martínez", "Argentina", "Delantero", 50, 17, "");
const jugador18 = new jugador  ("Lionel", "Messi", "Argentina", "Delantero", 500, 18, "");

// Alemania
const seleccionAle = new seleccion ("Alemania", 200, "s2", "")
const jugador19 = new jugador ("Manuel", "Neuer", "Alemania", "Arquero", 200, 19, "manuelNeuer.jpg");
const jugador20 = new jugador ("Marc-André", "Ter Stegen", "Alemania", "Arquero", 100, 20, "marc-AndreTerStegen.jpg");
const jugador21 = new jugador ("Matthias", "Ginter", "Alemania", "Defensor", 100, 21, "matthiasGinter.jpg");
const jugador22 = new jugador ("Robin", "Gosens", "Alemania", "Defensor", 50, 22, "robinGosens.jpg");
const jugador23 = new jugador ("Thilo", "Kehrer", "Alemania", "Defensor", 50, 23, "thiloKehrer.jpg");
const jugador24 = new jugador ("David", "Raum", "Alemania", "Defensor", 50, 24, "davidRaum.jpg");
const jugador25 = new jugador ("Antonio", "Rüdiger", "Alemania", "Defensor", 200, 25, "antonioRudiger.jpg");
const jugador26 = new jugador ("Niklas", "Süle", "Alemania", "Defensor", 50, 26, "niklasSule.jpg");
const jugador27 = new jugador ("Leon", "Goretzka", "Alemania", "Mediocampista", 50, 27, "leonGoretzka.jpg");
const jugador28 = new jugador ("İlkay", "Gündoğan", "Alemania", "Mediocampista", 50, 28, "ilkayGundogan.jpg");
const jugador29 = new jugador ("Kai", "Havertz", "Alemania", "Mediocampista", 50, 29, "kaiHavertz.jpg");
const jugador30 = new jugador ("Jonas", "Hofmann", "Alemania", "Mediocampista", 100, 30, "jonasHofmann.jpg");
const jugador31 = new jugador ("Joshua", "Kimmich", "Alemania", "Mediocampista", 50, 31, "joshuaKimmich.jpg");
const jugador32 = new jugador ("Serge", "Gnabry", "Alemania", "Delantero", 100, 32, "sergeGnabry.jpg");
const jugador33 = new jugador ("Thomas", "Müller", "Alemania", "Delantero", 500, 33, "thomasMuller.jpg");
const jugador34 = new jugador ("Marco", "Reus", "Alemania", "Delantero", 200, 34, "marcoReus.jpg");
const jugador35 = new jugador ("Leroy", "Sané", "Alemania", "Delantero", 150, 35, "leroySane.jpg");
const jugador36 = new jugador ("Timo", "Werner", "Alemania", "Delantero", 300, 36, "timoWerner.jpg");

// Brasil
// Se aclaran algunos nombres de jugadores que solo usan su apodo
/*
Marcos Aoás Corrêa - Marquinhos
Carlos Henrique José Francisco Venancio Casimiro - Casemiro
Fábio Henrique Tavares - Fabinho
Frederico Rodrigues de Paula Santos - Fred
Neymar da Silva Santos Júnior - Neymar Jr
Raphael Dias Belloli - Raphinha
Vinícius José Paixaõ de Oliveira Junior - Vinícius Jr
*/
const seleccionBra = new seleccion ("Brasil", 200, "s3", "")
const jugador37 = new jugador ("Alisson", "Becker", "Brasil", "Arquero", 150, 37, "");
const jugador38 = new jugador ("Ederson", "Moraes", "Brasil", "Arquero", 100, 38, "");
const jugador39 = new jugador ("Alex", "Sandro", "Brasil", "Defensor", 50, 39, "");
const jugador40 = new jugador ("Danilo", "Da Silva", "Brasil", "Defensor", 200, 40, "");
const jugador41 = new jugador ("Éder", "Militão", "Brasil", "Defensor", 50, 41, "");
const jugador42 = new jugador ("Marcos", "Corrêa", "Brasil", "Defensor", 100, 42, "");
const jugador43 = new jugador ("Thiago", "Silva", "Brasil", "Defensor", 200, 43, "");
const jugador44 = new jugador ("Carlos","Casimiro", "Brasil", "Mediocampista", 100, 44, "");
const jugador45 = new jugador ("Philippe", "Coutinho", "Brasil", "Mediocampista", 100, 45, "");
const jugador46 = new jugador ("Fábio", "Tavares", "Brasil", "Mediocampista", 50, 46, "");
const jugador47 = new jugador ("Federico", "Dos Santos", "Brasil", "Mediocampista", 50, 47, "");
const jugador48 = new jugador ("Lucas", "Paquetá", "Brasil", "Mediocampista", 100, 48, "");
const jugador49 = new jugador ("Antony", "Santos", "Brasil", "Delantero", 50, 49, "");
const jugador50 = new jugador ("Gabriel", "Jesus", "Brasil", "Delantero", 50, 50, "");
const jugador51 = new jugador ("Neymar", "Da Silva", "Brasil", "Delantero", 450, 51, "");
const jugador52 = new jugador ("Raphael", "Dias", "Brasil", "Delantero", 50, 52, "");
const jugador53 = new jugador ("Richarlison","Andrade", "Brasil", "Delantero", 200, 53, "");
const jugador54 = new jugador ("Vinícius", "Olivera", "Brasil", "Delantero", 200, 54, "");

// Croacia
const jugador55 = new jugador ("Dominik", "Livaković", "Croacia", "Arquero", 50, 55, "");
const jugador56 = new jugador ("Ivica", "Ivušić", "Croacia", "Arquero", 50, 56, "");
const jugador57 = new jugador ("Duje", "Ćaleta-Car", "Croacia", "Defensor", 50, 57, "");
const jugador58 = new jugador ("Joško", "Gvardiol", "Croacia", "Defensor", 100, 58, "");
const jugador59 = new jugador ("Josip", "Juranović", "Croacia", "Defensor", 50, 59, "");
const jugador60 = new jugador ("Dejan", "Lovren", "Croacia", "Defensor", 50, 60, "");
const jugador61 = new jugador ("Borna", "Sosa", "Croacia", "Defensor", 50, 61, "");
const jugador62 = new jugador ("Domagoj", "Vida", "Croacia", "Defensor", 50, 62, "");
const jugador63 = new jugador ("Marcelo", "Brozović", "Croacia", "Mediocampista", 50, 63, "");
const jugador64 = new jugador ("Mateo", "Kovačić", "Croacia", "Mediocampista", 200, 64, "");
const jugador65 = new jugador ("Luka", "Modrić", "Croacia", "Mediocampista", 450, 65, "");
const jugador66 = new jugador ("Mario", "Pašalić", "Croacia", "Mediocampista", 100, 66, "");
const jugador67 = new jugador ("Ivan", "Perišić", "Croacia", "Mediocampista", 200, 67, "");
const jugador68 = new jugador ("Nikola", "Vlašić", "Croacia", "Mediocampista", 50, 68, "");
const jugador69 = new jugador ("Josip", "Brekalo", "Croacia", "Delantero", 100, 69, "");
const jugador70 = new jugador ("Andrej", "Kramarić", "Croacia", "Delantero", 50, 70, "");
const jugador71 = new jugador ("Marko", "Livaja", "Croacia", "Delantero", 50, 71, "");
const jugador72 = new jugador ("Mislav", "Oršić", "Croacia", "Delantero", 50, 72, "");

// España
/*
Pablo Martín Páez Gavira - Gavi
Jorge Resurrección Merodio - Koke
Pedro González López - Pedri
Rodrigo Hernández Cascante - Rodri
*/
const jugador73 = new jugador ("Unai", "Simón", "España", "Arquero", 50, 73, "");
const jugador74 = new jugador ("Robert", "Sánchez", "España", "Arquero", 50, 74, "");
const jugador75 = new jugador ("César", "Azpilicueta", "España", "Defensor", 150, 75, "");
const jugador76 = new jugador ("Eric", "García", "España", "Defensor", 50, 76, "");
const jugador77 = new jugador ("Jordi", "Alba","España", "Defensor", 150, 77, "");
const jugador78 = new jugador ("Aymeric", "Laporte", "España", "Defensor", 50, 78, "");
const jugador79 = new jugador ("Pau", "Torres", "España", "Defensor", 50, 79, "");
const jugador80 = new jugador ("Pablo", "Gavira", "España", "Mediocampista", 50, 80, "");
const jugador81 = new jugador ("Jorge", "Merodio", "España", "Mediocampista", 50, 81, "");
const jugador82 = new jugador ("Marcos", "Llorente", "España", "Mediocampista", 300, 82, "");
const jugador83 = new jugador ("Pedro", "González","España", "Mediocampista", 100, 83, "");
const jugador84 = new jugador ("Rodrigo", "Hernandez", "España", "Mediocampista", 100, 84, "");
const jugador85 = new jugador ("Sergio", "Busquets", "España", "Mediocampista", 300, 85, "");
const jugador86 = new jugador ("Dani", "Olmo", "España", "Delantero", 50, 86, "");
const jugador87 = new jugador ("Ansu", "Fati", "España", "Delantero", 50, 87, "");
const jugador88 = new jugador ("Ferran", "Torres", "España", "Delantero", 50, 88, "");
const jugador89 = new jugador ("Álvaro", "Morata", "España", "Delantero", 100, 89, "");
const jugador90 = new jugador ("Pablo", "Sarabia", "España", "Delantero", 50, 90, "");

// Francia
const jugador91 = new jugador ("Hugo", "Lloris", "Francia", "Arquero", 200, 91, "");
const jugador92 = new jugador ("Mike", "Maignan", "Francia", "Arquero", 100, 92, "");
const jugador93 = new jugador ("Lucas", "Hernández", "Francia", "Defensor", 150, 93, "");
const jugador94 = new jugador ("Theo", "Hernández", "Francia", "Defensor", 100, 94, "");
const jugador95 = new jugador ("Presnel", "Kimpembe", "Francia", "Defensor", 200, 95, "");
const jugador96 = new jugador ("Jules", "Koundé", "Francia", "Defensor", 200, 96, "");
const jugador97 = new jugador ("Benjamin", "Pavar", "Francia", "Defensor", 50, 97, "");
const jugador98 = new jugador ("Raphaël", "Varane", "Francia", "Defensor", 100, 98, "");
const jugador99 = new jugador ("N´Golo", "Kanté", "Francia", "Mediocampista", 250, 99, "");
const jugador100 = new jugador ("Paul", "Pogba", "Francia", "Mediocampista", 300, 100, "");
const jugador101 = new jugador ("Adrien", "Rabiot", "Francia", "Mediocampista", 300, 101, "");
const jugador102 = new jugador ("Aurélien", "Tchouaméni", "Francia", "Mediocampista", 100, 102, "");
const jugador103 = new jugador ("Wissam", "Ben Yedder", "Francia", "Delantero", 150, 103, "");
const jugador104 = new jugador ("Karim", "Benzema", "Francia", "Delantero", 400, 104, "");
const jugador105 = new jugador ("Kingsley", "Coman", "Francia", "Delantero", 50, 105, "");
const jugador106 = new jugador ("Antoine", "Griezmann", "Francia", "Delantero", 350, 106, "");
const jugador107 = new jugador ("Kylian", "Mbappé", "Francia", "Delantero", 500, 107, "");
const jugador108 = new jugador ("Christopher", "Nkunku", "Francia", "Delantero", 50, 108, "");

// Inglaterra
const jugador109 = new jugador ("Jordan", "Pickford", "Inglaterra", "Arquero", 100, 109, "");
const jugador110 = new jugador ("Aaron", "Ramsdale", "Inglaterra", "Arquero", 50, 110, "");
const jugador111 = new jugador ("Trent", "Alexander-Arnold", "Inglaterra", "Defensor", 50, 111, "");
const jugador112 = new jugador ("Conor", "Coady", "Inglaterra", "Defensor", 50, 112, "");
const jugador113 = new jugador ("Harry", "Maguire", "Inglaterra", "Defensor", 100, 113, "");
const jugador114 = new jugador ("Luke", "Shaw", "Inglaterra", "Defensor", 100, 114, "");
const jugador115 = new jugador ("John", "Stones", "Inglaterra", "Defensor", 150, 115, "");
const jugador116 = new jugador ("Kyle", "Walker", "Inglaterra", "Defensor", 150, 116, "");
const jugador117 = new jugador ("Jude", "Bellingham", "Inglaterra", "Mediocampista", 50, 117, "");
const jugador118 = new jugador ("Jack", "Grealish", "Inglaterra", "Mediocampista", 50, 118, "");
const jugador119 = new jugador ("Jordan", "Henderson", "Inglaterra", "Mediocampista", 100, 119, "");
const jugador120 = new jugador ("Mason", "Mount", "Inglaterra", "Mediocampista", 100, 120, "");
const jugador121 = new jugador ("Kalvin", "Phillips", "Inglaterra", "Mediocampista", 100, 121, "");
const jugador122 = new jugador ("Declan", "Rice", "Inglaterra", "Mediocampista", 50, 122, "");
const jugador123 = new jugador ("Phil", "Foden", "Inglaterra", "Delantero", 50, 123, "");
const jugador124 = new jugador ("Harry", "Kane", "Inglaterra", "Delantero", 250, 124, "");
const jugador125 = new jugador ("Bukayo", "Saka", "Inglaterra", "Delantero", 100, 125, "");
const jugador126 = new jugador ("Raheem", "Sterling", "Inglaterra", "Delantero", 200, 126, "");

// Portugal
// Se deja aclarado el Nombre verdadero de Pepe (nadie lo conoce por su nombre)
// Képler Laverán Lima Ferreira - Pepe
const jugador127 = new jugador ("Diogo", "Costa", "Portugal", "Arquero", 50, 127, "");
const jugador128 = new jugador ("Rui", "Patrício", "Portugal", "Arquero", 50, 128, "");
const jugador129 = new jugador ("João", "Cancelo", "Portugal", "Defensor", 50, 129, "");
const jugador130 = new jugador ("José", "Fonte", "Portugal", "Defensor", 50, 130, "");
const jugador131 = new jugador ("Nuno", "Mendes", "Portugal", "Defensor", 150, 131, "");
const jugador132 = new jugador ("Képler", "Lima", "Portugal", "Defensor", 200, 132, "");
const jugador133 = new jugador ("Raphaël", "Guerreiro", "Portugal", "Defensor", 50, 133, "");
const jugador134 = new jugador ("Rúben", "Dias", "Portugal", "Defensor", 100, 134, "");
const jugador135 = new jugador ("Bernardo", "Silva", "Portugal", "Mediocampista", 100, 135, "");
const jugador136 = new jugador ("Bruno", "Fernandes", "Portugal", "Mediocampista", 100, 136, "");
const jugador137 = new jugador ("Danilo", "Pereira", "Portugal", "Mediocampista", 100, 137, "");
const jugador138 = new jugador ("João", "Moutinho", "Portugal", "Mediocampista", 50, 138, "");
const jugador139 = new jugador ("Renato", "Sanches", "Portugal", "Mediocampista", 50, 139, "");
const jugador140 = new jugador ("Rúben", "Neves", "Portugal", "Mediocampista", 100, 140, "");
const jugador141 = new jugador ("André", "Silva", "Portugal", "Delantero", 150, 141, "");
const jugador142 = new jugador ("Cristiano", "Ronaldo", "Portugal", "Delantero", 500, 142, "");
const jugador143 = new jugador ("Diogo", "Jota", "Portugal", "Delantero", 100, 143, "");
const jugador144 = new jugador ("Gonçalo", "Guedes", "Portugal", "Delantero", 50, 144, "");

// Se determina arrays con objets
let listado = []
if(localStorage.getItem("listado")){
        listado = JSON.parse(localStorage.getItem("listado"))
    } else {
            listado.push(jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7,jugador8, jugador9, jugador10, 
                jugador11, jugador12, jugador13, jugador14, jugador15, jugador16, jugador17, jugador18, jugador19, jugador20, 
                jugador21, jugador22, jugador23, jugador24, jugador25, jugador26, jugador27, jugador28, jugador29, jugador30, 
                jugador31, jugador32, jugador33, jugador34, jugador35, jugador36, jugador37, jugador38, jugador39, jugador40, 
                jugador41, jugador42, jugador43, jugador44, jugador45, jugador46, jugador47, jugador48, jugador49, jugador50, 
        jugador51, jugador52, jugador53, jugador54, jugador55, jugador56, jugador57, jugador58, jugador59, jugador60, 
        jugador61, jugador62, jugador63, jugador64, jugador65, jugador66, jugador67, jugador68, jugador69, jugador70, 
        jugador71, jugador72, jugador73, jugador74, jugador75, jugador76, jugador77, jugador78, jugador79, jugador80, 
        jugador81, jugador82, jugador83, jugador84, jugador85, jugador86, jugador87, jugador88, jugador89, jugador90, 
        jugador91, jugador92, jugador93, jugador94, jugador95, jugador96, jugador97, jugador98, jugador99, jugador100, 
        jugador101, jugador102, jugador103, jugador104, jugador105, jugador106, jugador107, jugador108, jugador109, jugador110, 
        jugador111, jugador112, jugador113, jugador114, jugador115, jugador116, jugador117, jugador118, jugador119, jugador120, 
        jugador121, jugador122, jugador123, jugador124, jugador125, jugador126, jugador127, jugador128, jugador129, jugador130, 
        jugador131, jugador132, jugador133, jugador134, jugador135, jugador136, jugador137, jugador138, jugador139, jugador140, 
        jugador141, jugador142, jugador143, jugador144)
    localStorage.setItem("listado", JSON.stringify(listado))
}

let listadoSeleccion = []
if(localStorage.getItem("listadoSeleccion")){
        listadoSeleccion = JSON.parse(localStorage.getItem("listadoSeleccion"))
    } else {
            listadoSeleccion.push(seleccionArg, seleccionAle, seleccionBra)
    localStorage.setItem("listadoSeleccion", JSON.stringify(listadoSeleccion))
}