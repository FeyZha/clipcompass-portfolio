import type { DiscoveryQuestion, Topic } from './Discovery';
import type { Video } from './ExploreApp';
export interface AtlasConcept {id:string;name:string;summary:string;cluster:string;sourceId:string;questionId:string}
export interface AtlasRelation {from:string;to:string;label:string;kind:'rel'}
export interface AtlasData {id:string;title:string;subtitle:string;sample:false;clusters:{id:string;name:string;light:string;dark:string;anchor:number[]}[];concepts:AtlasConcept[];relations:AtlasRelation[];sources:{id:string;title:string;url:string;creator:string}[]}
// Editorial navigation links between existing questions. These are related angles,
// not asserted prerequisites, causal claims, or newly generated learning content.
const pairs:[string,string,string][]=[
 ['Hu4Yvq-g7_Y:0','Hu4Yvq-g7_Y:1','从频繁分心，到减少刺激后的适应'],
 ['Hu4Yvq-g7_Y:1','Hu4Yvq-g7_Y:3','把无聊的空隙留给思考'],
 ['Hu4Yvq-g7_Y:2','Hu4Yvq-g7_Y:3','让暂时离开工作成为思考机会'],
 ['Hu4Yvq-g7_Y:2','RlQEoJaLQRA:1','遇到难题时，改变当下的心理状态'],
 ['n3kNlFMXslo:0','n3kNlFMXslo:1','重新看待时间如何被分配'],
 ['n3kNlFMXslo:1','n3kNlFMXslo:2','区分没时间与没有优先安排'],
 ['n3kNlFMXslo:2','n3kNlFMXslo:3','从优先取舍，进一步明确目标'],
 ['n3kNlFMXslo:3','n3kNlFMXslo:4','从年度目标，走到每周安排'],
 ['n3kNlFMXslo:4','n3kNlFMXslo:5','大块计划之外，怎样使用零散时间'],
 ['n3kNlFMXslo:5','Hu4Yvq-g7_Y:3','同样是空隙：安排活动，还是留白思考'],
 ['Y86GOtc1KNo:2','Y86GOtc1KNo:1','开始记笔记后，怎样保留理解所需的背景'],
 ['Y86GOtc1KNo:1','Y86GOtc1KNo:0','从保留摘录的含义，到用于具体问题'],
 ['Y86GOtc1KNo:0','Y86GOtc1KNo:3','让已有笔记参与正在做的事'],
 ['Y86GOtc1KNo:3','Y86GOtc1KNo:4','按当前需要查找与组织资料'],
 ['Y86GOtc1KNo:4','n3kNlFMXslo:4','围绕正在推进的目标组织资源'],
 ['RlQEoJaLQRA:0','RlQEoJaLQRA:3','使用过程中的愉快与安心'],
 ['RlQEoJaLQRA:2','RlQEoJaLQRA:4','吸引力如何超出基本功能'],
 ['RlQEoJaLQRA:3','RlQEoJaLQRA:4','使用体验与产品的个人意义'],
 ['RlQEoJaLQRA:1','RlQEoJaLQRA:0','情绪状态与体验设计的交点'],
 ['RKK7wGAYP6k:0','RKK7wGAYP6k:1','空间方向如何参与时间的表达'],
 ['RKK7wGAYP6k:1','RKK7wGAYP6k:2','不同语言下，怎样组织抽象概念'],
 ['RKK7wGAYP6k:2','RKK7wGAYP6k:3','语言分类与辨别任务'],
 ['RKK7wGAYP6k:3','RKK7wGAYP6k:4','词语如何影响描述和注意'],
 ['RKK7wGAYP6k:4','RKK7wGAYP6k:5','从描述事物，到描述发生的事件'],
 ['hVimVzgtD6w:0','hVimVzgtD6w:1','二分标签会掩盖哪些差异'],
 ['hVimVzgtD6w:0','hVimVzgtD6w:2','经济与健康的关系，不能只看静态标签'],
 ['hVimVzgtD6w:2','hVimVzgtD6w:3','判断健康状况，需要更具体的数据'],
 ['hVimVzgtD6w:3','hVimVzgtD6w:4','从数据细节，到让人看懂的呈现'],
 ['hVimVzgtD6w:0','RKK7wGAYP6k:4','留意分类和描述影响了怎样的理解'],
 ['WUvTyaaNkzM:0','WUvTyaaNkzM:2','从熟悉的圆，走向无法直接套公式的面积'],
 ['WUvTyaaNkzM:2','WUvTyaaNkzM:3','从面积累积，走向变化率'],
 ['WUvTyaaNkzM:1','WUvTyaaNkzM:3','用路程与速度理解累积和变化'],
 ['WUvTyaaNkzM:1','hVimVzgtD6w:4','图形怎样承载数量关系'],
];
const palette=[['#365f9e','#a6d5ff',-1,.7,0],['#956328','#f1d4a0',0,1,.1],['#55816b','#9fd5bc',-.95,-.4,0],['#6853a5','#c7b4ff',1,.7,.1],['#865985','#e9b7e5',1,-.3,0],['#a36145','#efb291',.5,-1,.1],['#4c7c88','#9bdbe5',-.5,-1,0]] as const;
export function makeAtlasData(questions:DiscoveryQuestion[],topics:Topic[],videos:Video[]):AtlasData {
 const ids=new Set(questions.map(q=>`${q.video_id}:${q.question_id}`));
 return {id:'clipcompass',title:'你的问题星图',subtitle:'从一个好奇出发，看看它与哪些问题相连。',sample:false,
  clusters:topics.map((t,i)=>{const [light,dark,...anchor]=palette[i%palette.length];return{id:t.id,name:t.label,light,dark,anchor:[...anchor]};}),
  concepts:questions.map(q=>({id:`${q.video_id}:${q.question_id}`,name:q.question,cluster:q.topic_id,sourceId:q.video_id,questionId:q.question_id,summary:videos.find(v=>v.video_id===q.video_id)?.title||''})),
  relations:pairs.filter(([a,b])=>ids.has(a)&&ids.has(b)).map(([from,to,label])=>({from,to,label,kind:'rel'})),
  sources:videos.map(v=>({id:v.video_id,title:v.title,creator:v.creator,url:`https://www.youtube.com/watch?v=${v.video_id}`}))};
}
