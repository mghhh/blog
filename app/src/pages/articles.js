import React from 'react'
import { Link, Route } from 'react-router-dom'
import Outline from '../components/Outline/Outline.js'
// import Article from '../components/Article/Article.js'
import apis from '../apis'

class Articles extends React.Component {
    // console.log(match)
    constructor(props) {
        super(props)
        this.state = { list: [] }
    }

    componentDidMount() {
        apis.Article.getlist(0, 10)
            .then((data) => {
                this.setState({ list: data.list })
            })
    }

    render() {
        return(
            <div className="articles-page">
                {
                    this.state.list.map((article, index) =>
                    <div className="article-card">
                        <Outline key={index} info={article} to={`/article/${index+1}`}></Outline>
                    </div>
                )}
            </div>
        )
    }
}

export default Articles

