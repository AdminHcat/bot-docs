# COMP

## 介绍

本功能可以查询近期魔方赛事。

## 使用方法

### 查询近期赛事列表

指令：`.comp`
    
解释：查询近期所有赛事。
    
<Chat
:msgList="[
    {
        'msg':'.comp',
        'position':'right'
    },
    {
        'msg':'近期赛事\n1.2020WCA西安新年赛\n2.2019永嘉青少年魔方赛\n3.2019泉州少儿暨高校魔方赛\n4.2019WCA北京冬季魔方赛\n5.2019WCA厦门冬季赛\n6.2019山西冬季青年魔方公开赛\n7.2019WCA徐州冬季魔方公开赛\n8.2019WCA鄂州魔方公开赛\n9.2019兰州高校魔方联赛\n10.2019杭州高校联赛\n11.2019河北省高校魔方联赛\n12.2019WCA淄博魔方公开赛\n13.2019阳泉魔方公开赛\n14.2019深圳少年儿童赛\n15.2019WCA杭州秋季魔方赛\n16.2019WCA成都冬季赛\n回复.comp 编号 查看详情',
        'position':'left'
    }
]"/>

### 查询某赛事详细信息

指令：`.comp{编号}`
    
解释：查询某赛事详细信息。
    
<Chat
:msgList="[
    {
        'msg':'.comp1',
        'position':'right'
    },
    {
        'msg':'2020WCA西安新年赛\n报名人数:74/200\n时间:2020-01-01\n地点:陕西 西安 新城区案板街15号南方酒店一楼宴会厅\n粗饼:https://cubingchina.com/competition/Xian-New-Year-2020',
        'position':'left'
    }
]"/>

### 查询某赛事详细信息(带地图)

指令：`.comp{编号}-gps`
    
解释：查询某赛事详细信息。
    
<Chat
:msgList="[
    {
        'msg':'.comp1-gps',
        'position':'right'
    },
    {
        'msg':'2020WCA西安新年赛\n报名人数:74/200\n时间:2020-01-01\n地点:陕西 西安 新城区案板街15号南方酒店一楼宴会厅\n粗饼:https://cubingchina.com/competition/Xian-New-Year-2020',
        'position':'left'
    },
    {
        'msg':'[地图]',
        'position':'left'
    }
]"/>
