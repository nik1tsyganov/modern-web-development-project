/* child function returns data on click of button */
export default function Child({ data, onChildClick }) {
  return (
    <div class="child">
      <button onClick={onChildClick}>{data}</button>
    </div>
  );
}
