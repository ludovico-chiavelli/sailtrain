import type HTMLAttributes from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'codersrank-portfolio': CustomElement<CRPElementAttributes>;
    }

    interface CRPElementAttributes extends HTMLAttributes {
      username: string;
    }
  }
}