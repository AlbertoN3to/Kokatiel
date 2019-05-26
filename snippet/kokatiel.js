module.exports = class {

    constructor(){
        this.visitorId = undefined
        this.sessionStart = undefined
        this.sessionEnd = undefined
        this.section = undefined
        this.isVisit = undefined
        this.userDefined = undefined
    }

    setVisitorId(visitorId){
        this.visitorId = visitorId
    }
    setSessionStart(sessionStart){
        this.sessionStart = sessionStart
    }
    setSessionEnd(sessionEnd){
        this.sessionEnd = sessionEnd
    }
    setSection(section){
        this.section = section
    }
    setIsVisit(isVisit){
        this.isVisit = isVisit
    }
    setUserDefined(userDefined){
        this.userDefined = userDefined
    }

    getVisitorId(){
        return this.visitorId
    }
    getSessionStart(){
        return this.sessionStart
    }
    getSessionEnd(){
        return this.sessionEnd
    }
    getSection(){
        return this.section
    }
    getIsVisit(){
        return this.isVisit
    }
    getUserDefined(){
        return this.userDefined
    }

    sendObj(){

        const axios = require('axios')
        const https = require('https')

        const agent = new https.Agent({  
            rejectUnauthorized: false
        });

        axios.post('https://ec2-18-222-30-60.us-east-2.compute.amazonaws.com:80/data', {

                "visitorId":this.getVisitorId(),
                "sessionStart":this.getSessionStart(),
                "sessionEnd":this.getSessionEnd(),
                "originUrl":"google.com",
                "section":this.getSection(),
                "isVisit":this.getIsVisit(),
                "userDefined":this.getUserDefined()    
            }, 
            { httpsAgent: agent }
        )
        .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
        })
        .catch((error) => {
        console.error(error)
        })
    }
}



