/**
 * skylark-storages-diskfs - The filer features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/types","skylark-langx/objects","skylark-langx/arrays","skylark-langx/Deferred","skylark-langx/Xhr","./diskfs"],function(e,t,a,n,o,i){return i.upload=function(a){var i,r=t.mixin({contentRange:null,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,limitMultiFileUploadSize:void 0,limitMultiFileUploadSizeOverhead:512,sequentialUploads:!1,limitConcurrentUploads:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(e,a){return e=this.messages[e]||e.toString(),a&&t.each(a,function(t,a){e=e.replace("{"+t+"}",a)}),e},formData:function(e){return e.serializeArray()},add:function(e,t){if(e.isDefaultPrevented())return!1;(t.autoUpload||!1!==t.autoUpload&&$(this).fileupload("option","autoUpload"))&&t.process().done(function(){t.submit()})},processData:!1,contentType:!1,cache:!1},a),l=function(){return(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice).apply(this,arguments)},s=function(e){return o.request(e.url,e)};function d(a){var n,o=a.files[0],i=a.multipart,r="array"===e.type(a.paramName)?a.paramName[0]:a.paramName;a.headers=t.mixin({},a.headers),a.contentRange&&(a.headers["Content-Range"]=a.contentRange),i?(n=new FormData,a.blob?n.append(r,a.blob,o.name):t.each(a.files,function(t,o){n.append("array"===e.type(a.paramName)&&a.paramName[t]||r,o,o.uploadName||o.name)}),a.data=n):(a.headers["Content-Disposition"]='attachment; filename="'+encodeURI(o.name)+'"',a.contentType=o.type||"application/octet-stream",a.data=a.blob||o),a.blob=null}function p(e,a){e.uploadedBytes=e.uploadedBytes||0;var o,i,r=e.files[0],p=r.size,u=e.uploadedBytes,c=e.maxChunkSize||p,m=l,h=new n,y=h.promise;return!(!m||!(u||c<p)||e.data)&&(!!a||(u>=p?(r.error=e.i18n("uploadedBytes"),this._getXHRPromise(!1,e.context,[null,"error",r.error])):(i=function(){var a=t.mixin({},e),n=a._progress.loaded;a.blob=m.call(r,u,u+c,r.type),a.chunkSize=a.blob.size,a.contentRange="bytes "+u+"-"+(u+a.chunkSize-1)+"/"+p,d(a),o=s(a).done(function(t,o,r){u=function(e){var t=e.getResponseHeader("Range"),a=t&&t.split("-"),n=a&&a.length>1&&parseInt(a[1],10);return n&&n+1}(r)||u+a.chunkSize,n+a.chunkSize-a._progress.loaded&&h.progress({lengthComputable:!0,loaded:u-a.uploadedBytes,total:u-a.uploadedBytes}),e.uploadedBytes=a.uploadedBytes=u,a.result=t,a.textStatus=o,a.jqXHR=r,u<p?i():h.resolveWith(a.context,[t,o,r])}).fail(function(e,t,n){a.jqXHR=e,a.textStatus=t,a.errorThrown=n,h.rejectWith(a.context,[e,t,n])})},y.abort=function(){return o.abort()},i(),y)))}(i=r).type=i.type||"POST",p(i,!0)||i.data||d(i),r._bitrateTimer=new function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,a){var n=e-this.timestamp;return(!this.bitrate||!a||n>a)&&(this.bitrate=(t-this.loaded)*(1e3/n)*8,this.loaded=t,this.timestamp=e),this.bitrate}};var u=p(r)||s(r);return u.options=r,u}});
//# sourceMappingURL=sourcemaps/upload.js.map
