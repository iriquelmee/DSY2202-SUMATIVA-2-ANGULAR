export const nav = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Faq', href: '/faq' },
  { name: 'Cart', href: '/cart' },
  { name: 'Register', href: '/register' },
];

export const accordion = {
  title: 'Preguntas frecuentes',
  subtitle: 'Todo lo que necesitas saber sobre Table Top',
  faqs: [
    {
      id: 0,
      que: "¿Cuáles son los medios de pago aceptados?",
      res: "De momento solo contamos con realizacion de transferencia electronica, estamos tarbajando para ofrecerte la mejores opciones de pago, pronto te avisaremos.",
    },
    {
      id: 1,
      que: "¿Qué requisitos necesito para comprar en Table Top?",
      res: "Solo necesitas un computador con acceso a internet y un navegador web actualizado.",
    },
    {
      id: 2,
      que: "¿Cómo es el cobro?",
      res: "El cobro se realiza automáticamente a través del método de pago que hayas seleccionado al hacer tu compra.",
    },
  ],
};

export const productos = [
  {
    itemId:"",
    id: 1,
    nombre: "Monopoly",
    descripcion: "El clásico juego de compra y venta de propiedades.",
    precio: 18000,
    stock: 20,
    categoria: "Juegos de Mesa",
    img: 'assets/img/game-1.png'
  },
  {
    itemId:"",
    id: 2,
    nombre: "Uno",
    descripcion: "Un emocionante juego de cartas donde debes deshacerte de todas tus cartas.",
    precio: 9000,
    stock: 25,
    categoria: "Juegos de Cartas",
    img: 'assets/img/game-2.png'
  },
  {
    itemId:"",
    id: 3,
    nombre: "Mesa de Ajedrez",
    descripcion: "Una mesa de ajedrez de madera con tablero y piezas.",
    precio: 15000,
    stock: 10,
    categoria: "Juegos de Mesa",
    img: 'assets/img/game-3.png'
  }
];

export const about = {

    title: "Table Top Games",
    subtitle: "¡Bienvenido a Table Top Games, tu recurso principal para descubrir y explorar juegos de cartas y juegos de mesa!",
    items: [
      {
        id: 0,
        title: "Mision",
        image:"/assets/img/about0.png",
        descripcion: "Promover la cultura de los juegos y fomentar la comunidad a través de experiencias seleccionadas de juegos de cartas y juegos de mesa.",

      },
      {
        id: 1,
        title: "Vision",
        image: "/assets/img/about1.png",
        descripcion: "Ser el destino definitivo donde jugadores de todo tipo descubren, aprenden y participan en juegos de cartas y juegos de mesa."

      },
      {
        id: 2,
        title: "Ubicacion",
        image: "/assets/img/about2.png",
        descripcion: "Encuentranos aqui los fines de semana."

      }
    ]
  
};