Object.prototype.rgbToHex=function(x){x=this;return (x.indexOf("rgb(")>=0)?x.replace(/(rgb[(])/ig,"#").replace(/[.\d]*[\d]%/ig , function(y){var w=0; var temp=y.split("."); for(var i=0;i<temp.length; i++){var div=(i!=0)?100:1; temp[i]=parseInt(temp[i],10)/div;} for(var x=0;x<temp.length;x++){w+=temp[x];}return Math.round((255*w)/100);}).replace(/[ \d]*[\d]*[,)]/ig ,function(n){n = parseInt(n,10);if (isNaN(n)){ n="00";}n = Math.max(0,Math.min(n,255)); return "0123456789ABCDEF".charAt((n-n%16)/16)+ "0123456789ABCDEF".charAt(n%16);}):x};
