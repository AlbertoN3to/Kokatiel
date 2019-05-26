const kokatiel = require('./kokatiel')

var koka = new kokatiel()
koka.setVisitorId('TesteViaSnippet')
koka.setSessionStart('2018-03-29T14:34:00.000')
koka.setSessionEnd('2018-03-29T19:34:00.000')
koka.setSection('SNIPPET')
koka.setIsVisit(true)
koka.setUserDefined([{
    "name":"PicleRick",
    "value":true
}])
koka.sendObj()