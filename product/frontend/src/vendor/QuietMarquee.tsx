/*! Adapted from Magic UI Marquee, MIT, Copyright (c) Magic UI.
 * Source/complete license: frontend/third-party/magicui-marquee. */
import type {ReactNode} from 'react';
export function QuietMarquee({children,className=''}:{children:ReactNode;className?:string}){
 return <div className={`quiet-video-lane ${className}`}>
  {Array(2).fill(0).map((_,i)=><div key={i} className="quiet-video-group">{children}</div>)}
 </div>;
}
