export default function Button({ href = null, children, className = '', title }) {
  const classNames = `px-6 py-3 bg-blue-200 hover:bg-blue-200 active:bg-blue-400 shadow-md transition-all cursor-pointer border-1 rounded-full ${className}`
  return href ? (
    <a href={href} className={classNames}>
      {children}
    </a>
  ) : (
    <button className={classNames}>{children}</button>
  );
}
