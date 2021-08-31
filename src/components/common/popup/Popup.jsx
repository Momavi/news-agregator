import './popup.scss'

let Popup = (props) => {
  let popupPage = props.popupPage
  let news = props.popupPage.popupData
  return (
    <div>
      {
        news !== undefined
          ?
          <div className={`popup ${popupPage.isPopupOpen ? 'open' : 'close'}`}>
            <div className="popup__body">
              <div className="popup__close" onClick={() => { props.togglePopupOpen(!popupPage.isPopupOpen) }}>×</div>
              <h3>{news.title}</h3>
              <img className="popup__image" src={
                news.urlToImage
                  ?
                  news.urlToImage
                  :
                  null
              } alt="" />

              <p className="popup__content">{news.content}</p>

              <div className='news__source'>
                <span className='news__source__publishedData'>{news.publishedAt}</span>
              </div>
              <div className="popup__authors">
                {
                  news.source
                    ?
                    <span>Авторы: {news.source.name}</span>
                    :
                    null
                }
              </div>
              <div>
                <span>Ссылка на источник: </span>
                <a href={news.url} className='news__link'>{news.url}</a>
              </div>
            </div>
          </div>
          :
          null
      }
    </div>
  )
}

export default Popup;