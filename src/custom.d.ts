declare module '*.svg' {
  const content: JSX
  export default content
}
declare module '*.mdx' {
  const content: JSX
  export default content
}

declare module '*.jpg' {
  const content: ImageData
  export default content
}

declare module 'react-parallax-card';
declare module 'react-vertical-timeline-component';