import React from "react"
import DocLayout from "../components/doc-layout"
import { Box, Grid, Link, Alert, Input, Label, Button, Spinner } from 'theme-ui'
import { injectIntl } from "gatsby-plugin-intl"



class TestPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            warn: "",
            apiResult: "",
            apiJSON: null,
            response: null,
            ok: false,
            code: 200,
            isLoading: false
        }
        this.handleURLChange = this.handleURLChange.bind(this)
        this.giveURLSuggestion = this.giveURLSuggestion.bind(this)
        this.sendAjaxRequest = this.sendAjaxRequest.bind(this)
        this.setCodeResult = this.setCodeResult.bind(this)
        this.setResponseResult = this.setResponseResult.bind(this)

    }


    handleURLChange(event) {
        this.setState({
            url: event.target.value
        })
        this.giveURLSuggestion()
    }

    checkURL(URL) {
        var str = URL;
        //判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
        //下面的代码中应用了转义字符"\"输出一个字符"/"
        var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        var objExp = new RegExp(Expression);
        if (objExp.test(str) == true) {
            return true;
        } else {
            return false;
        }
    }

    getFullApiUrl(header) {
        return header + "/api/mobile/index.php?version=4&module=check";
    }

    setCodeResult(response, json) {
        this.setState({
            "apiResult": response,
            "apiJSON": json
        })
    }

    clearResult(){
        this.setState({
            "apiResult":null,
            "apiJSON":null
        })
    }

    setResponseResult(ok, response) {
        this.setState({
            "response": response,
            "ok": ok

        })
    }

    sendAjaxRequest() {
        const { intl } = this.props;
        this.clearResult()
        
        const url = this.getFullApiUrl(this.state.url);
        


        var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
        this.state.isLoading = true
        fetch(proxyUrl + url, {
            method: 'GET',
            credentials: 'same-origin',
            'X-Requested-With': 'XMLHttpRequest'

        }).then(response => {
            //setResponseResult(true,response)
            this.setState({
                "ok":response.ok,
                "code":response.status,
                "isLoading":false
            })
            console.log(response);
            //this.setResponseResult(response.ok,response)
            return response.text()

        }).then(text => {
            this.setCodeResult(text, null)
            var json = JSON.parse(text)
            console.log(text)
            console.log(json)
            this.setCodeResult(text, json)
            this.setState({
                ok: true
            })
        })
            .catch(function (error) {
                console.log(error)
                
            })
    }

    checkBBSResultOk(){
        if(this.state.apiJSON!=null && this.state.apiJSON.sitename!=null){
            return true;
        }
        else{
            return false;
        }
    }

    setURL(urlString){
        //this.url = urlString
        this.setState({
            url:urlString
        })
    }


    giveURLSuggestion() {
        const { intl } = this.props;
        const url = this.state.url;
        if (url.startsWith("http://") || url.startsWith("https://")) {
            // ok with protocol
            if (this.checkURL(url)) {
                this.setState({
                    warn: ""
                })
            }
            else {
                this.setState({
                    warn: intl.formatMessage({ id: "test-my-bbs.warn_enter_to_check_problem" })
                })
            }
        }
        else {
            this.setState({
                warn: intl.formatMessage({ id: "test-my-bbs.warn_need_protocol" })
            })
        }
    }

    componentDidMount() {

    }

    render() {
        const { intl } = this.props;
        var url = this.state.url;
        var state = this.state;
        return (
            <DocLayout subject={intl.formatMessage({ id: "test-my-bbs.title" })}>
                <Grid sx={{
                    textAlign:'center',
                    mt: 32,
                    mb: 32
                }}>
                    <h1>{intl.formatMessage({ id: "test-my-bbs.redirect_to_dhpush_title" })}</h1>
                    <h3><a href="https://dhp.kidozh.com/check-compatibility">{intl.formatMessage({ id: "test-my-bbs.redirect_to_dhpush_name" })}</a></h3>
                </Grid>
            </DocLayout>
        )
    }

}



export default injectIntl(TestPage)