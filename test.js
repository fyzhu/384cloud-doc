const qiniu = require('qiniu')

//generate mac
const accessKey = 'uJdbhGnfzZeCmW15JLSnVyqbVYKqvtDk2jLs2mc0'
const secretKey = 'C8-gNPipd4nsoYwy49QgjFlwRiJDioDW0oX-o_s-'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

// generate uploadToken
const options = {
  scope: 'clouddoc',
};
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken=putPolicy.uploadToken(mac)

// init config class
const config = new qiniu.conf.Config()
// 空间对应的机房
config.zone = qiniu.zone.Zone_z0

const localFile = "/Users/liusha/Desktop/name1.md";
const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();
const key='name1.md';
//文件上传
formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr,
  respBody, respInfo) {
  if (respErr) {
    throw respErr;
  }
  if (respInfo.statusCode === 200) {
    console.log(respBody);
  } else {
    console.log(respInfo.statusCode);
    console.log(respBody);
  }
});

const bucketManager = new qiniu.rs.BucketManager(mac, config);
const publicBucketDomain = 'http://pv8m1mqyk.bkt.clouddn.com';
// 公开空间访问链接
const publicDownloadUrl = bucketManager.publicDownloadUrl(publicBucketDomain, key);
console.log(publicDownloadUrl);
