import {Vector3} from 'three';

export type OrbitGlyph={ring:number;letter:string;centre:Vector3;right:Vector3;down:Vector3;opacity:number};

// Reuse the orbit's own u/v basis and depth renderer. Each character lies IN
// its tilted plane; these are neither screen-facing labels nor extra discs.
export function createOrbitTypography(bases:{u:Vector3;normal:Vector3}[],radii:number[],titles:string[]):OrbitGlyph[]{
  const sources=[...new Set(titles.map(title=>title.replace(/\|/g,' ').replace(/\s+/g,' ').trim().toUpperCase()).filter(Boolean))];
  if(!sources.length)return [];
  // Three compact lines form a small patch at each rim position. Break only
  // between the original title's words; no added captions or generated prose.
  const linesFor=(title:string)=>{
    const words=title.split(' '),lines:string[]=[];
    while(words.length&&lines.length<3){
      const target=Math.ceil(words.join(' ').length/(3-lines.length));let line=words.shift()!;
      while(words.length&&(lines.length===2||Math.abs(line.length+1+words[0].length-target)<=Math.abs(line.length-target)))line+=' '+words.shift();
      lines.push(line);
    }
    return lines;
  };
  const blocks=[
    {ring:0,r:.955,start:.42,size:.30,span:1.05,opacity:.30},
    {ring:0,r:.955,start:3.22,size:.29,span:1.05,opacity:.27},
    {ring:5,r:.955,start:1.52,size:.28,span:1.05,opacity:.23},
    {ring:5,r:.955,start:4.42,size:.28,span:1.05,opacity:.25},
  ];
  const rows=blocks.flatMap((block,i)=>linesFor(sources[i%sources.length]).map((text,line)=>({
    ...block,r:block.r-line*.028,size:block.size*.94,opacity:block.opacity*(1-line*.04),text,
  })));
  const glyphs:OrbitGlyph[]=[];
  rows.forEach(row=>{
    const {u,normal}=bases[row.ring],v=new Vector3().crossVectors(normal,u),radius=radii[row.ring]*row.r;
    const text=row.text;
    // Generous tracking, variable arc lengths and a large empty sector keep
    // the reference's typographic rhythm without a dense instrument dial.
    const size=Math.min(row.size,row.span*radius/(text.length*.93)),advance=size*.93/radius;
    [...text].forEach((letter,n)=>{
      if(letter===' ')return;
      const a=row.start+n*advance,c=Math.cos(a),s=Math.sin(a);
      const centre=u.clone().multiplyScalar(c*radius).addScaledVector(v,s*radius);
      const right=centre.clone().addScaledVector(u,-s*size).addScaledVector(v,c*size);
      const down=centre.clone().addScaledVector(u,-c*size).addScaledVector(v,-s*size);
      glyphs.push({ring:row.ring,letter,centre,right,down,opacity:row.opacity});
    });
  });
  return glyphs;
}
