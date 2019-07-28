var __extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)},Constants=function(){function t(){}return t}();Constants.ASSETS_ZONE_WIDTH=2048,Constants.ASSETS_ZONE_HEIGHT=1536,Constants.ASSETS_ZONE_CENTER_X=1024,Constants.ASSETS_ZONE_CENTER_Y=768,Constants.TILE_WIDTH=128;var Point=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.m_x=t,this.m_y=e}return Object.defineProperty(t.prototype,"x",{get:function(){return this.m_x},set:function(t){this.m_x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.m_y},set:function(t){this.m_y=t},enumerable:!0,configurable:!0}),t.prototype.setTo=function(t,e){this.m_x=t||0,this.m_y=e||(0!==e?this.m_x:0)},t.prototype.clone=function(){return new t(this.m_x,this.m_y)},t.prototype.toString=function(){return"[Point (x:"+this.m_x+", y:"+this.m_y+")]"},t}(),MathUtils=function(){function t(){}return t.atan2=function(t,e){if(0==e)return t>0?.5*Math.PI:0==t?0:.5*-Math.PI;var i,n=t/e;if(n<-1||n>1){if(i=.5*Math.PI-n/(n*n+.28),t<0)return i-Math.PI}else if(i=n/(1+.28*n*n),e<0)return t<0?i-Math.PI:i+Math.PI;return i},t.degToRad=function(e){return t.PI*e*.0056},t.isNumber=function(t){return"number"==typeof t},t.isInteger=function(t){return t===(0|t)},t.frandom=function(e,i){var n=t.max(e,i),r=t.min(e,i);return Math.random()*(n-r)+r},t.irandom=function(e,i){var n=t.max(e,i),r=t.min(e,i);return t.floor(Math.random()*(n-r+1)+r)},t.max=function(t,e){return t>e?t:e},t.min=function(t,e){return t<e?t:e},Object.defineProperty(t,"m1to1",{get:function(){return 2*t.m1to1Half},enumerable:!0,configurable:!0}),Object.defineProperty(t,"m1to1Half",{get:function(){return t.random()-.5},enumerable:!0,configurable:!0}),t.setSeed=function(e){t.maxRand=65535,t.out=e||t.floor(Math.random()*t.maxRand+.5),t.seed=t.out},t.getSeed=function(){return t.seed},t.random=function(){var e=1&(t.out>>0^t.out>>2^t.out>>3^t.out>>5);return t.out=t.out>>1|e<<15,t.out/t.maxRand},t.floor=function(t){var e=t>>0;return t>0?(e<0&&(e+=4294967296),e):(e>0&&(e-=4294967296),e-1)},t.encode=function(e){var i=t.floor(e);return e>=268435456?i-=4294967296:(i<<=4,e>0?(i<=0&&(i+=4294967296),i+=127):(i>=0&&(i-=4294967296),i-=127))},t.decode=function(t){var e=t;return t>0?(e=t-127,e>>=4,e<0&&(e+=268435456),e):(e=t+127,e>>=4,e>0&&(e-=268435456),e)},t.abs=function(t){return t>0?t:-t},t.mod=function(e,i){return t.isPowerOfTwoMinusOne(i)?e&i:e%i},t.isEven=function(t){return 0==(1&t)},t.isEvenlyDivisibleByMaxInt32=function(t){return 0===(0|t)},t.isPowerOfTwo=function(t){return t>0&&0===(t&t-1)},t.isPowerOfTwoMinusOne=function(t){return 0===(t+1&t)},t.betweenAngle=function(e,i){var n=e.x-i.x,r=e.y-i.y;return t.atan2(r,n)},t.betweenDistanceSQ=function(t,e){var i=t.x-e.x,n=t.y-e.y;return i*i+n*n},t.betweenDistance=function(e,i){return Math.sqrt(t.betweenDistanceSQ(e,i))},t.normalizeVector=function(t){var e=Math.sqrt(t.x*t.x+t.y*t.y);t.x/=e,t.y/=e},t.hex2rgb=function(t){var e=[];return e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(255&t)/255,e},t.hex2string=function(t){var e=t.toString(16);return e="000000".substr(0,6-e.length)+e,"#"+e},t.rgb2hex=function(t){var e=255*t[0]<<16,i=255*t[1]<<8,n=255*t[2];return e<0&&(e+=4294967296),e+i+n},t.bin2dec=function(t){return parseInt(String(t),2)},t.dec2bin=function(t,e){var i=t.toString(2),n=e-i.length,r=String("00000000000000000000000000000000").substr(0,n)+i;return r},t.dec2binArray=function(t,e,i){void 0===i&&(i=null);var n=0,r=0,o=1,s=[],m=[];for(null!=i&&(m=i,r=i.length+e);(o*=2)<=t;);for(;(o/=2)>=1;)o<=t?(t-=o,s[n]=1,n++):(s[n]=0,n++);for(;e--;)r--,n>0?(n--,m[r]=s[n]):m[r]=0;return s=null,m},t.hex2dec=function(t){return parseInt(String(t),16)},t.dec2hex=function(t){return(t<10?"0":"")+t.toString(16)},t.invertColor=function(e){var i=255-t.extractRed(e),n=255-t.extractGreen(e),r=255-t.extractBlue(e);return t.rgb2hex([i,n,r])},t.extractRed=function(t){return t>>16&255},t.extractGreen=function(t){return t>>8&255},t.extractBlue=function(t){return 255&t},t.hexToRgb=function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,i,n){return e+e+i+i+n+n});var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null},t.roundDecimal=function(t,e){var i=Math.pow(10,e);return Math.round(i*t)/i},t.normalize=function(t,e,i,n){void 0===n&&(n=!0);var r=(t-e)/(i-e);return n&&(r=Math.max(0,r),r=Math.min(r,1)),r},t.sortParticles=function(t,e){return(t.__z||0)-(e.__z||0)},t.clamp=function(t,e,i){return t<e?e:t>i?i:t},t.prototype.clampBottom=function(t,e){return t<e?e:t},t}();MathUtils.E=Math.E,MathUtils.PI=3.1416,MathUtils.SQRT2=Math.SQRT2,MathUtils.SQRT1_2=Math.SQRT1_2,MathUtils.LN2=Math.LN2,MathUtils.LN10=Math.LN10,MathUtils.LOG2E=Math.LOG2E,MathUtils.LOG10E=Math.LOG10E;var AiBossMgrS=function(){function t(t,e){this.m_pixelsPerSeconds=5,this.m_usersGame=t,this.m_widthMap=e[0].length*Constants.TILE_WIDTH,this.m_heightMap=e.length*Constants.TILE_WIDTH,this.m_totalPlayers=Object.keys(t).length,this.init()}return t.prototype.init=function(){this.m_startTime=Date.now(),this.m_startFire=this.m_startTime,this.m_id_0=MathUtils.floor(65535*Math.random()),this.m_id_1=MathUtils.floor(255*Math.random()),this.m_id=1e3*this.m_id_0+this.m_id_1,this.m_radioBoss=30;var t=2*MathUtils.PI*Math.random(),e=.5*Math.random()*(this.m_widthMap-2*this.m_radioBoss),i=.5*Math.random()*(this.m_heightMap-2*this.m_radioBoss);this.m_x=.5*this.m_widthMap+e*Math.cos(t),this.m_y=.5*this.m_heightMap+i*Math.sin(t),this.m_toX=this.m_radioBoss+(this.m_widthMap-2*this.m_radioBoss)*Math.random(),this.m_toY=this.m_radioBoss+(this.m_heightMap-2*this.m_radioBoss)*Math.random();var n=this.m_toX-this.m_x,r=this.m_toY-this.m_y,o=Math.sqrt(n*n+r*r);this.m_time=MathUtils.floor(o*this.m_pixelsPerSeconds),this.m_timeFire=1e3*MathUtils.floor(4-2*Math.random())},t.prototype.removeUserGame=function(t){var e=t.socketId;this.m_usersGame[e]=null,delete this.m_usersGame[e]},t.prototype.update=function(){var t,e=Date.now(),i=e-this.m_startTime,n=e-this.m_startFire;if(i>this.m_time){this.m_startTime=e,this.m_x=this.m_toX,this.m_y=this.m_toY,this.m_toX=this.m_radioBoss+(this.m_widthMap-2*this.m_radioBoss)*Math.random(),this.m_toY=this.m_radioBoss+(this.m_heightMap-2*this.m_radioBoss)*Math.random();var r=this.m_toX-this.m_x,o=this.m_toY-this.m_y,s=Math.sqrt(r*r+o*o);this.m_time=MathUtils.floor(s*this.m_pixelsPerSeconds),Math.random()>.5&&(this.m_time=MathUtils.floor(.5*this.m_time));for(t in this.m_usersGame)this.m_usersGame[t].user.emitMe("PK<LA",this.getBuffer)}var m,a,h,_;if(n>this.m_timeFire){this.m_attack=Math.random()>.5?1:0,1==this.m_attack&&(m=MathUtils.floor(this.m_totalPlayers*Math.random()),a=Object.keys(this.m_usersGame)[m],null!=this.m_usersGame[a]&&(h=this.m_usersGame[a].id_0,_=this.m_usersGame[a].id_1)),this.m_startFire=Date.now(),this.m_timeFire=1e3*MathUtils.floor(2-Math.random());var u=new BufferArray;u.writeUInt16LE(this.m_id_0),u.writeUInt8(this.m_id_1),u.writeUInt16LE(h),u.writeUInt8(_),u.writeUInt8(MathUtils.encode(this.m_attack));for(t in this.m_usersGame)this.m_usersGame[t].user.emitMe("|*,/.",u.buffer);u.destroy(),u=null}},Object.defineProperty(t.prototype,"getBuffer",{get:function(){var t=new BufferArray;return t.writeUInt16LE(this.m_id_0),t.writeUInt8(this.m_id_1),t.writeUInt32LE(MathUtils.encode(this.m_x)),t.writeUInt32LE(MathUtils.encode(this.m_y)),t.writeUInt32LE(MathUtils.encode(this.m_toX)),t.writeUInt32LE(MathUtils.encode(this.m_toY)),t.writeUInt24LE(MathUtils.encode(this.m_time)),t.buffer},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.m_usersGame=null},t}(),MapsMgrS=function(){function t(t){this.m_level=t,this.init()}return t.prototype.init=function(){this.m_map=new MapsS(this.m_level)},Object.defineProperty(t.prototype,"getBuffer",{get:function(){return this.m_map.getBuffer},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maze",{get:function(){return this.m_map.maze},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.m_map.destroy(),this.m_map=null},t}(),MapsS=function(){function t(t){this.m_level=t,this.m_level<1&&(this.m_level=1),this.init()}return t.prototype.init=function(){this.m_level=3;var t=this.getLevelMap(this.m_level);this.m_minTilesX=16,this.m_minTilesY=10,this.m_moveXX=MathUtils.random()>.3?6:5,this.m_moveYY=MathUtils.random()>.3?6:5,this.m_totalX=MathUtils.floor(.6*this.m_minTilesX+t*this.m_moveXX*(.8-.4*Math.random())),this.m_totalY=MathUtils.floor(.6*this.m_minTilesY+t*this.m_moveYY*(.8-.4*Math.random())),this.m_totalX<this.m_minTilesX&&(this.m_totalX=this.m_minTilesX),this.m_totalY<this.m_minTilesY&&(this.m_totalY=this.m_minTilesY),(this.m_totalX<51||this.m_totalY<51)&&(this.m_moveXX=MathUtils.random()>.3?5:4,this.m_moveYY=MathUtils.random()>.3?5:4),(this.m_totalX<21||this.m_totalY<21)&&(this.m_moveXX=MathUtils.random()>.3?4:3,this.m_moveYY=MathUtils.random()>.3?4:3),console.log(this.m_totalX," m_totalX m_totalY ",this.m_totalY),console.log(this.m_moveXX," m_moveXX m_moveYY ",this.m_moveYY),console.log("+++++++++++++++++++++++++++++++"),this.initMaze(),this.createMaze(),this.fixBugs()},t.prototype.getLevelMap=function(t){var e=0,i=0;for(e=1;e<=t;e++)i+=1/e;return i*=2,i--,Math.round(i)},t.prototype.initMaze=function(){this.m_maze=[];var t,e,i;for(i=0;i<this.m_totalY;i++){for(t=[],e=0;e<this.m_totalX;e++)t[e]=0;this.m_maze[i]=t}this.m_startX=1,this.m_startY=1,this.m_maze[this.m_startY][this.m_startX]=1,t=null},t.prototype.createMaze=function(){var e,i,n,r,o,s,m,a,h;this.m_moves=[],this.m_moves.push(this.m_posX+this.m_posY*this.m_totalX),this.m_posX=this.m_startX,this.m_posY=this.m_startY;for(var _,u,l,d;this.m_moves.length>0;)if(n="",r=MathUtils.floor(.9*this.m_moveXX+.1*this.m_moveXX*Math.random()),o=MathUtils.floor(.9*this.m_moveYY+.1*this.m_moveYY*Math.random()),s=MathUtils.floor(.6*r+.4*r*Math.random()),m=MathUtils.floor(.6*o+.4*o*Math.random()),a=this.m_totalX-1,h=this.m_totalY-1,this.m_posX+r<this.m_totalX&&0==this.m_maze[this.m_posY][this.m_posX+r]&&this.m_posX+r!=a&&(n+=t.WEST),this.m_posX-r>=0&&0==this.m_maze[this.m_posY][this.m_posX-r]&&this.m_posX-r!=a&&(n+=t.EAST),this.m_posY-o>=0&&0==this.m_maze[this.m_posY-o][this.m_posX]&&this.m_posY-o!=h&&(n+=t.NORTH),this.m_posY+o<this.m_totalY&&0==this.m_maze[this.m_posY+o][this.m_posX]&&this.m_posY+o!=h&&(n+=t.SOUTH),n.length>0){switch(i=MathUtils.irandom(0,n.length-1),_=n.charAt(i),l=0,d=0,_){case t.EAST:for(this.m_maze[this.m_posY][this.m_posX-r]=1,u=r+1,l=0;l<u;l++)for(d=0;d<s;d++)this.m_posX-l<this.m_totalX&&this.m_posY+d<this.m_totalY&&(this.m_maze[this.m_posY+d][this.m_posX-l]=1);if(this.m_lastEval==t.SOUTH||this.m_lastEval==t.NORTH)for(l=0;l<s;l++)for(d=0;d<s;d++)this.m_posX+l<this.m_totalX&&this.m_posY+d<this.m_totalY&&(this.m_maze[this.m_posY+d][this.m_posX+l]=1);this.m_posX-=r;break;case t.WEST:for(this.m_maze[this.m_posY][this.m_posX+r]=1,u=r+1,l=0;l<u;l++)for(d=0;d<s;d++)this.m_posX+l<this.m_totalX&&this.m_posY+d<this.m_totalY&&(this.m_maze[this.m_posY+d][this.m_posX+l]=1);this.m_posX+=r;break;case t.NORTH:for(this.m_maze[this.m_posY-o][this.m_posX]=1,u=o+1,l=0;l<u;l++)for(d=0;d<m;d++)this.m_posX+d<this.m_totalX&&this.m_posY-l<this.m_totalY&&(this.m_maze[this.m_posY-l][this.m_posX+d]=1);if(this.m_lastEval==t.WEST||this.m_lastEval==t.EAST)for(l=0;l<m;l++)for(d=0;d<m;d++)this.m_posX+d<this.m_totalX&&this.m_posY+l<this.m_totalY&&(this.m_maze[this.m_posY+l][this.m_posX+d]=1);this.m_posY-=o;break;case t.SOUTH:for(this.m_maze[this.m_posY+o][this.m_posX]=1,u=o+1,l=0;l<u;l++)for(d=0;d<m;d++)this.m_posX+d<this.m_totalX&&this.m_posY+l<this.m_totalY&&(this.m_maze[this.m_posY+l][this.m_posX+d]=1);this.m_posY+=o}this.m_moves.push(this.m_posX+this.m_posY*this.m_totalX),this.m_lastEval=_}else e=this.m_moves.pop(),this.m_posY=MathUtils.floor(e/this.m_totalX),this.m_posX=MathUtils.mod(e,this.m_totalX)},t.prototype.fixBugs=function(){var t,e,i=this.m_totalX-1,n=this.m_totalY-1;for(t=0;t<this.m_totalX;t++)1==this.m_maze[n][t]&&(this.m_maze[n][t]=0);for(e=0;e<this.m_totalY;e++)1==this.m_maze[e][i]&&(this.m_maze[e][i]=0);for(t=0;t<this.m_totalX;t++)1==this.m_maze[this.m_totalY-3][t]&&0==this.m_maze[this.m_totalY-2][t]&&(this.m_maze[this.m_totalY-2][t]=1);for(e=0;e<this.m_totalY;e++)1==this.m_maze[e][this.m_totalX-3]&&0==this.m_maze[e][this.m_totalX-2]&&(this.m_maze[e][this.m_totalX-2]=1);this.m_mazeBuffer=new BufferArray,this.m_mazeBuffer.writeUInt16LE(this.m_totalY),this.m_mazeBuffer.writeUInt16LE(this.m_totalX);var r,o,s,m,a,h=[];for(e=0;e<this.m_totalY;e++)for(r=this.m_maze[e].join(""),s=r.length,h=[],m=MathUtils.floor(s/32)+1,this.m_mazeBuffer.writeUInt8(m),a=0;a<m;a++)o=r.substring(32*a,32*(a+1)),this.m_mazeBuffer.writeUInt32LE(MathUtils.bin2dec(o))},Object.defineProperty(t.prototype,"maze",{get:function(){return this.m_maze},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"getBuffer",{get:function(){return this.m_mazeBuffer.buffer},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.m_maze=null,this.m_mazeBuffer=null},t}();MapsS.NORTH="N",MapsS.SOUTH="S",MapsS.EAST="E",MapsS.WEST="W",MapsS.BEGINNER="beginner",MapsS.NORMAL="normal",MapsS.HARD="hard",MapsS.CRUELING="crueling";var Entity=function(){function t(){}return t.prototype.init=function(){},Object.defineProperty(t.prototype,"id",{get:function(){return this.m_id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"id_0",{get:function(){return this.m_id_0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"id_1",{get:function(){return this.m_id_1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this.m_state},enumerable:!0,configurable:!0}),t.prototype.update=function(){},t.prototype.destroy=function(){},t}(),PlayerS=function(t){function e(e,i){var n=t.call(this)||this;return n.m_user=e,n.m_maze=i,n.init(),n}return __extends(e,t),e.prototype.init=function(){this.m_x=0,this.m_y=0,this.m_score=0,this.m_live=0},e.prototype.resetGame=function(){this.m_score=0,this.m_live=100;var t=this.m_idReady/this.m_totalReady,e=this.m_initAngle+2*Math.PI*t;this.m_color=MathUtils.floor(8388607.5*e/Math.PI+.5);for(var i=Math.floor(Math.random()*this.m_maze[0].length),n=Math.floor(Math.random()*this.m_maze.length);0==this.m_maze[n][i];)i=Math.floor(Math.random()*this.m_maze[0].length),n=Math.floor(Math.random()*this.m_maze.length);this.m_x=(i+.5)*Constants.TILE_WIDTH,this.m_y=(n+.5)*Constants.TILE_WIDTH,this.m_id_0=MathUtils.floor(65535*Math.random()),this.m_id_1=MathUtils.floor(255*Math.random())+this.m_idReady,this.m_id=1e3*this.m_id_0+this.m_id_1},Object.defineProperty(e.prototype,"user",{get:function(){return this.m_user},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"socket",{get:function(){return this.m_user.socket},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"socketId",{get:function(){return this.m_user.socketId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"x",{get:function(){return this.m_x},set:function(t){this.m_x=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.m_y},set:function(t){this.m_y=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"score",{get:function(){return this.m_score},set:function(t){this.m_score=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"live",{get:function(){return this.m_live},set:function(t){this.m_live=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return this.m_color},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"idReady",{set:function(t){this.m_idReady=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"totalReady",{set:function(t){this.m_totalReady=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"initAngle",{set:function(t){this.m_initAngle=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"getBuffer",{get:function(){var t=new BufferArray;return t.writeUTF8(this.m_user.socketId),t.writeUInt16LE(this.m_id_0),t.writeUInt8(this.m_id_1),t.writeUInt32LE(MathUtils.encode(this.m_score)),t.writeUInt8(MathUtils.encode(this.m_live)),t.writeUInt24LE(this.m_color),t.writeUInt32LE(MathUtils.encode(this.m_x)),t.writeUInt32LE(MathUtils.encode(this.m_y)),t.buffer},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.m_maze=null},e}(Entity),PowerUpMgrS=function(){function t(t,e){this.m_usersGame=t,this.m_maze=e,this.init()}return t.prototype.init=function(){this.m_powerUps=[],this.m_startTime=Date.now(),this.m_next=1e3*MathUtils.floor(20-5*Math.random())},t.prototype.update=function(){var t,e,i,n,r=Date.now(),o=r-this.m_startTime;if(o>this.m_next){t=new PowerUpS(this.m_maze),this.m_powerUps.push(t),this.m_startTime=r,this.m_next=1e3*MathUtils.floor(20-5*Math.random());for(n in this.m_usersGame)this.m_usersGame[n].user.emitMe("#Y{4^",t.getBuffer)}for(e=this.m_powerUps.length,i=0;i<e;i++)this.m_powerUps[i].isConsume&&this.removePowerUp(this.m_powerUps[i])},t.prototype.removePowerUp=function(t){var e,i,n=this.m_usersGame.length;for(i in this.m_usersGame)this.m_usersGame[i].user.emitMe("N:tS4",t.idBuffer);var e,n=this.m_powerUps.length-1;for(e=n;e>-1;e--)this.m_powerUps[e].id==t.id&&(this.m_powerUps[e].destroy(),this.m_powerUps[e]=null,this.m_powerUps.splice(e,1));t=null},t.prototype.destroy=function(){var t,e=this.m_powerUps.length-1;for(t=e;t>-1;t--)this.m_powerUps[t].destroy(),this.m_powerUps[t]=null,this.m_powerUps.splice(t,1);this.m_usersGame=null,this.m_maze=null},t}(),PowerUpS=function(){function t(t){this.m_maze=t,this.init()}return t.prototype.init=function(){this.m_startTime=Date.now(),this.m_id_0=MathUtils.floor(65535*Math.random()),this.m_id_1=MathUtils.floor(255*Math.random()),this.m_id=1e3*this.m_id_0+this.m_id_1,this.m_duration=1e3*MathUtils.floor(15-5*Math.random());for(var t=Math.floor(Math.random()*this.m_maze[0].length),e=Math.floor(Math.random()*this.m_maze.length);0==this.m_maze[e][t];)t=Math.floor(Math.random()*this.m_maze[0].length),e=Math.floor(Math.random()*this.m_maze.length);this.m_x=(t+.5)*Constants.TILE_WIDTH,this.m_y=(e+.5)*Constants.TILE_WIDTH},Object.defineProperty(t.prototype,"id",{get:function(){return this.m_id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isConsume",{get:function(){var t=Date.now(),e=t-this.m_startTime;return e>this.m_duration},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"getBuffer",{get:function(){var t=new BufferArray;return t.writeUInt16LE(this.m_id_0),t.writeUInt8(this.m_id_1),t.writeUInt24LE(MathUtils.encode(this.m_duration)),t.writeUInt32LE(MathUtils.encode(this.m_x)),t.writeUInt32LE(MathUtils.encode(this.m_y)),t.buffer},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"idBuffer",{get:function(){var t=new BufferArray;return t.writeUInt16LE(this.m_id_0),t.writeUInt8(this.m_id_1),t.buffer},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.m_maze=null},t}(),Framework=function(){function t(){}return Object.defineProperty(t,"version",{get:function(){return"v0.0.1"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"copyRight",{get:function(){return"(c) 2015 Beastialy"},enumerable:!0,configurable:!0}),t}(),Globals=function(){function t(){}return t}();Globals.DESTROY_USERSNS=99999;var Room=function(t){function e(e){var i=t.call(this)||this;return i.m_name=e,i.init(),i}return __extends(e,t),e.prototype.init=function(){this.m_usersRoom={},this.m_usersWait={},this.m_state=e.FREE,this.m_countUsers=0,this.m_limitUsers=2},e.prototype.addBindHandlers=function(t){var e=this;this.m_onReadyRoomClientBind=function(i){return e.onReadyRoomClient(t.socketId,i)},this.m_onLeaveGameOverClientBind=function(i){return e.onLeaveGameOverClient(t.socketId,i)}},e.prototype.removeBindHandlers=function(){this.m_onReadyRoomClientBind=null,this.m_onLeaveGameOverClientBind=null},e.prototype.addListeners=function(t){this.addBindHandlers(t),t.socket.on("[2X.)",this.m_onReadyRoomClientBind),t.socket.on("g{4u0",this.m_onLeaveGameOverClientBind)},e.prototype.removeListeners=function(t){t.socket.removeListener("[2X.)",this.m_onReadyRoomClientBind),t.socket.removeListener("g{4u0",this.m_onLeaveGameOverClientBind)},e.prototype.addUserRoom=function(t){var i=t.socketId;if(this.m_state==e.PLAY){if(null!=this.m_usersWait[i])return;return this.m_usersWait[i]=t,this.addListeners(t),void this.m_countUsers++}null==this.m_usersRoom[i]&&(this.m_usersRoom[i]=t,this.addListeners(t),this.m_countUsers++,this.m_state=this.m_countUsers==this.m_limitUsers?e.FULL:e.FREE)},e.prototype.getUserRoom=function(t){if(null==this.m_usersWait)return null;if(null==this.m_usersRoom)return null;var e;return null!=this.m_usersWait[t]&&(e=this.m_usersWait[t]),null!=this.m_usersRoom[t]&&(e=this.m_usersRoom[t]),e},e.prototype.removeUserRoom=function(t){var i=t.socketId;null!=this.m_usersWait[i]&&(this.m_usersWait[i]=null,delete this.m_usersWait[i]),null!=this.m_usersRoom[i]&&(this.m_usersRoom[i]=null,delete this.m_usersRoom[i]),this.removeListeners(t),t=null,this.m_countUsers>0&&this.m_countUsers--,this.m_state!=e.PLAY&&(this.m_state=e.FREE)},e.prototype.removeUsersInRoom=function(){var t;for(t in this.m_usersWait)this.removeUserRoom(this.m_usersWait[t]);for(t in this.m_usersRoom)this.removeUserRoom(this.m_usersRoom[t])},e.prototype.onReadyRoomClient=function(t,e){},e.prototype.onLeaveGameOverClient=function(t,e){console.log("onLeaveGameOverClient +++++",t);var i=new BufferArray(e),n=this.getUserRoom(t);if(null!=n){var r=new BufferArray;r.writeUTF8(this.m_name),n.emitMe("EfOr>",r.buffer),i.destroy(),r.destroy(),i=null,r=null,n=null}},Object.defineProperty(e.prototype,"available",{get:function(){return!(this.m_state==e.PLAY&&this.m_countUsers==this.m_limitUsers)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.m_name},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"countUsers",{get:function(){return this.m_countUsers},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.removeBindHandlers(),this.removeUsersInRoom(),this.m_usersRoom=null,this.m_usersWait=null},e}(Entity);Room.FULL="full",Room.FREE="free",Room.PLAY="play";var NameSpace=function(t){function e(e,i,n,r){var o=t.call(this)||this;return o.m_socketIO=e,o.m_globalNsp=i,o.m_id_0=n,o.m_id_1=r,o.m_id=1e3*n+r,o.init(),o}return __extends(e,t),e.prototype.init=function(){var t=this;this.m_nameNsp=this.m_globalNsp+"_"+this.m_id,this.m_state=e.FREE,this.m_usersNS={},this.m_rooms={},this.m_countUsers=0,this.m_dynNsp=this.m_socketIO.of("/"+this.m_nameNsp),this.m_onConnectionNSBind=function(e){return t.onConnectionNSHandler(e)},this.m_dynNsp.addListener("connection",this.m_onConnectionNSBind)},e.prototype.addBindHandlers=function(t){var e=this;this.m_onDisconnectNsBind=function(i){return e.onDisconnectNsHandler(t.socketId,i)},this.m_debugConsoleClientBind=function(t){return e.debugConsoleClientHandler(t)},this.m_onCreateJoinRoomNsBind=function(i){return e.onCreateJoinRoomNsHandler(t.socketId,i)},this.m_onLeaveRoomNsClientBind=function(i){return e.onLeaveRoomNsClientHandler(t.socketId,i)},this.m_onLeaveToMainClientBind=function(){return e.onLeaveToMainClientHandler(t.socketId)}},e.prototype.removeBindHandlers=function(){this.m_onConnectionNSBind=null,this.m_onDisconnectNsBind=null,this.m_debugConsoleClientBind=null,this.m_onCreateJoinRoomNsBind=null,this.m_onLeaveRoomNsClientBind=null,this.m_onLeaveToMainClientBind=null,this.m_onJoinRoomBind=null,this.m_onLeaveRoomBind=null},e.prototype.addListeners=function(t){this.addBindHandlers(t),t.socket.on("disconnect",this.m_onDisconnectNsBind),t.socket.on("|gxyq",this.m_debugConsoleClientBind),t.socket.on("pnNAJ",this.m_onCreateJoinRoomNsBind),t.socket.on("s[|YD",this.m_onCreateJoinRoomNsBind),t.socket.on('_Ol2"',this.m_onLeaveRoomNsClientBind),t.socket.on("2rdUh",this.m_onLeaveToMainClientBind)},e.prototype.removeListeners=function(t){t.socket.removeListener("disconnect",this.m_onDisconnectNsBind),t.socket.removeListener("|gxyq",this.m_debugConsoleClientBind),t.socket.removeListener("pnNAJ",this.m_onCreateJoinRoomNsBind),t.socket.removeListener("s[|YD",this.m_onCreateJoinRoomNsBind),t.socket.removeListener('_Ol2"',this.m_onLeaveRoomNsClientBind),t.socket.removeListener("2rdUh",this.m_onLeaveToMainClientBind)},e.prototype.onConnectionNSHandler=function(t){},e.prototype.onCreateJoinRoomNsHandler=function(t,e){var i=this,n=this.getUserNS(t);if(null!=n){var r=new BufferArray(e),o=r.getTimeBuffer,s=r.readUTF8,m=this.getRoom(s);this.m_onJoinRoomBind=function(){return i.onJoinRoomHandler(t,s,o)},null==m?n.socket.join(s,this.m_onJoinRoomBind):m.available?n.socket.join(s,this.m_onJoinRoomBind):n.emitMe("nb5El",o),r.destroy(),r=null,o=null,n=null,m=null}},e.prototype.onJoinRoomHandler=function(t,e,i){},e.prototype.onLeaveRoomNsClientHandler=function(t,e){var i=this;console.log("onLeaveRoomNsClientHandler");var n=this.getUserNS(t);if(null!=n){var r=new BufferArray(e),o=r.getTimeBuffer;this.m_onLeaveRoomBind=function(){return i.onLeaveRoomHandler(t,o)},n.socket.leave(n.room,this.m_onLeaveRoomBind),n=null}},e.prototype.onLeaveRoomHandler=function(t,e){var i=this.getUserNS(t);if(null!=i){var n=this.getRoom(i.room);null!=n&&(i.room="",i.emitMe("@\\mO6",e),n.removeUserRoom(i),0==n.countUsers&&this.removeRoom(n),n=null,i=null)}},e.prototype.onLeaveToMainClientHandler=function(t){var e=this.getUserNS(t);null!=e&&e.socket.disconnect()},e.prototype.onDisconnectNsHandler=function(t,e){var i=this.getUserNS(t);if(null!=i){var n=new Buffer(6);n.writeUInt32LE(0,0),n.writeUInt16LE(0,4),this.onLeaveRoomHandler(t,n),null!=this.m_onRemoveNspCall&&this.m_onRemoveNspCall.call(this,this.m_nameNsp,this.m_globalNsp),this.removeUserNS(i),console.log("onDisconnectNsHandler totalUsers ",this.totalUsers)}},e.prototype.debugConsoleClientHandler=function(t){console.log("DEBUG:> ",t.msg)},e.prototype.addUserNS=function(t){null==this.m_usersNS[t.socketId]&&(this.m_usersNS[t.socketId]=t,this.addListeners(t),this.m_countUsers++)},e.prototype.getUserNS=function(t){return this.m_usersNS[t]},e.prototype.removeUserNS=function(t){var e=t.socketId;this.m_usersNS[e]=null,delete this.m_usersNS[e],this.removeListeners(t),t.destroy(),t=null,this.m_countUsers>0&&this.m_countUsers--},e.prototype.addRoom=function(t){this.m_rooms[t.name]=t},e.prototype.getRoom=function(t){return this.m_rooms[t]},e.prototype.removeRoom=function(t){var e=t.name;this.m_rooms[e]=null,delete this.m_rooms[e],t.destroy(),t=null},Object.defineProperty(e.prototype,"totalUsers",{get:function(){return this.m_countUsers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nameNsp",{get:function(){return this.m_nameNsp},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"globalNsp",{get:function(){return this.m_globalNsp},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onRemoveNsp",{set:function(t){this.m_onRemoveNspCall=t},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.m_dynNsp.removeListener("connection",this.m_onConnectionNSBind),t.prototype.destroy.call(this),this.removeBindHandlers(),this.m_rooms=null,this.m_usersNS=null,this.m_socketIO=null,this.m_dynNsp=null,this.m_onRemoveNspCall=null},e}(Entity);NameSpace.FULL="full",NameSpace.FREE="free";var IOServer=function(t){function e(){var e=t.call(this)||this;return e.init(),e}return __extends(e,t),e.prototype.init=function(){var t=this,e=new Date;console.log("["+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"] ","Socket.io server running at\n => http:192.168.0.11:4001/\n"),MathUtils.setSeed(),this.m_socketIO=require("socket.io")(),this.m_socketIO.listen(4001),this.m_currentUuid={},this.m_nameSpaces={},this.m_main=this.m_socketIO.of(""),this.m_onConnectionMainBind=function(e){return t.onConnectionMainHandler(e)},this.m_main.on("connection",this.m_onConnectionMainBind)},e.prototype.addBindHandlers=function(t){var e=this;this.m_onDisconnectMainBind=function(i){return e.onDisconnectMainHandler(t,i)}},e.prototype.removeBindHandlers=function(){this.m_onConnectionMainBind=null,this.m_onDisconnectMainBind=null},e.prototype.onConnectionMainHandler=function(t){this.addBindHandlers(t),t.on("disconnect",this.m_onDisconnectMainBind)},e.prototype.onDisconnectMainHandler=function(t,e){console.log("onDisconnect Main Handler aja::>",t.id,e)},e.prototype.uuidNs=function(t){for(var e,i={},n=!0;n;)i.id_0=MathUtils.floor(65535*Math.random()),i.id_1=MathUtils.floor(255*Math.random()),i.id=1e3*i.id_0+i.id_1,e=t+"_"+i.id,n=!(null==this.m_nameSpaces[e]);return i},e.prototype.addNameSpace=function(t){if(null!=t){var e=t.globalNsp+"_"+this.m_currentUuid[t.globalNsp];this.m_nameSpaces[e]=t}},e.prototype.removeNameSpace=function(t){if(null!=t){var e=t.globalNsp+"_"+this.m_currentUuid[t.globalNsp];this.m_nameSpaces[e]=null,delete this.m_nameSpaces[e]}},e.prototype.destroy=function(){this.removeBindHandlers(),this.m_main=null,this.m_socketIO=null,this.m_nameSpaces=null,this.m_currentUuid=null},e}(Entity),GameServer=function(t){function e(e){var i=t.call(this)||this;return i.m_usersInRoom=e,i.m_totalPlayers=Object.keys(e).length,i.init(),i}return __extends(e,t),e.prototype.init=function(){this.m_usersGame={},this.m_initBuffer=new BufferArray},e.prototype.addBindHandlers=function(t){},e.prototype.removeBindHandlers=function(){},e.prototype.addListeners=function(t){this.addBindHandlers(t)},e.prototype.removeListeners=function(t){},e.prototype.addUserGame=function(t){var e=t.socketId;null==this.m_usersGame[e]&&(this.m_usersGame[e]=t,this.addListeners(t))},e.prototype.getUserGame=function(t){if(null!=this.m_usersGame)return this.m_usersGame[t]},e.prototype.removeUserGame=function(t){var e=t.socketId;this.removeListeners(t),this.m_usersGame[e]=null,delete this.m_usersGame[e],t.destroy(),t=null},e.prototype.update=function(){},Object.defineProperty(e.prototype,"initBuffer",{get:function(){return this.m_initBuffer.buffer},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.m_initBuffer.destroy(),this.m_initBuffer=null,this.m_usersInRoom=null,this.m_usersGame=null,this.removeBindHandlers()},e}(Entity),User=function(t){function e(e){var i=t.call(this)||this;return i.m_socket=e,i.m_socketId=e.id,i.m_name=e.id,i.m_room="",i.init(),i}return __extends(e,t),e.prototype.init=function(){this.m_ready=!1},e.prototype.emitMe=function(t,e){return null==e?void this.m_socket.emit(t):void this.m_socket.emit(t,e)},e.prototype.emitOthers=function(t,e,i){return null==e?null==i?void this.m_socket.broadcast.emit(t):void this.m_socket.broadcast.to(i).emit(t):null==i?void this.m_socket.broadcast.emit(t,e):void this.m_socket.broadcast.to(i).emit(t,e)},e.prototype.emitEveryone=function(t,e,i){return null==e?null==i?(this.m_socket.emit(t),void this.m_socket.broadcast.emit(t)):(this.m_socket.emit(t),void this.m_socket.broadcast.in(i).emit(t)):null==i?(this.m_socket.emit(t,e),void this.m_socket.broadcast.emit(t,e)):(this.m_socket.emit(t,e),void this.m_socket.broadcast.in(i).emit(t,e))},Object.defineProperty(e.prototype,"socket",{get:function(){return this.m_socket},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"socketId",{get:function(){return this.m_socketId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"room",{get:function(){return this.m_room},set:function(t){this.m_room=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ready",{get:function(){return this.m_ready},set:function(t){this.m_ready=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.m_name},set:function(t){this.m_name=t},enumerable:!0,configurable:!0}),e.prototype.destroy=function(){this.m_socket=null;
},e}(Entity),BufferArray=function(){function t(t){this.m_index=0,this.m_readId=0,this.m_array=[],null!=t&&(this.m_array=t,this.m_index=t.length)}return t.prototype.writeBytes=function(t){if(null!=t&&0!=t.length)for(var e=t.length,i=0;i<e;i++)this.m_array[this.m_index]=t[i],this.m_index+=Uint8Array.BYTES_PER_ELEMENT},t.prototype.writeUInt8=function(t){t>255&&(t=0),this.m_array[this.m_index]=t,this.m_index+=Uint8Array.BYTES_PER_ELEMENT},t.prototype.writeUInt16LE=function(t){t>65535&&(t=0),this.m_array[this.m_index]=255&t,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,this.m_array[this.m_index]=t>>8,this.m_index+=Uint8Array.BYTES_PER_ELEMENT},t.prototype.writeUInt24LE=function(t){t>16777215&&(t=0);var e=255&t;this.m_array[this.m_index]=e,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,e=t>>8&255,this.m_array[this.m_index]=e,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,e=t>>16,this.m_array[this.m_index]=e,this.m_index+=Uint8Array.BYTES_PER_ELEMENT},t.prototype.writeInt24LE=function(t){(t<=-8388608||t>=8388608)&&(t=0),t<0&&(t+=16777216),this.writeUInt24LE(t)},t.prototype.writeUInt32LE=function(t){t>4294967295&&(t=0);var e=255&t;this.m_array[this.m_index]=e,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,e=t>>8&255,this.m_array[this.m_index]=e,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,e=t>>16&255,this.m_array[this.m_index]=e,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,e=t>>24,this.m_array[this.m_index]=e,this.m_index+=Uint8Array.BYTES_PER_ELEMENT},t.prototype.writeInt32LE=function(t){(t<=-2147483648||t>=2147483648)&&(t=0),t<0&&(t+=4294967296),this.writeUInt32LE(t)},t.prototype.writeUTF8=function(t){null==t&&(t="");var e=this.m_index;this.m_array[this.m_index]=0,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,this.getSizeString(t);var i=this.m_index-e-1;this.m_array[e]=i},t.prototype.writeUTF16=function(t){null==t&&(t="");var e=this.m_index;this.m_array[this.m_index]=0,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,this.m_array[this.m_index]=0,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,this.getSizeString(t);var i=this.m_index-e-2;this.m_array[e]=255&i,this.m_array[e+1]=i>>8},t.prototype.getSizeString=function(t){var e,i,n,r=t.length;for(e=0;e<r;e++)i=t.charCodeAt(e),i<128?(this.m_array[this.m_index]=i,this.m_index+=Uint8Array.BYTES_PER_ELEMENT):i>127&&i<2048?(n=i>>6|192,this.m_array[this.m_index]=n,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,n=63&i|128,this.m_array[this.m_index]=n,this.m_index+=Uint8Array.BYTES_PER_ELEMENT):(n=i>>12|224,this.m_array[this.m_index]=n,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,n=i>>6&63|128,this.m_array[this.m_index]=n,this.m_index+=Uint8Array.BYTES_PER_ELEMENT,n=63&i|128,this.m_array[this.m_index]=n,this.m_index+=Uint8Array.BYTES_PER_ELEMENT)},Object.defineProperty(t.prototype,"readUInt8",{get:function(){var t=0;return this.m_readId+Uint8Array.BYTES_PER_ELEMENT<=this.m_index&&(t=this.m_array[this.m_readId],this.m_readId+=Uint8Array.BYTES_PER_ELEMENT),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"readUInt16LE",{get:function(){var t=0;return this.m_readId+Uint16Array.BYTES_PER_ELEMENT<=this.m_index&&(t+=this.m_array[this.m_readId],this.m_readId+=Uint8Array.BYTES_PER_ELEMENT,t+=this.m_array[this.m_readId]<<8,this.m_readId+=Uint8Array.BYTES_PER_ELEMENT),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"readUInt24LE",{get:function(){var t=0,e=0,i=0,n=0;return this.m_readId+3<=this.m_index&&(e=this.m_array[this.m_readId],this.m_readId+=Uint8Array.BYTES_PER_ELEMENT,i=this.m_array[this.m_readId],this.m_readId+=Uint8Array.BYTES_PER_ELEMENT,n=this.m_array[this.m_readId],this.m_readId+=Uint8Array.BYTES_PER_ELEMENT,t=n<<16|i<<8|e<<0),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"readInt24LE",{get:function(){var t=this.readUInt24LE;return t>=8388608&&(t-=16777216),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"readUInt32LE",{get:function(){var t=0,e=0,i=0,n=0,r=0;return this.m_readId+Uint32Array.BYTES_PER_ELEMENT<=this.m_index&&(e=this.m_array[this.m_readId],this.m_readId+=Uint8Array.BYTES_PER_ELEMENT,i=this.m_array[this.m_readId],this.m_readId+=Uint8Array.BYTES_PER_ELEMENT,n=this.m_array[this.m_readId],this.m_readId+=Uint8Array.BYTES_PER_ELEMENT,r=this.m_array[this.m_readId],this.m_readId+=Uint8Array.BYTES_PER_ELEMENT,t=r<<24|n<<16|i<<8|e<<0),t<0&&(t+=4294967296),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"readInt32LE",{get:function(){var t=this.readUInt32LE;return t>=2147483648&&(t-=4294967296),t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"readUTF8",{get:function(){var t=this.readUInt8,e="";return this.m_readId+t<=this.m_index&&(Buffer.isBuffer(this.m_array)?(e=this.m_array.toString("utf-8",this.m_readId,this.m_readId+t),this.m_readId+=t):e=this.getUTF(t)),e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"readUTF16",{get:function(){var t=this.readUInt16LE,e="";return this.m_readId+t<=this.m_index&&(Buffer.isBuffer(this.m_array)?(e=this.m_array.toString("utf-8",this.m_readId,this.m_readId+t),this.m_readId+=t):e=this.getUTF(t)),e},enumerable:!0,configurable:!0}),t.prototype.getUTF=function(t){var e="",i=0,n=0,r=0,o=0,s=0;if(this.m_readId+t<=this.m_index)for(i=0;i<t;i++)n=this.m_array[this.m_readId],n<128?(s=n,this.m_readId+=Uint8Array.BYTES_PER_ELEMENT):n>191&&n<224?(r=this.m_array[this.m_readId+1],s=(31&n)<<6|63&r,this.m_readId+=Uint16Array.BYTES_PER_ELEMENT,i+=1):(r=this.m_array[this.m_readId+1],o=this.m_array[this.m_readId+2],s=(15&n)<<12|(63&r)<<6|63&o,this.m_readId+=3,i+=2),e+=String.fromCharCode(s);return e},Object.defineProperty(t.prototype,"getTimeBuffer",{get:function(){if(!(0==this.m_index||this.m_index<6)){var t=this.readUInt32LE,e=this.readUInt16LE;0==t&&(console.log("Errror getTimeBuffer timeSend: ",t),t=MathUtils.floor(.001*Date.now())+9999,e=999);var i=new Buffer(6);return i.writeUInt32LE(t,0),i.writeUInt16LE(e,4),i}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"buffer",{get:function(){var t,e,i=this.m_index-this.m_readId;if(this.m_readId>0){if(t=new Buffer(i),i>0)for(e=0;e<i;e++)t[e]=this.m_array[this.m_readId+e]}else t=new Buffer(this.m_array);return t},enumerable:!0,configurable:!0}),t.prototype.destroy=function(){this.m_array=null},t}();