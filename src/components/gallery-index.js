const files = [
    // { file: "public", name: 'draw_point', title: '画点' },
    { file: "public", name: 'draw_line', title: '画线' },
    // { file: "public", name: 'draw_circle', title: '画圆' },
    { file: "public", name: 'draw_polygon', title: '画多边形' },
    { file: "public", name: 'i3s_object', title: '加载I3S数据' },
    // { file: "public", name: 'massive_points', title: '海量点加载' },
    // { file: "public", name: 'vertical_trail_line', title: '竖直尾迹线' },
    // { file: "public", name: 'flight_tracker', title: '轨迹追踪' },
    // { file: "public", name: 'grounded_billboard', title: '广告牌贴地' },
    // { file: "public", name: 'custom_geometry', title: '自定义几何体' },
    // { file: "public", name: 'tianditu_map', title: '天地图' },
    { file: "public", name: 'layers_split', title: '卷帘分屏' },
    // { file: "public", name: 'cesium_threejs', title: 'Cesium集成Threejs' },
    { file: "public", name: 'optimizing_lots_of_objects', title: 'Threejs加载大量几何体' },
]

function createRouter(files) {
    const result = []
    for (let item of files) {
        let file = item['file']
        let name = item['name']
        let title = item['title']
        result.push({
            name: name,
            path: '/' + name,
            img: require('./' + file + '/' + name + '.gif'),
            component: () => import('./' + file + '/' + name + '.vue'),
            meta: {
                title: title,
            },
        })
    }
    console.log("共有", result.length, "个DEMO")
    return result
}

export const gallery_demos = createRouter(files)
