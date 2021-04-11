import React from 'react'
import ReactMarkdown from 'react-markdown'
// import marked from 'marked'
// import highlight from 'highlight.js'
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


class EditPreview extends React.Component {
    constructor(props) {
        super(props)
        this.state = { info: null, article: '' }
    }

    componentDidMount() {
    }

    render() {
        const input = '# Intro\n\n Go ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like `cmd-b` or `ctrl-b`.\n\n## Lists \n\nUnordered lists can be started using the toolbar or by typing `* `, `- `, or `+ `. Ordered lists can be started by typing `1. `. \n\n#### Unordered\n\n * Lists are a piece of cake \n\n* They even auto continue as you type * A double enter will end them * Tabs and shift-tabs work too \n\n#### Ordered\n\n 1. Numbered lists... 2. ...work too! \n\n## What about images?\n\n ![Yes](https://i.imgur.com/sZlktY7.png)'        
        return (
            <div>
                <p>Preview Edit.</p>
                <ReactMarkdown source={input} />
            </div>
        )
    }
}

export default EditPreview
