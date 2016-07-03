import React from 'react'
import DOM from 'react-dom/server'
import marked from 'marked'

export const Cr = "\n\n"

export const Markdown = (props) => {
  let { className, body, children } = props
  if (body === undefined || body === null && children && children.length > 0) {
    body = children
      .map( c => React.isValidElement(c) && DOM.renderToString(c) || c)
      .join('')
  }
  return (
    <section className={className}
             dangerouslySetInnerHTML={{__html: marked(body)}}>
    </section>
  )
}
