import { useState } from 'react'
import './Accordion.css'

// A list of rows that open one at a time. useState remembers which row is
// open, and React redraws the rows whenever setOpenId changes it. They start
// closed (null), so no row is put ahead of the others. Used on violet bands.
function Accordion({ items }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = item.id === openId

        return (
          <div key={item.id} className="accordion-row">
            <h3>
              <button
                type="button"
                className="accordion-button"
                aria-expanded={isOpen}
                aria-controls={`${item.id}-panel`}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="accordion-label">
                  {item.title}
                  {item.subtitle && <span className="accordion-subtitle">{item.subtitle}</span>}
                </span>
                <span className="accordion-action" aria-hidden="true">
                  {isOpen ? 'Close' : 'Open'}
                </span>
              </button>
            </h3>
            <div id={`${item.id}-panel`} className="accordion-panel" hidden={!isOpen}>
              {item.content}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
