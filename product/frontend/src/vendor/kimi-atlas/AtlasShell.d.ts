import type { ReactNode } from 'react';
import type { AtlasConcept, AtlasData, AtlasRelation } from '../../explore/atlas-data';
export function AtlasShell(props:{data:AtlasData;composer:ReactNode;onCollection:()=>void;renderSources:()=>ReactNode;renderDetail:(options:{concept:AtlasConcept;relations:AtlasRelation[];select:(index:number)=>void;close:()=>void})=>ReactNode}):ReactNode;
