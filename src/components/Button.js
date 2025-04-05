export default function Button({ children, Class, onClick }) {
  return (
    <button className={Class} onClick={onClick}>
      {children}
    </button>
  );
}
