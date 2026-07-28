export const whatsappNumber = "5493814794887";
export const whatsappMessage =
  "Hola, quiero obtener información sobre los servicios de VEXA SOFTWARE.";

export const services = [
  {
    code: "SW.01",
    title: "Desarrollo de software a medida",
    description:
      "Soluciones construidas desde cero según los procesos reales de tu negocio, sin plantillas genéricas.",
    icon: "code",
  },
  {
    code: "SW.02",
    title: "Apps móviles Android e iPhone",
    description:
      "Aplicaciones nativas e híbridas con experiencia fluida en ambas plataformas.",
    icon: "smartphone",
  },
  {
    code: "SW.03",
    title: "Sistemas web empresariales",
    description:
      "Plataformas robustas para operar, escalar y controlar tu empresa desde un solo lugar.",
    icon: "server",
  },
  {
    code: "SW.04",
    title: "Sistemas de gestión",
    description:
      "Administración de socios, inventario, turnos, cobros y operaciones diarias.",
    icon: "layout-dashboard",
  },
  {
    code: "SW.05",
    title: "Automatización de procesos",
    description:
      "Eliminamos tareas repetitivas y conectamos flujos de trabajo entre áreas.",
    icon: "workflow",
  },
  {
    code: "SW.06",
    title: "Bases de datos",
    description:
      "Modelado, migración y optimización para que tu información escale sin fricción.",
    icon: "database",
  },
  {
    code: "SW.07",
    title: "Integración con APIs",
    description:
      "Conectamos tu software con pasarelas de pago, mensajería, mapas y servicios externos.",
    icon: "plug",
  },
  {
    code: "SW.08",
    title: "Diseño UX/UI",
    description:
      "Interfaces claras y modernas, pensadas para que las use cualquier persona sin fricción.",
    icon: "palette",
  },
  {
    code: "SW.09",
    title: "Mantenimiento y soporte técnico",
    description:
      "Acompañamiento continuo: monitoreo, mejoras y resolución rápida de incidentes.",
    icon: "life-buoy",
  },
];

export const products = [
  {
    name: "Sistema de Torneos ITF",
    tag: "Gestión deportiva",
    description:
      "Plataforma integral para organizar torneos de Taekwondo: llaves, puntajes en vivo, jueces y portales para competidores.",
    metrics: [
      { label: "Módulos", value: "6" },
      { label: "Roles", value: "multi-perfil" },
    ],
  },
  {
    name: "Sistema de Gestión de Gimnasios",
    tag: "Administración",
    description:
      "Control de socios, pagos, rutinas y accesos, disponible como servidor propio o versión standalone.",
    metrics: [
      { label: "Formatos", value: "2" },
      { label: "Uso", value: "diario" },
    ],
  },
  {
    name: "Aplicaciones empresariales",
    tag: "Operación",
    description:
      "Herramientas a medida para cobranza en campo, logística y seguimiento comercial de equipos de trabajo.",
    metrics: [{ label: "Plataformas", value: "web + móvil" }],
  },
  {
    name: "Software personalizado",
    tag: "A medida",
    description:
      "Cada proyecto parte de un análisis real del negocio: construimos exactamente lo que tu operación necesita.",
    metrics: [{ label: "Enfoque", value: "100% a medida" }],
  },
];

export const advantages = [
  {
    title: "Tecnología moderna",
    description:
      "Stack actualizado que evita deuda técnica desde el primer commit.",
    icon: "cpu",
  },
  {
    title: "Alto rendimiento",
    description:
      "Aplicaciones optimizadas para cargar rápido y responder al instante.",
    icon: "zap",
  },
  {
    title: "Seguridad",
    description:
      "Buenas prácticas de autenticación, cifrado y control de accesos en cada capa.",
    icon: "shield",
  },
  {
    title: "Soporte permanente",
    description:
      "Seguimos disponibles después del lanzamiento, no solo durante el desarrollo.",
    icon: "headset",
  },
  {
    title: "Diseño profesional",
    description: "Interfaces cuidadas que reflejan la seriedad de tu marca.",
    icon: "palette",
  },
  {
    title: "Desarrollo escalable",
    description: "Arquitectura preparada para crecer junto con tu negocio.",
    icon: "trending-up",
  },
];

export const process = [
  {
    step: "01",
    title: "Análisis",
    description:
      "Relevamos tu operación real y definimos el alcance exacto del proyecto.",
  },
  {
    step: "02",
    title: "Diseño",
    description:
      "Prototipamos la experiencia y la arquitectura antes de escribir código de producción.",
  },
  {
    step: "03",
    title: "Desarrollo",
    description:
      "Construimos en ciclos cortos, con entregas visibles y revisables.",
  },
  {
    step: "04",
    title: "Pruebas",
    description:
      "Validamos funcionalidad, rendimiento y seguridad antes del lanzamiento.",
  },
  {
    step: "05",
    title: "Implementación",
    description: "Publicamos en producción con acompañamiento en vivo.",
  },
  {
    step: "06",
    title: "Soporte",
    description:
      "Monitoreo y mejoras continuas una vez que el sistema está en uso.",
  },
];

export const testimonials = [
  {
    quote:
      "El sistema de gestión que nos desarrollaron cambió por completo cómo controlamos los pagos y los socios del día a día.",
    author: "Responsable de administración",
    org: "Club deportivo, Tucumán",
  },
  {
    quote:
      "Necesitábamos algo a medida y no una plantilla armada. VEXA entendió el proceso real de nuestro negocio antes de construir nada.",
    author: "Dueño de emprendimiento",
    org: "Comercio local",
  },
  {
    quote:
      "El soporte después de la entrega fue tan bueno como el desarrollo. Siempre hay respuesta rápida ante cualquier ajuste.",
    author: "Coordinador de torneos",
    org: "Organización deportiva",
  },
];

export const stats = [
  { value: 9, suffix: "+", label: "Servicios especializados" },
  { value: 100, suffix: "%", label: "Proyectos a medida" },
  { value: 24, suffix: "/7", label: "Soporte disponible" },
  { value: 6, suffix: "", label: "Etapas de trabajo" },
];

export const deployLog = [
  "$ vexa deploy --project=cliente --env=prod",
  "✓ analizando requerimientos",
  "✓ compilando módulos (128/128)",
  "✓ optimizando bundle  -42% tamaño",
  "✓ ejecutando tests    100% ok",
  "✓ desplegando en producción",
  "→ build exitoso — sistema en línea",
];
