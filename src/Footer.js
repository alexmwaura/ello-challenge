export default function Footer(props) {
  return (
    <div className='footer'>
      <div className='nav_buttons'>
        <div
          className='circle ps_prev'
          onClick={() => props.handlePreviousPage(props.pagArr[props.index])}
        >
          <span className='material-symbols-outlined'>arrow_back_ios_new</span>
        </div>
        <div
          className='circle ps_next'
          onClick={() => props.handleNextPage(props.pagArr[props.index])}
        >
          <span className='material-symbols-outlined'>arrow_forward_ios</span>
        </div>
      </div>
    </div>
  );
}
