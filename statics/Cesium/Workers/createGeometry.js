define(["./when-7ef6387a","./Check-ed6a1804","./Math-c73e522c","./Cartesian2-51a0e5d9","./Transforms-5dbe1e69","./RuntimeError-5b606d78","./WebGLConstants-30fc6f5c","./ComponentDatatype-3593b1c2","./GeometryAttribute-09b6f80a","./GeometryAttributes-cb18da36","./AttributeCompression-71f76a0f","./GeometryPipeline-732fc801","./EncodedCartesian3-5b89decc","./IndexDatatype-62984545","./IntersectionTests-ec45b34f","./Plane-d218010a","./PrimitivePipeline-d7600904","./WebMercatorProjection-e886fe9c","./createTaskProcessorWorker"],function(u,e,r,t,n,a,i,o,s,c,f,d,b,m,l,p,y,P,k){"use strict";var v={};function C(e){var r=v[e];return u.defined(r)||("object"==typeof exports?v[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){v[r=e]=e})),r}return k(function(e,r){for(var t=e.subTasks,n=t.length,a=new Array(n),i=0;i<n;i++){var o=t[i],s=o.geometry,c=o.moduleName;if(u.defined(c)){var f=C(c);a[i]=f(s,o.offset)}else a[i]=s}return u.when.all(a,function(e){return y.PrimitivePipeline.packCreateGeometryResults(e,r)})})});
