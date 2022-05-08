export default function Footer(props) {
  return (
    <div className='footer'>
      <div className='nav_buttons'>
        {props.index === 0 ? (
          <div className='ps_prev'></div>
        ) : (
          <div className='ps_prev' onClick={() => props.handlePreviousPage()}>
            <span className='material-symbols-outlined'>
              arrow_back_ios_new
            </span>
            
          </div>
        )}
        {props.index === props.pagArr.length - 1 ? (
          <div className='ps_next'></div>
        ) : (
          <div className='ps_next' onClick={() => props.handleNextPage()}>
            <span className='material-symbols-outlined'>arrow_forward_ios</span>           
          </div>
        )}
      </div>
    </div>
  );
}
