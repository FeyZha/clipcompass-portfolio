"""Read-only question navigation. Transparent keyword grouping, not semantic search."""
from collections import defaultdict

TOPICS = (
    ('focus', '专注与思考'), ('time', '时间与目标'), ('knowledge', '知识与笔记'),
    ('design', '设计与体验'), ('language', '语言与认知'), ('world', '数据与世界'),
    ('math', '数学直觉'), ('more', '更多问题'),
)
# Use the question's subject, never its source video's category. Unmatched
# questions remain visible under "more"; no model calls or saved-content edits.
KEYWORDS = (
    ('math', ('面积', '微积分', '导数', '积分', '抛物线')),
    ('language', ('语言', '德语', '西班牙语', '颜色词', '企鹅', '东南西北')),
    ('world', ('国家', '全球', '非洲', '统计数据', '收入差距')),
    ('knowledge', ('笔记', '摘录', '摘出', '知识库', '工作文件', '生活资料')),
    ('focus', ('注意力', '思绪', '消息', '社交媒体', '手机', '无聊', '心情', '紧张', '写邮件')),
    ('time', ('时间', '日程', '年度', '明年', '下周', '通勤', '目标')),
    ('design', ('产品', '用品', '设计', '物品', '拥有')),
)


def topic_for(question):
    return next((topic for topic, words in KEYWORDS if any(w in question for w in words)), 'more')


def organize_questions(rows):
    """Interleave sources within each topic without pretending to rank interest."""
    groups = defaultdict(lambda: defaultdict(list))
    for row in rows:
        topic = topic_for(row['question'])
        groups[topic][row['video_id']].append({**row, 'topic_id': topic})
    topics, questions = [], []
    for topic, label in TOPICS:
        sources = groups.get(topic)
        if not sources:
            continue
        lists = list(sources.values())
        ordered = [items[i] for i in range(max(map(len, lists))) for items in lists if i < len(items)]
        questions.extend(ordered)
        topics.append({'id': topic, 'label': label, 'question_count': len(ordered), 'source_count': len(lists)})
    return {'topics': topics, 'questions': questions}
