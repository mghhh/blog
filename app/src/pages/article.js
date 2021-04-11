import React from 'react'
import ReactDOM from 'react-dom'
// import MarkdownRenderer from 'react-markdown-renderer'
import marked from 'marked'
import highlight from 'highlight.js'
import apis from '../apis'
// import 'highlight.js/styles/googlecode.css'
// import CodeBlock from '../markdown/CodeBlock.js'
// import '../../lib/css/font-awesome.css'
// import '../../lib/css/editormd.min.css'
// import '../../lib/css/editormd.preview.css'
// import $ from 'script-loader!../../lib/js/jquery.min.js'
// require("script-loader!../../lib/js/marked.min.js")
// require("script-loader!../../lib/js/raphael.min.js")
// require("script-loader!../../lib/js/underscore.min.js")
// require("script-loader!../../lib/js/sequence-diagram.min.js")
// require("script-loader!../../lib/js/flowchart.min.js")
// require("script-loader!../../lib/js/jquery.flowchart.min.js")
// require("script-loader!../../lib/js/editormd.min.js")
const initialSource = `
# Live demo
Changes are automatically rendered as you type.
* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
## HTML block below
<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>
## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');
React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`
Pretty neat, eh?
## Tables?

| Name | Academy | score |
| - | :-: | -: |
| Harry Potter | Gryffindor| 90 |
| Hermione Granger | Gryffindor | 100 |
| Draco Malfoy | Slytherin | 90 |
## More info?
Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
---------------
A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
`


class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = { info: {}, article: ''}
    }
    componentWillMount() {
        const rendererMD = new marked.Renderer()
        // rendererMD.code = (code, language) => {

        // }
        rendererMD.table = function (header, body) {
            return '<table class="table table-bordered">'+header+body+'</table>'
        }
        marked.setOptions({
            renderer: rendererMD,
            gfm: true,
            tables: true,
            // breaks: false,
            // pedantic: false,
            sanitize: false,
            // smartLists: true,
            // smartypants: false,
            // highlight: function (code, lang, callback) {
            //     require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
            //       callback(err, result.toString());
            //     });
            // }
            highlight: code => highlight.highlightAuto(code).value
          });
        console.log(marked(initialSource))
        this.setState({article: marked(initialSource)})
    }
    componentDidMount() {
        // console.log($)
        // $http.getArticle(this.props.match.params.id)
        //     .then((data) => {
        //         console.log('...', data)
        //         this.setState({ info: data})
        //         console.log('....', this.state.info)
        //     })
        apis.Article.get(this.props.match.params.id)
            .then((data) => {
                console.log('...', data)
            })
        console.log(this.props.match.params.id)
    }

    render() {
        return (
            <div class="article-page">
                <p>This is a article.</p>
                {/* <table className="table">
                    <caption>基本的表格布局</caption>
                    <thead>
                        <tr>
                        <th>名称</th>
                        <th>城市</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Tanmay</td>
                        <td>Bangalore</td>
                        </tr>
                        <tr>
                        <td>Sachin</td>
                        <td>Mumbai</td>
                        </tr>
                    </tbody>
                </table> */}
                <div dangerouslySetInnerHTML={{__html: this.state.article}}></div>
                {/* <MarkdownRenderer markdown={this.state.article}/> */}
            </div>
        )
    }
}

// function Article({match}) {
//     return (
//         <div>
//             <p>This is a article{match.params.id}.</p>
//         </div>
//     )
// }

export default Article
