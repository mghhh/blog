import React from 'react'
import Outline from '../components/Outline/Outline.js'
import { Button } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'
import Article from '../components/Article/Article.js'
import Articles from './articles.js'
import Edit from './edit.js'
import EditPreview from './editpreview.js'

function Main(props) {
    const aArticle = {'head': 'Hello World!',
      'bOrgin': true, 'author': 'mghhh', 'time': '2018/04/13',
      'viewed': '888', 'categories': ['源码分析', 'Vue'],
      'describe': 'Vue响应式原理源码分析'}
    const arrArticle = []
    arrArticle.push(aArticle) 
    // return (
    //     <main className="col-xl-9">
    //         <p>Main</p>
    //         {
    //           arrArticle.map((article, index) =>
    //             <div className="outline" key={index}>
    //               <Outline info={article}></Outline> 
    //             </div> 
    //         )}
    //         <Outline info={aArticle}></Outline>
    //         <Button color="danger">Danger!</Button>
    //         <Route path="/zhuanlan/0" component={Article}></Route>
    //     </main>
    // )
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Articles} />
                <Route path="/article/:id" component={Article} />
                <Route path="/edit" component={Edit}/>
                <Route path="/editpreview/:content" component={EditPreview}/>                
            </Switch>
        </main>
    )
}

export default Main