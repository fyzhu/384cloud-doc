const QiniuManager = require('./src/utils/QiniuManager')
//generate mac
const accessKey = 'uJdbhGnfzZeCmW15JLSnVyqbVYKqvtDk2jLs2mc0'
const secretKey = 'C8-gNPipd4nsoYwy49QgjFlwRiJDioDW0oX-o_s-'
const localFile = "/Users/liusha/Desktop/name1.md";
const key='name1.md';

const manager = new QiniuManager(accessKey, secretKey, 'clouddoc')
//manager.uploadFile(key, localFile)
manager.deleteFile(key)

//const publicBucketDomain = 'http://pv8m1mqyk.bkt.clouddn.com';

