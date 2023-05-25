import { useState } from 'react'
import { IconButton } from '../IconButton/IconButton'
import './Slider.css'

export const Slider = ({ data }) => {
  const [activeId, setActiveId] = useState(0)

  const prev = () => {
    setActiveId(activeId => {
      if (activeId > 0) {
        return activeId - 1
      }
      return activeId
    })
  }

  const next = () => {
    setActiveId(activeId => {
      if (activeId < data.length - 1) {
        return activeId + 1
      }
      return activeId
    })
  }

  return (
    <div className="slider-wrap">
      <div className="slider__actions">
        <IconButton
          direction="left"
          onClick={prev}
          disable={activeId === 0}
        />
        <IconButton
          direction="right"
          onClick={next}
          disable={activeId === data.length - 1}
        />
      </div>
      <div className="slider">
        {data.map((slide, idx) => (
          <div
            className={`slide${idx === activeId ? ' active' : ''}`}
          >
            <div className="slide__info">
              <div className="slide__label">{slide.label}</div>
              <div className="slide__title">{slide.title}</div>
            </div>
            <img src={slide.img} alt={`Slide ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
