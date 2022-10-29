// type 的枚举值 类型:follow关注|score评分|evaluate评价|add添加|update更新|想看wish|看过collect|在看do|搁置on_hold|抛弃dropped
export enum FeedType {
  follow = '关注',
  score = '评分',
  evaluate = '评价',
  add = '添加',
  update = '更新',
  wish = '想看',
  collect = '看过',
  do = '在看',
  on_hold = '搁置',
  dropped = '抛弃',
  add_friend = '将', // 加好友
  feed = '说', // 动态
}
