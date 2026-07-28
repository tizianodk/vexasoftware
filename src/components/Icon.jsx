const paths = {
  code: 'M8 9l-4 4 4 4M16 9l4 4-4 4M13 6l-2 14',
  smartphone: 'M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z M11 18h2',
  server: 'M4 5h16v6H4z M4 13h16v6H4z M8 8h.01 M8 16h.01',
  'layout-dashboard': 'M4 4h7v7H4z M13 4h7v4h-7z M13 11h7v9h-7z M4 14h7v6H4z',
  workflow: 'M4 4h6v4H4z M14 16h6v4h-6z M7 8v3a2 2 0 0 0 2 2h5 M17 13v-2a2 2 0 0 0-2-2h-1',
  database: 'M12 5c4.4 0 8-1.34 8-3s-3.6-3-8-3-8 1.34-8 3 3.6 3 8 3z M4 5v14c0 1.66 3.6 3 8 3s8-1.34 8-3V5 M4 12c0 1.66 3.6 3 8 3s8-1.34 8-3',
  plug: 'M9 2v6 M15 2v6 M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5V8z M12 16v6',
  palette: 'M12 2a10 10 0 1 0 0 20c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.2 0-1.1.9-2 2-2h2.3A5.2 5.2 0 0 0 22 10.5C22 5.8 17.5 2 12 2z M7 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M11 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M16 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z M16 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  'life-buoy': 'M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0 M12 2v6 M12 16v6 M4.9 4.9l4.2 4.2 M14.9 14.9l4.2 4.2 M19.1 4.9l-4.2 4.2 M9.1 14.9l-4.2 4.2',
  cpu: 'M9 9h6v6H9z M4 9h2 M4 15h2 M18 9h2 M18 15h2 M9 4v2 M15 4v2 M9 18v2 M15 18v2 M6 6h12v12H6z',
  zap: 'M13 2 4 14h6l-1 8 9-12h-6l1-8z',
  shield: 'M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z',
  headset: 'M4 13a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1v-6h3 M4 18v-5H3 M4 13v5a2 2 0 0 0 2 2h1v-6H4',
  'trending-up': 'M3 17l6-6 4 4 8-8 M17 7h4v4',
  check: 'M20 6 9 17l-5-5',
  arrowRight: 'M5 12h14 M13 6l6 6-6 6',
  whatsapp: 'M20.5 3.5A11 11 0 0 0 3.6 17.3L2 22l4.8-1.6A11 11 0 1 0 20.5 3.5z M8 9c0 4 3 7 7 7 1 0 1.3-.4 1.3-.9v-1.3c0-.4-.3-.7-.6-.8l-2-.7c-.3-.1-.6 0-.8.2l-.6.7a6.6 6.6 0 0 1-3-3l.7-.6c.2-.2.3-.5.2-.8l-.7-2c-.1-.3-.4-.6-.8-.6H8.9c-.5 0-.9.3-.9 1.3z',
  facebook: 'M14 9h3V6h-3a4 4 0 0 0-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2a1 1 0 0 1 1-1z',
  instagram: 'M4 4h16v16H4z M16.5 7.5h.01 M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z',
  linkedin: 'M4 4h16v16H4z M7 10v6 M7 7v.01 M11 16v-4a2 2 0 0 1 4 0v4 M11 12v4',
  mail: 'M3 5h18v14H3z M3 6l9 7 9-7',
  menu: 'M3 6h18 M3 12h18 M3 18h18',
  close: 'M6 6l12 12 M18 6 6 18',
}

export default function Icon({ name, className = 'w-5 h-5', strokeWidth = 1.6 }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}
