import Mock, { Random } from 'mockjs'

const template = {
    'id|+1': 1,
    'head': '@ctitle',
    'author': '@name',
    'viewed|1-10000': 1,
    'bOrgin|1-3': false,
    'time': '@date',
    'describe': function() {
        return this.article.substr(0, 200)
    },
    'article': '@cparagraph',
    'categories': function() {
        const arr = ['技术', '生活', '美食', '风光']
        const num =  Math.ceil(Math.random()*arr.length)
        // console.log('num', num)
        const result = []
        for (let i=0; i<num-1; i++) {
            const index = Math.ceil(Math.random()*(arr.length-1))
            result.push(arr.splice(index, 1)[0])
        }
        // console.log(result)
        return result
    }
}
console.log('mock', Mock, Random, template)

Mock.mock(/\/article\/get\?/, {
    'id|+1': 1,
    'head': '@ctitle',
    'author': '@name',
    'viewed|1-10000': 1,
    'bOrgin|1-3': false,
    'time': '@date',
    'describe': function() {
        return this.article.substr(0, 200)
    },
    'article': '@cparagraph',
    'categories': function() {
        const arr = ['技术', '生活', '美食', '风光']
        const num =  Math.ceil(Math.random()*arr.length)
        // console.log('num', num)
        const result = []
        for (let i=0; i<num-1; i++) {
            const index = Math.ceil(Math.random()*(arr.length-1))
            result.push(arr.splice(index, 1)[0])
        }
        // console.log(result)
        return result
    }
})

Mock.mock(/\/article\/getlist/, {
    'list|10-10': [
        {
            'id|+1': 1,
            'head': '@ctitle',
            'author': '@name',
            'viewed|1-10000': 1,
            'bOrgin|1-3': false,
            'time': '@date',
            'describe': function() {
                return this.article.substr(0, 200)
            },
            'article': '@cparagraph',
            'categories': function() {
                const arr = ['技术', '生活', '美食', '风光']
                const num =  Math.ceil(Math.random()*arr.length)
                // console.log('num', num)
                const result = []
                for (let i=0; i<num-1; i++) {
                    const index = Math.ceil(Math.random()*(arr.length-1))
                    result.push(arr.splice(index, 1)[0])
                }
                // console.log(result)
                return result
            }
        }
    ]
})