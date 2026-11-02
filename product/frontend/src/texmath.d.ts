declare module 'markdown-it-texmath' {
  import type { PluginWithOptions } from 'markdown-it';
  const texmath: PluginWithOptions<{ engine?: object; delimiters?: string | string[] }>;
  export default texmath;
}
