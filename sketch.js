
var p=0;
var interval;
var flag=0;

function setup() {
    createCanvas(1200,1200);
    var dis= document.getElementById("btn");
    dis.onclick = function(){
        if(flag==0){
            alert("Click on start before Simulating!");
            return;
        }
        if(p==op.length){
            alert("Spanning tree complete! \nAnd Minimum-Cost is :- "+min_cost);
        }
        else{
            interval = setInterval(putEdge(),3000);
        }
    }
    noLoop();
}

var m=100;
var n=1;

var nodes = [];
nodes.length = 15;
for(var k=0;k<15;k++){
    nodes[k] = [0,0];
}

function draw() {
    textSize(18);

    var putnodes = document.getElementById("nodein");
    putnodes.onclick = function(){
        clear();
        stroke(255);
        flag=1;
        p=0;
        var ln= op.length + 1;
        m=(m*ln)%1200;
        if(ln==1){
            alert("Save edges before starting simulation!");
            return;
        }
        nodes[0][0]=Math.floor((Math.random()*m)+50);
        nodes[0][1]=Math.floor((Math.random()*m)+50);
        ellipse(nodes[0][0],nodes[0][1],30,30);
        text(n.toString(),nodes[0][0]-5,nodes[0][1]);
        
        for(var j=1;j<ln;j++){
            nodes[j][0]=Math.floor((Math.random()*m)+50);
            nodes[j][1]=Math.floor((Math.random()*m)+50);
            ellipse(nodes[j][0],nodes[j][1],30,30);
            n++;
            text(n.toString(),nodes[j][0]-5,nodes[j][1]);
        }
        
        for(var i=0;i<ln;i++){
            for(var j=i+1;j<ln;j++){
                if(arr[i][j]!=0 && arr[i][j]!=999){
                    line(nodes[i][0],nodes[i][1],nodes[j][0],nodes[j][1]);
                    var x = (nodes[i][0]+nodes[j][0])/2;
                    var y = (nodes[i][1]+nodes[j][1])/2;
                    var val = arr[i][j].toString();
                    text(val,x,y);
                }
            }
        }
        n=1;
        m=100;
    }
}

function putEdge(){
    stroke(255,0,0);
    line(nodes[op[p][0]-1][0],nodes[op[p][0]-1][1],nodes[op[p][1]-1][0],nodes[op[p][1]-1][1]);
    var x = (nodes[op[p][0]-1][0]+nodes[op[p][1]-1][0])/2;
    var y = (nodes[op[p][0]-1][1]+nodes[op[p][1]-1][1])/2;
    var val = op[p][2].toString();
    text(val,x,y);
    p=p+1;
}

