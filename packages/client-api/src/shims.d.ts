interface Window {
  __TAURI__: any;
  __ZEBAR_FUNCTIONS__: Record<string, Function>;
}

declare module '*.html' {
  const src: string;
  export default src;
}