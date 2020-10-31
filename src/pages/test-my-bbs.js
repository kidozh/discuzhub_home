import React from "react"
import DocLayout from "../components/doc-layout"
import { Box, Grid, Link, Alert, Input, Label, Button, Spinner } from 'theme-ui'
import { injectIntl } from "gatsby-plugin-intl"



class testPage extends React.Component {
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
                <Grid>
                    <Box>
                        <Label htmlFor='bbs_url'>{intl.formatMessage({ id: "test-my-bbs.url" })}</Label>
                        <Input
                            name='bbs_url'
                            mb={3}
                            type="url"
                            onChange={this.handleURLChange}
                            value={url}
                        />
                        <p><small>*:{intl.formatMessage({ id: "test-my-bbs.redirect_by_cross_anywhere" })}</small></p>
                        <p>
                        {intl.formatMessage({ id: "test-my-bbs.example" })}
                        </p>
                        <ul>
                            <li><Link href="#" onClick={(e) => this.setURL("https://www.mcbbs.net")}>https://www.mcbbs.net</Link></li>
                            <li><Link href="#" onClick={(e) => this.setURL("https://keylol.com")}>https://keylol.com</Link></li>
                            
                        </ul>
                        

                        {
                            this.checkURL(url) &&

                            <p sx={{
                                m: 0,
                                color: 'primary'
                            }}>
                                {intl.formatMessage({ id: "test-my-bbs.api_full_text" }, {
                                    fullApi: ""
                                })}
                                <Link href={this.getFullApiUrl(url)}>{this.getFullApiUrl(url)}</Link>
                            </p>

                        }
                        
                        {
                            this.checkURL(url) &&
                            <Button
                                variant="success"
                                onClick={this.sendAjaxRequest}
                                sx={{
                                    mt: 2,
                                    bg:"blue"

                                }}>
                                {
                                    intl.formatMessage({ id: "test-my-bbs.submit" })}</Button>
                        }



                    </Box>
                </Grid>
                <Grid columns={1} mt={2}>
                    <box>
                        {state.isLoading&&(
                        
                        <p>
                            <Spinner />
                            {intl.formatMessage({ id: "test-my-bbs.loading_data" },{"url":url})}
                        </p>)
                        }
                    </box>
                    {this.state.apiResult && 
                    (
                        <box>
                        {
                        this.checkBBSResultOk()?
                        (
                            <Alert variant='secondary' mb={2} sx={{
                                bg:"green"
                            }}>{intl.formatMessage({ id: "test-my-bbs.app_add_guide" },{
                                "url":url,
                                "name":state.apiJSON.sitename
                            })}</Alert>
                            
                            
                        ):(
                            <Alert variant='secondary' mb={2}>{intl.formatMessage({ id: "test-my-bbs.bbs_not_pass_result" })}</Alert>
                        )
                        
                        }
                    </box>
                    )
                    
                    }
                    
                </Grid>
                <Grid columns={[1, 2, 2]}
                    sx={{
                        mt: 4,
                        mb: 4
                    }}
                >
                    {this.state.apiResult &&
                        <Box>
                            <h3>{intl.formatMessage({ id: "test-my-bbs.raw_result" })}</h3>
                            <pre
                                css={{
                                    overflow: "scroll",
                                }}
                            >{this.state.apiResult}
                            </pre>
                        </Box>
                    }
                    {this.state.apiJSON &&
                        <Box>
                            <h3>{intl.formatMessage({ id: "test-my-bbs.attributes" })}</h3>
                            <table>
                                <thead>
                                    <tr sx={{
                                        bg: "primary"
                                    }}>
                                        <th>{intl.formatMessage({ id: "test-my-bbs.key" })}</th>
                                        <th>{intl.formatMessage({ id: "test-my-bbs.value" })}</th>
                                        <th>{intl.formatMessage({ id: "test-my-bbs.compatible" })}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.discuz_version" })}</td>
                                        <td>{this.state.apiJSON.discuzversion}</td>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.yes" })}</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.charset" })}</td>
                                        <td>{this.state.apiJSON.charset}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.plugin_version" })}</td>
                                        <td>{this.state.apiJSON.pluginversion}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.register_name" })}</td>
                                        <td>{this.state.apiJSON.regname}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.qq_connect" })}</td>
                                        <td>{this.state.apiJSON.qqconnect}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.hide_register" })}</td>
                                        <td>{this.state.apiJSON.wsqhideregister}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.site_name" })}</td>
                                        <td>{this.state.apiJSON.sitename}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.site_id" })}</td>
                                        <td>{this.state.apiJSON.mysiteid}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.ucenter_url" })}</td>
                                        <td>{this.state.apiJSON.ucenterurl}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.default_fid" })}</td>
                                        <td>{this.state.apiJSON.defaultfid}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.total_post" })}</td>
                                        <td>{this.state.apiJSON.totalposts}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.total_members" })}</td>
                                        <td>{this.state.apiJSON.totalmembers}</td>
                                        <td>/</td>
                                    </tr>
                                    <tr>
                                        <td>{intl.formatMessage({ id: "test-my-bbs.test_cookie" })}</td>
                                        <td>{this.state.apiJSON.testcookie}</td>
                                        <td>/</td>
                                    </tr>
                                </tbody>

                            </table>
                        </Box>
                    }



                </Grid>
            </DocLayout>
        )
    }

}



export default injectIntl(testPage)