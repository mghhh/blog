import React from 'react'
import { Link, Route } from 'react-router-dom'
import SimpleMde from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js'
import 'simplemde/dist/simplemde.min.css'
// import $http from '../http.js'
import apis from '../apis.js'



class Edit extends React.Component {
    constructor(props) {
        super(props)
        console.log(document.getElementById('editor'))
        
        this.state = { info: {id: '', head: '', author: '', viewed: 0, time: '', article: ''},
            categories: {'人生百态': false, '技术人生': false}, check1: false, check2: false
        }
        // this.categories = {'人生百态': false, '技术人生': false}
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange(event) {
        const keyObj = {categories: []}
        const target = event.target
        // keyObj[target.name] = target.type === 'checkbox' ? target.checked : target.value
        if (target.type === 'checkbox') {
            this.state.categories[target.name] = target.checked
            for (const key in this.state.categories) {
                if (this.state.categories[key]) {
                    keyObj.categories.push(key)
                }
            }
        } else {
            keyObj[target.name] = target.value
        }
        console.log(target.name, target.value, keyObj)
        this.setState((prevState) => ({
            info: Object.assign(prevState.info, keyObj)
        }))
    }
    submit() {
        console.log(this.state.info)
        // this.setState({ article: this.simplemde.value()})

        // $http.uploadArticle(this.state.info).then(function (res) {
        //     if (res.status === 200) {
        //         /*这里做处理*/
        //         console.log('...')
        //     }
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
        apis.Article.update(this.state.info).then(function (res) {
            if (res.status === 200) {
                /*这里做处理*/
                console.log('...')
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount() {
        const simplemde = new SimpleMde({
            element: document.getElementById('editor'),
            autofocus: true,
            autosave: {
                enabled: true,
                uniqueId: 'MyUniqueID',
                delay: 1000
            },
        })
        simplemde.codemirror.on('change', () =>  {
            console.log('???', simplemde.value())
            this.setState((prevState) => ({
                info: Object.assign(prevState.info, {article: simplemde.value()})
            }))

        })

        console.log(document.getElementById('editor'))
    }

    render() {
        return (
            <div>
                <p>Edit page</p>
                <div id="form">
                    <label>ID:</label>
                    <input value={this.state.info.id} type="number" onChange={this.handleChange} placeholder="id" name="id" type="text"/>
                    <label>Head:</label>
                    <input value={this.state.info.head} placeholder="head" onChange={this.handleChange} name="head" type="text"/>
                    <label>Time:</label>
                    <input value={this.state.info.time}type="date" placeholder="time" onChange={this.handleChange} name="time" type="text"/>
                    <label>Author:</label>
                    <input value={this.state.info.author} placeholder="author" onChange={this.handleChange} name="author" type="text"/>
                    <label>Viewed:</label>
                    <input type="number" value={this.state.info.viewed} type="number" onChange={this.handleChange} placeholder="viewed" name="viewed"/>
                    {/* <input @change="getFile($event)" type="file" name="file"/> */}
                    <p>choose categories:</p>
                    <label>'人生百态'</label><input type="checkbox" checked={this.state.categories['人生百态']} name="人生百态" onChange={this.handleChange}/>
                    <label>'技术人生'</label><input type="checkbox"  checked={this.state.categories['技术人生']} name="技术人生" onChange={this.handleChange}/>                                                                                            
                    {/* <textarea style="width:100%;height:300px;" v-model="article"></textarea>
                    <label>原创<input type="radio" v-model="bOrgin" value="true"/></label>  
                    <label>转载<input type="radio" v-model="bOrgin" value="false"/></label>  
                    <p>已选：{{bOrgin}}</p> */}
                    <label>isOrigin:</label>
                    <select value={this.state.info.bOrgin} name="bOrgin">
                        <option value="true">true</option>
                        <option value="false">false</option>                        
                    </select>
                </div>
                <textarea id="editor"></textarea>
                <button onClick={this.submit}>  
                    Submit
                    {/* <Link to={`/editpreview/${this.state.article}`}>Submit</Link> */}
                </button>
            </div>
        )
    }
}

export default Edit
