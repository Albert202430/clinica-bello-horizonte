// /app/medicos/data.js
import { Doctor } from "./types"

const medicos: Doctor[] = [
  {
    id: 1,
    nombre: "SEMINARIO VEGA LUIS  HERNAN",
    especialidad: "ANESTESIOLOGÍA",
    descripcion: "Los anestesiólogos cuidan al paciente antes, durante y después de la cirugía, aplicando anestesia y controlando el dolor para garantizar seguridad.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "029622",
    rne:"15257",
    horarios: [
      { dia: "MARTES", horas: "03:00 PM-07:00 PM" },
      { dia: "MIÉRCOLES", horas: "03:00 PM-07:00 PM" },
      { dia: "JUEVES", horas: "03:30 PM-07:30 PM" },
      { dia: "VIERNES", horas: "03:00 PM-07:00 PM" },
    ]
  },

  {
    id: 2,
    nombre: "RIVAS ANASTACIO ROBERT ALEXANDER",
    especialidad: "ANESTESIOLOGÍA",
    descripcion: "Los anestesiólogos cuidan al paciente antes, durante y después de la cirugía, aplicando anestesia y controlando el dolor para garantizar seguridad.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "44092",
    rne:"25672",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 3,
    nombre: "ISISOLA FARFAN LUIS ENRIQUE",
    especialidad: "CARDIOLOGIA",
    descripcion: "Los cardiólogos son médicos especializados en cuidar el corazón y el sistema circulatorio. Diagnostican, previenen y tratan enfermedades cardiovasculares para proteger la salud del paciente",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "47208",
    rne:"049415",
    horarios: [
      { dia: "LUNES", horas: "03:00 PM-05:00 PM" },
      { dia: "MIÉRCOLES", horas: "03:00 PM-05:00 PM" },
      { dia: "VIERNES", horas: "03:30 PM-05:00 PM" },
      { dia: "SABADO", horas: "12:00 PM-01:30 PM" },
      
    ]
  },
  {
    id: 4,
    nombre: "JUAREZ LLOCLLA JORGE PAUL",
    especialidad: "CARDIOLOGIA",
    descripcion: "Los cardiólogos cuidan el corazón y previenen enfermedades cardiovasculares para mantener la salud del paciente.",
    imagen: "/images/doctor4.jpeg",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "059379",
    rne:"029442",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},      
    ]
  },
  {
    id: 5,
    nombre: "JAIME CHINGUEL DEYVIS ",
    especialidad: "CARDIOLOGIA",
    descripcion: "Los cardiólogos cuidan el corazón y previenen enfermedades cardiovasculares para mantener la salud del paciente.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "059049",
    rne:"034041",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 6,
    nombre: "MEJIAS SANDOVAL JOSE NICOLAS",
    especialidad: "CIRUGIA DE CABEZA Y CUELLO",
    descripcion: "Los especialistas en cirugía de cabeza y cuello tratan enfermedades y lesiones en la cara, cuello y garganta, cuidando funciones vitales.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "52624",
    rne:"36304",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 7,
    nombre: "ABRAMONTE ALCALA VICTOR ALFONSO",
    especialidad: "CIRUGÍA GENERAL",
    descripcion: "Los cirujanos generales realizan operaciones para tratar diversas enfermedades y lesiones, cuidando al paciente antes, durante y después de la cirugía.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "067535",
    rne:"039827",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 8,
    nombre: "BRUNO ZAPATA JIMMY MANUEL ANGEL",
    especialidad: "CIRUGÍA GENERAL",
    descripcion: "Los cirujanos generales realizan operaciones para tratar diversas enfermedades y lesiones, cuidando al paciente antes, durante y después de la cirugía.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "063545",
    rne:"036130",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 9,
    nombre: "HERNANDEZ GOMEZ RAFAEL ENRIQUE",
    especialidad: "CIRUGÍA GENERAL",
    descripcion: "Los cirujanos generales realizan operaciones para tratar diversas enfermedades y lesiones, cuidando al paciente antes, durante y después de la cirugía.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "083694",
    rne:"0125",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 10,
    nombre: "CASTRO CASTRO JOSE FRANCISCO",
    especialidad: "CIRUGÍA GENERAL",
    descripcion: "Los cirujanos generales realizan operaciones para tratar diversas enfermedades y lesiones, cuidando al paciente antes, durante y después de la cirugía.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "14875 ",
    rne:"6169",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 11,
    nombre: "REYES VALDIVIEZO HONORIO ELISEO",
    especialidad: "CIRUGÍA GENERAL Y LAPAROSCOPIA",
    descripcion: "Los cirujanos generales y laparoscópicos realizan operaciones tradicionales y mínimamente invasivas para cuidar la salud del paciente.",
    imagen: "/images/doctor11.jpeg",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "21068",
    rne:"27548",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 12,
    nombre: "PALACIOS LIZARBE FABIO",
    especialidad: "CIRUGIA ONCOLÓGICA",
    descripcion: "Los cirujanos oncológicos realizan operaciones para tratar distintos tipos de cáncer, cuidando al paciente en todo el proceso quirúrgico.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "066389",
    rne:"046335",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 13,
    nombre: "SILVA JUAREZ JOSE SANTOS",
    especialidad: "TRAUMATOLOGÍA",
    descripcion: "Los traumatólogos atienden lesiones de huesos, músculos y articulaciones, ayudando a recuperar movilidad y bienestar.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "042021",
    rne:"026424",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 14,
    nombre: "DIAZ RUIZ RENATO",
    especialidad: "CIRUGIA PEDIATRICA",
    descripcion: "Los cirujanos pediátricos atienden a niños con enfermedades o lesiones que requieren cirugía, cuidando su salud en cada etapa del tratamiento.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "059051",
    rne:"031618",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 15,
    nombre: "CASTRO RAMIREZ RICARDO ",
    especialidad: "CIRUGIA TORAXICA Y CARDIOVASCULAR",
    descripcion: "Los cirujanos torácicos y cardiovasculares tratan enfermedades del corazón, pulmones y grandes vasos, cuidando funciones vitales del paciente.",
    imagen: "/images/doctor15.jpeg",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "23479",
    rne:"022106",
    horarios: [
      { dia: "LUNES - SABADO", horas: "01:00 PM-03:00 PM" },
      
    ]
  },
  {
    id: 16,
    nombre: "BAYONA ALVARADO MIRTHA GISELLA",
    especialidad: "DERMATOLOGÍA",
    descripcion: "Los dermatólogos cuidan la piel, el cabello y las uñas, diagnosticando y tratando enfermedades para mantener la salud y bienestar.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "030894",
    rne:"024064",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 17,
    nombre: "JUAREZ GARAY DIANA",
    especialidad: "ENDOCRINOLOGÍA",
    descripcion: "Los endocrinólogos diagnostican y tratan enfermedades hormonales, ayudando a mantener el equilibrio y la salud del organismo.",
    imagen: "/images/doctor17.jpeg",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "52627",
    rne:"037212",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
      
    ]
  },
  {
    id: 18,
    nombre: "ALARCON CANOVA STEVEN ",
    especialidad: "GASTROENTEROLOGIA",
    descripcion: "Los gastroenterólogos cuidan el sistema digestivo, diagnosticando y tratando enfermedades del estómago, intestinos y órganos relacionados.",
    imagen: "/images/doctor18.jpeg",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "059060",
    rne:"031258",
    horarios: [
      { dia: "MARTES", horas: "11:00 AM-01:00 PM" },
      { dia: "MIÉRCOLES", horas: "11:00 AM-01:00 PM" },
      { dia: "VIERNES", horas: "11:00 AM-01:00 PM" },
    ]
  },
  {
    id: 19,
    nombre: "MARROQUIN LOZADA PAUL ALEXANDER",
    especialidad: "GINECOLOGIA Y OBSTETRICIA",
    descripcion: "Los ginecólogos y obstetras cuidan la salud de la mujer y acompañan el embarazo, parto y recuperación.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "39999",
    rne:"23236",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},

    ]
  },
  {
    id: 20,
    nombre: "MAGAN MALAFAYA LUIS ",
    especialidad: "GINECOLOGIA Y OBSTETRICIA",
    descripcion: "Los ginecólogos y obstetras cuidan la salud de la mujer y acompañan el embarazo, parto y recuperación.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "012684",
    rne:"004737",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
    ]
  },
  {
    id: 21,
    nombre: "VALERA ARRUNATEGUI DANIEL RODRIGO",
    especialidad: "GINECOLOGIA Y OBSTETRICIA",
    descripcion: "Los ginecólogos y obstetras cuidan la salud de la mujer y acompañan el embarazo, parto y recuperación.",
    imagen: "/images/doctor21.jpeg",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "24701",
    rne:"9825",
    horarios: [
      { dia: "LUNES", horas: "03:00 PM-05:00 PM" },
      { dia: "MIÉRCOLES", horas: "10:00 AM-12:00 PM" },
      { dia: "VIERNES", horas: "03:00 PM-05:00 PM" },
      { dia: "SABADO", horas: "10:00 AM-12:00 PM" },
    ]
  },
  {
    id: 22,
    nombre: "MEJIA FERNANDEZ JOSE DERBY",
    especialidad: "GINECOLOGIA Y OBSTETRICIA",
    descripcion: "Los ginecólogos y obstetras cuidan la salud de la mujer y acompañan el embarazo, parto y recuperación.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "40054",
    rne:"22914",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
    ]
  },
  {
    id: 23,
    nombre: "LOAYZA CRUZ ERIKA LUZVIT",
    especialidad: "GINECOLOGIA Y OBSTETRICIA",
    descripcion: "Los ginecólogos y obstetras cuidan la salud de la mujer y acompañan el embarazo, parto y recuperación.",
    imagen: "/images/doctor0.png",
    email: "administracion@clinicabellohorizonte.com.pe",
    cmp: "039777",
    rne:"021497",
    horarios: [
      { dia: "HORARIO ROTATIVO",horas:"08:00 AM-07:00 PM"},
    ]
  },
  {
  id: 24,
  nombre: "CORDOVA MARCELO WILDER HEMERSON",
  especialidad: "GINECOLOGIA Y OBSTETRICIA",
  descripcion: "Los ginecólogos y obstetras cuidan la salud de la mujer y acompañan el embarazo, parto y recuperación.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "27871",
  rne: "12517",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 25,
  nombre: "HERNANDEZ FLORES LUIS EDUARDO",
  especialidad: "HEMATOLOGÍA",
  descripcion: "Los hematólogos diagnostican y tratan enfermedades de la sangre y la médula ósea, cuidando la salud integral del paciente.",
  imagen: "/images/doctor25.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "50657",
  rne: "41538",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 26,
  nombre: "QUEZADA OSORIA CARMEN CLAUDIA",
  especialidad: "INFECTOLOGIA",
  descripcion: "Los infectólogos diagnostican y tratan enfermedades causadas por virus, bacterias y otros microorganismos, protegiendo la salud del paciente.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "64291",
  rne: "35439",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 27,
  nombre: "BORRERO RAMIREZ NORMA SILVANA",
  especialidad: "MEDICINA FÍSICA Y REHABILITACIÓN",
  descripcion: "Los especialistas en medicina física y rehabilitación ayudan a recuperar movilidad y funcionalidad tras lesiones o enfermedades, mejorando la calidad de vida del paciente.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "24242",
  rne: "21870",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 28,
  nombre: "RUIDIAS CHUQUIMARCA JEANCARLO MANUEL",
  especialidad: "MEDICINA GENERAL",
  descripcion: "Los médicos generales atienden problemas de salud comunes, previenen enfermedades y orientan al paciente en su cuidado integral.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "86211",
  rne: "86211",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 29,
  nombre: "MORALES TAPIA MICHAEL ALBERTO",
  especialidad: "MEDICINA GENERAL",
  descripcion: "Los médicos generales atienden problemas de salud comunes, previenen enfermedades y orientan al paciente en su cuidado integral.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "102957",
  rne: "102957",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 30,
  nombre: "OROZCO SANDOVAL ROSA DE GUADALUPE",
  especialidad: "MEDICINA GENERAL",
  descripcion: "Los médicos generales atienden problemas de salud comunes, previenen enfermedades y orientan al paciente en su cuidado integral.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "103570",
  rne: "103570",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 31,
  nombre: "CASTRO CARRERA PATRICIA DEL ROSARIO",
  especialidad: "MEDICINA GENERAL",
  descripcion: "Los médicos generales atienden problemas de salud comunes, previenen enfermedades y orientan al paciente en su cuidado integral.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "95431",
  rne: "95431",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 32,
  nombre: "CASTRO OSORIO ROSSANA ELIZABETH",
  especialidad: "MEDICINA GENERAL",
  descripcion: "Los médicos generales atienden problemas de salud comunes, previenen enfermedades y orientan al paciente en su cuidado integral.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "91586",
  rne: "91586",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 33,
  nombre: "CASTRO OSORIO CARMEN ROSA",
  especialidad: "MEDICINA GENERAL",
  descripcion: "Los médicos generales atienden problemas de salud comunes, previenen enfermedades y orientan al paciente en su cuidado integral.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "91451",
  rne: "91451",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 34,
  nombre: "GOMEZ PALACIOS SARA LIZBETH",
  especialidad: "MEDICINA GENERAL",
  descripcion: "Los médicos generales atienden problemas de salud comunes, previenen enfermedades y orientan al paciente en su cuidado integral.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "78122",
  rne: "000056",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 35,
  nombre: "MERINO RAMOS JOHN ANTHONY",
  especialidad: "MEDICINA GENERAL",
  descripcion: "Los médicos generales atienden problemas de salud comunes, previenen enfermedades y orientan al paciente en su cuidado integral.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "084742",
  rne: "084742",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 36,
  nombre: "APOLO VARGAS RENZO SAMIR",
  especialidad: "MEDICINA INTENSIVA",
  descripcion: "Los intensivistas atienden pacientes en estado crítico, brindando cuidados especializados para preservar la vida y la recuperación.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "071487",
  rne: "071487",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 37,
  nombre: "VASQUEZ SARANGO CARLOS ALBERTO",
  especialidad: "MEDICINA INTENSIVA",
  descripcion: "Los intensivistas atienden pacientes en estado crítico, brindando cuidados especializados para preservar la vida y la recuperación.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "032425",
  rne: "021364",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 38,
  nombre: "TIMANA PAZ PAUL JONATHAN",
  especialidad: "MEDICINA INTERNA",
  descripcion: "Los médicos internistas diagnostican y tratan enfermedades en adultos, ofreciendo atención integral y seguimiento especializado.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "065586",
  rne: "040819",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 39,
  nombre: "RUBIO ANCAJIMA SENIA MAYULLI",
  especialidad: "MEDICINA INTERNA",
  descripcion: "Los médicos internistas diagnostican y tratan enfermedades en adultos, ofreciendo atención integral y seguimiento especializado.",
  imagen: "/images/doctor39.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "046576",
  rne: "038024",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 40,
  nombre: "SALOME LUNA JORGE DAVID",
  especialidad: "NEFROLOGÍA",
  descripcion: "Los nefrólogos diagnostican y tratan enfermedades de los riñones, ayudando a mantener el equilibrio y la salud del organismo.",
  imagen: "/images/doctor40.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "044144",
  rne: "023619",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 41,
  nombre: "ORDOÑEZ ROMERO YIDUV PETTYD",
  especialidad: "NEUMOLOGIA",
  descripcion: "Los neumólogos diagnostican y tratan enfermedades de los pulmones y vías respiratorias, ayudando a mejorar la función y la calidad de vida del paciente.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "28633",
  rne: "26960",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 42,
  nombre: "BAYONA ZAPATA CARLOS",
  especialidad: "NEUROCIRUGIA",
  descripcion: "Los neurocirujanos realizan operaciones en el cerebro, la médula espinal y el sistema nervioso, cuidando funciones vitales del paciente.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "43565",
  rne: "46831",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 43,
  nombre: "DIAZ NAVARRO CARLOS ",
  especialidad: "NEUROLOGÍA",
  descripcion: "Los neurólogos diagnostican y tratan enfermedades del cerebro, la médula espinal y los nervios, cuidando la salud del sistema nervioso.",
  imagen: "/images/doctor43.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "037949",
  rne: "026062",
  horarios: [
    { dia: "LUNES", horas: "05:30 PM-06:30 PM" },
    { dia: "MARTES", horas: "05:30 PM-06:30 PM" },
    { dia: "JUEVES", horas: "05:30 PM-06:30 PM" },
    { dia: "VIERNES", horas: "05:30 PM-06:30 PM" },
  ]
},
{
  id: 44,
  nombre: "BAYONA ALVARADO TANIA IRINA",
  especialidad: "NEUROLOGÍA",
  descripcion: "Los neurólogos diagnostican y tratan enfermedades del cerebro, la médula espinal y los nervios, cuidando la salud del sistema nervioso.",
  imagen: "/images/doctor44.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "027371",
  rne: "017538",
  horarios: [
    { dia: "MARTES", horas: "11:30 AM-12:30 PM" },
    { dia: "JUEVES", horas: "11:30 AM-12:30 PM" },
  ]
},
{
  id: 45,
  nombre: "GARCIA RAMIREZ MELI YULIXZA",
  especialidad: "NUTRICION",
  descripcion: "Los nutriólogos orientan sobre alimentación saludable, previenen enfermedades y mejoran el bienestar a través de una dieta equilibrada.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "",
  rne: "7762",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 46,
  nombre: "ESPINOZA PAREDES YISELA YANET",
  especialidad: "NUTRICION",
  descripcion: "Los nutriólogos orientan sobre alimentación saludable, previenen enfermedades y mejoran el bienestar a través de una dieta equilibrada.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "",
  rne: "3833",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 47,
  nombre: "ZAPATA GARCIA ANTONHY HERNANDO",
  especialidad: "ODONTOLOGÍA",
  descripcion: "Los odontólogos cuidan la salud bucal, previenen y tratan enfermedades de los dientes y encías, mejorando la sonrisa y el bienestar del paciente.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "",
  rne: "047088",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 48,
  nombre: "ROJAS LADINES GIULIANA ESTEFANY",
  especialidad: "ODONTOLOGÍA",
  descripcion: "Los odontólogos cuidan la salud bucal, previenen y tratan enfermedades de los dientes y encías, mejorando la sonrisa y el bienestar del paciente.",
  imagen: "/images/doctor48.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "",
  rne: "045439",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 49,
  nombre: "PURIZACA PAREJA MARCO ANTONIO",
  especialidad: "OFTALMOLOGÍA",
  descripcion: "Los oftalmólogos diagnostican y tratan enfermedades de los ojos, ayudando a preservar la visión y la salud ocular.",
  imagen: "/images/doctor49.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "028585",
  rne: "015845",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 50,
  nombre: "SANCHEZ VILELA LUIS ALBERTO",
  especialidad: "ONCOLOGÍA  MÉDICA",
  descripcion: "Los oncólogos médicos diagnostican y tratan el cáncer mediante terapias como quimioterapia, inmunoterapia y tratamientos personalizados, acompañando al paciente en todo su proceso.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "62312",
  rne: "38022",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 51,
  nombre: "ALIAGA CAJAN JORGE EDUARDO",
  especialidad: "ONCOLOGÍA  MÉDICA",
  descripcion: "Los oncólogos médicos diagnostican y tratan el cáncer mediante terapias como quimioterapia, inmunoterapia y tratamientos personalizados, acompañando al paciente en todo su proceso.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "028550",
  rne: "018015",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 52,
  nombre: "ANTON CASTILLO ANDRE ANDERSON",
  especialidad: "TRAUMATOLOGÍA",
  descripcion: "Los traumatólogos diagnostican y tratan lesiones de huesos, articulaciones y músculos, ayudando a recuperar movilidad y funcionalidad.",
  imagen: "/images/doctor52.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "059384",
  rne: "027511",
  horarios: [
    { dia: "LUNES", horas: "07:00 PM-08:00 PM" },
    { dia: "MIERCOLES", horas: "07:00 PM-08:00 PM" },
    { dia: "VIERNES", horas: "07:00 PM-08:00 PM" },
  ]
},
{
  id: 53,
  nombre: "GONZALEZ DAVILA VIRGINIA ROXANA",
  especialidad: "PEDIATRIA",
  descripcion: "Los pediatras cuidan la salud de niños y adolescentes, previenen enfermedades y acompañan su crecimiento y desarrollo.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "028586",
  rne: "020024",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 54,
  nombre: "DELGADO SEMINARIO PAULO CÉSAR",
  especialidad: "PEDIATRIA",
  descripcion: "Los pediatras cuidan la salud de niños y adolescentes, previenen enfermedades y acompañan su crecimiento y desarrollo.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "056775",
  rne: "026348",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 55,
  nombre: "VILELA CASTRO PEDRO MIGUEL",
  especialidad: "PSICOLOGIA",
  descripcion: "Los psicólogos evalúan, previenen y tratan problemas emocionales y conductuales, promoviendo el bienestar mental y la calidad de vida.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "",
  rne: "18190",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 56,
  nombre: "GOMEZ VELASCO DILMER PERCY",
  especialidad: "RADIOLOGÍA",
  descripcion: "Los radiólogos utilizan estudios de imagen como rayos X, tomografías y resonancias para diagnosticar y apoyar el tratamiento de diversas enfermedades.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "42314",
  rne: "30454",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 57,
  nombre: "PAIVA  NAMUCHE CARLOS ROBERTO",
  especialidad: "RADIOLOGÍA",
  descripcion: "Los radiólogos utilizan estudios de imagen como rayos X, tomografías y resonancias para diagnosticar y apoyar el tratamiento de diversas enfermedades.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "36940",
  rne: "19500",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 58,
  nombre: "MOGOLLON MANRIQUE HERNAN ",
  especialidad: "REUMATOLOGIA",
  descripcion: "Los reumatólogos diagnostican y tratan enfermedades de las articulaciones, músculos y huesos, mejorando la movilidad y reduciendo el dolor crónico.",
  imagen: "/images/doctor0.png",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "17658",
  rne: "19964",
  horarios: [
    { dia: "HORARIO ROTATIVO", horas: "08:00 AM-07:00 PM" },
  ]
},
{
  id: 59,
  nombre: "CALDERON PAUCAR FRANK JAVIER",
  especialidad: "UROLOGÍA",
  descripcion: "Los urólogos diagnostican y tratan enfermedades del sistema urinario y del aparato reproductor masculino, cuidando la salud y el bienestar del paciente.",
  imagen: "/images/doctor59.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "042033",
  rne: "024592",
  horarios: [
    { dia: "LUNES", horas: "01:30 PM-03:30 PM" },
    { dia: "MIERCOLES", horas: "01:30 PM-03:30 PM" },
    { dia: "VIERNES", horas: "01:30 PM-03:30 PM" },

  ]
},
{
  id: 60,
  nombre: "BACILIDES GARCIA CORDOVA",
  especialidad: "TRAUMATOLOGÍA y ORTOPEDIA",
  descripcion: "Los traumatólogos y ortopedistas diagnostican y tratan lesiones y enfermedades de huesos, articulaciones y músculos, ayudando a recuperar movilidad y prevenir complicaciones.",
  imagen: "/images/doctor60.jpeg",
  email: "administracion@clinicabellohorizonte.com.pe",
  cmp: "026262",
  rne: "020283",
  horarios: [
    { dia: "LUNES", horas: "01:30 PM-03:30 PM" },
    { dia: "MIERCOLES", horas: "01:30 PM-03:30 PM" },
    { dia: "VIERNES", horas: "01:30 PM-03:30 PM" },

  ]
},


  
  
  
  
];

export default medicos;